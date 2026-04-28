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

/**
 * @param {import("@codemirror/state").Text} doc
 * @param {{ commentId: string, lineNumber: number, height: number, isShown: boolean }[]} comments
 * @returns {RangeSet<Decoration>}
 */
const buildTextareaWidgets = (doc, comments) => {
  const builder = new RangeSetBuilder();

  [...comments].sort(sortByLine).forEach(({ commentId, lineNumber, height = 18, isShown = false }) => {
    if (lineNumber > doc.lines) return;

    try {
      const mountPoint = doc.line(lineNumber).to;
      builder.add(mountPoint, mountPoint, commentWidget(height, commentId, isShown));
    } catch (e) {
      console.warn(e);
      console.warn(`An error occured when rendering comment ${commentId}. Comment will not be shown.`);
    }
  });

  return builder.finish();
};

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
   * @param {import("@codemirror/state").EditorState} state
   * @returns {RangeSet<Decoration>}
   */
  create(state) {
    const ycomments = state.facet(ycommentsFacet);
    return buildTextareaWidgets(state.doc, ycomments.comments.peek());
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

      return buildTextareaWidgets(transaction.state.doc, ycomments.comments.peek());
    }

    return oldState;
  },

  provide(field) {
    return EditorView.decorations.from(field);
  },
});

export { commentStateEffect };
