import * as Y from "yjs";

const reviewTransactionOrigin = "live-reviews";

export function toSharedReviewAnchor({ id, from, to }, ytext) {
  return {
    id,
    fromRelative: Y.encodeRelativePosition(Y.createRelativePositionFromTypeIndex(ytext, from, 1)),
    toRelative: Y.encodeRelativePosition(Y.createRelativePositionFromTypeIndex(ytext, to, -1)),
  };
}

export function fromSharedReviewAnchor({ id, fromRelative, toRelative }, ydoc) {
  const from = Y.createAbsolutePositionFromRelativePosition(Y.decodeRelativePosition(fromRelative), ydoc);
  const to = Y.createAbsolutePositionFromRelativePosition(Y.decodeRelativePosition(toRelative), ydoc);
  return from && to ? { id, from: from.index, to: to.index } : null;
}

export function toSharedReview(reviewItem, ytext, { author, createdAt }) {
  return {
    id: reviewItem.id,
    kind: reviewItem.kind,
    type: reviewItem.type ?? null,
    text: reviewItem.text,
    comments: reviewItem.comments ?? [],
    draft: reviewItem.draft ?? false,
    resolved: reviewItem.resolved ?? false,
    resolution: reviewItem.resolution ?? null,
    resolvedAt: reviewItem.resolvedAt ?? null,
    resolvedBy: reviewItem.resolvedBy ?? null,
    resolvedAnchors: reviewItem.resolvedAnchors ?? [],
    replacementId: reviewItem.replacementId ?? null,
    legacy: reviewItem.legacy ?? null,
    anchors: reviewItem.anchors.map((anchor) => toSharedReviewAnchor(anchor, ytext)),
    author,
    createdAt,
  };
}

export function fromSharedReview(sharedReview, ydoc) {
  const anchors = sharedReview.anchors.map((anchor) => fromSharedReviewAnchor(anchor, ydoc)).filter(Boolean);
  return anchors.length > 0 ? { ...sharedReview, anchors } : null;
}

export class YjsReviewAdapter {
  #ydoc;
  #ytext;
  #yreviews;
  #getLocalUser;

  constructor({ ydoc, ytext, yreviews, getLocalUser }) {
    this.#ydoc = ydoc;
    this.#ytext = ytext;
    this.#yreviews = yreviews;
    this.#getLocalUser = getLocalUser;
  }

  getReviewIds() {
    return [...this.#yreviews.keys()];
  }

  getReview(id) {
    const sharedReview = this.#yreviews.get(id);
    if (!sharedReview) return undefined;
    return fromSharedReview(sharedReview, this.#ydoc);
  }

  subscribeToChanges(listener) {
    const observer = (event) => listener([...event.keysChanged]);
    this.#yreviews.observe(observer);
    return () => this.#yreviews.unobserve(observer);
  }

  applyChanges(changes) {
    this.#ydoc.transact(() => {
      for (const [id, reviewItem] of changes) {
        if (reviewItem === null) {
          this.#yreviews.delete(id);
          continue;
        }

        const defaults = {
          author: reviewItem.author ?? this.#getLocalUser(),
          createdAt: reviewItem.createdAt ?? Date.now(),
        };
        this.#yreviews.set(reviewItem.id, toSharedReview(reviewItem, this.#ytext, defaults));
      }
    }, reviewTransactionOrigin);
  }
}

export { reviewTransactionOrigin };
