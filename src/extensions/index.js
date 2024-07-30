import { highlightActiveLine, keymap } from "@codemirror/view";
import { EditorSelection, EditorState, Prec } from "@codemirror/state";
import { EditorView, basicSetup, minimalSetup } from "codemirror";
import { yCollab } from "y-codemirror.next";
import { markdown } from "@codemirror/lang-markdown";
import { indentWithTab, redo, history } from "@codemirror/commands";
import spellcheck from "./spellchecker";
import { customHighlighter } from "./customHighlights";
import { commentExtension } from "../comments";
import { commentAuthoring } from "../comments/lineAuthors";
import { createRelativePositionFromTypeIndex } from "yjs";

const basicSetupWithoutHistory = basicSetup.filter((_, i) => i != 3);
const minimalSetupWithoutHistory = minimalSetup.filter((_, i) => i != 1);

const getRelativeCursorLocation = (view) => {
  const { from } = view.state.selection.main;
  const pos = view.state.doc.lineAt(from);
  return { line: pos.number - 1, ch: from - pos.from };
};

const restoreCursorLocation = (view, location) => {
  const { line, ch } = location;
  const pos = view.state.doc.line(line + 1).from + ch;
  view.dispatch({
    selection: { anchor: pos, head: pos },
    scrollIntoView: true,
  });
};

export class ExtensionBuilder {
  constructor(base = []) {
    this.important = [EditorState.lineSeparator.of("\n")];
    this.base = base;
    this.extensions = ExtensionBuilder.defaultPlugins();
  }

  static minimalSetup() {
    return new ExtensionBuilder(minimalSetupWithoutHistory);
  }

  static basicSetup() {
    return new ExtensionBuilder(basicSetupWithoutHistory);
  }

  static defaultPlugins() {
    return [EditorView.lineWrapping, markdown(), highlightActiveLine(), keymap.of([indentWithTab, { key: "Mod-Z", run: redo }])];
  }

  disable(keys) {
    this.base.push(Prec.highest(keymap.of(keys.map((key) => ({ key, run: () => true })))));
    return this;
  }

  addUpdateListener(f) {
    this.extensions.push(EditorView.updateListener.of(f));
    return this;
  }

  useSpellcheck(opts) {
    this.extensions.push(spellcheck(opts));
    return this;
  }

  useHighlighter(opts) {
    this.extensions.push(customHighlighter(opts));
    return this;
  }

  useComments({ enabled, ycomments }) {
    if (!enabled) return this;
    this.important.push(commentExtension(ycomments));
    return this;
  }

  // Also removes the yjs remote selection if the selection is bound to a type starting with `tname`
  useRemoveSelectionOnBlur(ytext, provider) {
    this.base.push(
      EditorView.domEventHandlers({
        blur(_, /** @type {EditorView} */ view) {
          const head = view.state.selection.main.head;
          provider.awareness.setLocalStateField("cursor", {
            anchor: createRelativePositionFromTypeIndex(ytext, head),
            head: createRelativePositionFromTypeIndex(ytext, head),
          });

          // It is not possible to dispatch a CodeMirror update during an update listener. Putting the dispatch in a setTimeout with timeout ms set to 0 circumvents this.
          setTimeout(() => {
            view.dispatch({
              selection: EditorSelection.create([EditorSelection.range(0, 0)]),
            });
          }, 0);
        },
      }),
    );

    return this;
  }

  showCommentLineAuthors(lineAuthors) {
    this.important.push(commentAuthoring(lineAuthors));
    return this;
  }

  readonly() {
    this.extensions.push(EditorView.editable.of(false), EditorState.readOnly.of(true));
    return this;
  }

  useDefaultHistory() {
    this.base.push(history());
    return this;
  }

  useCollaboration({ enabled = true, ytext, provider, undoManager, editorRef }) {
    if (!enabled) return this;

    this.extensions.push(yCollab(ytext, provider.awareness, { undoManager }));

    if (undoManager) {
      undoManager.on("stack-item-added", (event) => {
        event.stackItem.meta.set("cursor-location", getRelativeCursorLocation(editorRef.current));
      });
      undoManager.on("stack-item-popped", (event) => {
        restoreCursorLocation(editorRef.current, event.stackItem.meta.get("cursor-location"));
      });

      this.extensions.push(
        keymap.of([
          { key: "Mod-z", run: () => undoManager.undo(), preventDefault: true },
          { key: "Mod-y", run: () => undoManager.redo(), preventDefault: true },
          { key: "Mod-Z", run: () => undoManager.redo(), preventDefault: true },
        ]),
      );
    }
    return this;
  }

  create() {
    return [...this.important, ...this.base, ...this.extensions];
  }
}
