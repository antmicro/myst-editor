import { Annotation, Compartment, Facet, StateEffect, StateField } from "@codemirror/state";

/** @typedef {import("./review").ReviewItem} ReviewItem */
/** @typedef {import("./review").ReviewAnchor} ReviewAnchor */

/**
 * State owned by the CodeMirror review field.
 *
 * @typedef {Object} ReviewStateValue
 * @property {Map<string, ReviewItem>} reviewItems
 * @property {string | null} activeId Review highlighted by the selection or the latest edit.
 * @property {string | null} openId Review whose reply composer is open.
 */

/**
 * Payload used to upsert or remove a review. A null `reviewItem` removes the
 * item identified by `activeId`.
 *
 * @typedef {Object} ReviewChange
 * @property {string} activeId
 * @property {ReviewItem | null} reviewItem
 */

export const reviewAdapterSync = Annotation.define();
export const suggestionMoveHandled = Annotation.define();
export const selectReviewCardEffect = StateEffect.define();
export const setOpenReviewCardEffect = StateEffect.define();
export const reviewCardPosition = Facet.define({
  combine: (mappers) => (state, position) => mappers.reduce((mappedPosition, mapPosition) => mapPosition(state, mappedPosition), position),
});
export const showCommentsFacet = Facet.define({ combine: (values) => values[0] ?? true });
export const showCommentsCompartment = new Compartment();
export const reviewSidebarFacet = Facet.define({ combine: (values) => values[0] ?? false });
export const reviewSidebarCompartment = new Compartment();
export const reviewSidebarWideFacet = Facet.define({ combine: (values) => values[0] ?? false });
export const reviewSidebarWideCompartment = new Compartment();

/**
 * @param {ReviewItem} reviewItem
 * @returns {ReviewAnchor}
 */
export const primaryAnchor = (reviewItem) => reviewItem.anchors[0];

/** @param {ReviewItem} reviewItem */
export const reviewCardId = (reviewItem) => reviewItem.replacementId ?? reviewItem.id;

/** @param {ReviewItem} reviewItem */
export const hasVisibleReviewAnchor = (reviewItem) => !reviewItem.resolved && reviewItem.anchors.some(({ from, to }) => from < to);

export const resolveReviewCardId = (state, id) => {
  const item = state.field(reviewState).reviewItems.get(id);
  return item ? reviewCardId(item) : id;
};

const reviewItemStartsAt = (reviewItem) => Math.min(...reviewItem.anchors.map(({ from }) => from));
const reviewItemEndsAt = (reviewItem) => Math.max(...reviewItem.anchors.map(({ to }) => to));

/** @typedef {{ id: string, items: ReviewItem[], position: number }} ReviewCard */

/** @type {WeakMap<import("@codemirror/state").EditorState, ReviewCard[]>} */
const cardCache = new WeakMap();

/**
 * Group visible reviews into cards and map their anchors to editor positions.
 * @param {import("@codemirror/state").EditorState} state
 * @returns {ReviewCard[]}
 */
export function reviewCards(state) {
  const cached = cardCache.get(state);
  if (cached) return cached;

  if (!state.facet(showCommentsFacet)) {
    cardCache.set(state, []);
    return [];
  }

  const singles = [];
  const replacementGroups = new Map();
  for (const item of state.field(reviewState).reviewItems.values()) {
    if (!hasVisibleReviewAnchor(item)) continue;
    if (item.replacementId) {
      const group = replacementGroups.get(item.replacementId) ?? [];
      group.push(item);
      replacementGroups.set(item.replacementId, group);
    } else {
      singles.push([item]);
    }
  }

  const groups = [...replacementGroups.values()];
  for (const group of groups) {
    group.sort((a, b) => {
      if (a.type === b.type) return reviewItemStartsAt(a) - reviewItemStartsAt(b);
      return a.type === "delete" ? -1 : 1;
    });
  }

  const mapPosition = state.facet(reviewCardPosition);
  const cards = [...singles, ...groups].map((items) => ({
    id: reviewCardId(items[0]),
    items,
    position: mapPosition(state, Math.max(...items.map(reviewItemEndsAt))),
  }));
  cardCache.set(state, cards);
  return cards;
}

/**
 * @param {ReviewItem} reviewItem
 * @param {import("@codemirror/state").ChangeDesc} changes
 * @param {-1 | 1} fromAssoc
 * @param {-1 | 1} toAssoc
 * @returns {ReviewAnchor[]}
 */
export const mapReviewAnchors = (reviewItem, changes, fromAssoc, toAssoc) =>
  reviewItem.anchors.map((anchor) => ({
    ...anchor,
    from: changes.mapPos(anchor.from, fromAssoc),
    to: changes.mapPos(anchor.to, toAssoc),
  }));

/** @type {StateEffect<ReviewChange>} */
export const setReviewStateEffect = StateEffect.define({
  map(value, changes) {
    if (value.reviewItem === null) return value;

    return {
      ...value,
      reviewItem: {
        ...value.reviewItem,
        anchors: mapReviewAnchors(value.reviewItem, changes, -1, 1),
      },
    };
  },
});

/** Create an upsert effect using the review's own ID. */
export const reviewItemEffect = (reviewItem) => setReviewStateEffect.of({ activeId: reviewItem.id, reviewItem });

