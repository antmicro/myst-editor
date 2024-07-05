import * as Y from "yjs";
import { updateShownComments } from "./state";
import { WebsocketProvider } from "y-websocket";
import { EditorView, ViewUpdate } from "@codemirror/view";
import { MapMode } from "@codemirror/state";

/**
 * @typedef {{ height: number, isShown: boolean, top?: number }} CommentInfo
 * This is the "local" state of all comments:
 *  * `height` - Height (in pixels) of the comment. We need to know this in order to create a
 *               placeholder for the comment in the CodeMirror instance.
 *  * `isShown` - Whether this comment was hidden by the user.
 *  * `top` - (in pixels) is the vertical space between the top of CodeMirror and the placeholder
 *            over which the comment will be displayed.
 */

const newRandomCommentId = () => "comment-" + Math.random().toString().replace(".", "");

/**
 * This is the interface for controlling a comment's line authorship. `lineAuthors` tells us which
 * lines were made by which users.
 *
 * NOTE: Code mirror's uses 0-based indexing of line numbers whereas Y.Array uses 0-based indexing.
 * Since this interface is used primarily from CodeMirror the functions expect the 1-based line index.
 *
 * NOTE: `lineAuthors` is an Y.Array of Y.Map. This is necessary since the values inserted
 * into Y.Array are immutable (if they are not Y.js primitives).
 */
export class CommentLineAuthors {
  constructor(/** @type {Y.Doc} */ ydoc, provider, getAvatar, commentId) {
    this.user = provider.awareness.getLocalState().user;
    /** @type {Y.Array<Y.Map<{name: string, color: string, avatar?: string }>>} */
    this.lineAuthors = ydoc.getArray(commentId + "/commentLineAuthors");
    this.ydoc = ydoc;
    this.getAvatar = getAvatar;
    this.commentId = commentId;
  }

  /** Check who made the line at `lineNumber` */
  get(lineNumber) {
    const authorData = this.lineAuthors.get(lineNumber - 1)?.get("author");
    if (!authorData) return;

    authorData.avatar = this.getAvatar(authorData.name);
    return authorData;
  }

  /** @param {Y.Array} lineAuthors  */
  copyFrom(lineAuthors) {
    for (let i = 0; i < lineAuthors.length; i++) {
      if (i != 0 || this.lineAuthors.length == 0) {
        this.lineAuthors.push([new Y.Map()]);
      }
      this.lineAuthors.get(this.lineAuthors.length - 1).set("author", lineAuthors.get(i).get("author"));
    }
  }

  delete() {
    this.lineAuthors.delete(0, this.lineAuthors.length);
  }

  /** Set the current user as the author of the line */
  mark(line) {
    while (line >= this.lineAuthors.length) {
      this.lineAuthors.push([new Y.Map()]);
    }

    this.lineAuthors.get(line - 1).set("author", this.user);
  }

  /** Remove line authorships information for lines in range `[line, line + diff)`. */
  remove(line, diff) {
    this.lineAuthors.delete(line - 1, diff);
  }

  /** Set this user as the author of `[line, line + diff)`. */
  insert(line, diff) {
    if (line - 1 > this.lineAuthors.length) {
      this.lineAuthors.push(
        // Adjust array length so that we can safely insert new elements at index `line-1`
        [...Array(line - 1 - this.lineAuthors.length).keys()].map((_) => new Y.Map()),
      );
    }

    this.lineAuthors.insert(
      line - 1,
      [...Array(diff).keys()].map((_) => new Y.Map([["author", this.user]])),
    );
  }

  /** Find the first line which has the same author as `originalLineNumber` with no other
   * authors in-between */
  firstLineOfSection(originalLineNumber) {
    const author = this.get(originalLineNumber).name;
    return this.lineAuthors
      .slice(0, originalLineNumber)
      .map((author, idx) => ({ ...author.get("author"), lineNumber: idx + 1 }))
      .reduceRight(
        // Go up until you find a line made by a different author
        (prev, { name, lineNumber }) => (name == author && lineNumber == prev - 1 ? lineNumber : prev),
        originalLineNumber,
      );
  }
}

/** This class controls the position of comments in the text. That is, which
 * comments are assigned to which line numbers. */
export class CommentPositionManager {
  /** @param {Y.Doc} ydoc */
  constructor(ydoc) {
    /** @type {Y.Map<string>} A map from line numbers to comment ids */
    this.commentPositions = ydoc.getMap(YComments.dataPath);
  }

  iter() {
    return [...this.commentPositions.entries()].map(([commentId, lineNumber]) => ({
      commentId,
      lineNumber: parseInt(lineNumber),
    }));
  }

  move(commentId, targetLine) {
    if (targetLine > 0 && !this.isOccupied(targetLine)) {
      this.commentPositions.set(commentId, targetLine);
    }
  }

  shift(startLine, diff, maxLine) {
    if (diff < 0) {
      this.iter()
        .filter((c) => startLine + diff < c.lineNumber && c.lineNumber <= startLine)
        .forEach((c) => this.del(c.commentId));
    }

    this.iter()
      .filter((c) => c.lineNumber >= startLine)
      .filter((c) => c.lineNumber + diff <= maxLine)
      .forEach((c) => this.move(c.commentId, c.lineNumber + diff));
  }

