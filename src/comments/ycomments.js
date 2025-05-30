import * as Y from "yjs";
import { updateShownComments } from "./state";
import { WebsocketProvider } from "y-websocket";
import { EditorView, ViewUpdate } from "@codemirror/view";
import { MapMode } from "@codemirror/state";
import { foldEffect, foldedRanges } from "@codemirror/language";
import { folded } from "../extensions";
import { computed, Signal, signal } from "@preact/signals";
import { yRemoteAnnotation } from "../extensions/collab";
import { loggerFacet } from "../logger";

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
  constructor(/** @type {Y.Doc} */ ydoc, provider, getAvatar, getUserUrl, commentId) {
    this.user = provider.awareness.getLocalState().user;
    /** @type {Y.Array<Y.Map<{name: string, color: string, avatar?: string }>>} */
    this.lineAuthors = ydoc.getArray(commentId + "/commentLineAuthors");
    this.ydoc = ydoc;
    this.getAvatar = getAvatar;
    this.getUserUrl = getUserUrl;
    this.commentId = commentId;
  }

  /** Check who made the line at `lineNumber` */
  get(lineNumber) {
    const authorData = this.lineAuthors.get(lineNumber - 1)?.get("author");
    if (!authorData) return;

    authorData.avatar = this.getAvatar(authorData.name);
    authorData.url = this.getUserUrl(authorData.name);
    return authorData;
  }

  /** @param {Y.Array} lineAuthors  */
  appendFrom(lineAuthors) {
    if (this.lineAuthors.length !== 0) {
      this.lineAuthors.delete(this.lineAuthors.length - 1);
    }

    this.lineAuthors.push(lineAuthors.toArray().map((m) => m.clone()));
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
  constructor(ydoc, ycomments) {
    /** @type {Y.Map<string>} A map from line numbers to comment ids */
    this.syncedPositions = ydoc.getMap(YComments.dataPath);
    /** @type {Signal<{commentId: string, lineNumber: number}[]>} */
    this.positions = signal([]);
    this.syncedPositions.observe(() => {
      this.positions.value = [...this.syncedPositions.entries()].map(([commentId, lineNumber]) => ({
        commentId,
        lineNumber: parseInt(lineNumber),
      }));
    });
    this.ycomments = ycomments;
    this.ydoc = ydoc;
  }

  move(commentId, targetLine) {
    if (targetLine > 0 && !this.isOccupied(targetLine)) {
      this.ydoc.transact(() => {
        this.syncedPositions.set(commentId, targetLine);
      }, "comments");
    }
  }

  isOccupied(lineNumber) {
    return this.positions.peek().some((c) => c.lineNumber == lineNumber);
  }

  get(commentId) {
    return this.syncedPositions.get(commentId);
  }

  set(commentId, lineNumber) {
    this.ydoc.transact(() => this.syncedPositions.set(commentId, lineNumber), "comments");
  }

  del(commentId) {
    this.ydoc.transact(() => this.syncedPositions.delete(commentId), "comments");
  }
}

/** Controls the local state of comments: Their position and visibility
 *
 * NOTE: The information about visibility is used in Preact hooks, therefore a `onUpdate`
 *  method is provided, which allows modifying a component when `DisplayManager`'s state changes. */
export class DisplayManager {
  constructor() {
    this.comments = signal({});
  }

  switchVisibility(commentId) {
    const shown = this.isShown(commentId);
    this.updateComment(commentId, { isShown: !shown });
  }

  updateComment(id, fields) {
    this.comments.value = { ...this.comments.peek(), [id]: { ...this.comments.peek()[id], ...fields } };
  }

  isShown(commentId) {
    return this.comments.peek()[commentId]?.isShown && this.comments.peek()[commentId]?.top;
  }

  del(commentId) {
    const { [commentId]: _, ...comments } = this.comments.peek();
    this.comments.value = comments;
  }

  new(commentId) {
    this.comments.value = { ...this.comments.peek(), [commentId]: { height: 18, isShown: false } };
  }
}

