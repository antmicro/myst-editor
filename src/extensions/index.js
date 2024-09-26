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
import { suggestionPopup } from "./suggestions";
import { foldEffect, unfoldEffect, foldable } from "@codemirror/language";
import { syncPreviewWithCursor } from "./syncDualPane";
import { cursorIndicator } from "./cursorIndicator";
import { yaml } from "@codemirror/lang-yaml";
import { ySync } from "./collab";

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

export const folded = (update) => update.transactions.some((t) => t.effects.some((e) => e.is(foldEffect) || e.is(unfoldEffect)));

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

  static codeLanguage(name) {
    if (name == "yaml") {
      return yaml().language;
    } else {
      return null;
    }
  }

  static defaultPlugins() {
    return [
      EditorView.lineWrapping,
      markdown({ codeLanguages: this.codeLanguage }),
      highlightActiveLine(),
      keymap.of([indentWithTab, { key: "Mod-Z", run: redo }]),
    ];
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

  useCompartment(compartment, opts) {
    this.extensions.push(compartment.of(opts));
    return this;
  }

  useComments({ ycomments }) {
    this.important.push(commentExtension(ycomments));
    return this;
  }

  useRemoveSelectionOnBlur() {
    this.base.push(
      EditorView.domEventHandlers({
        blur(_, /** @type {EditorView} */ view) {
          const head = view.state.selection.main.head;

          // It is not possible to dispatch a CodeMirror update during an update listener. Putting the dispatch in a setTimeout with timeout ms set to 0 circumvents this.
          setTimeout(() => {
            view.dispatch({
              selection: EditorSelection.create([EditorSelection.range(head, head)]),
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

  useSyncPreviewWithCursor({ lineMap, preview, lastTyped }) {
    this.base.push(syncPreviewWithCursor(lineMap, preview, lastTyped));
    return this;
  }

  useCursorIndicator({ lineMap, preview }) {
    this.base.push(cursorIndicator(lineMap, preview));
    return this;
  }

  useCollaboration({ ytext, provider, undoManager, editorView }) {
    const collab = yCollab(ytext, provider.awareness, { undoManager });
    collab[1] = ySync;
    this.extensions.push(collab);

    if (undoManager) {
      undoManager.on("stack-item-added", (event) => {
        event.stackItem.meta.set("cursor-location", getRelativeCursorLocation(editorView.value));
      });
      undoManager.on("stack-item-popped", (event) => {
        restoreCursorLocation(editorView.value, event.stackItem.meta.get("cursor-location"));
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

  useSuggestionPopup({ ycomments, editorMountpoint }) {
    this.base.push(EditorView.updateListener.of((update) => suggestionPopup(update, ycomments, editorMountpoint)));
    return this;
  }

  // This is added due to a bug with Chrome and Codemirror, where folding a section will sometimes scroll to that section.
  useFixFoldingScroll(focusScroll) {
    this.base.push(
      EditorState.transactionFilter.of((tr) => {
        if (tr.effects.some((e) => e.is(foldEffect) || e.is(unfoldEffect))) {
          focusScroll.current = window.scrollY;
        }
        return tr;
      }),
      EditorView.updateListener.of((update) => {
        if (!folded(update) || focusScroll.current == null) return;
        window.scrollTo({ top: focusScroll.current });
        focusScroll.current = null;
      }),
    );

    return this;
  }

  /** @param {(b: ExtensionBuilder) => ExtensionBuilder} extender  */
  if(condition, extender) {
    if (condition) {
      return extender(this);
    } else {
      return this;
    }
  }

  useMoveCursorAfterFold() {
    this.base.push(
      EditorState.transactionFilter.of((tr) => {
        if (tr.effects.some((e) => e.is(foldEffect))) {
          const { from, to } = tr.effects[0].value;
          const { head } = tr.startState.selection.main;
          if (head >= from && head <= to) {
            tr.selection = EditorSelection.create([EditorSelection.range(from, from)]);
          }
        }

        return tr;
      }),
      EditorView.updateListener.of((update) => {
        if (!folded(update)) return;
        update.view.focus();
      }),
    );
    return this;
  }

  create() {
    return [...this.important, ...this.base, ...this.extensions];
  }
}

/** This function folds all top level syntax nodes, while skiping a number of them defined by the `skip` parameter */
export function skipAndFoldAll(/** @type {EditorView} */ view, skip = 0) {
  let { state } = view;
  let effects = [];
  let nProcessedFoldables = 0;
  for (let pos = 0; pos < state.doc.length;) {
    let line = view.lineBlockAt(pos),
      range = foldable(state, line.from, line.to);
    if (range && nProcessedFoldables >= skip) {
      effects.push(foldEffect.of(range));
    }
    pos = (range ? view.lineBlockAt(range.to) : line).to + 1;
    if (range) nProcessedFoldables++;
  }
  if (effects.length) view.dispatch({ effects });
}
