import { WidgetType } from "@codemirror/view";
import { Fragment, h, render } from "preact";
import { CommentCard } from "../components/CommentCard";
import { SuggestionCard } from "../components/SuggestionCard";
import { ReviewCardMarker } from "../components/ReviewCardMarker";
import * as commands from "./reviewCommands";
import { selectReviewCardEffect, setOpenReviewCardEffect } from "./reviewStateField";

const cardLayers = new WeakMap();

export function createReviewCardLayer(view) {
  const existing = cardLayers.get(view);
  if (existing) return existing.cards;

  // CodeMirror may replace an inline marker when remote caret decorations change.
  // Keep the interactive card outside the editable line so its input survives.
  const layer = view.dom.ownerDocument.createElement("span");
  layer.className = "cm-review-card-layer";
  view.scrollDOM.appendChild(layer);
  const cards = new Map();
  cardLayers.set(view, { layer, cards });
  return cards;
}

export function removeReviewCard(view, id) {
  const card = cardLayers.get(view)?.cards.get(id);
  if (!card) return;
  render(null, card.host);
  card.host.remove();
  cardLayers.get(view).cards.delete(id);
}

export function destroyReviewCardLayer(view) {
  const layer = cardLayers.get(view);
  if (!layer) return;
  for (const id of layer.cards.keys()) removeReviewCard(view, id);
  layer.layer.remove();
  cardLayers.delete(view);
}

const anchorListsEqual = (left, right) =>
  left === right ||
  (left.length === right.length &&
    left.every((anchor, index) => {
      const other = right[index];
      return anchor.id === other.id && anchor.from === other.from && anchor.to === other.to;
    }));

export class ReviewCardWidget extends WidgetType {
  constructor(card, selected, composerOpen, avatarCrossorigin) {
    super();
    this.reviewItems = card.items;
    this.selected = selected;
    this.composerOpen = composerOpen;
    this.avatarCrossorigin = avatarCrossorigin;
    this.id = card.id;
  }

  eq(other) {
    return (
      other.selected === this.selected &&
      other.composerOpen === this.composerOpen &&
      other.avatarCrossorigin === this.avatarCrossorigin &&
      other.reviewItems.length === this.reviewItems.length &&
      other.reviewItems.every((otherItem, index) => {
        const item = this.reviewItems[index];
        return (
          otherItem.id === item.id &&
          otherItem.kind === item.kind &&
          otherItem.replacementId === item.replacementId &&
          otherItem.type === item.type &&
          otherItem.text === item.text &&
          otherItem.comments === item.comments &&
          anchorListsEqual(otherItem.anchors, item.anchors) &&
          otherItem.author?.name === item.author?.name &&
          otherItem.author?.color === item.author?.color &&
          otherItem.author?.avatarUrl === item.author?.avatarUrl &&
          otherItem.author?.userUrl === item.author?.userUrl &&
          otherItem.createdAt === item.createdAt &&
          otherItem.legacy === item.legacy
        );
      })
    );
  }

  select(view) {
    const id = this.reviewItems[0].id;
    view.dispatch({ effects: [selectReviewCardEffect.of(id), setOpenReviewCardEffect.of(id)] });
  }

  render(dom, view) {
    const primaryItem = this.reviewItems[0];
    const suggestionItem = this.reviewItems.find(({ type }) => type === "insert") ?? primaryItem;
    const currentUser = commands.getCurrentUser(view.state);
    const canEditPrimaryItem = commands.isCommentAuthor(currentUser, primaryItem);
    const suggestionIds = this.reviewItems.map(({ id }) => id);
    const replyItem = primaryItem.kind === "comment" ? primaryItem : suggestionItem;
    const sharedProps = {
      avatarCrossorigin: this.avatarCrossorigin,
      currentUser,
      selected: this.selected,
      composerOpen: this.composerOpen,
      onSelect: () => this.select(view),
      onClose: () => view.dispatch({ effects: setOpenReviewCardEffect.of(null) }),
      onReply: (comment) => commands.submitReviewReply(view, replyItem, comment),
      onEditComment: (commentId, text) => commands.editReviewReply(view, replyItem, commentId, text),
      onDeleteComment: (commentId) => commands.deleteReviewReply(view, replyItem, commentId),
    };
    const card =
      primaryItem.kind === "comment"
        ? h(CommentCard, {
            ...sharedProps,
            comment: primaryItem,
            onCancel: primaryItem.draft ? () => commands.removeReview(view, primaryItem.id) : undefined,
            onResolve: () => commands.resolveComment(view, primaryItem, currentUser),
            canEdit: canEditPrimaryItem,
            onEdit: canEditPrimaryItem ? (text) => commands.updateReviewItem(view, primaryItem, { text }) : undefined,
            onDelete: () => commands.removeReview(view, primaryItem.id),
          })
        : h(SuggestionCard, {
            ...sharedProps,
            suggestions: this.reviewItems,
            onAccept: () => commands.resolveSuggestions(view, suggestionIds, true),
            onReject: () => commands.resolveSuggestions(view, suggestionIds, false),
          });

    const author = (primaryItem.kind === "suggestion" ? suggestionItem.author : null) ?? primaryItem.author;
    render(h(Fragment, null, h(ReviewCardMarker, { kind: primaryItem.kind, author, onSelect: sharedProps.onSelect }), h("span", null, card)), dom);
  }

  updateCard(view) {
    const cards = createReviewCardLayer(view);
    let card = cards.get(this.id);
    if (!card) {
      const host = view.dom.ownerDocument.createElement("span");
      host.className = "cm-review-card-widget";
      host.dataset.reviewId = this.id;
      card = { host, widget: null };
      cards.set(this.id, card);
      cardLayers.get(view).layer.appendChild(host);
    }
    card.host.classList.toggle("cm-review-card-pinned", this.composerOpen || this.reviewItems.some(({ draft }) => draft));
    if (!card.widget || !this.eq(card.widget)) {
      this.render(card.host, view);
    }
    card.widget = this;
  }

  toDOM(view) {
    this.updateCard(view);
    const anchor = view.dom.ownerDocument.createElement("span");
    anchor.className = "cm-review-card-anchor";
    anchor.dataset.reviewId = this.id;
    return anchor;
  }

  updateDOM(dom, view) {
    if (dom.dataset.reviewId !== this.id) return false;
    this.updateCard(view);
    return true;
  }
}