export class ResolvedComments {
  constructor(provider, /** @type {Y.Doc} */ ydoc) {
    this.user = provider.awareness.getLocalState().user;
    this.resolvedCommentsList = signal([]);
    this.resolvedComments = ydoc.getMap("resolved-comments");
    this.resolvedComments.observe(() => {
      this.resolvedCommentsList.value = [...this.resolvedComments.entries()].map(([commentId, data]) => ({ commentId, ...JSON.parse(data) }));
    });
    this.ydoc = ydoc;
  }

  resolve(commentId, resolvedLine, lineNumber, pos) {
    this.resolvedComments.set(commentId, JSON.stringify({ resolvedLine, lineNumber, resolvedBy: this.user, resolvedDate: Date.now(), pos }));
  }

  delete(commentId) {
    this.ydoc.transact(() => this.resolvedComments.delete(commentId), "comments");
  }

  updateComment(commentId, attributes) {
    this.resolvedComments.set(commentId, JSON.stringify({ ...JSON.parse(this.resolvedComments.get(commentId)), ...attributes }));
  }
}

export class YComments {
  static commentsPrefix = "comments/";

  /**
   * @param {Y.Doc} ydoc
   * @param {WebsocketProvider} provider
   */
  constructor(ydoc, provider, getAvatar, getUserUrl) {
    this.ydoc = ydoc;
    this.provider = provider;
    this.getAvatar = getAvatar;
    this.getUserUrl = getUserUrl;

    /** @type {EditorView} The main codemirror instance */
    this.mainCodeMirror = null;
    /** If `true`, it means that this user has just created a new comment */
    this.newLocalComment = false;

    this.positionManager = new CommentPositionManager(ydoc, this);
    this.displayManager = new DisplayManager(provider);
    this.commentResolver = new ResolvedComments(provider, ydoc);
    this.draggedComment = signal(null);
    this.commentWithPopup = signal(null);
    this.comments = computed(() =>
      this.positions().positions.value.map(({ commentId, lineNumber }) => ({
        ...this.display().comments.value[commentId],
        lineNumber,
        commentId,
      })),
    );

    /** commentId -> (EditorView) => void - here a listener can be added to wait for an editor for a comment to become available */
    this.commentEditorsListeners = new Map();
    /** commentId -> CodeMirror View */
    this.commentEditors = new Map();

    this.positionManager.syncedPositions.observeDeep(() => this.updateMainCodeMirror());
  }

  lineAuthors(commentId) {
    return new CommentLineAuthors(this.ydoc, this.provider, this.getAvatar, this.getUserUrl, commentId);
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
    this.mainCodeMirror.state.facet(loggerFacet).log(`Deleting comment on line ${this.positions().get(commentId)}`);
    this.positions().del(commentId);
    this.display().del(commentId);
    this.delText(commentId);
  }

  resolveComment(commentId) {
    const lineNumber = parseInt(this.positions().get(commentId));
    this.mainCodeMirror.state.facet(loggerFacet).log(`Resolving comment on line ${lineNumber}`);
    const pos = this.mainCodeMirror.state.doc.line(lineNumber).from;
    this.positions().del(commentId);
    this.display().del(commentId);

    const lineContent = this.mainCodeMirror.state.doc.line(lineNumber);
    this.resolver().resolve(commentId, lineContent.text, lineNumber, pos);
  }

  isEmpty(commentId) {
    return this.getTextForComment(commentId).length === 0;
  }

  findCommentOn(lineNumber) {
    return this.positions()
      .positions.peek()
      .find((c) => c.lineNumber == lineNumber);
  }

  parentLineHeight(commentId) {
    let elem;
    if (this.display().isShown(commentId)) {
      elem = this.mainCodeMirror.dom.querySelector("#" + commentId)?.previousSibling;
      if (elem) return elem.clientHeight + 5;
    } else {
      elem = this.mainCodeMirror.dom.querySelector("#" + commentId)?.parentElement;
      if (elem) return elem.clientHeight;
    }

    let parentLineNumber = this.positionManager.get(commentId);
    return [...this.mainCodeMirror.dom.querySelectorAll(`.cm-gutterElement`)].find((e) => e.textContent == parentLineNumber)?.clientHeight;
  }

  updateHeight(commentId, height) {
    this.display().updateComment(commentId, { height });
    this.updateMainCodeMirror();
  }

