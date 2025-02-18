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
  ViewPlugin,
} from "@codemirror/view";
import { EditorSelection, EditorState, Facet, Prec } from "@codemirror/state";
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
import { yaml, yamlLanguage } from "@codemirror/lang-yaml";
import { ySync } from "./collab";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { lintKeymap, setDiagnostics } from "@codemirror/lint";
import { CollaborationClient } from "../collaboration";
import { codeBlockExtensions, subEditorId } from "./codeBlockExtensions";
import { LanguageServerClient } from "codemirror-languageserver";
import YamlLSPWorker from "../lsp/yamlLSPWorker.js?worker";
import PostMessageWorkerTransport from "../lsp/messageTransport";
import markdownIt from "markdown-it";
import { CompletionItemKind, CompletionTriggerKind, FileChangeType } from "vscode-languageserver-protocol";

const getRelativeCursorLocation = (view) => {
  const { from } = view.state.selection.main;
  const line = view.state.doc.lineAt(from);
  return { line: line.number, ch: from - line.from };
};

const restoreCursorLocation = (view, location) => {
  if (location == undefined || location.line == undefined || location.ch == undefined) return;
  const lineNum = Math.min(view.state.doc.lines, location.line);
  const line = view.state.doc.line(lineNum);
  const pos = Math.min(view.state.doc.length, line.from + location.ch);
  view.dispatch({
    selection: { anchor: pos, head: pos },
    scrollIntoView: true,
  });
};

export const folded = (update) => update.transactions.some((t) => t.effects.some((e) => e.is(foldEffect) || e.is(unfoldEffect)));
export const collabClientFacet = Facet.define();

const tooltipRenderer = markdownIt();
const CompletionItemKindMap = Object.fromEntries(Object.entries(CompletionItemKind).map(([key, value]) => [value, key]));

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
    this.extensions.push(collabClientFacet.of(collabClient));

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

  useYamlSchema(schema, editorView, linter) {
    const yamlTransport = new PostMessageWorkerTransport(new YamlLSPWorker());
    const lspClient = new LanguageServerClient({
      transport: yamlTransport,
      rootUri: "file:///",
      workspaceFolders: null,
      languageId: "yaml",
      autoClose: true,
    });

    this.extensions.push(
      codeBlockExtensions({
        extensions: {
          yaml: [
            yaml(),
            ViewPlugin.fromClass(
              class {
                constructor(/** @type {EditorView} */ view) {
                  this.id = view.state.field(subEditorId)[0];
                  this.view = view;
                  this.version = 0;
                  lspClient.attachPlugin(this);
                  lspClient.initializePromise.then(() => {
                    lspClient.textDocumentDidOpen({
                      textDocument: {
                        uri: `file:///${this.id}.yaml`,
                        languageId: "yaml",
                        text: stateToYamlDoc(schema, view.state),
                        version: this.version,
                      },
                    });
                  });
                }

                update(update) {
                  if (!update.docChanged) return;
                  clearTimeout(this.changesTimeout);
                  this.changesTimeout = setTimeout(() => {
                    if (!lspClient.ready) return;
                    lspClient.textDocumentDidChange({
                      textDocument: { uri: `file:///${this.id}.yaml`, version: this.version++ },
                      contentChanges: [{ text: stateToYamlDoc(schema, update.state) }],
                    });
                  }, 200);
                }

                processNotification(notification) {
                  if (notification.method !== "textDocument/publishDiagnostics" || notification.params.uri !== `file:///${this.id}.yaml`) return;
                  const diag = notification.params.diagnostics.map((d) => ({
                    message: d.message,
                    source: d.source,
                    from: lspPosToCmPos(this.view.state, d.range.start),
                    to: lspPosToCmPos(this.view.state, d.range.end),
                    severity: lspSeverityToCm(d.severity),
                  }));
                  this.view.dispatch(setDiagnostics(this.view.state, diag));
                }
              },
            ),
          ],
        },
        editorView,
        tooltipSources: {
          yaml: {
            async doHover(view, pos) {
              if (!lspClient.ready || !lspClient.capabilities?.hoverProvider || pos < 0) return null;

              const id = view.state.field(subEditorId)[0];
              const result = await lspClient.textDocumentHover({
                textDocument: { uri: `file:///${id}.yaml` },
                position: cmPosToLspPos(view.state, pos),
              });
              if (!result) return null;

              const dom = document.createElement("div");
              dom.innerHTML = tooltipRenderer.render(result.contents.value);

              return {
                pos: lspPosToCmPos(view.state, result.range.start),
                end: lspPosToCmPos(view.state, result.range.end),
                create: () => ({ dom }),
                above: true,
              };
            },
          },
        },
        completionSources: [
          {
            languageData: yamlLanguage.data,
            source: {
              async doComplete(ctx) {
                if (!lspClient.ready) return;
                const id = ctx.state.field(subEditorId)[0];
                const completions = await lspClient.textDocumentCompletion({
                  textDocument: { uri: `file:///${id}.yaml` },
                  position: cmPosToLspPos(ctx.state, ctx.pos),
                });
                if (!completions || completions?.length === 0 || completions.items.length === 0) return;

                // Only show completions when at the end of a line
                const line = ctx.state.doc.lineAt(ctx.pos);
                if (ctx.pos !== line.to) return;

                const items = completions.items ?? completions;
                const token = ctx.matchBefore(/\w+/);
                const options = items
                  .map(({ detail, label, kind, textEdit, documentation }) => ({
                    label,
                    detail,
                    type: kind && CompletionItemKindMap[kind].toLowerCase(),
                    info: documentation?.toString(),
                    apply(view, _, from, to) {
                      const start = lspPosToCmPos(ctx.state, textEdit.range.start) + from - ctx.pos;
                      const startLine = view.state.doc.lineAt(start);
                      const text = textEdit.newText.replace("\n", "\n" + " ".repeat(start - startLine.from)).replace(/\${[0-9]+}/g, "");
                      view.dispatch({
                        changes: { from: start, to, insert: text },
                        selection: { anchor: start + text.length, head: start + text.length },
                      });
                    },
                  }))
                  .filter(({ type, label }) => type !== "class" && (!token || label.startsWith(token.text)));
                return { from: ctx.pos, to: ctx.pos, options, filter: false };
              },
            },
          },
        ],
        linter,
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

/** This is a workaround to pass the schema to the language server. The server schema file association options do not seem to work. */
const stateToYamlDoc = (schema, state) => `# yaml-language-server: $schema=${schema}\n${state.doc.toString()}`;

const cmPosToLspPos = (state, pos) => {
  const line = state.doc.lineAt(pos);
  return { line: line.number, character: pos - line.from };
};

const lspPosToCmPos = (state, pos) => {
  const line = state.doc.line(pos.line);
  return line.from + pos.character;
};

const lspSeverityToCm = (severityLevel) => {
  if (severityLevel === 2) return "error";
  if (severityLevel === 1) return "warning";
  if (severityLevel === 0) return "info";
  return "hint";
};
