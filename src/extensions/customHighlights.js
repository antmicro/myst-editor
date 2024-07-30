import { Decoration, EditorView, ViewPlugin, ViewUpdate } from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/state";

const defaultDecorationClass = "cm-link";

const defaultHighlights = [
  {
    // Highlight `text in backticks (monospace)`
    target: /`[^`\n]+`/g,
    cssClass: "cm-mono",
  },
];

/** @param {EditorView} view */
function buildDecorations(view, highlights, modifyHighlight, positions) {
  let from = view.visibleRanges[0]?.from || 0;
  let to = view.visibleRanges[0]?.to || undefined;

  const builder = new RangeSetBuilder();
  const cmText = view.state.doc.sliceString(from, to);

  highlights
    .flatMap((hl) => {
      const text = !hl.id ? cmText : view.state.doc.line(parseInt(positions.get(hl.id))).text;
      const localFrom = !hl.id ? from : view.state.doc.line(parseInt(positions.get(hl.id))).from;
      return [...text.matchAll(hl.target)].map((match) => ({ match, hl: { ...hl, from: localFrom } }));
    })
    .sort((a, b) => a.hl.from + a.match.index - (b.hl.from + b.match.index))
    .forEach(({ hl, match }) => {
      let markParams = { class: defaultDecorationClass };
      if (hl.cssClass) {
        markParams.class = hl.cssClass;
      }
      if (modifyHighlight) {
        modifyHighlight({ builder, from: hl.from, match, hl, markParams, view });
      }

      builder.add(hl.from + match.index, hl.from + match.index + match[0].length, Decoration.mark(markParams));
    });

  return builder.finish();
}

/**
 * Returns an extension which will apply `cssClass` to all matches of `target` regex.
 *
 * @param {{target: RegExp, cssClass: string, lines: number[], replacement: string}[]} highlights A list of highlights to apply.
 * */
const customHighlighter = (highlights, modifyHighlight, positions) => {
  if (!highlights) highlights = [];

  const allHighlights = highlights.concat(defaultHighlights);
  return ViewPlugin.fromClass(
    class {
      constructor(/** @type {EditorView} */ view) {
        this.decorations = buildDecorations(view, allHighlights, modifyHighlight, positions);
      }

      update(/** @type {ViewUpdate} */ update) {
        if (update.docChanged || update.viewportChanged) {
          this.decorations = buildDecorations(update.view, allHighlights, modifyHighlight, positions);
        }
      }
    },
    {
      decorations: (v) => v.decorations,
    },
  );
};

export { customHighlighter };
