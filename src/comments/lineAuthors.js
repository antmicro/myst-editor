import { Decoration, EditorView, ViewPlugin, ViewUpdate, gutter, GutterMarker, BlockInfo, } from "@codemirror/view"
import { RangeSetBuilder, Transaction } from "@codemirror/state"
import { CommentLineAuthors } from "./ycomments";
import { StateEffect, StateField } from "@codemirror/state"
import { Facet } from "@codemirror/state";

const isUserEvent = (transaction) => ["input", "delete", "undo", "redo"].some(ev => transaction.isUserEvent(ev));

/** @type {Facet<CommentLineAuthors, CommentLineAuthors>} */
const lineAuthorsFacet = Facet.define({
  combine: values => values[values.length - 1],
  static: true
})

////////////////////////////// LINE-COLORING //////////////////////////////

const markAuthor = (color, lineNumber) => Decoration.line({
  attributes: {
    "data-line-number": lineNumber,
    style: "background-color: " + color + "99"
  }
});

/** 
 * If a line was added/removed by the current user then move the remaining lines down/up
 * 
 * @param {Transaction} transaction 
 */
const moveColors = (transaction) => {
  const lineAuthors = transaction.state.facet(lineAuthorsFacet);

  const lineDiff = transaction.state.doc.lines - transaction.startState.doc.lines;
  if (lineDiff == 0) return;

  const totalLines = transaction.startState.doc.lines;
  lineAuthors.trim(totalLines)

  const oldCursorPosition = transaction.startState.selection.main.from;
  const oldLine = transaction.startState.doc.lineAt(oldCursorPosition);
  lineAuthors.shift(oldLine.number, lineDiff);
}

/** 
 * Color every line of the editor which has an author
 * 
 * @param {EditorView} view 
 */
function colorEditorLines(view) {
  const lineAuthors = view.state.facet(lineAuthorsFacet);
  const builder = new RangeSetBuilder();

  for (let lineNumber = 1; lineNumber <= view.state.doc.lines; lineNumber++) {
    const line = view.state.doc.line(lineNumber);
    const color = lineAuthors.get(lineNumber);
    const user = lineAuthors.getAuthor(lineNumber);

    if (color) builder.add(line.from, line.from, markAuthor(color, lineNumber, user));
  }
  return builder.finish();
}

/** 
 * Check which lines were changed and assign the current user as their author 
 * 
 * @param {Transaction} transaction 
 */
const markEditedLines = (transaction) => {
  const lineAuthors = transaction.state.facet(lineAuthorsFacet);

  const lineDiff = transaction.state.doc.lines - transaction.startState.doc.lines;
  if (lineDiff < 0) return;

  transaction.changes.iterChangedRanges((_a, _b, changeStart, changeEnd) => {
    const startLine = transaction.newDoc.lineAt(changeStart);
    const endLine = transaction.newDoc.lineAt(changeEnd);
    const isWhitespace = transaction.newDoc.slice(changeStart, changeEnd).toString().trim().length == 0;

    if (isWhitespace && (!endLine.length || !startLine.length)) return;

    lineAuthors.markLineRange(startLine.number, endLine.number);
  });
}

/** 
 * A CodeMirror extension. Colors line of the editor respective to their authors.
 *
 * @param {CommentLineAuthors} lineAuthors 
 */
const commentLineHighlighter = ViewPlugin.fromClass(class {
  /** @param {EditorView} view */
  constructor(view) {
    this.decorations = colorEditorLines(view);
  }

  /** @param {ViewUpdate} update */
  update(update) {
    if (update.docChanged || update.viewportChanged) {
      update.transactions
        .filter(isUserEvent)
        .forEach(tr => {
          moveColors(tr);
          markEditedLines(tr);
        });
      this.decorations = colorEditorLines(update.view);
    }

    update.view.dom.onmouseleave = () => update.view.dispatch({
      effects: hoveredLine.of(null)
    });

    update.view.dom
      .querySelectorAll(".cm-line")
      .forEach(editorLine => {
        editorLine.onmouseenter = (e) => update.view.dispatch({
          effects: hoveredLine.of(parseInt(e.target.dataset.lineNumber))
        });
      })

  }
}, {
  decorations: v => v.decorations
});

////////////////////////////// SHOWING AUTHOR AVATARS //////////////////////////////

/** @type {StateEffect<number>} */
const hoveredLine = StateEffect.define();

/** 
 * The line which should contain it's author's avatar.
 * 
 * @type {StateField<number>} 
 */
const lineWithAuthorAvatar = StateField.define({
  create() { return null },
  update(_oldState, transaction) {
    const lineAuthors = transaction.state.facet(lineAuthorsFacet);
    const selectedLineNumber = transaction.effects.find(e => e.is(hoveredLine))?.value;
    if (selectedLineNumber) {
      return lineAuthors.firstLineOfSection(selectedLineNumber)
    }

    return null;
  }
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
    const author = this.lineAuthors.getAuthor(this.lineNumber);
    const avatar = document.createElement('img');
    avatar.classList.add("author-avatar");
    avatar.src = `/users/${author}.png`;
    avatar.onerror = () => {
      avatar.onerror = null;
      avatar.src = `https://www.gravatar.com/avatar/${author}?size=24&default=identicon`;
    }
    return avatar;
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
})

/** The main extension */
const commentAuthoring = (commentManager) => [
  lineAuthorsFacet.of(commentManager),
  lineWithAuthorAvatar.init(null),
  commentAuthorMarker,
  commentLineHighlighter
]

export {
  commentAuthoring
}
