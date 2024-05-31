import { YComments } from "./ycomments";
import { Facet, StateEffect } from "@codemirror/state";

/** @type {Facet<YComments, YComments>} */
const ycommentsFacet = Facet.define({
  combine: (values) => values[values.length - 1],
  static: true,
});

/** @type {StateEffect<null>} */
const updateShownComments = StateEffect.define();

export { ycommentsFacet, updateShownComments };
