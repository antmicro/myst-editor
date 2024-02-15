import * as Y from "yjs";
import { updateShownComments } from "./state";
import { WebsocketProvider } from "y-websocket";

const randomId = () => "comment-" + Math.random().toString().replace(".", "")

/**
 * @typedef {{ height: number, isShown: boolean }} CommentInfo
 * @typedef {{ [id: string]: CommentInfo }} AllCommentInfo
 */
export class YComments {
  static commentsPrefix = "comments/";

  /** 
   * @param {Y.Doc} ydoc
   * @param {(setter: (comments: AllCommentInfo) => AllCommentInfo) => void} setComments
   * @param {WebsocketProvider} provider
   * @param {AllCommentInfo} comments
   */
  constructor(ydoc, provider, setComments, comments) {
    this.ydoc = ydoc;
    this.provider = provider;
    this.setComments = setComments;
    this.comments = comments;

    this.user = provider.awareness.getLocalState().user;

    /** @type {Y.Map<string>} A map from line numbers to comment ids */
    this.commentPositions = ydoc.getMap(YComments.dataPath);

    /** @type {EditorView} The main codemirror instance */
    this.mainCodeMirror = null;
  }

  registerCodeMirror(cm) {
    this.mainCodeMirror = cm;
  }

  getTextForComment(commentId) {
    return this.ydoc.getText(YComments.commentsPrefix + commentId);
  }

  getProvider() {
    return this.provider;
  }

  switchVisibility(commentId) {
    const state = this.isShown(commentId);
    const newState = !state;

    this.updateComments(comments => {
      if (!comments[commentId]) comments[commentId] = {}

      comments[commentId].isShown = newState;
      return comments;
    })

    return newState;
  }

  isShown(commentId) {
    if (this.comments[commentId]) {
      return this.comments[commentId].isShown;
    }
    return false;
  }

  isOccupied(lineNumber) {
    return this.iterYComments()
      .some(c => c.lineNumber == lineNumber)
  }

  getComment(commentId) {
    return this.commentPositions.get(commentId)
  }

  moveComment(commentId, targetLine) {
    if (targetLine > 0 && !this.isOccupied(targetLine)) {
      this.commentPositions.set(commentId, targetLine);  
    }
  }

  removeCommentsInRange(from, to) {
    return this.iterYComments()
      .filter(c => from < c.lineNumber && c.lineNumber <= to)
      .forEach(c => this.commentPositions.delete(c.commentId));
  }

  moveComments(startLine, diff, maxLine) {
    if (diff < 0) {
      this.removeCommentsInRange(startLine + diff, startLine)
    }

    this.iterYComments()
      .filter(c => c.lineNumber >= startLine)
      .filter(c => c.lineNumber + diff <= maxLine)
      .forEach(c => this.moveComment(c.commentId, c.lineNumber + diff));
    
    this.updateMainCodeMirror();
  }

  newComment(lineNumber) {
    const newCommentId = randomId();
    this.commentPositions.set(newCommentId, lineNumber.toString()); // Update YJS state
    this.updateComments(comments => { // Update Preact state
      comments[newCommentId] = { height: 18, isShown: false };
      return comments;
    });

    return newCommentId
  }

  deleteComment(commentId) {
    this.commentPositions.delete(commentId); // Update YJS state
    this.updateComments(comments => { // Update Preact state
      delete comments[commentId];
      return comments;
    });
  }

  isEmpty(commentId) {
    return this.getTextForComment(commentId).length === 0;
  }

  //////////////////////// SYNCHRONIZATION ////////////////////////

  /** Move Preact element to the `height` (relative to the main CodeMirror position) */
  syncHeight(commentId, height) {
    this.updateComments(ci => {
      ci[commentId].height = height;
      return ci;
    });
    this.updateMainCodeMirror();
  }

  /** Look for comment boxes in the main `CodeMirror` instance */
  syncCommentLocations(update) {
    this.updateComments( // sync comments locations
      (comments) => {
        let boxes = update.view.dom.querySelectorAll(".comment-box");
        boxes.forEach(box => comments[box.id].top = box.offsetTop);
        return comments;
      }
    )
  }

  /** Fetch comments which are in Y.js state but not in Preact */
  syncRemoteComments() {
    this.updateComments(comments => {
      this.iterYComments()
        .filter(c => !comments[c.commentId])
        .forEach(c => {
          comments[c.commentId] = { isShown: true, height: 17 };
          this.updateMainCodeMirror();
        });
      return comments;
    });
  }

  /** Remove comments which are in Preact state but not in Y.js */
  removeLocalComments() {
    this.updateComments(comments => {
      let remoteComments = this.iterYComments()
        .map(c => c.commentId);

      for (let commentId in comments) {
        if (!remoteComments.includes(commentId)) {
          delete comments[commentId];
        }
      }
      return comments;
    });
  }

  /** Full synchronization between Y.js and Preact state */
  syncComments(update) {
    this.syncCommentLocations(update);
    this.syncRemoteComments();
    this.removeLocalComments();
  }

  //////////////////////// UTILITY ////////////////////////

  updateComments(f) {
    this.setComments(ci => {
      const newCommentState = { ...f(ci) };
      this.comments = newCommentState;
      return newCommentState;
    });
  }

  iterYComments() {
    return [...this.commentPositions.entries()]
    .map(([commentId, lineNumber]) => ({commentId, lineNumber: parseInt(lineNumber)}))
  }

  iterComments() {
    const addPreactState = ({lineNumber, commentId}) => ({ ...this.comments[commentId], lineNumber, commentId });
    return this.iterYComments()
      .map(addPreactState);
  }

  updateMainCodeMirror() {
    if (this.mainCodeMirror) {
      this.mainCodeMirror.dispatch({ effects: updateShownComments.of(null) });
    } else {
      console.warn("[YComments] Failed to update the main CodeMirror instance since it doesn't exist.")
    }
  }
}
