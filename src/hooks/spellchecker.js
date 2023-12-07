import { Decoration, EditorView, ViewPlugin, ViewUpdate } from "@codemirror/view"
import { Facet, RangeSetBuilder } from "@codemirror/state"
import Typo from "typo-js";

// Defines a configurable field in the CodeMirror
const dictionary = Facet.define({
  combine: vals => vals[vals.length - 1]
})

// Class which will be applied to misspelled words
const errorHighlight = Decoration.mark({ class: "cm-error" });

function doSpellcheck(/** @type {EditorView} */ view) {
  const builder = new RangeSetBuilder();
  const dict = view.state.facet(dictionary)

  view.state.doc
    .toString()
    .replaceAll(
      /\w+/g,
      (word, pos) => !dict.check(word) && builder.add(pos, pos + word.length, errorHighlight)
    );

  return builder.finish()
}

const spellcheckExtension = ViewPlugin.fromClass(class {
  constructor(/** @type {EditorView} */ view) {
    this.decorations = doSpellcheck(view);
  }

  update(/** @type {ViewUpdate} */ update) {    
    if (update.docChanged || update.viewportChanged)
      this.decorations = doSpellcheck(update.view);
  }
}, {
  decorations: v => v.decorations
})

export {
  dictionary,
  spellcheckExtension
}

export default function spellcheck(opts) {
  if (!opts) return [];

  let { dict = "en_US", dictionaryPath = "/dictionaries" } = opts;
  
  return [
    dictionary.of(new Typo(dict, null, null, { dictionaryPath })),
    spellcheckExtension
  ]
}