/**
 * @param {Map<string, ReviewItem>} [reviewItems]
 * @returns {ReviewStateValue}
 */
export function createReviewState(reviewItems = new Map()) {
  const items = new Map(reviewItems);
  return {
    reviewItems: items,
    activeId: null,
    openId: null,
  };
}

function mapReviewsThroughTransaction(reviewItems, tr) {
  if (!tr.docChanged || reviewItems.size === 0) return reviewItems;
  return new Map(
    [...reviewItems].map(([id, reviewItem]) => {
      const anchors = mapReviewAnchors(reviewItem, tr.changes, 1, -1);
      const { from, to } = anchors[0];
      const text = reviewItem.type === "insert" && !reviewItem.resolved ? tr.state.sliceDoc(from, to) : reviewItem.text;

      return [id, { ...reviewItem, anchors, text }];
    }),
  );
}

function reviewEffectSelectsItem(reviewItem, tr) {
  if (tr.annotation(reviewAdapterSync)) return false;
  return (
    (reviewItem.kind === "comment" && !reviewItem.resolved) ||
    tr.isUserEvent("input") ||
    tr.isUserEvent("delete") ||
    tr.annotation(suggestionMoveHandled)
  );
}

function applyReviewEffects(value, tr) {
  let reviewItems = value.reviewItems;
  let { activeId, openId } = value;

  for (const effect of tr.effects) {
    if (!effect.is(setReviewStateEffect)) continue;

    const { activeId: changedId, reviewItem } = effect.value;
    if (reviewItem !== (reviewItems.get(changedId) ?? null)) {
      if (reviewItems === value.reviewItems) reviewItems = new Map(reviewItems);
      if (reviewItem === null) reviewItems.delete(changedId);
      else reviewItems.set(changedId, reviewItem);
    }
    if (reviewItem === null) {
      if (openId === changedId) openId = null;
      if (activeId === changedId) activeId = null;
      continue;
    }

    // User input keeps suggestions active so subsequent input can extend them.
    if (reviewEffectSelectsItem(reviewItem, tr)) {
      activeId = changedId;
    } else if (reviewItem.resolved && activeId === changedId) {
      activeId = null;
    }
  }

  return reviewItems === value.reviewItems && activeId === value.activeId && openId === value.openId ? value : { reviewItems, activeId, openId };
}

function applyReviewSelectionEffects(value, tr) {
  let { activeId, openId } = value;
  const cardSelection = tr.effects.find((effect) => effect.is(selectReviewCardEffect));

  if (cardSelection) {
    activeId = cardSelection.value;
  } else if (tr.isUserEvent("select") && !tr.isUserEvent("input")) {
    const reviewItem = findReviewBySelection(value.reviewItems, tr.state.selection, tr.state.facet(showCommentsFacet));
    activeId = reviewItem?.id ?? null;
    openId = reviewItem?.id ?? null;
  }

  const openCard = tr.effects.find((effect) => effect.is(setOpenReviewCardEffect));
  if (openCard) openId = openCard.value;

  return activeId === value.activeId && openId === value.openId ? value : { ...value, activeId, openId };
}

function pruneCollapsedReviewAnchors(value, docChanged) {
  if (!docChanged || value.reviewItems.size === 0) return value;

  const reviewItems = new Map(value.reviewItems);
  let { activeId, openId } = value;

  for (const [reviewId, reviewItem] of reviewItems) {
    if (reviewItem.resolved) continue;

    const anchors = reviewItem.anchors.filter(({ from, to }) => from < to);
    if (anchors.length === 0) {
      reviewItems.delete(reviewId);
      if (activeId === reviewId) activeId = null;
      if (openId === reviewId) openId = null;
    } else if (anchors.length !== reviewItem.anchors.length) {
      reviewItems.set(reviewId, { ...reviewItem, anchors });
    }
  }

  return { reviewItems, activeId, openId };
}

/** @type {StateField<ReviewStateValue>} */
export const reviewState = StateField.define({
  create() {
    return createReviewState();
  },
  update(value, tr) {
    // Keep these phases in order:
    // 1. Map existing review anchors through the document changes.
    // 2. Apply review effects, which may update the active review.
    // 3. Apply card or cursor selection, which takes precedence for the active
    //    review; an explicit open-card effect then takes precedence for openId.
    // 4. Remove collapsed anchors only after effects have had a chance to update them.
    const reviewItems = mapReviewsThroughTransaction(value.reviewItems, tr);
    let next = reviewItems === value.reviewItems ? value : { ...value, reviewItems };
    next = applyReviewEffects(next, tr);
    next = applyReviewSelectionEffects(next, tr);
    next = pruneCollapsedReviewAnchors(next, tr.docChanged);

    return next;
  },
});

function findReviewBySelection(reviewItems, selection, showComments) {
  if (!showComments) return null;

  for (const reviewItem of reviewItems.values()) {
    const selected = selection.ranges.some(({ from, to }) => reviewItem.anchors.some((anchor) => from >= anchor.from && to <= anchor.to));
    if (!reviewItem.resolved && selected) {
      return reviewItem;
    }
  }
  return null;
}
