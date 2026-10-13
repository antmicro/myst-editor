import { resolveReviewCardId, reviewSidebarFacet } from "./reviewStateField";

const fadeDuration = 100;
const hideDelay = 60;

// Hover is shared by the whole layer: pinned, focused, or fading cards block other popups.
export function createReviewCardHover(view, cards) {
  let hoveredId = null;
  let pointerReviewId = null;
  let pendingHoverId = null;
  let hideTimer = null;
  let pinnedIds = new Set();
  const fadeTimers = new Map();
  const isExpanded = () => view.state.facet(reviewSidebarFacet);
  const hostFor = (id) => cards.get(id)?.host;

  function reviewIdAt(target) {
    const element = target?.closest?.(
      ".cm-review-text[data-review-id], .cm-review-card-widget[data-review-id], [data-comment-ids], [data-suggestion-id]",
    );
    if (!element || !view.dom.contains(element)) return null;

    const ids = element.dataset.reviewId
      ? [element.dataset.reviewId]
      : [...(element.dataset.commentIds?.split(" ") ?? []), element.dataset.suggestionId].filter(Boolean);
    return ids.map((id) => resolveReviewCardId(view.state, id)).find((id) => cards.has(id)) ?? null;
  }

  function canHover(id, replacingHovered = false) {
    if (isExpanded()) return false;
    for (const [otherId, { host }] of cards) {
      if (otherId === id) continue;
      if (
        host.matches(".cm-review-card-pinned, .cm-review-card-fading-out, :focus-within") ||
        (host.classList.contains("cm-review-card-hovered") && (!replacingHovered || otherId !== hoveredId))
      ) {
        return false;
      }
    }
    return true;
  }

  function openPendingHover() {
    const id = pendingHoverId;
    if (!id || pointerReviewId !== id || hideTimer !== null || !cards.has(id) || !canHover(id)) return;
    pendingHoverId = null;
    setHovered(id);
  }

  function cancelFade(id) {
    clearTimeout(fadeTimers.get(id));
    fadeTimers.delete(id);
    hostFor(id)?.classList.remove("cm-review-card-fading-out");
  }

  function startFade(id) {
    const host = hostFor(id);
    if (!host || isExpanded() || host.matches(".cm-review-card-pinned, :focus-within")) return;
    cancelFade(id);
    host.classList.add("cm-review-card-fading-out");
    fadeTimers.set(
      id,
      setTimeout(() => {
        cancelFade(id);
        openPendingHover();
      }, fadeDuration),
    );
  }

  function setHovered(id, fade = true) {
    clearTimeout(hideTimer);
    hideTimer = null;
    if (hoveredId === id) return;
    const previousId = hoveredId;
    hostFor(previousId)?.classList.remove("cm-review-card-hovered");
    hoveredId = id;
    if (previousId) {
      if (fade) startFade(previousId);
      else cancelFade(previousId);
    }
    cancelFade(id);
    hostFor(id)?.classList.add("cm-review-card-hovered");
  }

  function onPointerOver(event) {
    const id = reviewIdAt(event.target);
    pointerReviewId = id;
    if (!id || !cards.has(id)) {
      pendingHoverId = null;
    } else if (canHover(id)) {
      pendingHoverId = null;
      setHovered(id);
    } else if (!isExpanded() && id !== hoveredId) {
      pendingHoverId = id;
    }
  }

  function onPointerOut(event) {
    const nextId = reviewIdAt(event.relatedTarget);
    pointerReviewId = nextId;
    if (pendingHoverId !== nextId) pendingHoverId = null;
    if (nextId === hoveredId) return;
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      hideTimer = null;
      if (pendingHoverId && pointerReviewId === pendingHoverId && cards.has(pendingHoverId) && canHover(pendingHoverId, true)) {
        const id = pendingHoverId;
        pendingHoverId = null;
        setHovered(id);
      } else {
        setHovered(null);
        openPendingHover();
      }
    }, hideDelay);
  }

  view.dom.addEventListener("pointerover", onPointerOver);
  view.dom.addEventListener("pointerout", onPointerOut);

  return {
    remove(id) {
      if (hoveredId === id) setHovered(null, false);
      if (pendingHoverId === id) pendingHoverId = null;
      cancelFade(id);
      pinnedIds.delete(id);
    },
    reset() {
      pendingHoverId = null;
      setHovered(null, false);
      for (const id of fadeTimers.keys()) cancelFade(id);
    },
    syncPinned() {
      const nextPinnedIds = new Set([...cards].filter(([, { host }]) => host.classList.contains("cm-review-card-pinned")).map(([id]) => id));
      if (nextPinnedIds.size && !nextPinnedIds.has(hoveredId)) {
        setHovered(null, false);
      } else {
        hostFor(hoveredId)?.classList.add("cm-review-card-hovered");
      }
      if (!nextPinnedIds.size && !hoveredId) {
        for (const id of pinnedIds) startFade(id);
      }
      for (const id of nextPinnedIds) cancelFade(id);
      pinnedIds = nextPinnedIds;
      openPendingHover();
    },
    destroy() {
      clearTimeout(hideTimer);
      pendingHoverId = null;
      for (const timer of fadeTimers.values()) clearTimeout(timer);
      fadeTimers.clear();
      view.dom.removeEventListener("pointerover", onPointerOver);
      view.dom.removeEventListener("pointerout", onPointerOut);
    },
  };
}
