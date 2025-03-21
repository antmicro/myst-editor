import { HighlightStyle, syntaxHighlighting, syntaxTree } from "@codemirror/language";
import { TextManager } from "../text";
import { tags } from "@lezer/highlight";
import { EditorView } from "codemirror";
import { Decoration, ViewPlugin } from "@codemirror/view";

const previewFont = "Lato";
const baseFont = { fontFamily: previewFont, lineHeight: "1.3em" };
const baseHeading = { fontWeight: "bold", lineHeight: 1.5, fontFamily: previewFont };
const markdownHighlightStyle = HighlightStyle.define([
  { tag: tags.heading1, ...baseHeading, fontSize: "1.8em" },
  { tag: tags.heading2, ...baseHeading, fontSize: "1.5em" },
  { tag: tags.heading3, ...baseHeading, fontSize: "1.25em" },
  { tag: tags.heading4, ...baseHeading, fontSize: "1.15em" },
  { tag: tags.link, ...baseFont, textDecoration: "underline", color: "var(--blue-500)" },
  { tag: tags.emphasis, ...baseFont, fontStyle: "italic" },
  { tag: tags.strong, ...baseFont, fontWeight: "bold" },
  { tag: tags.monospace, ...baseFont, fontFamily: "monospace" },
  { tag: tags.content, ...baseFont },
  { tag: tags.meta, color: "darkgrey" },
]);
const markdownTheme = EditorView.theme({ "&": { fontSize: "16px" } });

const tokenElement = ["InlineCode", "Emphasis", "StrongEmphasis", "FencedCode", "Link"];
const tokenHidden = ["HardBreak", "LinkMark", "EmphasisMark", "URL"];
const decorationHidden = Decoration.replace({});
const decorationBullet = Decoration.mark({ class: "cm-inline-bullet" });

export const inlinePreview = (/** @type {TextManager} */ text) =>
  ViewPlugin.fromClass(
    class {
      constructor(view) {
        this.decorations = this.process(view);
      }

      update(update) {
        if (update.docChanged || update.viewportChanged || update.selectionSet) this.decorations = this.process(update.view);
      }

      process(view) {
        let widgets = [];
        let [cursor] = view.state.selection.ranges;

        for (let { from, to } of view.visibleRanges) {
          syntaxTree(view.state).iterate({
            from,
            to,
            enter(node) {
              if ((node.name.startsWith("ATXHeading") || tokenElement.includes(node.name)) && cursor.from >= node.from && cursor.to <= node.to)
                return false;

              if (
                node.name === "ListMark" &&
                node.matchContext(["BulletList", "ListItem"]) &&
                cursor.from != node.from &&
                cursor.from != node.from + 1
              )
                widgets.push(decorationBullet.range(node.from, node.to));

              if (node.name === "HeaderMark") widgets.push(decorationHidden.range(node.from, node.to + 1));

              if (tokenHidden.includes(node.name)) widgets.push(decorationHidden.range(node.from, node.to));
            },
          });
        }

        return Decoration.set(widgets);
      }
    },
    {
      provide: () => [syntaxHighlighting(markdownHighlightStyle), markdownTheme],
      decorations: (v) => v.decorations,
    },
  );
