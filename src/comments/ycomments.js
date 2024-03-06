import * as Y from "yjs";
import { updateShownComments } from "./state";
import { WebsocketProvider } from "y-websocket";

/**
 * @typedef {{ height: number, isShown: boolean, top?: number }} CommentInfo
 * @typedef {{ [id: string]: CommentInfo }} AllCommentInfo
 */

const randomId = () => "comment-" + Math.random().toString().replace(".", "")

export class CommentLineAuthors {
  constructor(ydoc, provider, commentId) {
    this.user = provider.awareness.getLocalState().user;
    /** @type {Y.Map<{name: string, color: string}>} A map from line numbers to information about the author */
    this.lineMap = ydoc.getMap(commentId + "/commentLineAuthors");
  }

  markLineRange(from, to) {
    for (let i = Math.max(1, from); i <= to; i++) {
      this.lineMap.set(i.toString(), this.user);
    }
  }

  get(lineNumber) {
    return this.lineMap.get(lineNumber.toString())?.color
  }

  /** Find the first line which has the same author as `originalLineNumber` with no other authors in-between */
  firstLineOfSection(originalLineNumber) {
    let author = this.getAuthor(originalLineNumber);
    return this.iterLineMap()
      .filter(a => a.lineNumber <= originalLineNumber)
      .reduceRight( // Go up until you find a line made by a different author
        (prev, { name, lineNumber }) => (name==author) && (lineNumber==prev - 1) ? lineNumber : prev, 
        originalLineNumber
      )
  }

  getAuthor(lineNumber) {
    return this.lineMap.get(lineNumber.toString())?.name
  }

  iterLineMap() {
    return [...this.lineMap.entries()]
      .map(([lineNumber, author]) => ({ lineNumber: parseInt(lineNumber), ...author }))
      .sort((a1, a2) => a1.lineNumber - a2.lineNumber)
  }

  /** Move all line->author assignments by `diff`, starting from `startLine` */
  shift(startLine, diff) {
    this.iterLineMap()
      .filter(a => a.lineNumber > startLine)
      .filter(a => a.lineNumber + diff > 0)
      .forEach(a => this.lineMap.set((a.lineNumber + diff).toString(), {name: a.name, color: a.color}));
  }

  /** Remove all information about authors after `maxLine` */
  trim(maxLine) { 
    this.iterLineMap()
      .filter(a => a.lineNumber > maxLine)
      .forEach(a => this.lineMap.delete(a.lineNumber.toString()))
  }
}

export class CommentPositionManager {
  /** @param {Y.Doc} ydoc */
  constructor(ydoc) {
    /** @type {Y.Map<string>} A map from line numbers to comment ids */
    this.commentPositions = ydoc.getMap(YComments.dataPath);
  }

  iter() {
    return [...this.commentPositions.entries()]
      .map(([commentId, lineNumber]) => ({ commentId, lineNumber: parseInt(lineNumber) }))
  }

  move(commentId, targetLine) {
    if (targetLine > 0 && !this.isOccupied(targetLine)) {
      this.commentPositions.set(commentId, targetLine);
    }
  }

  shift(startLine, diff, maxLine) {
    if (diff < 0) {
      this.iter()
        .filter(c => startLine + diff < c.lineNumber && c.lineNumber <= startLine)
        .forEach(c => this.del(c.commentId));
    }

    this.iter()
      .filter(c => c.lineNumber >= startLine)
      .filter(c => c.lineNumber + diff <= maxLine)
      .forEach(c => this.move(c.commentId, c.lineNumber + diff));
  }

  isOccupied(lineNumber) {
    return this.iter()
      .some(c => c.lineNumber == lineNumber)
  }

  get(commentId) { return this.commentPositions.get(commentId) }

  set(commentId, lineNumber) { return this.commentPositions.set(commentId, lineNumber) }

  del(commentId) { this.commentPositions.delete(commentId); }
}

