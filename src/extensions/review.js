import { EditorState, EditorSelection, Annotation } from "@codemirror/state";
import { Decoration, EditorView, ViewPlugin } from "@codemirror/view";
import { collabClientFacet } from "./collab";
import { invertedEffects } from "@codemirror/commands";
import { reviewCardLayout } from "./reviewCardLayout";
import { ReviewCardWidget } from "./reviewCardWidget";
import { getCurrentUser } from "./reviewCommands";
import {
  reviewState,
  createReviewState,
  primaryAnchor,
  mapReviewAnchors,
  reviewCardId,
  reviewCards,
  reviewAdapterSync,
  suggestionMoveHandled,
  setReviewStateEffect,
  reviewItemEffect,
  reviewCardPosition,
  showCommentsFacet,
  showCommentsCompartment,
  reviewSidebarFacet,
  reviewSidebarCompartment,
  reviewSidebarWideFacet,
  reviewSidebarWideCompartment,
} from "./reviewStateField";

/**
 * A user attached to a review or reply.
 *
 * `name` is currently the identity used for edit permissions. The remaining
 * fields are optional presentation metadata supplied by collaboration.
 *
 * @typedef {Object} ReviewUser
 * @property {string} name
 * @property {string} [color]
 * @property {string} [avatarUrl]
 * @property {string} [userUrl]
 */

/**
 * Author and creation time assigned when a review is created.
 *
 * @typedef {Object} ReviewMetadata
 * @property {ReviewUser} author
 * @property {number} createdAt Unix timestamp in milliseconds.
 */

/**
 * A stable reference to a half-open document range `[from, to)`.
 *
 * The id survives position mapping and allows the same logical range to be
 * recognized after document changes.
 *
 * @typedef {Object} ReviewAnchor
 * @property {string} id
 * @property {number} from
 * @property {number} to
 */

/**
 * A reply in the discussion thread attached to a review.
 *
 * @typedef {Object} ReviewReply
 * @property {string} id
 * @property {string} text
 * @property {ReviewUser} author
 * @property {number} createdAt Unix timestamp in milliseconds.
 */

/**
 * A snapshot of an anchor's source lines taken when a review is resolved.
 * Line numbers are one-based; `line` contains the complete covered lines.
 *
 * @typedef {Object} ResolvedReviewAnchor
 * @property {string} id
 * @property {number} fromLine
 * @property {number} toLine
 * @property {string} line
 */

/**
 * Fields shared by comments and suggestions.
 *
 * @typedef {Object} ReviewBase
 * @property {string} id
 * @property {ReviewAnchor[]} anchors
 * @property {ReviewUser} author
 * @property {number} createdAt Unix timestamp in milliseconds.
 * @property {ReviewReply[]} [comments]
 * @property {boolean} [resolved]
 * @property {"accept" | "reject" | null} [resolution] Only applies to suggestions.
 * @property {number | null} [resolvedAt] Unix timestamp in milliseconds.
 * @property {ReviewUser | null} [resolvedBy]
 * @property {ResolvedReviewAnchor[]} [resolvedAnchors]
 * @property {string | null} [legacy] Original legacy comment ID, or null for native reviews.
 */

/**
 * A discussion attached to one or more document ranges.
 *
 * @typedef {ReviewBase & {
 *   kind: "comment",
 *   text: string,
 *   draft?: boolean
 * }} CommentReview
 */

/**
 * A proposed insertion or deletion. Replacement suggestions are represented
 * by one insertion and one deletion with the same `replacementId`.
 *
 * @typedef {ReviewBase & {
 *   kind: "suggestion",
 *   type: "insert" | "delete",
 *   text: string,
 *   replacementId?: string | null,
 *   draft?: false
 * }} SuggestionReview
 */

/** @typedef {CommentReview | SuggestionReview} ReviewItem */

const activeReviewDecoration = Decoration.mark({ class: "review-selection" });
const reviewTextDecoration = (reviewItem) =>
  Decoration.mark({
    class: `${reviewItem.kind === "comment" ? "review-comment-range" : `suggestions-${reviewItem.type}`} cm-review-text`,
    attributes: { "data-review-id": reviewCardId(reviewItem) },
  });

