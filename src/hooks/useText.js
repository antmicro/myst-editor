import markdownitDocutils from "markdown-it-docutils";
import purify from "dompurify";
import markdownIt from "markdown-it";
import { markdownReplacer, useCustomRoles } from "./markdownReplacer";
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "preact/hooks";
import IMurMurHash from "imurmurhash";

const countOccurences = (str, pattern) => (str?.match(pattern) || []).length;

const exposeText = (text) => () => {
  if (!window.myst_editor) {
    window.myst_editor = {};
  }
  window.myst_editor.text = text;
};

const copyHtmlAsRichText = (txt) => {
  const listener = (e) => {
    e.clipboardData.setData("text/html", txt);
    e.clipboardData.setData("text/plain", txt);
    e.preventDefault();
  };
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
};

/** @param {{preview: { current: Element } }} */
export const useText = ({ initialText, transforms, customRoles, preview }) => {
  const [text, setText] = useState(initialText);
  const [syncText, setSyncText] = useState(false);
  const [onSync, setOnSync] = useState({ action: (text) => {} });

  /**
   * Split the document into chunks and re-render only the chunks which were changed
   *
   * @type {[{ md: string, html: string }[], Dispatch<{newMarkdown: string, force: boolean }>]}
   */
  const [htmlChunks, updateHtmlChunks] = useReducer(
    (oldChunks, { newMarkdown, force = false }) => {
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
        preview.current.innerHTML = newChunks
          .map(
            (c) =>
              `<html-chunk id="html-chunk-${c.id}">` + c.html + "</html-chunk>",
          )
          .join("\n");
        return newChunks;
      }

      newChunks // Go through every modified chunk and update its content
        .filter((newChunk, idx) => newChunk.hash !== oldChunks[idx].hash)
        .forEach(
          (chunk) =>
            (preview.current.querySelector(
              "html-chunk#html-chunk-" + chunk.id,
            ).innerHTML = chunk.html),
        );

      return newChunks;
    },
    [],
  );

  const markdown = useMemo(
    () =>
      markdownIt({ breaks: true, linkify: true })
        .use(markdownitDocutils)
        .use(markdownReplacer(transforms))
        .use(useCustomRoles(customRoles)),
    [],
  );

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
            if (countOccurences(lastChunk, /\n```/g) % 2 != 0) {
              chunks[lastChunkIdx] = lastChunk + newChunk;
            } else {
              chunks.push(newChunk);
            }
            return chunks;
          },
          [],
        )
        .map((md, id) => {
          const hash = new IMurMurHash(md, 42).result();
          const html = lookup[hash] || purify.sanitize(markdown.render(md));
          return { md, hash, id, html };
        }),
    [markdown],
  );

  useEffect(() => updateHtmlChunks({ newMarkdown: initialText }), []);
  useEffect(exposeText(text), [text]);
  useEffect(() => {
    if (syncText) {
      onSync.action(text);
      setSyncText(false);
    }
  }, [syncText]);

  return {
    set(newMarkdown) {
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
      updateHtmlChunks({ newMarkdown: text, force: true });
    },
    onSync(action) {
      setOnSync({ action });
    },
    copy() {
      copyHtmlAsRichText(htmlChunks.map((c) => c.html).join("\n"));
    },
  };
};