  /** Look for comment boxes in the main `CodeMirror` instance */
  syncCommentLocations(update) {
    update.view.dom.querySelectorAll(".comment-box").forEach((box) => {
      this.display().updateComment(box.id, { top: box.offsetTop });
    });
  }

  /** Fetch comments which are in Y.js state but not in Preact */
  syncRemoteComments() {
    this.positions()
      .positions.peek()
      .filter((c) => !(c.commentId in this.display().comments.peek()) || this.display().comments.peek()[c.commentId].isShown == undefined)
      .forEach((c) => {
        this.display().new(c.commentId);
        this.display().updateComment(c.commentId, { isShown: true });
        this.updateMainCodeMirror();
      });
  }

  /** Remove comments which are in Preact state but not in Y.js */
  removeLocalComments() {
    let remoteComments = this.positions()
      .positions.peek()
      .map((c) => c.commentId);

    for (let commentId in this.display().comments.peek()) {
      if (!remoteComments.includes(commentId)) {
        this.display().del(commentId);
      }
    }
  }

  syncFoldedComments(update) {
    if (!folded(update)) return;

    const isFold = update.transactions[0].effects[0].is(foldEffect);
    const { from, to } = update.transactions[0].effects[0].value;
    const fromLine = update.state.doc.lineAt(from).number;
    const toLine = update.state.doc.lineAt(to).number;

    const cursor = foldedRanges(update.state).iter(0);
    const ranges = [];
    for (let range = cursor; range.value != null; cursor.next()) {
      if (range.from != from || range.to != to) {
        ranges.push({ fromLine: update.state.doc.lineAt(range.from).number, toLine: update.state.doc.lineAt(range.to).number });
      }
    }

    this.positions()
      .positions.peek()
      .filter(
        ({ lineNumber }) => lineNumber >= fromLine && lineNumber <= toLine && !ranges.some((r) => lineNumber >= r.fromLine && lineNumber <= r.toLine),
      )
      .forEach(({ commentId }) => {
        this.display().updateComment(commentId, { isShown: !isFold });
      });
    this.updateMainCodeMirror();
  }

  /** Full synchronization between Y.js and Preact state */
  /** @param {ViewUpdate} update  */
  syncComments(update) {
    this.syncCommentLocations(update);
    this.syncFoldedComments(update);
    this.syncRemoteComments();
    this.removeLocalComments();
    this.syncResolvedComments(update);
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
    const noLocalChange = !update.docChanged || update.transactions.some((t) => t.annotation(yRemoteAnnotation));
    const commentUpdate = update.transactions.some((t) => t.effects.some((e) => e.is(updateShownComments)));
    if (noLocalChange && !commentUpdate) return;

    const resolvedComments = this.resolver().resolvedCommentsList.peek();
    for (const comment of resolvedComments) {
      let doNotUpdate = true;
      update.changes.iterChanges((from) => {
        if (update.startState.doc.lineAt(from).number <= comment.lineNumber) {
          doNotUpdate = false;
        }
      });

      if (comment.occupied !== this.positions().isOccupied(comment.lineNumber)) {
        doNotUpdate = false;
      }

      if (doNotUpdate) continue;

      const { deleted, newLine } = this.mapThroughChanges(comment, update.transactions[0], true);
      if (deleted) {
        this.resolver().updateComment(comment.commentId, { orphaned: true });
        continue;
      }

      this.resolver().updateComment(comment.commentId, { occupied: this.positions().isOccupied(newLine) });

      if (!comment.orphaned) {
        this.resolver().updateComment(comment.commentId, { lineNumber: newLine });
        const text = update.state.doc.line(newLine).text;
        this.resolver().updateComment(comment.commentId, { resolvedLine: text });
      }
    }
  }

