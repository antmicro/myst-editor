import { ViewPlugin } from "@codemirror/view";
import { createReviewCardLayer, destroyReviewCardLayer, removeReviewCard } from "./reviewCardWidget";
import { createReviewCardHover } from "./reviewCardHover";
import {
  reviewState,
  setReviewStateEffect,
  resolveReviewCardId,
  reviewCards,
  reviewCardPosition,
  showCommentsFacet,
  reviewSidebarFacet,
  reviewSidebarWideFacet,
} from "./reviewStateField";

const reviewCardGap = 8;
const isExpanded = (state) => state.facet(reviewSidebarFacet);
const hasSidebarSpace = (state) => state.facet(reviewSidebarWideFacet);
const getSelectedId = (state) => resolveReviewCardId(state, state.field(reviewState).activeId);

function findScrollContainer(view) {
  let element = view.scrollDOM;
  while (element) {
    const overflowY = element.ownerDocument.defaultView.getComputedStyle(element).overflowY;
    if (overflowY === "auto" || overflowY === "scroll") return element;
    element = element.parentElement;
  }
  return view.scrollDOM;
}

function setPixels(style, property, pixels) {
  const value = `${pixels}px`;
  if (style.getPropertyValue(property) !== value) style.setProperty(property, value);
}

export const reviewCardLayout = ViewPlugin.fromClass(
  class {
    constructor(view) {
      this.view = view;
      this.scrollContainer = findScrollContainer(view);
      this.cards = createReviewCardLayer(view);
      this.hover = createReviewCardHover(view, this.cards);
      this.selectedId = getSelectedId(view.state);
      this.pendingSelectionId = null;
      this.cardsOffset = 0;
      this.observedElements = new Set();
      this.onScroll = () => this.requestLayout();
      this.scrollContainer.addEventListener("scroll", this.onScroll, { passive: true });
      const ResizeObserverClass = view.dom.ownerDocument.defaultView?.ResizeObserver;
      this.resizeObserver = ResizeObserverClass ? new ResizeObserverClass(() => this.requestLayout()) : null;
      this.requestLayout();
    }

    requestLayout() {
      this.view?.requestMeasure({ key: this, read: (view) => this.measureLayout(view), write: (layout) => this.applyLayout(layout) });
    }

    measureLayout(view) {
      // The card layer scrolls with CodeMirror's content, so use scroll content coordinates.
      const scrollOrigin = view.scrollDOM.getBoundingClientRect().top - view.scrollDOM.scrollTop;
      const viewportRect = this.scrollContainer.getBoundingClientRect();
      const cardsById = new Map(reviewCards(view.state).map((card) => [card.id, card]));
      const expanded = isExpanded(view.state);
      const wide = hasSidebarSpace(view.state);
      const cards = [...this.cards]
        .map(([id, { host }]) => {
          const card = host.querySelector(".cm-review-card");
          const measuredElement = expanded ? card : host.querySelector(".cm-review-card-marker");
          const reviewCard = cardsById.get(id);
          if (!card || !measuredElement || !reviewCard) return null;

          const position = reviewCard.position;
          const line = view.lineBlockAt(Math.max(0, position - 1));
          return {
            id,
            host,
            card,
            measuredElement,
            anchorTop: view.coordsAtPos(position, -1)?.top ?? view.documentTop + view.lineBlockAt(position).top,
            lineTop: view.documentTop + line.top,
            lineBottom: view.documentTop + line.bottom,
            height: measuredElement.getBoundingClientRect().height,
            cardHeight: card.getBoundingClientRect().height,
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.anchorTop - b.anchorTop);

      let nextTop = Number.NEGATIVE_INFINITY;
      let nextPopupBottom = Number.NEGATIVE_INFINITY;
      const overlay = !expanded || !wide;
      const layout = cards.map((item) => {
        const top = expanded && !wide ? item.anchorTop : Math.max(item.anchorTop, nextTop);
        if (!expanded || wide) nextTop = top + item.height + reviewCardGap;
        const belowTop = Math.max(
          item.lineBottom + reviewCardGap,
          expanded && !wide ? nextPopupBottom + reviewCardGap : top + item.height + reviewCardGap,
        );
        const aboveTop = item.lineTop - item.cardHeight - reviewCardGap;
        const roomBelow = viewportRect.bottom - belowTop;
        const roomAbove = item.lineTop - viewportRect.top - reviewCardGap;
        // Expanded cards keep their position relative to their reviewed lines.
        const placeAbove = !expanded && roomBelow < item.cardHeight && roomAbove > roomBelow;
        const popupTop = placeAbove ? aboveTop : belowTop;
        if (expanded && !wide) nextPopupBottom = popupTop + item.cardHeight;
        return { ...item, top: top - scrollOrigin, popupOffset: overlay ? popupTop - top : 0, cardTop: overlay ? popupTop : top };
      });

      let cardsOffset = expanded ? this.cardsOffset : 0;
      const selected = expanded && layout.find(({ id }) => id === this.pendingSelectionId && id === getSelectedId(view.state));
      if (selected) {
        const visibleTop = viewportRect.top + reviewCardGap;
        const visibleBottom = viewportRect.bottom - reviewCardGap;
        const maxTop = Math.max(visibleTop, visibleBottom - selected.cardHeight);
        const targetTop = Math.min(Math.max(selected.lineTop, visibleTop), maxTop);
        cardsOffset = targetTop - selected.cardTop;
      }
      return { layout, cardsOffset, selectedId: selected?.id ?? null };
    }

    applyLayout({ layout, cardsOffset, selectedId }) {
      const currentElements = new Set(layout.flatMap(({ measuredElement, card }) => [measuredElement, card]));
      for (const element of this.observedElements) {
        if (!currentElements.has(element)) this.resizeObserver?.unobserve(element);
      }
      for (const { host, top, popupOffset } of layout) {
        setPixels(host.style, "top", top);
        setPixels(host.style, "--review-card-popup-top", popupOffset);
        setPixels(host.style, "--review-card-offset", cardsOffset);
        host.classList.add("cm-review-card-positioned");
      }
      for (const element of currentElements) {
        if (!this.observedElements.has(element)) this.resizeObserver?.observe(element);
      }
      this.observedElements = currentElements;
      this.cardsOffset = cardsOffset;
      if (selectedId) this.pendingSelectionId = null;
    }

    update(update) {
      const selectedId = getSelectedId(update.state);
      const selectionChanged = selectedId !== this.selectedId;
      if (selectionChanged) {
        this.selectedId = selectedId;
        this.pendingSelectionId = isExpanded(update.state) ? selectedId : null;
      }
      const cardsChanged =
        update.startState.field(reviewState).reviewItems !== update.state.field(reviewState).reviewItems ||
        update.startState.facet(showCommentsFacet) !== update.state.facet(showCommentsFacet);
      if (cardsChanged) {
        const cardIds = new Set(reviewCards(update.state).map(({ id }) => id));
        for (const id of this.cards.keys()) {
          if (!cardIds.has(id)) {
            this.hover.remove(id);
            removeReviewCard(update.view, id);
          }
        }
      }

      const expandedChanged = isExpanded(update.startState) !== isExpanded(update.state);
      const layoutModeChanged = expandedChanged || (isExpanded(update.state) && hasSidebarSpace(update.startState) !== hasSidebarSpace(update.state));
      if (layoutModeChanged) {
        this.cardsOffset = 0;
        this.pendingSelectionId = selectionChanged ? selectedId : null;
        for (const { host } of this.cards.values()) host.classList.remove("cm-review-card-positioned");
      }
      if (expandedChanged) this.hover.reset();

      const reviewsChanged = update.transactions.some((tr) => tr.effects.some((effect) => effect.is(setReviewStateEffect)));
      const positionsChanged = update.startState.facet(reviewCardPosition) !== update.state.facet(reviewCardPosition);
      if (
        reviewsChanged ||
        selectionChanged ||
        update.docChanged ||
        update.geometryChanged ||
        update.viewportChanged ||
        layoutModeChanged ||
        positionsChanged
      ) {
        this.requestLayout();
      }
    }

    docViewUpdate() {
      this.hover.syncPinned();
      this.requestLayout();
    }

    destroy() {
      this.hover.destroy();
      this.scrollContainer.removeEventListener("scroll", this.onScroll);
      this.resizeObserver?.disconnect();
      this.observedElements.clear();
      destroyReviewCardLayer(this.view);
      this.view = null;
    }
  },
);
