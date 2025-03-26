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
  ":is(.cm-widgetBuffer:has(+ .cm-inline-rendered-md), .cm-inline-rendered-md + .cm-widgetBuffer)": { display: "none" },
  ".cm-inline-ordered-list-marker *": { color: "black !important" },
});

const tokenElement = ["InlineCode", "Emphasis", "StrongEmphasis", "FencedCode", "Link", "Image"];
const tokenHidden = ["HardBreak", "LinkMark", "EmphasisMark", "URL"];
const decorationHidden = Decoration.replace({});
const decorationBullet = Decoration.mark({ class: "cm-inline-bullet" });
const decorationOrderedListNum = Decoration.mark({ class: "cm-inline-ordered-list-marker" });
const nodeInSelection = (state, node) =>
  state.selection.ranges.some(
    (r) => (r.from >= node.from && r.from <= node.to) || (r.to >= node.from && r.to <= node.to) || (node.from >= r.from && node.to <= r.to),
  );

const renderedBlockNodes = ["Table", "Blockquote", "FencedCode", "Image"];
const renderedInlineNodes = ["Link", "InlineCode"];
class RenderedMarkdownWidget extends WidgetType {
  constructor(src, textManager, isBlock) {
    super();
    this.src = src;
    this.textManager = textManager;
    this.isBlock = isBlock;
  }

  eq(widget) {
    return this.src === widget.rsc;
  }

  toDOM() {
    const content = document.createElement(this.isBlock ? "div" : "span");
    content.setAttribute("contenteditable", "false");
    content.className = "cm-inline-rendered-md";
    content.innerHTML = this.isBlock ? this.textManager.md.peek().render(this.src) : this.textManager.md.peek().renderInline(this.src);
    return content;
  }

  ignoreEvent(ev) {
    return ev.type === "mousedown" && ev.ctrlKey;
  }
}

function replaceMd(state, textManager) {
  const decorations = [];

  // If possible we should only render blocks in view
  syntaxTree(state).iterate({
    enter(node) {
      const isBlock = renderedBlockNodes.includes(node.name);
      if (!isBlock && !renderedInlineNodes.includes(node.name)) return;
      if (nodeInSelection(state, node)) return false;

      const line = state.doc.lineAt(node.from);
      const from = isBlock ? line.from : node.from;
      const src = state.doc.sliceString(from, node.to);
      const decoration = Decoration.replace({
        widget: new RenderedMarkdownWidget(src, textManager, isBlock),
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

              if (node.name === "ListMark" && node.matchContext(["OrderedList", "ListItem"])) {
                widgets.push(decorationOrderedListNum.range(node.from, node.to));
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
        mousedown(ev, view) {
          if (ev.target instanceof Element && ev.target.matches(".cm-inline-rendered-md *")) {
            ev.preventDefault();
            view.dispatch({ selection: { anchor: view.posAtDOM(ev.target) } });
          }
        },
      },
    },
  );