const suggestionReplacementHandled = Annotation.define();
/**
 * @param {EditorState} editorState
 * @returns {ReviewMetadata}
 */
function createReviewMetadata(editorState) {
  return {
    author: getCurrentUser(editorState),
    createdAt: Date.now(),
  };
}

/**
 * @param {number} from
 * @param {number} to
 * @returns {ReviewAnchor}
 */
const createReviewAnchor = (from, to) => ({ id: crypto.randomUUID(), from, to });

/**
 * @param {ReviewMetadata} metadata
 * @param {{ type: "insert" | "delete", from: number, to: number, text: string, replacementId?: string }} options
 * @returns {SuggestionReview}
 */
function createSuggestion(metadata, { from, to, ...suggestion }) {
  return {
    ...metadata,
    id: crypto.randomUUID(),
    kind: "suggestion",
    anchors: [createReviewAnchor(from, to)],
    ...suggestion,
  };
}

/**
 * @param {Map<string, ReviewItem>} reviewItems
 * @param {string | null} activeId
 * @param {string | null} openId
 * @param {EditorState} state
 * @param {import("@preact/signals").Signal<string | null> | null} avatarCrossorigin
 * @returns {import("@codemirror/view").DecorationSet}
 */
function buildReviewDecorations(reviewItems, activeId, openId, state, avatarCrossorigin) {
  const ranges = [];
  const activeReplacementId = reviewItems.get(activeId)?.replacementId;

  for (const reviewItem of reviewItems.values()) {
    const anchors = reviewItem.anchors.filter(({ from, to }) => from < to);
    if (reviewItem.resolved || anchors.length === 0) continue;

    const active = reviewItem.id === activeId || (activeReplacementId && reviewItem.replacementId === activeReplacementId);
    const textDecoration = reviewTextDecoration(reviewItem);

    for (const anchor of anchors) {
      if (active) ranges.push(activeReviewDecoration.range(anchor.from, anchor.to));
      ranges.push(textDecoration.range(anchor.from, anchor.to));
    }
  }

  for (const card of reviewCards(state)) {
    ranges.push(
      Decoration.widget({
        widget: new ReviewCardWidget(
          card,
          card.items.some(({ id }) => id === activeId),
          card.items.some(({ id }) => id === openId),
          avatarCrossorigin,
        ),
        side: 1,
      }).range(card.position),
    );
  }

  return Decoration.set(ranges, true);
}