  isOccupied(lineNumber) {
    return this.iter().some((c) => c.lineNumber == lineNumber);
  }

  get(commentId) {
    return this.commentPositions.get(commentId);
  }

  set(commentId, lineNumber) {
    return this.commentPositions.set(commentId, lineNumber);
  }

  del(commentId) {
    this.commentPositions.delete(commentId);
  }
}

/** Controls the local state of comments: Their position and visibility
 *
 * NOTE: The information about visibility is used in Preact hooks, therefore a `onUpdate`
 *  method is provided, which allows modifying a component when `DisplayManager`'s state changes. */
export class DisplayManager {
  constructor() {
    this.comments = {};
    this._onUpdate = () => {};
  }

  onUpdate(f) {
    this._onUpdate = f;
  }

  switchVisibility(commentId) {
    const state = this.isShown(commentId);
    const newState = !state;
    this.setVisibility(commentId, newState);
    return newState;
  }

  setVisibility(commentId, state) {
    this.update((comments) => {
      if (!comments[commentId]) comments[commentId] = {};
      comments[commentId].isShown = state;
      return comments;
    });
  }

  setHeight(commentId, height) {
    this.update((ci) => {
      ci[commentId] ||= {};
      ci[commentId].height = height;
      return ci;
    });
  }

  offset(commentId) {
    return this.comments[commentId].top;
  }

  isShown(commentId) {
    if (this.comments[commentId]) {
      return this.comments[commentId].isShown && this.comments[commentId].top;
    }
    return true;
  }

  del(commentId) {
    this.update((comments) => {
      delete comments[commentId];
      return comments;
    });
  }

  new(commentId) {
    this.update((comments) => {
      comments[commentId] = { height: 18, isShown: false };
      return comments;
    });
  }

  update(f) {
    if (f) this.comments = f(this.comments);
    this._onUpdate();
  }

  show(commentId) {
    this.setVisibility(commentId, true);
  }
}

export class ResolvedComments {
  constructor(provider, /** @type {Y.Doc} */ ydoc) {
    this.user = provider.awareness.getLocalState().user;
    this.resolvedComments = ydoc.getMap("resolved-comments");
  }

  resolve(commentId, resolvedLine, lineNumber, date, pos) {
    this.resolvedComments.set(commentId, JSON.stringify({ resolvedLine, lineNumber, resolvedBy: this.user, resolvedDate: date, pos }));
  }

  delete(commentId) {
    this.resolvedComments.delete(commentId);
  }

  resolved() {
    return [...this.resolvedComments.entries()].map(([commentId, data]) => ({ commentId, ...JSON.parse(data) }));
  }

  updateLineNumberAndPos(commentId, lineNumber, pos) {
    this.resolvedComments.set(commentId, JSON.stringify({ ...JSON.parse(this.resolvedComments.get(commentId)), lineNumber, pos }));
  }

  markOrphaned(commentId) {
    this.resolvedComments.set(commentId, JSON.stringify({ ...JSON.parse(this.resolvedComments.get(commentId)), orphaned: true }));
  }

  setResolvedLine(commentId, line) {
    this.resolvedComments.set(commentId, JSON.stringify({ ...JSON.parse(this.resolvedComments.get(commentId)), resolvedLine: line }));
  }

  onUpdate(f) {
    this.resolvedComments.observe(() => f(this.resolved()));
  }
}

export class YComments {
  static commentsPrefix = "comments/";

  /**
   * @param {Y.Doc} ydoc
   * @param {WebsocketProvider} provider
   */
  constructor(ydoc, provider, getAvatar) {
    this.ydoc = ydoc;
    this.provider = provider;
    this.getAvatar = getAvatar;

    /** @type {EditorView} The main codemirror instance */
    this.mainCodeMirror = null;
    /** If `true`, it means that this user has just created a new comment */
    this.newLocalComment = false;

    this.positionManager = new CommentPositionManager(ydoc);
    this.displayManager = new DisplayManager(provider);
    this.commentResolver = new ResolvedComments(provider, ydoc);
    this.draggedComment = null;
    this.commentWithPopup = null;

    this.positionManager.commentPositions.observeDeep(() => this.updateMainCodeMirror());
  }

  lineAuthors(commentId) {
    return new CommentLineAuthors(this.ydoc, this.provider, this.getAvatar, commentId);
  }

  positions() {
    return this.positionManager;
  }

  display() {
    return this.displayManager;
  }

  resolver() {
    return this.commentResolver;
  }

  registerCodeMirror(cm) {
    this.mainCodeMirror = cm;
  }

  /**
   * The editor's left gutter width varies depending on screen size, line count and other factors.
   * We need to measure it before rendering a comment so that we can align it with the editor.
   * */
  marginLeft() {
    return this.mainCodeMirror.dom.querySelector(".cm-gutters").offsetWidth;
  }

  getTextForComment(commentId) {
    return this.ydoc.getText(YComments.commentsPrefix + commentId);
  }

