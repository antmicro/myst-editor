import { Annotation, EditorState, MapMode, StateField } from "@codemirror/state";
import { syntaxTree } from "@codemirror/language";
import { EditorView } from "codemirror";
import { linter, setDiagnosticsEffect } from "@codemirror/lint";
import { hoverTooltip, showTooltip } from "@codemirror/view";

const subEditorUpdate = Annotation.define();

const codeBlocksSubeditors = (extensions, editorView, tooltipSources) =>
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
            return false;
          }
          return true;
        });
      value.editors.forEach((e) => {
        const startLine = tr.state.doc.lineAt(e.from);
        const endLine = tr.state.doc.lineAt(e.to);
        const contents = tr.state.doc.slice(startLine.to + 1, endLine.from - 1).toString();
        if (contents != e.editor.state.doc.toString()) {
          e.editor.dispatch({ changes: { from: 0, to: e.editor.state.doc.length, insert: contents } });
        }
      });

      // detect new editors
      const tree = syntaxTree(tr.state);
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
            lang: lang,
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
                ],
              }),
            }),
          });

          return false;
        },
      });

      return value;
    },
    provide(field) {
      return [
        linter(
          (view) => {
            const subeditors = view.state.field(field);
            const diagnostics = {};
            for (const id in subeditors.diagnostics) {
              const editor = subeditors.editors.find((e) => e.id == id);
              const contentFrom = view.state.doc.lineAt(editor.from).to + 1;
              diagnostics[id] = subeditors.diagnostics[id].map((d) => ({ ...d, from: d.from + contentFrom, to: d.to + contentFrom }));
            }
            return Object.values(diagnostics).flat();
          },
          {
            needsRefresh: (u) => {
              return u.transactions.some((t) => t.annotation(subEditorUpdate));
            },
          },
        ),
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
      ];
    },
  });

export const codeBlockExtensions = ({ extensions, editorView, tooltipSources }) => [codeBlocksSubeditors(extensions, editorView, tooltipSources)];
