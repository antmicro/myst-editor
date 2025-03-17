import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { TextManager } from "../text";
import { tags } from "@lezer/highlight";

export const inlinePreview = (/** @type {TextManager} */ text) => [syntaxHighlighting(markdownHighlightStyle)];

const previewFont = "Lato";
const markdownHighlightStyle = HighlightStyle.define([
  { tag: tags.heading1, fontWeight: "bold", fontFamily: previewFont, fontSize: "32px" },
  { tag: tags.heading2, fontWeight: "bold", fontFamily: previewFont, fontSize: "28px" },
  { tag: tags.heading3, fontWeight: "bold", fontFamily: previewFont, fontSize: "24px" },
  { tag: tags.heading4, fontWeight: "bold", fontFamily: previewFont, fontSize: "22px" },
  { tag: tags.link, fontFamily: previewFont, textDecoration: "underline", color: "blue" },
  { tag: tags.emphasis, fontFamily: previewFont, fontStyle: "italic" },
  { tag: tags.strong, fontFamily: previewFont, fontWeight: "bold" },
  { tag: tags.monospace, fontFamily: "monospace" },
  { tag: tags.content, fontFamily: previewFont, fontSize: "16px" },
  { tag: tags.meta, color: "darkgrey" },
]);