function moveCommentsWithCutPaste() {
  let cutCommentsClipboard = null;
  const clearOnCopy = ViewPlugin.fromClass(
    class {
      constructor(view) {
        this.view = view;
        this.onCopy = () => (cutCommentsClipboard = null);
        view.dom.addEventListener("copy", this.onCopy, true);
      }

      destroy() {
        cutCommentsClipboard = null;
        this.view.dom.removeEventListener("copy", this.onCopy, true);
      }
    },
  );

  const moveOnPaste = EditorState.transactionExtender.of((tr) => {
    if (tr.isUserEvent("delete.cut")) {
      cutCommentsClipboard = null;
      if (!tr.docChanged || tr.startState.selection.ranges.length !== 1) return;

      const { from, to } = tr.startState.selection.main;
      if (from === to) return;
      let deletedSelection = false;
      tr.changes.iterChanges((fromA, toA, _fromB, _toB, inserted) => {
        if (fromA === from && toA === to && inserted.length === 0) deletedSelection = true;
      });
      if (!deletedSelection) return;

      const comments = [...tr.startState.field(reviewState).reviewItems.values()]
        .filter((item) => item.kind === "comment" && !item.resolved)
        .map((item) => ({
          item,
          anchors: item.anchors.flatMap((anchor) => {
            const cutFrom = Math.max(from, anchor.from);
            const cutTo = Math.min(to, anchor.to);
            if (cutFrom >= cutTo) return [];
            return [
              {
                id: cutFrom === anchor.from && cutTo === anchor.to ? anchor.id : crypto.randomUUID(),
                from: cutFrom - from,
                to: cutTo - from,
              },
            ];
          }),
        }))
        .filter(({ anchors }) => anchors.length > 0);

      if (comments.length > 0) cutCommentsClipboard = { text: tr.startState.sliceDoc(from, to), comments };
      return;
    }

    if (!tr.isUserEvent("input.paste")) return;
    const cut = cutCommentsClipboard;
    cutCommentsClipboard = null;
    if (!cut || !tr.docChanged) return;

    let pasteFrom = null;
    let matchingChanges = 0;
    tr.changes.iterChanges((_fromA, _toA, fromB, _toB, inserted) => {
      if (inserted.toString() === cut.text) {
        pasteFrom = fromB;
        matchingChanges++;
      }
    });
    if (matchingChanges !== 1) return;

    const currentItems = tr.startState.field(reviewState).reviewItems;
    const effects = cut.comments.flatMap(({ item, anchors }) => {
      const current = currentItems.get(item.id);
      if (current?.resolved) return [];
      const remainingAnchors = current ? mapReviewAnchors(current, tr.changes, 1, -1).filter(({ from, to }) => from < to) : [];
      const pastedAnchors = anchors.map((anchor) => ({ ...anchor, from: pasteFrom + anchor.from, to: pasteFrom + anchor.to }));
      return [reviewItemEffect({ ...(current ?? item), anchors: [...remainingAnchors, ...pastedAnchors] })];
    });
    return effects.length > 0 ? { effects } : undefined;
  });

  return [clearOnCopy, moveOnPaste];
}

function moveReviewsWithSelection() {
  return EditorState.transactionExtender.of((tr) => {
    if (!tr.docChanged || !tr.isUserEvent("move.drop") || tr.annotation(suggestionMoveHandled)) return;

    const source = tr.startState.selection.main;
    const destination = tr.state.selection.main;
    if (source.empty || destination.empty || source.to - source.from !== destination.to - destination.from) return;

    const sourceText = tr.startState.sliceDoc(source.from, source.to);
    if (tr.state.sliceDoc(destination.from, destination.to) !== sourceText) return;

    const effects = [];
    for (const reviewItem of tr.startState.field(reviewState).reviewItems.values()) {
      // A partially selected review remains attached to the text left at the
      // source. Only anchors moved in their entirety follow the dropped text.
      let moved = false;
      const anchors = reviewItem.anchors.map((anchor) => {
        if (anchor.from < source.from || anchor.to > source.to) {
          return {
            ...anchor,
            from: tr.changes.mapPos(anchor.from, 1),
            to: tr.changes.mapPos(anchor.to, -1),
          };
        }

        moved = true;
        return {
          ...anchor,
          from: destination.from + anchor.from - source.from,
          to: destination.from + anchor.to - source.from,
        };
      });
      if (!moved) continue;

      const { from, to } = anchors[0];
      effects.push(
        reviewItemEffect({
          ...reviewItem,
          anchors,
          text: reviewItem.type === "insert" && !reviewItem.resolved ? tr.state.sliceDoc(from, to) : reviewItem.text,
        }),
      );
    }

    return effects.length > 0 ? { effects } : undefined;
  });
}

