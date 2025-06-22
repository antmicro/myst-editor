import { highlightingFor, HighlightStyle, syntaxHighlighting, syntaxTree } from "@codemirror/language";
import { sanitize, TextManager } from "../text";
import { getStyleTags, tags } from "@lezer/highlight";
import { EditorView } from "codemirror";
import { Decoration, ViewPlugin, ViewUpdate, WidgetType } from "@codemirror/view";
import { RangeSet, StateEffect, StateField } from "@codemirror/state";
import { findSoruceMappedPreviousElement } from "./syncDualPane";
import { getLineById } from "../markdown/markdownSourceMap";
import { criticMarkup } from "./criticMarkup";

export const inlinePreview = (/** @type {TextManager} */ text, options, editorView) => {
  const previewFont = "Lato";
  const baseFont = { fontFamily: previewFont, lineHeight: "1.3em" };
  const baseHeading = { fontWeight: "bold", lineHeight: 1.5, fontFamily: previewFont };
  const markdownHighlightStyle = HighlightStyle.define([
    { tag: tags.heading1, ...baseHeading, fontSize: "1.8em" },
    { tag: tags.heading2, ...baseHeading, fontSize: "1.5em" },
    { tag: tags.heading3, ...baseHeading, fontSize: "1.25em" },
    { tag: tags.heading4, ...baseHeading, fontSize: "1.15em" },
    { tag: [tags.link, tags.url], ...baseFont, textDecoration: "underline", color: "var(--accent-dark)" },
    { tag: tags.macroName, ...baseFont, color: "var(--accent-dark)" },
    { tag: tags.emphasis, ...baseFont, fontStyle: "italic" },
    { tag: tags.strong, ...baseFont, fontWeight: "bold" },
    { tag: [tags.monospace, tags.atom], ...baseFont, fontFamily: "monospace" },
    { tag: [tags.content], ...baseFont },
    { tag: tags.meta, color: "darkgrey" },
  ]);
  const markdownTheme = EditorView.theme({
    "&": { fontSize: "16px" },
    ".cm-inline-bullet *": { display: "none" },
    ".cm-inline-ordered-list-marker *": { display: "none" },
    ".cm-inline-indent": { display: "inline-block" },
    ".cm-inline-indent *": { display: "none" },
    ":is(.cm-widgetBuffer:has(+ .inline-custom-styles), .inline-custom-styles + .cm-widgetBuffer)": { display: "none" },
    ".cm-critic-meta": { display: "none" },
  });

  const tokenElement = ["InlineCode", "Emphasis", "StrongEmphasis", "FencedCode", "Image", "Blockquote"];
  const tokenHidden = ["HardBreak", "EmphasisMark"];
  const decorationHidden = Decoration.replace({});
  const decorationMonospace = Decoration.mark({ class: "cm-inline-mono" });
  const nodeInSuggestion = (state, node) => state.field(criticMarkup).suggestionRanges.some((r) => node.from >= r.from && node.to <= r.to);
  const nodeInSelection = (state, node) =>
    editorView.peek()?.hasFocus &&
    state.selection.ranges.some((r) => {
      const rFrom = state.doc.lineAt(r.from).number;
      const rTo = state.doc.lineAt(r.to).number;
      const nodeFrom = state.doc.lineAt(node.from).number;
      const nodeTo = state.doc.lineAt(node.to).number;
      return (rFrom >= nodeFrom && rFrom <= nodeTo) || (rTo >= nodeFrom && rTo <= nodeTo) || (nodeFrom >= rFrom && nodeTo <= rTo);
    });
  const nodeInMonospace = (...args) => nodeInSelection(...args) || nodeInSuggestion(...args);

  const focusEffect = StateEffect.define();

  const renderedBlockNodes = ["Table", "Blockquote", "FencedCode", "Image", "Checkbox", "HTMLBlock"];
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
      content.innerHTML = sanitize(render(this.src));
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
        if (nodeInMonospace(state, node)) return false;

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

      update(curr, transaction) {
        const focusChanged = transaction.effects.some((e) => e.is(focusEffect));
        const selectionChanged =
          transaction.startState.doc.lineAt(transaction.startState.selection.main.head).number !==
          transaction.state.doc.lineAt(transaction.state.selection.main.head).number;
        if (!focusChanged && !transaction.docChanged && !selectionChanged) return curr;
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

      update(/** @type {ViewUpdate} */ update) {
        if (update.docChanged || update.viewportChanged || update.selectionSet || update.focusChanged) this.decorations = this.process(update.view);
      }

      process(/** @type {EditorView} */ view) {
        const widgets = [];

        for (const { from, to } of view.visibleRanges) {
          syntaxTree(view.state).iterate({
            from,
            to,
            enter(node) {
              if (node.name.startsWith("ATXHeading") && nodeInMonospace(view.state, node)) return false;
              const elementToken = node.name.startsWith("SetextHeading") || tokenElement.includes(node.name);
              if ((elementToken && nodeInMonospace(view.state, node)) || node.name == "Frontmatter") {
                const startLine = view.state.doc.lineAt(node.from);
                const endLine = view.state.doc.lineAt(node.to);
                widgets.push(decorationMonospace.range(startLine.from, endLine.to));
                return false;
              }

              if (node.name === "ListMark" && node.matchContext(["BulletList", "ListItem"]) && !nodeInMonospace(view.state, node)) {
                widgets.push(
                  Decoration.mark({
                    class: "cm-inline-bullet",
                  }).range(node.from, node.to),
                );
              }

              if (node.name === "ListMark" && node.matchContext(["OrderedList", "ListItem"]) && !nodeInMonospace(view.state, node)) {
                // Get what list item number should this one have, this is to keep it consistent with standard markdown-it rendering
                const marks = node.node.parent.parent.getChildren("ListItem").flatMap((i) => i.getChildren("ListMark"));
                const base = parseInt(view.state.doc.sliceString(marks[0].from, marks[0].to));
                const num = marks.findIndex((m) => m.from == node.from) + base;
                widgets.push(
                  Decoration.mark({ class: "cm-inline-ordered-list-marker", attributes: { "data-item-num": `${num}.` } }).range(node.from, node.to),
                );
              }

              if (node.name === "HeaderMark") {
                const parent = node.node.parent.type.name;
                // Hide the space between the HeaderMark and text in ATX headings
                const to = parent.startsWith("ATX") ? node.to + 1 : node.to;
                const line = view.state.doc.lineAt(node.from);
                const headingText = line.text.slice(node.to - line.from).trim();
                if (parent.startsWith("ATX") && headingText.length == 0) {
                  console.warn(`Empty heading in inline mode, not rendering(line ${line.number}): "${line.text}"`);
                } else {
                  widgets.push(decorationHidden.range(node.from, to));
                }
              }

              if (tokenHidden.includes(node.name) && !nodeInMonospace(view.state, node)) {
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

          const { suggestionRanges } = view.state.field(criticMarkup);
          suggestionRanges.filter((r) => nodeInSelection(view.state, r)).forEach((r) => widgets.push(decorationMonospace.range(r.from, r.to)));
        }

        // Make all indenting same width as monospace text indent
        const selectionLines = editorView.peek()?.hasFocus
          ? new Set(
              view.state.selection.ranges.flatMap((r) => {
                const startLine = view.state.doc.lineAt(r.from).number;
                const endLine = view.state.doc.lineAt(r.to).number;
                return Array.from({ length: endLine - startLine + 1 }, (_, i) => i + startLine);
              }),
            )
          : new Set();
        for (const range of view.visibleRanges) {
          const start = view.state.doc.lineAt(range.from).number;
          const end = view.state.doc.lineAt(range.to).number;
          for (let i = start; i <= end; i++) {
            if (selectionLines.has(i)) continue;
            const line = view.state.doc.line(i);
            const indentLength = line.text.length - line.text.trimStart().length;
            // Empty line or no indent
            if (indentLength == line.text.length || indentLength == 0) continue;

            const monoCharWidth = 8.43333;
            widgets.push(
              Decoration.mark({ class: "cm-inline-indent", attributes: { style: `width: ${indentLength * monoCharWidth}px;` } }).range(
                line.from,
                line.from + indentLength,
              ),
            );
          }
        }

        widgets.sort((w1, w2) => w1.from - w2.from);

        return Decoration.set(widgets);
      }
    },
    {
      provide: () => [
        syntaxHighlighting(markdownHighlightStyle),
        markdownTheme,
        renderMdInline(),
        EditorView.focusChangeEffect.of((_, focus) => focusEffect.of(focus)),
      ],
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