export class DisplayManager {
  constructor() {
    this.comments = {};
    this._onUpdate = () => { };
  }

  onUpdate(f) { this._onUpdate = f }

  switchVisibility(commentId) {
    const state = this.isShown(commentId);
    const newState = !state;
    this.setVisibility(commentId, newState);
    return newState;
  }

  setVisibility(commentId, state) {
    this.update(comments => {
      if (!comments[commentId]) comments[commentId] = {}
      comments[commentId].isShown = state;
      return comments;
    })
  }

  setHeight(commentId, height) {
    this.update(ci => {
      ci[commentId] ||= {};
      ci[commentId].height = height;
      return ci;
    });
  }

  offset(commentId) {
    return this.comments[commentId].top
  }

  isShown(commentId) {
    if (this.comments[commentId]) {
      return this.comments[commentId].isShown;
    }
    return true;
  }

  del(commentId) {
    this.update(comments => {
      delete comments[commentId];
      return comments;
    });
  }

  new(commentId) {
    this.update(comments => {
      comments[commentId] = { height: 18, isShown: false };
      return comments;
    });
  }

  update(f) {
    if (f) this.comments = f(this.comments);
    this._onUpdate();
  }

  show(commentId) { this.setVisibility(commentId, true) }
}

export class YComments {
  static commentsPrefix = "comments/";

  /** 
   * @param {Y.Doc} ydoc
   * @param {WebsocketProvider} provider
   */
  constructor(ydoc, provider) {
    this.ydoc = ydoc;
    this.provider = provider;

    /** @type {EditorView} The main codemirror instance */
    this.mainCodeMirror = null;

    this.positionManager = new CommentPositionManager(ydoc);
    this.displayManager = new DisplayManager();
    this.draggedComment = null;

    this.positionManager.commentPositions.observeDeep(() => this.updateMainCodeMirror())
  }

  lineAuthors(commentId) { return new CommentLineAuthors(this.ydoc, this.provider, commentId) }

  positions() { return this.positionManager }

  display() { return this.displayManager }

  registerCodeMirror(cm) {
    this.mainCodeMirror = cm;
  }

  getTextForComment(commentId) {
    return this.ydoc.getText(YComments.commentsPrefix + commentId);
  }

  delText(commentId) {
    let text = this.getTextForComment(commentId);
    if (text?.parent) text.delete();
  }


  newComment(lineNumber) {
    const newCommentId = randomId();
    this.positions().set(newCommentId, lineNumber.toString());
    this.display().new(newCommentId);
    return newCommentId;
  }

  deleteComment(commentId) {
    this.positions().del(commentId);
    this.display().del(commentId);
    this.delText(commentId);
  }

  isEmpty(commentId) {
    return this.getTextForComment(commentId).length === 0;
  }

  findCommentOn(lineNumber) {
    return this.positions()
      .iter()
      .find(c => c.lineNumber == lineNumber);
  }

  updateHeight(commentId, height) {
    this.display().setHeight(commentId, height);
    this.updateMainCodeMirror();
  }

  /** Look for comment boxes in the main `CodeMirror` instance */
  syncCommentLocations(update) {
    this.display().update( // sync comments locations
      (comments) => {
        update.view.dom
          .querySelectorAll(".comment-box")
          .forEach(box => {
            comments[box.id] ||= {};
            comments[box.id].top = box.offsetTop
          });
        return comments;
      }
    )
  }

  /** Fetch comments which are in Y.js state but not in Preact */
  syncRemoteComments() {
    this.display()
      .update(comments => {
        this.positions()
          .iter()
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
    let remoteComments = this.positions()
      .iter()
      .map(c => c.commentId);

    this.display()
      .update(comments => {
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

  iterComments() {
    const addPreactState = ({ lineNumber, commentId }) => ({ ...this.displayManager.comments[commentId], lineNumber, commentId });
    return this.positions()
      .iter()
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
