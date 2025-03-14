import { EditorState, RangeSetBuilder } from "@codemirror/state";
import { TextManager } from "../text";
import { Decoration, EditorView, ViewPlugin, ViewUpdate, WidgetType } from "@codemirror/view";

export const inlinePreview = (/** @type {TextManager} */ text) =>
  ViewPlugin.fromClass(
    class {
      constructor(/** @type {EditorView} */ view) {
        this.view = view;
        this.decorations = this.buildDecorations();
      }

      update(/** @type {ViewUpdate} */ update) {
        if (update.selectionSet || update.viewportChanged || update.docChanged) {
          this.decorations = this.buildDecorations();
        }
      }

      buildDecorations() {
        const builder = new RangeSetBuilder();

        // Prepare ranges of lines to render
        let visibleLines = this.view.visibleRanges.map((r) => this.rangeToLines(r));
        const selectionLines = this.view.state.selection.ranges.map((r) => this.rangeToLines(r));
        visibleLines = this.splitVisibleLines(visibleLines, selectionLines);

        for (const visibleSection of visibleLines) {
          const from = this.view.state.doc.line(visibleSection.fromLine).from;
          const to = this.view.state.doc.line(visibleSection.toLine).to;
          const sectionText = this.view.state.doc.sliceString(from, to);
          builder.add(
            from,
            to,
            Decoration.replace({
              widget: new RenderedSection({ text: sectionText, md: text.md.value }),
            }),
          );
        }

        return builder.finish();
      }

      rangeToLines(range) {
        return {
          fromLine: this.view.state.doc.lineAt(range.from).number,
          toLine: this.view.state.doc.lineAt(range.to).number,
        };
      }

      splitVisibleLines(visibleLines, selectionLines) {
        let result = [];

        visibleLines.forEach((visible) => {
          let start = visible.fromLine;
          let end = visible.toLine;

          selectionLines.forEach((selection) => {
            if (selection.toLine < start || selection.fromLine > end) {
              return;
            }

            if (selection.fromLine <= end && selection.toLine >= start) {
              if (selection.fromLine <= start) {
                start = selection.toLine + 1;
              } else if (selection.toLine >= end) {
                end = selection.fromLine - 1;
              }
            }
          });

          if (start <= end) {
            result.push({ fromLine: start, toLine: end });
          }
        });

        return result;
      }
    },
    {
      decorations: (v) => v.decorations,
    },
  );

class RenderedSection extends WidgetType {
  constructor({ text, md }) {
    super();
    this.text = text;
    this.md = md;
  }

  toDOM() {
    const container = document.createElement("div");
    container.innerHTML = this.md.render(this.text);
    return container;
  }
}
