import { EditorSelection } from "@codemirror/state";
import { collabClientFacet } from "./collab";
import { mapReviewAnchors, reviewItemEffect, reviewState, setReviewStateEffect } from "./reviewStateField";

function getReviewResolutionLocation(state, reviewItem) {
  return {
    resolvedAnchors: reviewItem.anchors.map((anchor) => {
      const from = Math.max(0, Math.min(state.doc.length, anchor.from));
      const to = Math.max(from, Math.min(state.doc.length, anchor.to));
      const fromLine = state.doc.lineAt(from);
      const toLine = state.doc.lineAt(to > from ? to - 1 : to);

      return {
        id: anchor.id,
        fromLine: fromLine.number,
        toLine: toLine.number,
        line: state.doc.sliceString(fromLine.from, toLine.to),
      };
    }),
  };
}

const fallbackReviewUser = { name: "You" };

export function getCurrentUser(state) {
  const localUser = state.facet(collabClientFacet)[0]?.localUser;
  return localUser?.name ? localUser : fallbackReviewUser;
}

const getReviewItem = (state, id) => state.field(reviewState).reviewItems.get(id);

/** Apply a patch or derive one from the latest review. Return null from an updater to skip the edit. */
export function updateReviewItem(view, reviewItem, updates) {
  const current = getReviewItem(view.state, reviewItem.id);
  if (!current) return;
  const patch = typeof updates === "function" ? updates(current) : updates;
  if (patch) view.dispatch({ effects: reviewItemEffect({ ...current, ...patch }) });
}

export function removeReview(view, id) {
  const reviewItem = getReviewItem(view.state, id);
  if (!reviewItem || (reviewItem.kind === "comment" && !isCommentAuthor(getCurrentUser(view.state), reviewItem))) return false;
  view.dispatch({
    effects: setReviewStateEffect.of({ activeId: id, reviewItem: null }),
  });
  return true;
}

export function isCommentAuthor(currentUser, comment) {
  return Boolean(currentUser?.name && currentUser.name === comment.author?.name);
}

export function editReviewReply(view, reviewItem, commentId, text) {
  updateReviewItem(view, reviewItem, ({ comments }) => {
    const comment = comments?.find(({ id }) => id === commentId);
    if (!comment || !isCommentAuthor(getCurrentUser(view.state), comment)) return null;
    return { comments: comments.map((comment) => (comment.id === commentId ? { ...comment, text } : comment)) };
  });
}

export function deleteReviewReply(view, reviewItem, commentId) {
  updateReviewItem(view, reviewItem, ({ comments }) => {
    const comment = comments?.find(({ id }) => id === commentId);
    if (!comment || !isCommentAuthor(getCurrentUser(view.state), comment)) return null;
    return { comments: comments.filter((comment) => comment.id !== commentId) };
  });
}

export function submitReviewReply(view, reviewItem, comment) {
  updateReviewItem(view, reviewItem, ({ draft, comments }) =>
    draft ? { text: comment.text, draft: false } : { comments: [...(comments ?? []), comment] },
  );
}

export function resolveComment(view, reviewItem, currentUser) {
  updateReviewItem(view, reviewItem, (current) => ({
    ...getReviewResolutionLocation(view.state, current),
    resolved: true,
    resolvedAt: Date.now(),
    resolvedBy: currentUser?.name ? currentUser : null,
  }));
}

export function resolveSuggestions(view, suggestionIds, accept) {
  const resolved = suggestionIds.map((id) => getReviewItem(view.state, id)).filter(Boolean);

  if (resolved.length === 0) return;

  const removedType = accept ? "delete" : "insert";
  const changes = resolved
    .filter(({ type }) => type === removedType)
    .map((reviewItem) => {
      const { from, to } = reviewItem.anchors[0];
      return { from, to, insert: "" };
    })
    .sort((a, b) => a.from - b.from);

  const changeSet = view.state.changes(changes);
  const resolvedAt = Date.now();
  const resolvedBy = getCurrentUser(view.state);
  const effects = resolved.map((reviewItem) =>
    reviewItemEffect({
      ...reviewItem,
      ...getReviewResolutionLocation(view.state, reviewItem),
      anchors: mapReviewAnchors(reviewItem, changeSet, 1, -1),
      resolved: true,
      resolution: accept ? "accept" : "reject",
      resolvedAt,
      resolvedBy,
    }),
  );

  view.dispatch({ changes: changeSet, effects });
  view.focus();
}

export function addReviewComment(view, { anchors, head }) {
  const commentAnchors = anchors.filter(({ from, to }) => from < to).map(({ from, to }) => ({ id: crypto.randomUUID(), from, to }));
  if (commentAnchors.length === 0) return false;

  view.dispatch({
    selection: EditorSelection.cursor(head),
    effects: reviewItemEffect({
      author: getCurrentUser(view.state),
      createdAt: Date.now(),
      id: crypto.randomUUID(),
      kind: "comment",
      anchors: commentAnchors,
      text: "",
      comments: [],
      draft: true,
    }),
  });
  return true;
}

export function getRestorableReviewAnchors(view, reviewItem) {
  if (!view || !reviewItem?.resolved) return [];
  // Yjs relative positions follow undone deletions; the mapped editor positions may still be collapsed.
  const reviewAdapter = view.state.facet(collabClientFacet)[0]?.reviewAdapter;
  return (reviewAdapter ? (reviewAdapter.getReview(reviewItem.id)?.anchors ?? []) : reviewItem.anchors).filter(({ from, to }) => from < to);
}

export function restoreResolvedReview(view, id) {
  const reviewItem = view ? getReviewItem(view.state, id) : null;
  const anchors = getRestorableReviewAnchors(view, reviewItem);
  if (anchors.length === 0) return false;

  updateReviewItem(view, reviewItem, {
    anchors,
    resolved: false,
    resolution: null,
    resolvedAt: null,
    resolvedBy: null,
  });
  return true;
}

export function deleteResolvedReview(view, id) {
  const reviewItem = view ? getReviewItem(view.state, id) : null;
  if (!reviewItem?.resolved) return false;

  return removeReview(view, id);
}
