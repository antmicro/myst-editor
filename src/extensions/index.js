import { highlightActiveLine, keymap } from "@codemirror/view"
import { EditorState } from "@codemirror/state"
import { EditorView, basicSetup, minimalSetup } from "codemirror";
import { yCollab } from "y-codemirror.next";
import { markdown } from "@codemirror/lang-markdown";
import { indentWithTab, redo, history } from "@codemirror/commands";
import spellcheck from "./spellchecker";
import { customHighlighter } from "./customHighlights";
import { commentExtension } from "../comments";

const basicSetupWithoutHistory = basicSetup.filter((_, i) => i != 3);
const minimalSetupWithoutHistory = minimalSetup.filter((_, i) => i != 1)

const getRelativeCursorLocation = (view) => {
  const { from } = view.state.selection.main;
  const pos = view.state.doc.lineAt(from);
  return { line: pos.number - 1, ch: from - pos.from };
}

const restoreCursorLocation = (view, location) => {
  const { line, ch } = location;
  const pos = view.state.doc.line(line + 1).from + ch;
  view.dispatch({
    selection: { anchor: pos, head: pos },
    scrollIntoView: true,
  });
}

export class ExtensionBuilder {
  constructor(base = []) {
    this.important = [];
    this.base = base;
    this.extensions = ExtensionBuilder.defaultPlugins();
  }

  static minimalSetup() { return new ExtensionBuilder(minimalSetupWithoutHistory) }

  static basicSetup() { return new ExtensionBuilder(basicSetupWithoutHistory) }

  static defaultPlugins() {
    return [
      EditorView.lineWrapping,
      markdown(),
      highlightActiveLine(),
      keymap.of([
        indentWithTab,
        { key: "Mod-Z", run: redo }
      ])
    ];
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

  readonly() {
    this.extensions.push(
      EditorView.editable.of(false),
      EditorState.readOnly.of(true)
    )
    return this;
  }

  useDefaultHistory() {
    this.base.push(history());
    return this;
  }

  useCollaboration({ enabled=true, ytext, provider, undoManager, editorRef }) {
    if (!enabled) return this;
    
    this.extensions.push(yCollab(ytext, provider.awareness, { undoManager }));

    if (undoManager) {
      undoManager.on('stack-item-added', event => {
        event.stackItem.meta.set('cursor-location', getRelativeCursorLocation(editorRef.current));
      });
      undoManager.on('stack-item-popped', event => {
        restoreCursorLocation(editorRef.current, event.stackItem.meta.get('cursor-location'));
      });

      this.extensions.push(keymap.of([
        { key: "Mod-z", run: () => undoManager.undo(), preventDefault: true },
        { key: "Mod-y", run: () => undoManager.redo(), preventDefault: true },
        { key: "Mod-Z", run: () => undoManager.redo(), preventDefault: true },
      ]));
    }
    return this;
  }

  create() {
    return [...this.important, ...this.base, ...this.extensions];
  }
}