function syncReviewsWithPersistence() {
  return ViewPlugin.fromClass(
    class {
      constructor(view) {
        this.view = view;
        this.reviewAdapter = view.state.facet(collabClientFacet)[0]?.reviewAdapter;

        if (!this.reviewAdapter) return;

        this.dispatchPersistedReviews = (ids) => {
          if (!this.view) return;

          const effects = ids.flatMap((id) => {
            const reviewItem = this.reviewAdapter.getReview(id);
            return reviewItem === null ? [] : [setReviewStateEffect.of({ activeId: id, reviewItem: reviewItem ?? null })];
          });

          if (effects.length > 0) {
            this.view.dispatch({
              effects,
              annotations: reviewAdapterSync.of(true),
            });
          }
        };

        this.unsubscribe = this.reviewAdapter.subscribeToChanges(this.dispatchPersistedReviews);
        // The view cannot dispatch while its plugins are being constructed.
        queueMicrotask(() => this.dispatchPersistedReviews(this.reviewAdapter?.getReviewIds() ?? []));
      }
      update(update) {
        if (!this.reviewAdapter) return;

        // Don't persist changes received from the review adapter again.
        const localTransactions = update.transactions.filter((tr) => !tr.annotation(reviewAdapterSync));
        if (localTransactions.length === 0) return;

        const changedIds = new Set();
        for (const tr of localTransactions) {
          for (const effect of tr.effects) {
            if (effect.is(setReviewStateEffect)) changedIds.add(effect.value.activeId);
          }
        }

        const previous = update.startState.field(reviewState).reviewItems;
        const current = update.state.field(reviewState).reviewItems;
        // Document edits can prune anchors or change suggestion text without a review effect.
        for (const [id, reviewItem] of previous) {
          const next = current.get(id);
          if (!next || next.anchors.length !== reviewItem.anchors.length || next.text !== reviewItem.text) {
            changedIds.add(id);
          }
        }

        // Effects identify changed reviews; only the reduced state is persisted.
        const writes = new Map([...changedIds].map((id) => [id, current.get(id) ?? null]).filter(([, reviewItem]) => !reviewItem?.draft));
        if (writes.size === 0) return;

        queueMicrotask(() => {
          this.reviewAdapter?.applyChanges(writes);
        });
      }
      destroy() {
        this.unsubscribe?.();
        this.reviewAdapter = null;
        this.view = null;
      }
    },
  );
}

/**
 * Find an unresolved suggestion whose primary anchor contains the range or
 * touches it, including at either boundary. Check the preferred item first,
 * followed by pending deletions and then the items in state.
 *
 * @param {import("./reviewStateField").ReviewStateValue} state
 * @param {Object} options
 * @param {"insert" | "delete"} options.type
 * @param {number} options.from
 * @param {number} options.to
 * @param {"contains" | "touches"} [options.mode="contains"]
 * @param {string} [options.replacementId]
 * @param {Map<string, SuggestionReview>} [options.pendingDeletes]
 * @param {ReviewItem} [options.preferred]
 * @returns {SuggestionReview | null}
 */
function findSuggestion(state, { type, from, to, mode = "contains", replacementId, pendingDeletes, preferred }) {
  const matches = (suggestion) => {
    if (!suggestion || suggestion.resolved || suggestion.type !== type) return false;
    if (replacementId !== undefined && suggestion.replacementId !== replacementId) return false;
    const anchor = primaryAnchor(suggestion);
    return mode === "touches" ? from <= anchor.to && to >= anchor.from : from >= anchor.from && to <= anchor.to;
  };

  if (matches(preferred)) return preferred;
  for (const suggestion of pendingDeletes?.values() ?? []) {
    if (matches(suggestion)) return suggestion;
  }
  for (const suggestion of state.reviewItems.values()) {
    if (matches(suggestion)) return suggestion;
  }
  return null;
}

function suggestionReplacement() {
  return EditorState.transactionFilter.of((tr) => {
    if (!tr.docChanged || !tr.isUserEvent("input")) return tr;

    const state = tr.startState.field(reviewState);
    let replacement = null;
    let changeCount = 0;

    tr.changes.iterChanges((fromA, toA, fromB, toB, inserted) => {
      changeCount++;
      if (fromA < toA && inserted.length > 0) {
        replacement = { from: fromA, to: toA, inserted };
      }
    });

    // Multi-selection
    if (changeCount !== 1 || !replacement) return tr;

    const { from, to, inserted } = replacement;
    const existingInsertion = findSuggestion(state, { type: "insert", from, to });

    // suggestionInsertion() already handles this case.
    if (existingInsertion) return tr;

    const replacementId = crypto.randomUUID();
    const metadata = createReviewMetadata(tr.startState);
    const suggestions = [
      createSuggestion(metadata, { type: "delete", from, to, text: tr.startState.sliceDoc(from, to), replacementId }),
      createSuggestion(metadata, { type: "insert", from: to, to: to + inserted.length, text: inserted.toString(), replacementId }),
    ];

    return {
      changes: { from: to, insert: inserted },
      selection: EditorSelection.cursor(to + inserted.length),
      effects: suggestions.map(reviewItemEffect),
      annotations: [...tr.annotations, suggestionReplacementHandled.of(true)],
    };
  });
}