  restoreComment(comment) {
    const authors = this.lineAuthors(comment.commentId);
    const oldText = this.getTextForComment(comment.commentId);
    const lineNumber = !comment.orphaned ? comment.lineNumber : this.mainCodeMirror.state.doc.lines;

    this.resolver().delete(comment.commentId);

    if (!this.positions().isOccupied(lineNumber)) {
      const newId = this.newComment(lineNumber);
      this.lineAuthors(newId).delete();
      this.lineAuthors(newId).appendFrom(authors.lineAuthors);
      const newText = this.getTextForComment(newId);
      newText.insert(0, oldText.toString());
      this.display().updateComment(newId, { isShown: true });
    } else {
      const id = this.findCommentOn(lineNumber).commentId;
      this.lineAuthors(id).appendFrom(authors.lineAuthors);
      const text = this.getTextForComment(id);
      text.insert(text.length, "\n" + oldText.toString());
      this.display().updateComment(id, { isShown: true });
    }
  }

  moveOrMerge(commentId, targetLine) {
    if (!this.positions().isOccupied(targetLine)) {
      this.positions().move(commentId, targetLine);
    } else {
      const id = this.findCommentOn(targetLine).commentId;
      this.lineAuthors(id).appendFrom(this.lineAuthors(commentId).lineAuthors);
      const text = this.getTextForComment(id);
      text.insert(text.length, "\n" + this.getTextForComment(commentId).toString());
      this.deleteComment(commentId);
      this.display().updateComment(id, { isShown: true });
    }
  }

  registerCommentEditor(commentId, view) {
    this.commentEditors.set(commentId, view);
    if (this.commentEditorsListeners.has(commentId)) {
      this.commentEditorsListeners.get(commentId)(view);
      this.commentEditorsListeners.delete(commentId);
    }
  }

  getEditorForComment(commentId) {
    return new Promise((resolve) => {
      if (this.commentEditors.has(commentId)) {
        resolve(this.commentEditors.get(commentId));
      } else {
        // Wait for the editor to be available, then resolve.
        this.commentEditorsListeners.set(commentId, resolve);
      }
    });
  }

  mapThroughChanges(comment, /** @type {Transaction} */ transaction, keepNonEmptyLines = false) {
    // Make sure the comment position is not beyond the last line in the document
    const oldLine = Math.min(comment.lineNumber, transaction.startState.doc.lines);
    const oldPos = transaction.startState.doc.line(oldLine).from;
    const newPos = transaction.changes.mapPos(oldPos, 1);
    const lineDeletedViaSelection = transaction.changes.mapPos(oldPos, 1, MapMode.TrackDel) == null;
    const lineDeletedViaBackspace =
      transaction.changes.mapPos(oldPos, 1, MapMode.TrackBefore) == null &&
      (!keepNonEmptyLines || transaction.startState.doc.line(oldLine).text == "");
    let lineCut = false;
    transaction.changes.iterChangedRanges((from) => {
      if (from == oldPos) {
        lineCut = true;
      }
    });
    lineCut = lineCut && transaction.isUserEvent("delete.cut");

    return {
      deleted: lineDeletedViaSelection || (lineDeletedViaBackspace && !transaction.isUserEvent("delete.cut")) || lineCut,
      oldPos,
      newPos,
      newLine: transaction.state.doc.lineAt(newPos).number,
    };
  }

  encodeState() {
    const positions = this.positions().syncedPositions.toJSON();
    const resolved = this.resolver().resolvedComments.toJSON();
    const lineAuthors = {};
    const text = {};
    const allComments = [...this.comments.peek(), ...this.resolver().resolvedCommentsList.peek()];
    for (const { commentId } of allComments) {
      const lineData = this.lineAuthors(commentId);
      lineAuthors[commentId] = lineData.lineAuthors.toJSON();
      const commentText = this.getTextForComment(commentId);
      text[commentId] = commentText.toString();
    }

    return { positions, resolved, lineAuthors, text };
  }

  applyState({ positions, resolved, lineAuthors, text }) {
    this.ydoc.transact(() => {
      for (const id in positions) {
        this.positions().syncedPositions.set(id, positions[id]);
      }
      for (const id in resolved) {
        this.resolver().resolvedComments.set(id, resolved[id]);
      }
      for (const id in lineAuthors) {
        const lineData = this.lineAuthors(id);
        lineAuthors[id].forEach((line) => {
          const map = new Y.Map();
          if (line.author) {
            map.set("author", line.author);
          }
          lineData.lineAuthors.push([map]);
        });
      }
      for (const id in text) {
        const commentText = this.getTextForComment(id);
        commentText.insert(0, text[id]);
      }
    });
  }
}
