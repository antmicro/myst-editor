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
  { tag: tags.url, ...baseFont, textDecoration: "underline", color: "var(--blue-500)" },
  { tag: tags.emphasis, ...baseFont, fontStyle: "italic" },
  { tag: tags.strong, ...baseFont, fontWeight: "bold" },
  { tag: tags.monospace, ...baseFont, fontFamily: "monospace" },
  { tag: tags.atom, ...baseFont, fontFamily: "monospace" },
  { tag: tags.content, ...baseFont },
  { tag: tags.meta, color: "darkgrey" },
]);
const markdownTheme = EditorView.theme({
  "&": { fontSize: "16px" },
  ".cm-inline-bullet *": { display: "none" },
  ":is(.cm-widgetBuffer:has(+ .cm-inline-rendered-md), .cm-inline-rendered-md + .cm-widgetBuffer)": { display: "none" },
  ".cm-inline-ordered-list-marker *": { color: "black !important" },
});

const tokenElement = ["InlineCode", "Emphasis", "StrongEmphasis", "FencedCode", "Image"];
const tokenHidden = ["HardBreak", "EmphasisMark"];
const decorationHidden = Decoration.replace({});
const decorationOrderedListNum = Decoration.mark({ class: "cm-inline-ordered-list-marker" });
const nodeInSelection = (state, node) =>
  state.selection.ranges.some(
    (r) => (r.from >= node.from && r.from <= node.to) || (r.to >= node.from && r.to <= node.to) || (node.from >= r.from && node.to <= r.to),
  );

const renderedBlockNodes = ["Table", "Blockquote", "FencedCode", "Image", "Task"];
const renderedInlineNodes = ["Link", "URL", "InlineCode", "Role"];
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
    return ev.type === "mousedown" && ev.ctrlKey && ev.target.tagName != "INPUT";
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

      const lineFrom = state.doc.lineAt(node.from);
      const lineTo = state.doc.lineAt(node.to);
      const isMultiline = isBlock && lineTo.number > lineFrom.number;
      const fromOffset = node.from - lineFrom.from;
      let src = state.doc.sliceString(node.from, node.to);
      if (isMultiline && fromOffset > 0) {
        src = src
          .split("\n")
          .map((line, i) => (i == 0 ? line : line.slice(fromOffset)))
          .join("\n");
      }

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
                const parents = [];
                let curr = node.node.parent;
                while (curr.name != "Document") {
                  parents.push(curr.name);
                  curr = curr.parent;
                }
                const level = parents.filter((p) => p == "BulletList").length - 1;
                widgets.push(
                  Decoration.mark({ class: "cm-inline-bullet", attributes: { style: `margin-left: ${level * 20}px;` } }).range(node.from, node.to),
                );
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
          if (!(ev.target instanceof Element) || !ev.target.matches(".cm-inline-rendered-md *")) return;

          ev.preventDefault();
          if (ev.target.tagName == "INPUT" && ev.ctrlKey) {
            // Toggle checkbox
            const line = view.state.doc.lineAt(view.posAtDOM(ev.target));
            const statusIdx = line.text.indexOf("[") + 1;
            const from = line.from + statusIdx;
            const to = from + 1;
            const current = line.text.slice(statusIdx, statusIdx + 1);
            const newStatus = current == " " ? "x" : " ";
            view.dispatch({ changes: { from, to, insert: newStatus } });
          } else {
            view.dispatch({ selection: { anchor: view.posAtDOM(ev.target) } });
          }
        },
      },
    },
  );
