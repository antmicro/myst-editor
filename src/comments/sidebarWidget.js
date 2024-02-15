import { gutter, GutterMarker, BlockInfo, EditorView } from "@codemirror/view"
import { YComments } from './ycomments';
import { updateShownComments, ycommentsFacet } from "./state";

class CommentMarker extends GutterMarker {
  static MAIN_CLASS = "comment-gutter";
  static ICON_CLASS = "comment-gutter-icon";
  static HAS_COMMENTS_CLASS = "has-comments";

  /**
   * @param {BlockInfo} line 
   * @param {EditorView} view
   */
  constructor(line, view) {
    super();
    this.line = line;
    this.view = view;
    if (view) {
      this.ycomments = this.view.state.facet(ycommentsFacet);
      this.lineNumber = this.view.state.doc.lineAt(this.line.to).number;
    }
  }

  gutterCommentMarker() {
    const commentMarker = document.createElement("div");
    commentMarker.classList.add(CommentMarker.MAIN_CLASS)
    if (this.lineNumber) {
      commentMarker.style.width = (this.lineNumber.toString().length * 5) + "px";
    }
    return commentMarker
  }

  hasComments() {
    if (!this.line) {
      return false;
    }

    this.commentId = this.ycomments
      .iterYComments()
      .find(({lineNumber}) => lineNumber == this.lineNumber)
      ?.commentId;

    return Boolean(this.commentId);
  }

  popupIcon() {
    const icon = document.createElement("section");
    icon.classList = CommentMarker.ICON_CLASS;
    return icon;
  }

  markHasComments(marker) {
    marker.classList.add(CommentMarker.HAS_COMMENTS_CLASS);
  }

  addPopupIcon(marker) {
    marker.appendChild(this.popupIcon())
  }

  /** Main function. Used to render the actual gutter marker */
  toDOM() {
    const marker = this.gutterCommentMarker();
    if (this.hasComments()) {
      this.markHasComments(marker)
    }
    this.addPopupIcon(marker);
    return marker
  }
}

/** 
 * @param {YComments} ycomments 
 * @param {EditorView} view
 */
const getOrCreateComment = (view, line, ycomments) => {
  const thisLineNumber = view.state.doc.lineAt(line.to).number;
  const comment = ycomments.iterYComments()
    .find(({lineNumber}) => lineNumber == thisLineNumber)
    ?.commentId
  
  if (!comment) {
    return ycomments.newComment(thisLineNumber);
  }

  return comment
}

/**  @type {import("@codemirror/state").Extension} */
const commentMarker = gutter({
  lineMarker(view, line) {
    return new CommentMarker(line, view)
  },
  lineMarkerChange: (update) => update.transactions.some(t => t.effects.some(e => e.is(updateShownComments))),
  initialSpacer: () => { return new CommentMarker(null, null) },
  domEventHandlers: {
    mousedown(view, line) {
      let ycomments = view.state.facet(ycommentsFacet.reader);
      let commentId = getOrCreateComment(view, line, ycomments);
      let willBeVisible = ycomments.switchVisibility(commentId);

      if (!willBeVisible && ycomments.isEmpty(commentId)) {
        ycomments.deleteComment(commentId);
      }

      view.dispatch({ effects: updateShownComments.of(null) });
    }
  }
})


export { commentMarker }


