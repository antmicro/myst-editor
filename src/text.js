import { computed, effect, signal } from "@preact/signals";
import markdownIt from "markdown-it";
import markdownitDocutils, { directivesDefault } from "markdown-it-docutils";
import newDirectives from "./markdown/markdownDirectives";
import { markdownReplacer, useCustomDirectives, useCustomRoles } from "./markdown/markdownReplacer";
import markdownMermaid from "./markdown/markdownMermaid";
import markdownSourceMap from "./markdown/markdownSourceMap";
import { checkLinks } from "./markdown/markdownLinks";
import { colonFencedBlocks } from "./markdown/markdownFence";
import { markdownItMapUrls } from "./markdown/markdownUrlMapping";
import { backslashLineBreakPlugin } from "./markdown/markdownLineBreak";
import IMurMurHash from "imurmurhash";
import purify from "dompurify";
import { StateEffect } from "@codemirror/state";
import hljs from "highlight.js/lib/core";
import yamlHighlight from "highlight.js/lib/languages/yaml";
import { markdownCheckboxes } from "./markdown/markdownCheckboxes";
import { criticMarkup } from "./markdown/markdownCriticMarkup";
import { markdownFrontmatter } from "./markdown/markdownFrontmatter";

export const markdownUpdatedEffect = StateEffect.define();

hljs.registerLanguage("yaml", yamlHighlight);

/** This class stores the document text and renders the Markdown in the Preview */
export class TextManager {
  constructor({ initialText, editorView, cache, options, userSettings }) {
    this.text = signal(initialText.peek());
    this.lineMap = new Map();
    this.chunks = [];
    this.editorView = editorView;
    this.preview = signal(null);
    this.options = options;
    this.md = computed(() => {
      const md = markdownIt({
        breaks: true,
        linkify: true,
        html: true,
        highlight: (str, lang) => {
          if (lang && hljs.getLanguage(lang)) {
            try {
              const v = hljs.highlight(str, { language: lang }).value;
              return v;
            } catch (err) {
              console.error(`Error while highlighting ${lang}: ${err}`);
            }
            return md.utils.escapeHtml(str);
          }
        },
      })
        .use(markdownitDocutils, { directives: { ...directivesDefault, ...newDirectives } })
        .use(markdownReplacer(options.transforms.value, options.parent, cache.transform))
        .use(useCustomRoles(options.customRoles.value, options.parent, cache.transform))
        .use(useCustomDirectives(options.customDirectives.value, options.parent, cache.transform))
        .use(markdownMermaid, { lineMap: this.lineMap, parent: options.parent, theme: options.mermaidTheme.value })
        .use(markdownSourceMap)
        .use(checkLinks)
        .use(colonFencedBlocks)
        .use(markdownItMapUrls, options.mapUrl.value)
        .use(markdownCheckboxes)
        .use(criticMarkup)
        .use(markdownFrontmatter);
      if (options.backslashLineBreak.value) md.use(backslashLineBreakPlugin);
      userSettings.value.filter((s) => s.enabled && s.markdown).forEach((s) => md.use(s.markdown));

      // Customize detecting links
      md.linkify.set({ fuzzyLink: false });

      return md;
    });
    effect(() => this.renderText());
    effect(() => (window.myst_editor[options.id.value].text = this.text.value));
    effect(() => this.observePreview());
  }

  renderText(useCache = true, force = false) {
    const previewVisible = ["Both", "Preview"].includes(this.options.mode.value) || force;
    if (!this.preview.value || !this.editorView.value || !previewVisible) {
      this.lastMode = this.options.mode.value;
      return;
    }
    const newMode = this.lastMode && this.options.mode.value !== this.lastMode;
    const cache = (!this.lastMd || this.lastMd == this.md.value) && !newMode && useCache;
    const chunkLookup = cache ? this.chunks.reduce((lookup, chunk) => ({ ...lookup, [chunk.hash]: { html: chunk.html, oldId: chunk.id } }), {}) : {};
    const newChunks = this.splitTextIntoChunks(chunkLookup);

    if (this.chunks.length != newChunks.length || !cache) {
      // Render all chunks
      const toRemove = [...this.preview.value.childNodes].filter((c) => !c.classList || !c.classList.contains("cm-previewFocus"));
      toRemove.forEach((c) => this.preview.value.removeChild(c));
      this.preview.value.innerHTML += newChunks.map((c) => `<html-chunk id="html-chunk-${c.id}">${c.html}</html-chunk>`).join("");
    } else {
      newChunks
        .filter((newChunk, idx) => newChunk.hash !== this.chunks[idx].hash)
        .forEach((chunk) => (this.preview.value.querySelector(`html-chunk#html-chunk-${chunk.id}`).innerHTML = chunk.html));
    }

    this.chunks = newChunks;
    this.lastMd = this.md.value;
    this.lastMode = this.options.mode.value;
  }

