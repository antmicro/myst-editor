import { HighlightStyle, syntaxHighlighting, syntaxTree } from "@codemirror/language";
import { TextManager } from "../text";
import { tags } from "@lezer/highlight";
import { EditorView } from "codemirror";
import { Decoration, ViewPlugin, WidgetType } from "@codemirror/view";
import { RangeSet, StateField } from "@codemirror/state";

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
const markdownTheme = EditorView.theme({
  "&": { fontSize: "16px" },
  ".cm-inline-bullet *": { display: "none" },
});

const tokenElement = ["InlineCode", "Emphasis", "StrongEmphasis", "FencedCode", "Link", "ListItem"];
const tokenHidden = ["HardBreak", "LinkMark", "EmphasisMark", "URL"];
const decorationHidden = Decoration.replace({});
const decorationBullet = Decoration.mark({ class: "cm-inline-bullet" });
const nodeInSelection = (state, node) =>
  state.selection.ranges.some(
    (r) => (r.from >= node.from && r.from <= node.to) || (r.to >= node.from && r.to <= node.to) || (node.from >= r.from && node.to <= r.to),
  );

const renderedNodes = ["Table", "Blockquote", "FencedCode", "Image"];
class RenderedMarkdownWidget extends WidgetType {
  constructor(src, textManager) {
    super();
    this.src = src;
    this.rendered = textManager.md.peek().render(src);
  }

  eq(widget) {
    return this.src === widget.rsc;
  }

  toDOM() {
    const content = document.createElement("div");
    content.setAttribute("contenteditable", "false");
    content.className = "cm-inline-rendered-md";
    content.innerHTML = this.rendered;
    return content;
  }

  ignoreEvent() {
    return false;
  }
}

function replaceMd(state, textManager) {
  const decorations = [];

  // If possible we should only render blocks in view
  syntaxTree(state).iterate({
    enter(node) {
      if (!renderedNodes.includes(node.name)) return;
      if (nodeInSelection(state, node)) return false;

      const src = state.doc.sliceString(node.from, node.to);
      const decoration = Decoration.replace({
        widget: new RenderedMarkdownWidget(src, textManager),
        block: true,
      });

      decorations.push(decoration.range(node.from, node.to));
    },
  });

  return decorations;
}

const renderMdInline = (textManager) =>
  StateField.define({
    create(state) {
      return RangeSet.of(replaceMd(state, textManager), true);
    },

    update(_, transaction) {
      return RangeSet.of(replaceMd(transaction.state, textManager), true);
    },

    provide(field) {
      return EditorView.decorations.from(field);
    },
  });

export const inlinePreview = (/** @type {TextManager} */ text) =>
  ViewPlugin.fromClass(
    class {
      constructor(view) {
        this.decorations = this.process(view);
      }

      update(update) {
        if (update.docChanged || update.viewportChanged || update.selectionSet) this.decorations = this.process(update.view);
      }

      process(/** @type {EditorView} */ view) {
        const widgets = [];

        for (const { from, to } of view.visibleRanges) {
          syntaxTree(view.state).iterate({
            from,
            to,
            enter(node) {
              if ((node.name.startsWith("ATXHeading") || tokenElement.includes(node.name)) && nodeInSelection(view.state, node)) {
                return false;
              }

              if (node.name === "ListMark" && node.matchContext(["BulletList", "ListItem"]) && !nodeInSelection(view.state, node)) {
                widgets.push(decorationBullet.range(node.from, node.to));
              }

              if (node.name === "HeaderMark") {
                widgets.push(decorationHidden.range(node.from, node.to + 1));
              }

              if (tokenHidden.includes(node.name)) {
                widgets.push(decorationHidden.range(node.from, node.to));
              }
            },
          });
        }

        return Decoration.set(widgets);
      }
    },
    {
      provide: () => [syntaxHighlighting(markdownHighlightStyle), markdownTheme, renderMdInline(text)],
      decorations: (v) => v.decorations,
      eventHandlers: {
        mousedown({ target }, view) {
          if (target instanceof Element && target.matches(".cm-inline-rendered-md *")) {
            view.dispatch({ selection: { anchor: view.posAtDOM(target) } });
          }
        },
      },
    },
  );