function suggestionMove() {
  return EditorState.transactionFilter.of((tr) => {
    if (!tr.docChanged || !tr.isUserEvent("move.drop")) return tr;

    const source = tr.startState.selection.main;
    if (source.empty) return tr;

    const state = tr.startState.field(reviewState);
    const overlappingReviews = [...state.reviewItems.values()].filter(
      (reviewItem) => !reviewItem.resolved && reviewItem.anchors.some((anchor) => source.from < anchor.to && source.to > anchor.from),
    );
    const overlapsDeletion = overlappingReviews.some((reviewItem) => reviewItem.type === "delete");

    // Existing insertions and comments carry their review range with them.
    // Deleted text must remain at its source, so dragging it only suggests an insertion.
    if (overlappingReviews.length > 0 && !overlapsDeletion) return tr;

    const sourceText = tr.startState.sliceDoc(source.from, source.to);
    let deletesSource = false;
    let dropPosition = null;

    tr.changes.iterChanges((fromA, toA, _fromB, _toB, inserted) => {
      if (fromA === source.from && toA === source.to && inserted.length === 0) {
        deletesSource = true;
      } else if (fromA === toA && inserted.toString() === sourceText) {
        dropPosition = fromA;
      }
    }, true);

    if (!deletesSource || dropPosition === null) return tr;

    const changes = tr.startState.changes({ from: dropPosition, insert: sourceText });
    const deleteFrom = changes.mapPos(source.from, 1);
    const deleteTo = changes.mapPos(source.to, -1);
    const insertFrom = changes.mapPos(dropPosition, -1);
    const insertTo = changes.mapPos(dropPosition, 1);
    const metadata = createReviewMetadata(tr.startState);
    const suggestions = [];

    if (!overlapsDeletion) {
      suggestions.push(createSuggestion(metadata, { type: "delete", from: deleteFrom, to: deleteTo, text: sourceText }));
    }

    suggestions.push(createSuggestion(metadata, { type: "insert", from: insertFrom, to: insertTo, text: sourceText }));

    return {
      changes,
      selection: EditorSelection.range(insertFrom, insertTo),
      effects: suggestions.map(reviewItemEffect),
      annotations: [...tr.annotations, suggestionMoveHandled.of(true)],
    };
  });
}

function suggestionInsertion() {
  return EditorState.transactionExtender.of((tr) => {
    if (!tr.docChanged || tr.annotation(suggestionReplacementHandled) || !tr.isUserEvent("input")) return;

    const state = tr.startState.field(reviewState);
    const effects = [];

    tr.changes.iterChanges((fromA, toA, fromB, toB, inserted) => {
      const text = inserted.toString();

      // extend suggestion
      const active = state.activeId !== null ? state.reviewItems.get(state.activeId) : null;
      const activeAnchor = !active?.resolved && active?.type === "insert" ? primaryAnchor(active) : null;
      const extendsActive = activeAnchor && fromA >= activeAnchor.from && toA <= activeAnchor.to;
      const replacementInsertion =
        !extendsActive && active?.replacementId
          ? findSuggestion(state, { type: "insert", from: fromA, to: toA, replacementId: active.replacementId })
          : null;
      const existingInsertion = extendsActive ? active : replacementInsertion;

      if (existingInsertion) {
        const existingAnchor = primaryAnchor(existingInsertion);
        const from = tr.changes.mapPos(existingAnchor.from, -1);
        const to = tr.changes.mapPos(existingAnchor.to, 1);
        const updatedText = tr.newDoc.sliceString(from, to);
        effects.push(
          reviewItemEffect({
            ...existingInsertion,
            anchors: [{ ...existingAnchor, from, to }],
            text: updatedText,
          }),
        );
        return;
      }

      // create new suggestion
      const suggestion = createSuggestion(createReviewMetadata(tr.startState), { type: "insert", from: fromB, to: toB, text });
      effects.push(reviewItemEffect(suggestion));
    });

    return { effects };
  });
}

