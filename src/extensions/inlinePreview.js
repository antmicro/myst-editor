import { highlightingFor, HighlightStyle, syntaxHighlighting, syntaxTree } from "@codemirror/language";
import { TextManager } from "../text";
import { getStyleTags, tags } from "@lezer/highlight";
import { EditorView } from "codemirror";
import { Decoration, ViewPlugin, WidgetType } from "@codemirror/view";
import { RangeSet, StateField } from "@codemirror/state";
import { findSoruceMappedPreviousElement } from "./syncDualPane";
import { getLineById } from "../markdown/markdownSourceMap";

export const inlinePreview = (/** @type {TextManager} */ text, options, editorView) => {
  const previewFont = "Lato";
  const baseFont = { fontFamily: previewFont, lineHeight: "1.3em" };
  const baseHeading = { fontWeight: "bold", lineHeight: 1.5, fontFamily: previewFont };
  const markdownHighlightStyle = HighlightStyle.define([
    { tag: tags.heading1, ...baseHeading, fontSize: "1.8em" },
    { tag: tags.heading2, ...baseHeading, fontSize: "1.5em" },
    { tag: tags.heading3, ...baseHeading, fontSize: "1.25em" },
    { tag: tags.heading4, ...baseHeading, fontSize: "1.15em" },
    { tag: [tags.link, tags.url], ...baseFont, textDecoration: "underline", color: "var(--blue-500)" },
    { tag: tags.macroName, ...baseFont, color: "var(--blue-500)" },
    { tag: tags.emphasis, ...baseFont, fontStyle: "italic" },
    { tag: tags.strong, ...baseFont, fontWeight: "bold" },
    { tag: [tags.monospace, tags.atom], ...baseFont, fontFamily: "monospace" },
    { tag: tags.content, ...baseFont },
    { tag: tags.meta, color: "darkgrey" },
  ]);
  const markdownTheme = EditorView.theme({
    "&": { fontSize: "16px" },
    ".cm-inline-bullet *": { display: "none" },
    ".cm-inline-ordered-list-marker *": { color: "black !important" },
    ":is(.cm-widgetBuffer:has(+ .inline-custom-styles), .inline-custom-styles + .cm-widgetBuffer)": { display: "none" },
  });

  const tokenElement = ["InlineCode", "Emphasis", "StrongEmphasis", "FencedCode", "Image", "Blockquote"];
  const tokenHidden = ["HardBreak", "EmphasisMark"];
  const decorationHidden = Decoration.replace({});
  const decorationOrderedListNum = Decoration.mark({ class: "cm-inline-ordered-list-marker" });
  const decorationMonospace = Decoration.mark({ class: "cm-inline-mono" });
  const nodeInSelection = (state, node) =>
    editorView.peek()?.hasFocus &&
    state.selection.ranges.some((r) => {
      const rFrom = state.doc.lineAt(r.from).number;
      const rTo = state.doc.lineAt(r.to).number;
      const nodeFrom = state.doc.lineAt(node.from).number;
      const nodeTo = state.doc.lineAt(node.to).number;
      return (rFrom >= nodeFrom && rFrom <= nodeTo) || (rTo >= nodeFrom && rTo <= nodeTo) || (nodeFrom >= rFrom && nodeTo <= rTo);
    });

  const renderedBlockNodes = ["Table", "Blockquote", "FencedCode", "Image", "Task"];
  const renderedInlineNodes = ["Link", "URL", "InlineCode", "Role", "Transform"];
  class RenderedMarkdownWidget extends WidgetType {
    constructor(src, isBlock, start, end, cssClasses = []) {
      super();
      this.src = src;
      this.isBlock = isBlock;
      this.start = start;
      this.end = end;
      this.cssClasses = cssClasses;
    }

    eq(widget) {
      return this.src === widget.src;
    }

    toDOM() {
      const content = document.createElement("span");
      content.className = "cm-inline-rendered-md";
      if (this.cssClasses.length > 0) {
        content.classList.add("inline-custom-styles");
      }
      this.cssClasses.flatMap((c) => c.split(" ")).forEach((c) => content.classList.add(c));
      const md = text.md.peek();

      for (let l = this.start; l <= this.end; l++) {
        text.lineMap.delete(l);
      }

      const render = (src) => (this.isBlock ? md.render(src, { lineMap: text.lineMap, startLine: this.start, chunkId: 0 }) : md.renderInline(src));
      content.innerHTML = render(this.src);
      return content;
    }

    ignoreEvent(ev) {
      return ev.type == "mousedown" && (options.onPreviewClick.peek()?.(ev) || ev.target.tagName == "A" || ev.target.parentNode?.tagName == "A");
    }
  }

  function replaceMd(state) {
    const decorations = [];

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
        const parent = node.node.parent.toTree();
        const tags = getStyleTags(parent)?.tags;
        const parentClass = parent.type.name.startsWith("ATXHeading") && tags ? highlightingFor(state, tags) : null;

        const decoration = Decoration.replace({
          widget: new RenderedMarkdownWidget(src, isBlock, lineFrom.number, lineTo.number, parentClass ? [parentClass] : []),
        });

        decorations.push(decoration.range(node.from, node.to));
      },
    });

    return decorations;
  }

  const renderMdInline = () =>
    StateField.define({
      create(state) {
        return RangeSet.of(replaceMd(state), true);
      },

      update(_, transaction) {
        return RangeSet.of(replaceMd(transaction.state), true);
      },

      provide(field) {
        return EditorView.decorations.from(field);
      },
    });

  return ViewPlugin.fromClass(
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
              if (node.name.startsWith("ATXHeading") && nodeInSelection(view.state, node)) return false;
              if ((node.name.startsWith("SetextHeading") || tokenElement.includes(node.name)) && nodeInSelection(view.state, node)) {
                const startLine = view.state.doc.lineAt(node.from);
                const endLine = view.state.doc.lineAt(node.to);
                widgets.push(decorationMonospace.range(startLine.from, endLine.to));
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
                const line = view.state.doc.lineAt(node.from);
                const monoCharWidth = 8.43333;
                const indentSize = 2;
                widgets.push(
                  Decoration.mark({
                    class: "cm-inline-bullet",
                    attributes: { style: `margin-left: ${level * monoCharWidth * indentSize}px;` },
                  }).range(line.from, node.to),
                );
              }

              if (node.name === "ListMark" && node.matchContext(["OrderedList", "ListItem"])) {
                widgets.push(decorationOrderedListNum.range(node.from, node.to));
              }

              if (node.name === "HeaderMark") {
                const parent = node.node.parent.type.name;
                // Hide the space between the HeaderMark and text in ATX headings
                const to = parent.startsWith("ATX") ? node.to + 1 : node.to;
                widgets.push(decorationHidden.range(node.from, to));
              }

              if (tokenHidden.includes(node.name)) {
                widgets.push(decorationHidden.range(node.from, node.to));
              }
            },
          });
        }

        if (editorView.peek()?.hasFocus) {
          view.state.selection.ranges.forEach((r) => {
            const startLine = view.state.doc.lineAt(r.from);
            const endLine = view.state.doc.lineAt(r.to);
            if (startLine.from != endLine.to) {
              widgets.push(decorationMonospace.range(startLine.from, endLine.to));
            }
          });
        }

        widgets.sort((w1, w2) => w1.from - w2.from);

        return Decoration.set(widgets);
      }
    },
    {
      provide: () => [syntaxHighlighting(markdownHighlightStyle), markdownTheme, renderMdInline()],
      decorations: (v) => v.decorations,
      eventHandlers: {
        mousedown(ev, view) {
          if (!(ev.target instanceof Element) || !ev.target.matches(".cm-inline-rendered-md *")) return;

          ev.preventDefault();
          if (ev.target.tagName == "INPUT") {
            // Toggle checkbox
            const line = view.state.doc.lineAt(view.posAtDOM(ev.target));
            const statusIdx = line.text.indexOf("[") + 1;
            const from = line.from + statusIdx;
            const to = from + 1;
            const current = line.text.slice(statusIdx, statusIdx + 1);
            const newStatus = current == " " ? "x" : " ";
            view.dispatch({ changes: { from, to, insert: newStatus } });
          } else {
            view.focus();
            let id = ev.target.getAttribute("data-line-id");
            let elem = ev.target;
            if (!id) {
              // check parents and siblings
              while (elem && elem.tagName !== "HTML-CHUNK") {
                const parent = elem.parentElement;
                [id, elem] = findSoruceMappedPreviousElement(elem);
                if (id) break;
                elem = parent;
              }
            }
            if (id) {
              const lineNumber = getLineById(text.lineMap, id);
              const line = view.state.doc.line(lineNumber);
              view.dispatch({ selection: { anchor: line.from } });
            } else {
              view.dispatch({ selection: { anchor: view.posAtDOM(ev.target) } });
            }
          }
        },
      },
    },
  );
};
