import { gutter, GutterMarker, BlockInfo, EditorView } from "@codemirror/view"
import { YComments } from './ycomments';
import { updateShownComments, ycommentsFacet } from "./state";

class CommentMarker extends GutterMarker {
  static MAIN_CLASS = "comment-gutter";
  static ICON_CLASS = "comment-gutter-icon";
  static COMMENT_IMAGE_CLASS = "comment-image";

  /**
   * @param {BlockInfo} line 
   * @param {EditorView} view
   */
  constructor(line, view) {
    super();
    this.gutterMarker = null;
    this.icon = null;

    if (view && line) {
      this.ycomments = view.state.facet(ycommentsFacet);
      this.lineNumber = view.state.doc.lineAt(line.to).number;
      this.commentId = this.ycomments.findCommentOn(this.lineNumber)?.commentId;
    }
  }

  hasComments() {
    return Boolean(this.commentId);
  }

  createGutterMarker() {
    this.gutterMarker = document.createElement("div");
    this.gutterMarker.classList.add(CommentMarker.MAIN_CLASS);
    if (this.lineNumber) {
      this.gutterMarker.style.width = (this.lineNumber.toString().length * 7) + "px";
      this.gutterMarker.ondrop = () => this.ycomments.positions().move(this.ycomments.draggedComment, this.lineNumber);
      this.gutterMarker.ondragover = e => e.preventDefault();
    }
  }

  addHoverEffects() {
    this.icon.onmouseenter = () => this.icon.classList.add(CommentMarker.COMMENT_IMAGE_CLASS);
    this.icon.onmouseleave = () => this.icon.classList.remove(CommentMarker.COMMENT_IMAGE_CLASS);
  }

  enableDragEffects() {
    this.icon.draggable = true;
    this.icon.ondragstart = () => {
      this.ycomments.draggedComment = this.commentId;
      this.ycomments.display().update();
    };
    this.icon.ondragend = () => {
      this.ycomments.draggedComment = null;
      this.ycomments.display().update();
    };
  }

  createPopupIcon() {
    this.icon = document.createElement("section");
    this.icon.classList = CommentMarker.ICON_CLASS;

    if (!this.draggedComment && !this.commentId) {
      this.addHoverEffects();
    }
  }

  markHasComments() {
    this.icon.classList.add(CommentMarker.COMMENT_IMAGE_CLASS)
  }

  /** Main function. Used to render the actual gutter marker */
  toDOM() {
    this.createGutterMarker();
    this.createPopupIcon();
    if (this.hasComments()) {
      this.enableDragEffects();
      this.markHasComments();
    }
    
    this.gutterMarker.appendChild(this.icon);
    return this.gutterMarker;
  }
}

/** 
 * @param {YComments} ycomments 
 * @param {EditorView} view
 */
const getOrCreateComment = (view, line, ycomments) => {
  const lineNumber = view.state.doc.lineAt(line.to).number;
  const comment = ycomments.findCommentOn(lineNumber)?.commentId;

  if (!comment) {
    return ycomments.newComment(lineNumber);
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
    mouseup(view, line) {
      let ycomments = view.state.facet(ycommentsFacet.reader);
      let commentId = getOrCreateComment(view, line, ycomments);
      let willBeVisible = ycomments.display().switchVisibility(commentId);

      if (!willBeVisible && ycomments.isEmpty(commentId)) {
        ycomments.deleteComment(commentId);
      }

      view.dispatch({ effects: updateShownComments.of(null) });
    }
  }
})


export { commentMarker }