function suggestionDeletion() {
  return EditorState.transactionFilter.of((tr) => {
    if (!tr.docChanged || !tr.isUserEvent("delete")) return tr;

    const state = tr.startState.field(reviewState);
    const pendingDeletes = new Map();
    const cursors = [];
    const keptChanges = [];
    let filteredDeletion = false;
    const insertions = [...state.reviewItems.values()]
      .filter((reviewItem) => !reviewItem.resolved && reviewItem.type === "insert")
      .flatMap(({ anchors }) => anchors);

    const suggestDeletion = (fromA, toA) => {
      filteredDeletion = true;
      if (findSuggestion(state, { type: "delete", from: fromA, to: toA })) return;

      const active = pendingDeletes.get(state.activeId) ?? state.reviewItems.get(state.activeId);
      const existingDelete = findSuggestion(state, {
        type: "delete",
        from: fromA,
        to: toA,
        mode: "touches",
        preferred: active,
        pendingDeletes,
      });

      const id = existingDelete?.id ?? crypto.randomUUID();
      const existingAnchor = existingDelete ? primaryAnchor(existingDelete) : null;
      const from = existingAnchor ? Math.min(existingAnchor.from, fromA) : fromA;
      const to = existingAnchor ? Math.max(existingAnchor.to, toA) : toA;
      const metadata = createReviewMetadata(tr.startState);

      pendingDeletes.set(id, {
        ...metadata,
        ...(existingDelete ?? {}),
        author: existingDelete?.author ?? metadata.author,
        createdAt: existingDelete?.createdAt ?? metadata.createdAt,
        id,
        kind: "suggestion",
        type: "delete",
        anchors: [{ id: existingAnchor?.id ?? crypto.randomUUID(), from, to }],
        text: tr.startState.sliceDoc(from, to),
      });
    };

    tr.changes.iterChanges((fromA, toA, _fromB, _toB, inserted) => {
      if (fromA === toA || inserted.length > 0) {
        keptChanges.push({ from: fromA, to: toA, insert: inserted });
        cursors.push({ position: toA, assoc: 1 });
        return;
      }

      // Delete pending insertion text, but only suggest deleting the surrounding original text.
      const overlaps = insertions
        .map(({ from, to }) => ({ from: Math.max(fromA, from), to: Math.min(toA, to) }))
        .filter(({ from, to }) => from < to)
        .sort((a, b) => a.from - b.from);
      let position = fromA;
      for (const overlap of overlaps) {
        if (position < overlap.from) suggestDeletion(position, overlap.from);
        const keepFrom = Math.max(position, overlap.from);
        if (keepFrom < overlap.to) keptChanges.push({ from: keepFrom, to: overlap.to });
        position = Math.max(position, overlap.to);
      }
      if (position < toA) suggestDeletion(position, toA);

      const cursor = tr.isUserEvent("delete.forward") ? toA : fromA;
      cursors.push({ position: cursor, assoc: -1 });
    });
    if (!filteredDeletion) return tr;

    const changes = tr.startState.changes(keptChanges);
    const newDoc = changes.apply(tr.startState.doc);
    const effects = [...pendingDeletes.values()].map((reviewItem) => {
      const anchors = mapReviewAnchors(reviewItem, changes, -1, 1);
      const { from, to } = anchors[0];
      return reviewItemEffect({ ...reviewItem, anchors, text: newDoc.sliceString(from, to) });
    });
    return {
      changes,
      selection: EditorSelection.create(cursors.map(({ position, assoc }) => EditorSelection.cursor(changes.mapPos(position, assoc)))),
      effects,
      annotations: tr.annotations,
    };
  });
}

