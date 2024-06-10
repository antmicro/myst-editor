import { EditorView } from "@codemirror/view";
import { Decoration, WidgetType } from "@codemirror/view";
import { RangeSetBuilder, RangeSet, StateField, Transaction } from "@codemirror/state";
import { ycommentsFacet, updateShownComments } from "./state";
import { YComments } from "./ycomments";

/** A placeholder. The role of this element is to reserve enough vertical and horizontal space for real comment.
 * The real comment HTML element is rendered on the top of the textarea, outside the DOM tree of Code Mirror.
 */
class Comment extends WidgetType {
  constructor(height, commentId) {
    super();
    this.height = height;
    this.commentId = commentId;
  }

  toDOM() {
    const btn = document.createElement("div");
    btn.id = this.commentId;
    btn.classList = "comment-box";
    btn.style.height = this.height + "px";
    return btn;
  }
}

const commentWidget = (height, commentId) =>
  Decoration.widget({
    widget: new Comment(height, commentId),
    side: 10000,
    inlineOrder: false,
    block: true,
  });

const sortByLine = (commentA, commentB) => commentA.lineNumber - commentB.lineNumber;

/**
 * @param {Transaction} transaction
 * @returns {RangeSet<Decoration>}
 */
const shouldUpdateTextWidget = (transaction) => transaction.docChanged || transaction.effects.some((eff) => eff.is(updateShownComments));

/** @param {Transaction} transaction */
const buildTextareaWidgets = (transaction) => [
  (builder, { commentId, lineNumber, height }) => {
    try {
      const mountPoint = transaction.newDoc.line(lineNumber).to;
      builder.add(mountPoint, mountPoint, commentWidget(height, commentId));
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
  if (transaction.isUserEvent("input") || transaction.isUserEvent("delete")) {
    const lineDiff = transaction.state.doc.lines - transaction.startState.doc.lines;
    if (lineDiff != 0) {
      const docLines = transaction.state.doc.lines;
      const cursorLine = transaction.state.doc.lineAt(transaction.selection.main.from).number - lineDiff;
      ycomments.positions().shift(cursorLine, lineDiff, docLines);
    }
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
      const isShown = ({ isShown }) => isShown;

      moveComments(transaction, ycomments);

      return ycomments
        .iterComments()
        .filter(isShown)
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
