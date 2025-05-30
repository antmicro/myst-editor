import { EditorView, Decoration, WidgetType } from "@codemirror/view";
import { RangeSetBuilder, RangeSet, StateField, Transaction } from "@codemirror/state";
import { ycommentsFacet, updateShownComments } from "./state";
import { YComments } from "./ycomments";
import { yHistoryAnnotation } from "../extensions/collab";

/** A placeholder. The role of this element is to reserve enough vertical and horizontal space for real comment.
 * The real comment HTML element is rendered on the top of the textarea, outside the DOM tree of Code Mirror.
 */
class Comment extends WidgetType {
  constructor(height, commentId, isShown) {
    super();
    this.height = height;
    this.commentId = commentId;
    this.isShown = isShown;
  }

  eq(widget) {
    return this.commentId == widget.commentId && this.isShown == widget.isShown && this.height == widget.height;
  }

  toDOM() {
    const btn = document.createElement("div");
    btn.id = this.commentId;
    btn.classList = "comment-box";
    if (!this.isShown) {
      btn.classList += " comment-box-hidden";
    }
    btn.style.height = this.height + "px";
    return btn;
  }
}

const commentWidget = (height, commentId, isShown) =>
  Decoration.widget({
    widget: new Comment(height, commentId, isShown),
    side: 10000,
    inlineOrder: false,
    block: isShown,
  });

const sortByLine = (commentA, commentB) => commentA.lineNumber - commentB.lineNumber;

/**
 * @param {Transaction} transaction
 * @returns {RangeSet<Decoration>}
 */
const shouldUpdateTextWidget = (transaction) => transaction.docChanged || transaction.effects.some((eff) => eff.is(updateShownComments));

/** @param {Transaction} transaction */
const buildTextareaWidgets = (transaction) => [
  (builder, { commentId, lineNumber, height, isShown }) => {
    if (lineNumber > transaction.state.doc.lines) return builder;

    try {
      const mountPoint = transaction.newDoc.line(lineNumber).to;
      builder.add(mountPoint, mountPoint, commentWidget(height, commentId, isShown));
    } catch (e) {
      console.warn(e);
      console.warn(`An error occured when rendering comment ${commentId}. Comment will not be shown.`);
    }
    return builder;
  },
  new RangeSetBuilder(),
];

/**
 * @param {Transaction} transaction
 * @param {YComments} ycomments
 */
const moveComments = (transaction, ycomments) => {
  if (
    (transaction.isUserEvent("input") || transaction.isUserEvent("delete") || transaction.annotation(yHistoryAnnotation)) &&
    transaction.startState.doc.lines != transaction.state.doc.lines
  ) {
    ycomments.positions().positions.value.forEach((pos) => {
      const { deleted, oldPos, newPos, newLine } = ycomments.mapThroughChanges(pos, transaction, true);

      if (deleted) {
        ycomments.deleteComment(pos.commentId);
      } else if (oldPos != newPos) {
        ycomments.positions().move(pos.commentId, newLine);
      }
    });
  }
};

/** @type {StateField<RangeSet<Decoration>>} */
const commentStateEffect = StateField.define({
  /**
   * @returns {RangeSet<Decoration>}
   */
  create() {
    return new RangeSetBuilder().finish();
  },

  /**
   * @param {RangeSet<Decoration>} oldState
   * @param {Transaction} transaction
   * @returns {RangeSet<Decoration>}
   */
  update(oldState, transaction) {
    if (shouldUpdateTextWidget(transaction)) {
      const ycomments = transaction.state.facet(ycommentsFacet);

      moveComments(transaction, ycomments);

      return ycomments.comments.value
        .sort(sortByLine)
        .reduce(...buildTextareaWidgets(transaction))
        .finish();
    }

    return oldState;
  },

  provide(field) {
    return EditorView.decorations.from(field);
  },
});

export { commentStateEffect };
