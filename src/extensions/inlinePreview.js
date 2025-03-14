import { EditorState, RangeSet, RangeSetBuilder, StateField } from "@codemirror/state";
import { TextManager } from "../text";
import { Decoration, EditorView, ViewPlugin, ViewUpdate, WidgetType } from "@codemirror/view";

export const inlinePreview = (/** @type {TextManager} */ text) =>
  StateField.define({
    create(state) {
      return RangeSet.of(buildDecorations(state, text));
    },
    update(decorations, tr) {
      if (tr.newSelection || tr.docChanged) {
        return RangeSet.of(buildDecorations(tr.state, text));
      } else {
        return decorations;
      }
    },
    provide(field) {
      return EditorView.decorations.from(field);
    },
  });

const buildDecorations = (/** @type {EditorState} */ state, text) => {
  let visibleLines = [{ fromLine: 1, toLine: state.doc.lines }];
  const selectionLines = state.selection.ranges.map((r) => rangeToLines(state, r));
  visibleLines = splitVisibleLines(visibleLines, selectionLines);

  return visibleLines.map((visibleSection) => {
    const from = state.doc.line(visibleSection.fromLine).from;
    const to = state.doc.line(visibleSection.toLine).to;
    const sectionText = state.doc.sliceString(from, to);
    const decoration = Decoration.replace({
      widget: new RenderedSection({ text: sectionText, md: text.md.value }),
    });
    return decoration.range(from, to);
  });
};

const rangeToLines = (state, range) => {
  return {
    fromLine: state.doc.lineAt(range.from).number,
    toLine: state.doc.lineAt(range.to).number,
  };
};

const splitVisibleLines = (visibleLines, selectionLines) => {
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
};

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
