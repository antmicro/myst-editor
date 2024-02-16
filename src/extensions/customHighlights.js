import { Decoration, EditorView, ViewPlugin, ViewUpdate } from "@codemirror/view"
import { RangeSetBuilder } from "@codemirror/state"

const defaultDecorationClass = "cm-link"

const defaultHighlights = [
  { // Highlight `text in backticks (monospace)`
    target: /`[^`\n]+`/g,
    cssClass: "cm-mono"
  }
]

function buildDecorations(view, highlights) {
  const builder = new RangeSetBuilder();
  const cmText = view.state.doc.toString();

  highlights
    .flatMap(hl =>
      [...cmText.matchAll(hl.target)].map(match => ({ match, hl }))
    )
    .sort((a, b) => a.match.index - b.match.index)
    .forEach(({ hl, match }) =>
      builder.add(
        match.index,
        match.index + match[0].length,
        hl.cssClass
          ? Decoration.mark({ class: hl.cssClass })
          : Decoration.mark({ class: defaultDecorationClass })
      )
    )

  return builder.finish()
}

/** 
 * Returns an extension which will apply `cssClass` to all matches of `target` regex.
 * 
 * @param {{target: RegExp, cssClass: string}[]} highlights A list of highlights to apply.
 * */
const customHighlighter = (highlights) => {
  if (!highlights) highlights = []

  const allHighlights = highlights.concat(defaultHighlights)

  return ViewPlugin.fromClass(class {
    constructor(/** @type {EditorView} */ view) {
      this.decorations = buildDecorations(view, allHighlights);
    }

    update(/** @type {ViewUpdate} */ update) {
      if (update.docChanged || update.viewportChanged)
        this.decorations = buildDecorations(update.view, allHighlights);
    }
  }, {
    decorations: v => v.decorations
  })
}

export {
  customHighlighter
}
