import markdownitDocutils from "markdown-it-docutils";
import purify from "dompurify";
import markdownIt from "markdown-it";
import { markdownReplacer, useCustomRoles } from "./markdownReplacer";
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";
import IMurMurHash from "imurmurhash";
import markdownItMermaid from "@agoose77/markdown-it-mermaid";
import { backslashLineBreakPlugin } from "./markdownLineBreak";
import markdownSourceMap from "./markdownSourceMap";
import { ViewUpdate } from "@codemirror/view";

const countOccurences = (str, pattern) => (str?.match(pattern) || []).length;

const exposeText = (text) => () => {
  if (!window.myst_editor) {
    window.myst_editor = {};
  }
  window.myst_editor.text = text;
};

const copyHtmlAsRichText = (/** @type {string} */ txt) => {
  // remove data-source-line from the copied html
  const sanitizedText = txt.replace(/(?<=\<\S+) data-source-line="\d+"/g, "");

  const listener = (e) => {
    e.clipboardData.setData("text/html", sanitizedText);
    e.clipboardData.setData("text/plain", sanitizedText);
    e.preventDefault();
  };
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
};

/** @param {{preview: { current: Element } }} */
export const useText = ({ initialText, transforms, customRoles, preview, backslashLineBreak, parent }) => {
  const [text, setText] = useState(initialText);
  const [readyToRender, setReadyToRender] = useState(false);
  const [syncText, setSyncText] = useState(false);
  const [onSync, setOnSync] = useState({ action: (text) => {} });
  const lineMap = useRef(new Map());
  /**
   * Split the document into chunks and re-render only the chunks which were changed
   *
   * @type {[{ md: string, html: string }[], Dispatch<{newMarkdown: string, force: boolean }>]}
   */
  const [htmlChunks, updateHtmlChunks] = useReducer((oldChunks, { newMarkdown, force = false }) => {
    let htmlLookup = {};
    if (!force) {
      htmlLookup = oldChunks.reduce((lookup, { hash, html }) => {
        lookup[hash] = html;
        return lookup;
      }, {});
    }

    const newChunks = splitIntoChunks(newMarkdown, htmlLookup);

    if (newChunks.length !== oldChunks.length || force) {
      // We can't infer which chunks were modified, so we update the entire document
      preview.current.innerHTML = newChunks.map((c) => `<html-chunk id="html-chunk-${c.id}">` + c.html + "</html-chunk>").join("\n");
      return newChunks;
    }

    newChunks // Go through every modified chunk and update its content
      .filter((newChunk, idx) => newChunk.hash !== oldChunks[idx].hash)
      .forEach((chunk) => (preview.current.querySelector("html-chunk#html-chunk-" + chunk.id).innerHTML = chunk.html));

    return newChunks;
  }, []);

  const markdown = useMemo(() => {
    const md = markdownIt({ breaks: true, linkify: true })
      .use(markdownitDocutils)
      .use(markdownReplacer(transforms, parent))
      .use(useCustomRoles(customRoles, parent))
      .use(markdownItMermaid)
      .use(markdownSourceMap);
    if (backslashLineBreak) md.use(backslashLineBreakPlugin);
    return md;
  }, []);

  const shiftLineMap = useCallback((/** @type {ViewUpdate} */ update) => {
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

    const newMap = new Map(lineMap.current);
    for (const [line, id] of lineMap.current.entries()) {
      if (line < shiftStart) continue;
      if (id === newMap.get(line)) {
        newMap.delete(line);
      }
      newMap.set(line + shiftAmount, id);
    }
    lineMap.current = newMap;
  });

  /** Split and parse markdown into chunks of HTML. If `lookup` is not provided then every chunk will be parsed */
  const splitIntoChunks = useCallback(
    (newMarkdown, lookup = {}) =>
      newMarkdown
        .split(/(?=\n#{1,3} )/g) // Perform a split without removing the delimeter
        .reduce(
          // Check if a chunk has a non-closed code section. If yes - join this and the next chunk
          (chunks, newChunk) => {
            const lastChunkIdx = chunks.length - 1;
            const lastChunk = chunks[lastChunkIdx];
            /** Markdown-it gets passed small chunks of `newMarkdown` so when we get the line number of a token, it is relative to that chunk.
             * In order to get the line number relative to the whole document, we need to keep track of which line a chunk begins at.*/
            const startLine = !lastChunk ? 1 : lastChunk.startLine + lastChunk.md.trimLeft().split("\n").length;
            if (countOccurences(lastChunk?.md, /\n```/g) % 2 != 0) {
              chunks[lastChunkIdx] = { md: lastChunk.md + newChunk.md, startLine: lastChunk.startLine };
            } else {
              chunks.push({ md: newChunk, startLine });
            }
            return chunks;
          },
          [],
        )
        .map(({ md, startLine }, id) => {
          const hash = new IMurMurHash(md, 42).result();
          const html = lookup[hash] || purify.sanitize(markdown.render(md, { chunkId: id, startLine, lineMap }));
          return { md, hash, id, html };
        }),
    [markdown],
  );

  useEffect(() => readyToRender && updateHtmlChunks({ newMarkdown: text }), [readyToRender]);
  useEffect(exposeText(text), [text]);
  useEffect(() => {
    if (syncText) {
      onSync.action(text);
      setSyncText(false);
    }
  }, [syncText]);

  return {
    set(newMarkdown, update) {
      if (update) {
        shiftLineMap(update);
      }
      setText(newMarkdown);
      setTimeout(() => {
        try {
          updateHtmlChunks({ newMarkdown });
        } catch (e) {
          console.warn(e);
          updateHtmlChunks({ newMarkdown, force: true });
        }
      });
    },
    get() {
      return text;
    },
    sync() {
      setSyncText(true);
    },
    refresh() {
      updateHtmlChunks({ newMarkdown: window.myst_editor.text, force: true });
    },
    onSync(action) {
      setOnSync({ action });
    },
    readyToRender() {
      setReadyToRender(true);
    },
    copy() {
      copyHtmlAsRichText(
        splitIntoChunks(window.myst_editor.text)
          .map((c) => c.html)
          .join("\n"),
      );
    },
  };
};
