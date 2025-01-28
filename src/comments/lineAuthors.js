import { Decoration, EditorView, ViewPlugin, ViewUpdate, gutter, GutterMarker } from "@codemirror/view";
import { RangeSetBuilder, Transaction, StateEffect, StateField, Facet } from "@codemirror/state";
import { CommentLineAuthors } from "./ycomments";

const isUserEvent = (transaction) => ["input", "delete", "undo", "redo"].some((ev) => transaction.isUserEvent(ev));

/** @type {Facet<CommentLineAuthors, CommentLineAuthors>} */
const lineAuthorsFacet = Facet.define({
  combine: (values) => values[values.length - 1],
  static: true,
});

////////////////////////////// LINE-COLORING //////////////////////////////

export const lineAuthorsEffect = StateEffect.define();

/**
 * A CodeMirror extension. Colors line of the editor respective to their authors.
 *
 * @param {CommentLineAuthors} lineAuthors
 */
const commentLineHighlighter = ViewPlugin.fromClass(
  class {
    /** @param {EditorView} view */
    constructor(view) {
      this.decorations = this.colorEditorLines(view);
    }

    markAuthor(author, lineNumber) {
      return Decoration.line({
        attributes: {
          "data-line-number": lineNumber,
          style: `
            --bg: ${author.color + "99"};
            border-left: 2px solid ${author.color};
            position: relative;
          `,
        },
        class: "cm-comment-author-colored",
      });
    }

    /**
     * Color every line of the editor which has an author
     *
     * @param {EditorView} view
     */
    colorEditorLines(view) {
      const lineAuthors = view.state.facet(lineAuthorsFacet);
      const builder = new RangeSetBuilder();

      for (let lineNumber = 1; lineNumber <= view.state.doc.lines; lineNumber++) {
        const line = view.state.doc.line(lineNumber);
        const author = lineAuthors.get(lineNumber);

        if (author) builder.add(line.from, line.from, this.markAuthor(author, lineNumber));
      }
      return builder.finish();
    }

    /**
     * Check which lines were changed and assign the current user as their author
     *
     * @param {Transaction} transaction
     */
    markLinesEditedInTransaction(transaction) {
      const lineAuthors = transaction.state.facet(lineAuthorsFacet);

      transaction.changes.iterChangedRanges((_a, _b, changeStart, changeEnd) => {
        const startLine = transaction.newDoc.lineAt(changeStart);
        const endLine = transaction.newDoc.lineAt(changeEnd);
        const isWhitespace = transaction.newDoc.slice(changeStart, changeEnd).toString().trim().length == 0;
        const lineDiff = transaction.state.doc.lines - transaction.startState.doc.lines;

        if (lineDiff > 0) {
          if (isWhitespace && !endLine.length) {
            lineAuthors.insert(startLine.number + 1, lineDiff);
          } else if (startLine.from == changeStart) {
            lineAuthors.insert(startLine.number, lineDiff);
          } else {
            lineAuthors.insert(startLine.number, lineDiff);
            lineAuthors.mark(endLine.number);
          }
        }

        if (lineDiff < 0) {
          const oldLine = transaction.startState.doc.length > changeEnd ? transaction.startState.doc.lineAt(changeEnd) : null;

          if (isWhitespace && endLine.to == changeStart) {
            lineAuthors.remove(startLine.number + 1, -lineDiff);
          } else if (isWhitespace && !oldLine?.length) {
            lineAuthors.remove(startLine.number, -lineDiff);
          } else {
            lineAuthors.remove(startLine.number + 1, -lineDiff);
            lineAuthors.mark(startLine.number);
          }
        }

        if (lineDiff == 0 && !lineAuthors.get(startLine.number)) {
          lineAuthors.mark(startLine.number);
        }
      });
    }

    /** @param {ViewUpdate} update */
    update(update) {
      if (update.docChanged || update.viewportChanged || update.transactions.some((t) => t.effects.some((e) => e.is(lineAuthorsEffect)))) {
        update.transactions.filter(isUserEvent).forEach((t) => this.markLinesEditedInTransaction(t));

        this.decorations = this.colorEditorLines(update.view);
      }

      update.view.dom.onmouseleave = () =>
        update.view.dispatch({
          effects: hoveredLine.of(null),
        });

      update.view.dom.querySelectorAll(".cm-line").forEach((editorLine) => {
        editorLine.onmouseenter = (e) =>
          update.view.dispatch({
            effects: hoveredLine.of(parseInt(e.target.dataset.lineNumber)),
          });
      });
    }
  },
  {
    decorations: (v) => v.decorations,
  },
);

////////////////////////////// SHOWING AUTHOR AVATARS //////////////////////////////

/** @type {StateEffect<number>} */
const hoveredLine = StateEffect.define();

/**
 * The line which should contain it's author's avatar.
 *
 * @type {StateField<number>}
 */
const lineWithAuthorAvatar = StateField.define({
  create() {
    return null;
  },
  update(_oldState, transaction) {
    const lineAuthors = transaction.state.facet(lineAuthorsFacet);
    const selectedLineNumber = transaction.effects.find((e) => e.is(hoveredLine))?.value;
    if (selectedLineNumber) {
      return lineAuthors.firstLineOfSection(selectedLineNumber);
    }

    return null;
  },
});

class AvatarMarker extends GutterMarker {
  constructor(line, view) {
    super();
    if (view && line) {
      this.lineNumber = view.state.doc.lineAt(line.to).number;
      this.lineAuthors = view.state.facet(lineAuthorsFacet);
      this.selectedLine = view.state.facet(lineWithAuthorAvatar);
    }
  }

  authorAvatar() {
    const { avatar } = this.lineAuthors.get(this.lineNumber);
    let avatarIcon = document.createElement("img");
    avatarIcon.classList.add("author-avatar");
    avatarIcon.src = avatar;
    return avatarIcon;
  }

  toDOM() {
    if (this.selectedLine && this.selectedLine == this.lineNumber) {
      return this.authorAvatar();
    }

    return document.createElement("div");
  }
}

/** The gutter marker which contains the avatar  */
const commentAuthorMarker = gutter({
  lineMarker: (view, line) => new AvatarMarker(line, view),
  lineMarkerChange: (update) => update.startState.field(lineWithAuthorAvatar) != update.state.field(lineWithAuthorAvatar),
  initialSpacer: () => new AvatarMarker(null, null),
});

/** The main extension */
const commentAuthoring = (commentManager) => [
  lineAuthorsFacet.of(commentManager),
  lineWithAuthorAvatar.init(null),
  commentAuthorMarker,
  commentLineHighlighter,
];

export { commentAuthoring };