  delText(commentId) {
    let text = this.getTextForComment(commentId);
    if (text?.parent) text.delete();
  }

  newComment(lineNumber) {
    const newCommentId = newRandomCommentId();
    this.positions().set(newCommentId, lineNumber.toString());
    this.display().new(newCommentId);
    this.lineAuthors(newCommentId).mark(1); // Mark the first line with the current user
    this.newLocalComment = true;
    return newCommentId;
  }

  deleteComment(commentId) {
    this.positions().del(commentId);
    this.display().del(commentId);
    this.delText(commentId);
  }

  resolveComment(commentId) {
    const lineNumber = this.positions().get(commentId);
    const pos = this.mainCodeMirror.state.doc.line(lineNumber).from;
    this.positions().del(commentId);
    this.display().del(commentId);

    const lineContent = this.mainCodeMirror.state.doc.line(lineNumber);
    this.resolver().resolve(commentId, lineContent.text, lineNumber, Date.now(), pos);
  }

  isEmpty(commentId) {
    return this.getTextForComment(commentId).length === 0;
  }

  findCommentOn(lineNumber) {
    return this.positions()
      .iter()
      .find((c) => c.lineNumber == lineNumber);
  }

  parentLineHeight(commentId) {
    let elem = this.mainCodeMirror.dom.querySelector("#" + commentId)?.previousSibling;
    if (elem) return elem.clientHeight;

    let parentLineNumber = this.positionManager.get(commentId);
    return [...this.mainCodeMirror.dom.querySelectorAll(`.cm-gutterElement`)].find((e) => e.textContent == parentLineNumber)?.clientHeight;
  }

  updateHeight(commentId, height) {
    this.display().setHeight(commentId, height);
    this.updateMainCodeMirror();
  }

  /** Look for comment boxes in the main `CodeMirror` instance */
  syncCommentLocations(update) {
    this.display().update(
      // sync comments locations
      (comments) => {
        update.view.dom.querySelectorAll(".comment-box").forEach((box) => {
          comments[box.id] ||= {};
          comments[box.id].top = box.offsetTop;
        });
        return comments;
      },
    );
  }

  /** Fetch comments which are in Y.js state but not in Preact */
  syncRemoteComments() {
    this.display().update((comments) => {
      this.positions()
        .iter()
        .filter((c) => !comments[c.commentId] || comments[c.commentId].isShown == undefined)
        .forEach((c) => {
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
      .map((c) => c.commentId);

    this.display().update((comments) => {
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
    this.syncResolvedComments(update);
  }

  iterComments() {
    const addPreactState = ({ lineNumber, commentId }) => ({
      ...this.displayManager.comments[commentId],
      lineNumber,
      commentId,
    });
    return this.positions().iter().map(addPreactState);
  }

  updateMainCodeMirror() {
    if (this.mainCodeMirror) {
      this.mainCodeMirror.dispatch({ effects: updateShownComments.of(null) });
    } else {
      console.warn("[YComments] Failed to update the main CodeMirror instance since it doesn't exist.");
    }
  }

  /** @param {ViewUpdate} update  */
  syncResolvedComments(update) {
    const resolvedComments = this.resolver().resolved();
    for (const comment of resolvedComments) {
      const newPos = update.changes.mapPos(comment.pos, 1);
      const newLineNumber = update.state.doc.lineAt(newPos).number;

      // check if the resolved line was deleted
      const lineDeletedViaSelection = update.changes.mapPos(comment.pos, 1, MapMode.TrackDel) == null;
      const backspacePressedOnEmptyLine =
        update.changes.mapPos(comment.pos, 1, MapMode.TrackBefore) == null && update.startState.doc.line(comment.lineNumber).text == "";
      if (lineDeletedViaSelection || backspacePressedOnEmptyLine) {
        this.resolver().markOrphaned(comment.commentId);
        continue;
      }

      if (!comment.orphaned) {
        this.resolver().updateLineNumberAndPos(comment.commentId, newLineNumber, newPos);
        const text = update.state.doc.line(newLineNumber).text;
        this.resolver().setResolvedLine(comment.commentId, text);
      }
    }
  }

  restoreComment(comment) {
    const authors = this.lineAuthors(comment.commentId);
    const oldText = this.getTextForComment(comment.commentId);
    const lineNumber = !comment.orphaned ? comment.lineNumber : this.mainCodeMirror.state.doc.lines;

    if (!this.positions().isOccupied(lineNumber)) {
      const newId = this.newComment(lineNumber);
      this.lineAuthors(newId).delete();
      this.lineAuthors(newId).copyFrom(authors.lineAuthors);
      const newText = this.getTextForComment(newId);
      newText.insert(0, oldText.toString());
      this.display().setVisibility(newId, true);
    } else {
      const id = this.findCommentOn(lineNumber).commentId;
      this.lineAuthors(id).copyFrom(authors.lineAuthors);
      const text = this.getTextForComment(id);
      text.insert(text.length - 1, "\n" + oldText.toString());
      this.display().setVisibility(id, true);
    }
    this.updateMainCodeMirror();

    this.resolver().delete(comment.commentId);
  }
}
