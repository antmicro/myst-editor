import {
  highlightActiveLine,
  lineNumbers,
  highlightActiveLineGutter,
  highlightSpecialChars,
  drawSelection,
  dropCursor,
  rectangularSelection,
  crosshairCursor,
  keymap,
} from "@codemirror/view";
import { EditorSelection, EditorState, Prec } from "@codemirror/state";
import { EditorView } from "codemirror";
import { yCollab } from "y-codemirror.next";
import { markdown } from "@codemirror/lang-markdown";
import { indentWithTab, redo, history, defaultKeymap, historyKeymap } from "@codemirror/commands";
import spellcheck from "./spellchecker";
import { customHighlighter } from "./customHighlights";
import { commentExtension } from "../comments";
import { commentAuthoring } from "../comments/lineAuthors";
import { suggestionPopup } from "./suggestions";
import {
  foldEffect,
  unfoldEffect,
  foldable,
  foldGutter,
  indentOnInput,
  syntaxHighlighting,
  defaultHighlightStyle,
  bracketMatching,
  foldKeymap,
} from "@codemirror/language";
import { syncPreviewWithCursor } from "./syncDualPane";
import { cursorIndicator } from "./cursorIndicator";
import { yaml } from "@codemirror/lang-yaml";
import { ySync } from "./collab";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { lintKeymap } from "@codemirror/lint";
import { CollaborationClient } from "../collaboration";

const getRelativeCursorLocation = (view) => {
  const { from } = view.state.selection.main;
  const line = view.state.doc.lineAt(from);
  return { line: line.number, ch: from - line.from };
};

const restoreCursorLocation = (view, location) => {
  const lineNum = Math.min(view.state.doc.lines, location.line);
  const line = view.state.doc.line(lineNum);
  const pos = Math.min(view.state.doc.length, line.from + location.ch);
  view.dispatch({
    selection: { anchor: pos, head: pos },
    scrollIntoView: true,
  });
};

export const folded = (update) => update.transactions.some((t) => t.effects.some((e) => e.is(foldEffect) || e.is(unfoldEffect)));

export class ExtensionBuilder {
  constructor(base = []) {
    this.important = [EditorState.lineSeparator.of("\n")];
    this.base = [...base];
    this.extensions = ExtensionBuilder.defaultPlugins();
  }

  static minimalSetup() {
    return new ExtensionBuilder([
      highlightSpecialChars(),
      drawSelection(),
      syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
      keymap.of([...defaultKeymap]),
    ]);
  }

  static basicSetup() {
    return new ExtensionBuilder([
      lineNumbers(),
      highlightActiveLineGutter(),
      highlightSpecialChars(),
      foldGutter(),
      drawSelection(),
      dropCursor(),
      EditorState.allowMultipleSelections.of(true),
      indentOnInput(),
      syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
      bracketMatching(),
      autocompletion(),
      rectangularSelection(),
      crosshairCursor(),
      highlightActiveLine(),
      highlightSelectionMatches(),
      keymap.of([...defaultKeymap, ...historyKeymap, ...searchKeymap, ...foldKeymap, ...completionKeymap, ...lintKeymap]),
    ]);
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
      markdown({ codeLanguages: this.codeLanguage, addKeymap: false }),
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
    this.extensions.push(
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
    this.extensions.push(syncPreviewWithCursor(lineMap, preview, lastTyped));
    return this;
  }

  useCursorIndicator({ lineMap, preview }) {
    this.extensions.push(cursorIndicator(lineMap, preview));
    return this;
  }

  /**
   * @param {{ collabClient: CollaborationClient, editorView: EditorView }}
   */
  useCollaboration({ collabClient, editorView }) {
    const collab = yCollab(collabClient.ytext, collabClient.provider.awareness, { undoManager: collabClient.undoManager });
    collab[1] = ySync;
    this.extensions.push(collab);

    if (collabClient.undoManager) {
      collabClient.undoManager.on("stack-item-added", (event) => {
        event.stackItem.meta.set("cursor-location", getRelativeCursorLocation(editorView.value));
      });
      collabClient.undoManager.on("stack-item-popped", (event) => {
        restoreCursorLocation(editorView.value, event.stackItem.meta.get("cursor-location"));
      });

      this.extensions.push(
        keymap.of([
          { key: "Mod-z", run: () => collabClient.undoManager.undo(), preventDefault: true },
          { key: "Mod-y", run: () => collabClient.undoManager.redo(), preventDefault: true },
          { key: "Mod-Z", run: () => collabClient.undoManager.redo(), preventDefault: true },
        ]),
      );
    }
    return this;
  }

  useSuggestionPopup({ ycomments, editorMountpoint }) {
    this.extensions.push(EditorView.updateListener.of((update) => suggestionPopup(update, ycomments, editorMountpoint)));
    return this;
  }

  // This is added due to a bug with Chrome and Codemirror, where folding a section will sometimes scroll to that section.
  useFixFoldingScroll(focusScroll) {
    this.extensions.push(
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
    this.extensions.push(
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
  for (let pos = 0; pos < state.doc.length; ) {
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
