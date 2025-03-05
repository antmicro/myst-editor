import { Annotation, EditorState, Facet, MapMode, Prec, StateField } from "@codemirror/state";
import { ensureSyntaxTree, syntaxTree } from "@codemirror/language";
import { EditorView } from "codemirror";
import { setDiagnostics, setDiagnosticsEffect } from "@codemirror/lint";
import { hoverTooltip, keymap } from "@codemirror/view";
import { acceptCompletion, autocompletion, CompletionContext } from "@codemirror/autocomplete";

const subEditorUpdate = Annotation.define();

export const subEditorId = Facet.define();

const codeBlocksSubeditors = (extensions, editorView, tooltipSources = {}, completionSources = [], linter) =>
  StateField.define({
    create() {
      return { extensions, editors: [], diagnostics: {}, editorView };
    },
    update(value, tr) {
      if (!tr.docChanged && !tr.reconfigured) return value;

      // update editors
      value.editors = value.editors
        .map((e) => {
          const from = tr.changes.mapPos(e.from, 1, MapMode.TrackDel);
          const to = tr.changes.mapPos(e.to, -1, MapMode.TrackDel);
          return { ...e, from, to };
        })
        .filter((e) => {
          if (e.from == null || e.to == null) {
            e.editor.destroy();
            delete value.diagnostics[e.id];
            return false;
          }
          return true;
        });
      value.editors.forEach((e) => {
        const startLine = tr.state.doc.lineAt(e.from);
        const endLine = tr.state.doc.lineAt(e.to);
        const contents = tr.state.doc.slice(startLine.to + 1, endLine.from - 1).toString();
        if (contents != e.editor.state.doc.toString()) {
          linter.value = { ...linter.peek(), status: "pending" };
          e.editor.dispatch({ changes: { from: 0, to: e.editor.state.doc.length, insert: contents } });
        }
      });

      // detect new editors
      let tree;
      if (tr.reconfigured) {
        tree = ensureSyntaxTree(tr.state, tr.state.doc.length, 5000);
      } else {
        tree = syntaxTree(tr.state);
      }
      tree.iterate({
        enter(ref) {
          if (ref.name !== "FencedCode") return true;

          if (value.editors.some((e) => e.from == ref.from && e.to == ref.to)) return false;
          const startLine = tr.state.doc.lineAt(ref.from);
          const lang = startLine.text.trim().replace(/[`~:]+/, "");
          if (!(lang in value.extensions)) return false;

          const endLine = tr.state.doc.lineAt(ref.to);
          const contents = tr.state.doc.slice(startLine.to + 1, endLine.from - 1).toString();

          const id = crypto.randomUUID();
          value.editors.push({
            from: ref.from,
            to: ref.to,
            id,
            lang,
            editor: new EditorView({
              state: EditorState.create({
                doc: contents,
                extensions: [
                  ...value.extensions[lang],
                  EditorView.updateListener.of((u) => {
                    let diagnostics = u.transactions[0].effects.find((e) => e.is(setDiagnosticsEffect))?.value;
                    if (!diagnostics) return;
                    value.diagnostics[id] = diagnostics;
                    editorView.peek().dispatch({ annotations: subEditorUpdate.of(true) });
                  }),
                  subEditorId.of(id),
                ],
              }),
            }),
          });
          linter.value = { ...linter.peek(), status: "pending" };

          return false;
        },
      });

      return value;
    },
    provide(field) {
      return [
        EditorView.updateListener.of((u) => {
          if (!u.docChanged && !u.transactions.some((t) => t.annotation(subEditorUpdate))) return;
          const subeditors = u.view.state.field(field);

          if (subeditors.editors.length == 0 && linter.peek().status != "disabled") {
            linter.value = { stauts: "disabled", diagnostics: [] };
            u.view.dispatch(setDiagnostics(u.state, []));
            return;
          }

          let changeInSubEditor = false;
          u.changes.iterChangedRanges((_, __, from, to) => {
            if (subeditors.editors.some((e) => from > e.from && to < e.to)) {
              changeInSubEditor = true;
            }
          });
          if (changeInSubEditor) return;
          const diagnostics = {};

          for (const id in subeditors.diagnostics) {
            const editor = subeditors.editors.find((e) => e.id == id);
            const contentFrom = u.view.state.doc.lineAt(editor.from).to + 1;
            diagnostics[id] = subeditors.diagnostics[id].map((d) => ({ ...d, from: d.from + contentFrom, to: d.to + contentFrom }));
          }
          u.view.dispatch(setDiagnostics(u.state, Object.values(diagnostics).flat()));
        }),
        EditorView.updateListener.of((u) => {
          let diagnostics = u.transactions[0]?.effects?.find?.((e) => e.is(setDiagnosticsEffect))?.value;
          if (diagnostics && u.view.state.field(field).editors.length != 0) linter.value = { status: "finished", diagnostics };
        }),
        hoverTooltip(async (view, pos, side) => {
          const subeditors = view.state.field(field);
          for (const subeditor of subeditors.editors) {
            if (pos < subeditor.from || pos > subeditor.to) continue;
            const contentFrom = view.state.doc.lineAt(subeditor.from).to + 1;
            const mappedPos = pos - contentFrom;
            const tooltip = await tooltipSources[subeditor.lang]?.doHover?.(subeditor.editor, mappedPos, side);
            if (!tooltip) return;
            return { ...tooltip, pos: tooltip.pos + contentFrom, end: tooltip.end + contentFrom };
          }
        }),
        autocompletion({
          icons: false,
        }),
        completionSources.map((src) =>
          src.languageData.of({
            autocomplete: async (/** @type {CompletionContext} */ ctx) => {
              const subeditors = ctx.view.state.field(field);
              for (const subeditor of subeditors.editors) {
                if (ctx.pos < subeditor.from || ctx.pos > subeditor.to) continue;
                const contentFrom = ctx.view.state.doc.lineAt(subeditor.from).to + 1;
                const innerCtx = new CompletionContext(subeditor.editor.state, ctx.pos - contentFrom, ctx.explicit, subeditor.editor);
                const completion = await src.source.doComplete(innerCtx);
                if (!completion) return null;
                return { ...completion, from: completion.from + contentFrom, to: completion.to + contentFrom };
              }
            },
          }),
        ),
      ];
    },
  });

export const codeBlockExtensions = ({ extensions, editorView, tooltipSources, completionSources, linter }) => [
  codeBlocksSubeditors(extensions, editorView, tooltipSources, completionSources, linter),
  Prec.high(keymap.of([{ key: "Tab", run: (v) => acceptCompletion(v), preventDefault: true }])),
];