const reviewHistory = invertedEffects.of((tr) => {
  const previous = tr.startState.field(reviewState).reviewItems;
  const handled = new Set();
  const inverse = [];

  for (const effect of tr.effects) {
    if (!effect.is(setReviewStateEffect)) continue;

    const id = effect.value.activeId;
    if (handled.has(id)) continue;
    handled.add(id);

    inverse.push(
      setReviewStateEffect.of({
        activeId: id,
        reviewItem: previous.get(id) ?? null,
      }),
    );
  }

  if (tr.docChanged) {
    for (const [id, reviewItem] of previous) {
      if (handled.has(id)) continue;

      const mappedAnchors = mapReviewAnchors(reviewItem, tr.changes, 1, -1);
      const anchorCollapsed = reviewItem.anchors.some(({ from, to }, index) => from < to && mappedAnchors[index].from >= mappedAnchors[index].to);
      if (!anchorCollapsed) continue;

      // Remember resolved anchors too: mapping an undo insertion cannot recover
      // the original range once its endpoints have collapsed.
      inverse.push(reviewItemEffect(reviewItem));
    }
  }

  return inverse;
});

export function reviewStateExtension(
  reviewItemsStore,
  showComments = true,
  reviewSidebarExpanded = false,
  reviewSidebarWide = false,
  avatarCrossorigin = null,
) {
  return [
    showCommentsCompartment.of(showCommentsFacet.of(showComments)),
    reviewSidebarCompartment.of(reviewSidebarFacet.of(reviewSidebarExpanded)),
    reviewSidebarWideCompartment.of(reviewSidebarWideFacet.of(reviewSidebarWide)),
    reviewItemsStore ? reviewState.init(() => createReviewState(reviewItemsStore.peek())) : reviewState,
    EditorView.decorations.compute([reviewState, showCommentsFacet, reviewCardPosition], (state) => {
      const { reviewItems, activeId, openId } = state.field(reviewState);
      return buildReviewDecorations(reviewItems, activeId, openId, state, avatarCrossorigin);
    }),
    moveReviewsWithSelection(),
    moveCommentsWithCutPaste(),
    syncReviewsWithPersistence(),
    reviewCardLayout,
    reviewHistory,
    EditorView.editorAttributes.compute([reviewState, showCommentsFacet, reviewSidebarFacet, reviewSidebarWideFacet], (state) => {
      const hasCards = reviewCards(state).length > 0;
      return {
        class: [
          hasCards ? "" : "cm-review-cards-empty",
          state.facet(showCommentsFacet) ? "" : "cm-reviews-hidden",
          hasCards && state.facet(reviewSidebarFacet) ? "cm-review-cards-expanded" : "",
          hasCards && state.facet(reviewSidebarFacet) && state.facet(reviewSidebarWideFacet) ? "cm-review-cards-wide" : "",
        ]
          .filter(Boolean)
          .join(" "),
      };
    }),
  ];
}

export const suggestionsTypingExtension = [suggestionReplacement(), suggestionMove(), suggestionInsertion(), suggestionDeletion()];

/**
 * @param {EditorState} state
 * @returns {Map<string, SuggestionReview>}
 */
export function getSuggestions(state) {
  return new Map([...(state.field(reviewState, false)?.reviewItems ?? [])].filter(([, item]) => item.kind === "suggestion" && !item.resolved));
}

/**
 * @param {EditorState} state
 * @returns {Map<string, ReviewItem>}
 */
export function getReviewItems(state) {
  return new Map([...(state.field(reviewState, false)?.reviewItems ?? [])].filter(([, item]) => !item.resolved));
}

/**
 * @param {EditorState} state
 * @returns {Map<string, ReviewItem>}
 */
export function getAllReviewItems(state) {
  return new Map(state.field(reviewState, false)?.reviewItems ?? []);
}

export {
  setReviewStateEffect,
  reviewCardPosition,
  showCommentsFacet,
  showCommentsCompartment,
  reviewSidebarFacet,
  reviewSidebarCompartment,
  reviewSidebarWideFacet,
  reviewSidebarWideCompartment,
} from "./reviewStateField";
export { addReviewComment, restoreResolvedReview, deleteResolvedReview } from "./reviewCommands";
