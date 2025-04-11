import { Decoration, ViewPlugin } from "@codemirror/view";

const lineDeco = Decoration.line({ class: "cm-activeLine" });

/** Modified version of https://github.com/codemirror/view/blob/94748942306252267fb74be60209f1476b7432a3/src/active-line.ts#L14 */
export const highlightFocusedActiveLine = ViewPlugin.fromClass(
  class {
    constructor(view) {
      this.decorations = this.getDeco(view);
    }

    update(update) {
      if (update.docChanged || update.selectionSet || update.focusChanged) this.decorations = this.getDeco(update.view);
    }

    getDeco(view) {
      if (!view.hasFocus) return Decoration.set([]);

      let lastLineStart = -1,
        deco = [];
      for (let r of view.state.selection.ranges) {
        let line = view.lineBlockAt(r.head);
        if (line.from > lastLineStart) {
          deco.push(lineDeco.range(line.from));
          lastLineStart = line.from;
        }
      }
      return Decoration.set(deco);
    }
  },
  {
    decorations: (v) => v.decorations,
  },
);
