import markdownIt from "markdown-it";
import YamlLSPWorker from "../lsp/yamlLSPWorker.js?worker";
import { yaml, yamlLanguage } from "@codemirror/lang-yaml";
import PostMessageWorkerTransport from "../lsp/messageTransport";
import { LanguageServerClient } from "codemirror-languageserver";
import { codeBlockExtensions, subEditorId } from "./codeBlockExtensions";
import { EditorView, ViewPlugin } from "@codemirror/view";
import { setDiagnostics } from "@codemirror/lint";
import { CompletionItemKind } from "vscode-languageserver-protocol";

export const yamlSchema = (schema, editorView, linter) => {
  const yamlTransport = new PostMessageWorkerTransport(new YamlLSPWorker());
  const lspClient = new LanguageServerClient({
    transport: yamlTransport,
    rootUri: "file:///",
    workspaceFolders: null,
    languageId: "yaml",
    autoClose: true,
  });

  return codeBlockExtensions({
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
                    uri: getUri(this.id),
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
                  textDocument: { uri: getUri(this.id), version: this.version++ },
                  contentChanges: [{ text: stateToYamlDoc(schema, update.state) }],
                });
              }, 200);
            }

            processNotification(notification) {
              if (notification.method !== "textDocument/publishDiagnostics" || notification.params.uri !== getUri(this.id)) return;
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
            textDocument: { uri: getUri(id) },
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
              textDocument: { uri: getUri(id) },
              position: cmPosToLspPos(ctx.state, ctx.pos),
            });
            if (!completions || completions?.length === 0 || completions.items.length === 0) return;

            // Only show completions when at the end of a line
            const line = ctx.state.doc.lineAt(ctx.pos);
            if (ctx.pos !== line.to) return;

            const items = completions.items ?? completions;
            const token = ctx.matchBefore(/^.*/m);
            const tokenSplit = token ? token.text.trimStart().split(": ") : null;
            const completionStart = token ? tokenSplit[tokenSplit.length - 1] : null;
            const property = !token || tokenSplit.length === 1;
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
              .filter(({ type, label }) => type !== "class" && (type !== "property" || property) && (!token || label.startsWith(completionStart)));
            return { from: ctx.pos, to: ctx.pos, options, filter: false };
          },
        },
      },
    ],
    linter,
  });
};

const tooltipRenderer = markdownIt();
const CompletionItemKindMap = Object.fromEntries(Object.entries(CompletionItemKind).map(([key, value]) => [value, key]));

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

const getUri = (filename) => `file:///${filename}.yaml`;