  observePreview() {
    if (!this.preview.value) return;
    const imageObserver = new ResizeObserver(() => {
      // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver#observation_errors
      // Using this without requestAnimationFrame caused some observation errors while rendering
      requestAnimationFrame(() => this.editorView.value.dispatch({ effects: markdownUpdatedEffect.of(true) }));
    });
    const observer = new MutationObserver(() => {
      this.editorView.value.dispatch({ effects: markdownUpdatedEffect.of(true) });
      this.preview.value.querySelectorAll("img").forEach((i) => imageObserver.observe(i));
    });
    observer.observe(this.preview.value, { childList: true, subtree: true });

    return () => {
      imageObserver.disconnect();
      observer.disconnect();
    };
  }

  splitTextIntoChunks(chunkLookup = {}) {
    return this.text.value
      .split(/(?=\n#{1,3} )/g)
      .reduce((chunks, textChunk) => {
        const lastChunkIdx = chunks.length - 1;
        const lastChunk = chunks[lastChunkIdx];

        let startLine = 1;
        if (lastChunk) {
          if (lastChunkIdx == 0) startLine = lastChunk.startLine + lastChunk.text.split("\n").length;
          else startLine = lastChunk.startLine + lastChunk.text.trimLeft().split("\n").length;
        }
        const endLine = startLine + textChunk.trimStart().split("\n").length - 1;

        const fenceRegex = /^[`:~]{3}/gm;
        if (countOccurences(lastChunk?.text, fenceRegex) % 2 != 0) {
          chunks[lastChunkIdx] = { text: lastChunk.text + textChunk, startLine: lastChunk.startLine, endLine };
        } else {
          chunks.push({ text: textChunk, startLine, endLine });
        }
        return chunks;
      }, [])
      .map(({ text, startLine, endLine }, chunkId) => {
        // We need to take into account both the chunk content and position
        const hash = new IMurMurHash(text + chunkId.toString(), 42).result();

        // Clear source mappings for chunk we are rerendering
        if (!(hash in chunkLookup)) {
          for (let l = startLine; l <= endLine; l++) {
            this.lineMap.delete(l);
          }
        }

        const html =
          chunkLookup[hash]?.html || sanitize(this.md.value.render(text, { chunkId, startLine, lineMap: this.lineMap, view: this.editorView.value }));
        return { text, hash, id: chunkId, html, oldId: chunkLookup[hash]?.oldId };
      });
  }

  shiftLineMap(update) {
    if (update.startState.doc.lines === update.state.doc.lines) return;
    let shiftStart = 0;
    let shiftAmount = 0;
    update.changes.iterChangedRanges((fromA, toA, fromB, toB) => {
      const startLine = update.startState.doc.lineAt(fromA).number;
      const endLine = update.startState.doc.lineAt(toA).number;
      const startLineB = update.state.doc.lineAt(fromB).number;
      const endLineB = update.state.doc.lineAt(toB).number;

      shiftStart = endLine;
      if (startLine === endLine) {
        shiftAmount = endLineB - startLineB;
      } else {
        shiftAmount = -(endLine - startLine);
      }
    });

    const newMap = new Map(this.lineMap);
    for (const [line, id] of this.lineMap.entries()) {
      if (line < shiftStart) continue;
      if (id === newMap.get(line)) {
        newMap.delete(line);
      }
      newMap.set(line + shiftAmount, id);
    }
    this.lineMap = newMap;
  }

  async copy() {
    this.renderText(true, true);
    const html = this.chunks.map((c) => c.html).join("\n");
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    doc.querySelectorAll("[data-line-id]").forEach((n) => n.removeAttribute("data-line-id"));
    // This removes spans added for source mapping purposes.
    doc.querySelectorAll("span").forEach((n) => {
      if (n.attributes.length === 0) {
        n.insertAdjacentHTML("afterend", n.innerHTML);
        n.remove();
      }
    });
    doc.querySelectorAll("[data-remove]").forEach((n) => n.remove());
    const sanitized = doc.body.innerHTML;

    await navigator.clipboard.write([
      new ClipboardItem({
        "text/plain": new Blob([sanitized], { type: "text/plain" }),
        "text/html": new Blob([sanitized], { type: "text/html" }),
      }),
    ]);
  }
}

const countOccurences = (str, pattern) => (str?.match(pattern) || []).length;

export function sanitize(unsafeHTML) {
  return purify.sanitize(unsafeHTML, {
    // Taken from Mermaid JS settings: https://github.com/mermaid-js/mermaid/blob/dd0304387e85fc57a9ebb666f89ef788c012c2c5/packages/mermaid/src/mermaidAPI.ts#L50
    ADD_TAGS: ["foreignobject", "iframe"],
    ADD_ATTR: ["dominant-baseline", "target"],
  });
}
