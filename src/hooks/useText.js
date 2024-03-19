import markdownitDocutils from 'markdown-it-docutils'
import purify from 'dompurify'
import markdownIt from 'markdown-it'
import { markdownReplacer, useCustomRoles } from './markdownReplacer';
import { useCallback, useEffect, useMemo, useReducer, useState } from "preact/hooks";
import IMurMurHash from 'imurmurhash';

const exposeText = (text) => () => {
  if (!window.myst_editor) {
    window.myst_editor = {};
  }
  window.myst_editor.text = text;
}

const copyHtmlAsRichText = (txt) => {
  const listener = (e) => {
    e.clipboardData.setData("text/html", txt);
    e.clipboardData.setData("text/plain", txt);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}

/** Find out which chunks were changed. `null` return means that we're unable to compare chunks */
const findChangedChunks = (oldChunks, newChunks) => {
  if (newChunks.length !== oldChunks.length) return null;
  return newChunks.filter((newChunk, idx) => newChunk.hash !== oldChunks[idx].hash)
}


/** @param {{preview: { current: Element } }} */
export const useText = ({ initialText, transforms, customRoles, preview }) => {
  const [text, setText] = useState(initialText);
  const [syncText, setSyncText] = useState(false);
  const [onSync, setOnSync] = useState({ action: (text) => { } });

  /** 
   * Split the document into chunks and re-render only the chunks which were changed
   * 
   * @type {[{ md: string, html: string }[], Dispatch<{newMarkdown: string, force: boolean }>]} 
   */
  const [htmlChunks, updateHtmlChunks] = useReducer(
    (oldChunks, { newMarkdown, force = false }) => {
      if (force) {
        const newHtmlChunks = splitIntoChunks(newMarkdown);
        setPreview(newHtmlChunks);
        return newHtmlChunks;
      }

      const htmlLookup = oldChunks.reduce(
        (newChunks, { hash, html }) => {
          newChunks[hash] = html;
          return newChunks;
        },
        {}
      );

      const newHtmlChunks = splitIntoChunks(newMarkdown, htmlLookup);

      const changedChunks = findChangedChunks(oldChunks, newHtmlChunks);

      if (changedChunks === null) { // We can't infer which chunks were changed, so we update the entire document
        setPreview(newHtmlChunks);
      } else {
        changedChunks.forEach( // Go through every changed chunk and update its content
          chunk => preview.current
            .querySelector("html-chunk#html-chunk-" + chunk.id)
            .innerHTML = chunk.html
        )
      }

      return newHtmlChunks
    },
    []
  );

  const markdown = useMemo(
    () => markdownIt({ breaks: true, linkify: true })
      .use(markdownitDocutils)
      .use(markdownReplacer(transforms))
      .use(useCustomRoles(customRoles)),
    []
  );

  /** Split and parse markdown into chunks of HTML. If `lookup` is not provided then every chunk will be parsed */
  const splitIntoChunks = useCallback(
    (newMarkdown, lookup = {}) => newMarkdown
      .split(/(?=\n#{1,3} )/g) // Perform a split without removing the delimeter
      .map((md, id) => {
        const hash = new IMurMurHash(md, 42).result();
        const html = lookup[hash] || `<html-chunk id="html-chunk-${id}">` + purify.sanitize(markdown.render(md)) + "</html-chunk>";
        return { md, hash, id, html }
      }),
    [markdown]
  )

  /** Join chunks and put then inside preview. It is a costly operation as HTML will need to be re-rendered by the browser */
  const setPreview = useCallback(
    (newChunks) => preview.current.innerHTML = newChunks.map(c => c.html).join("\n"),
    [preview]
  )

  useEffect(() => updateHtmlChunks({ newMarkdown: initialText }), [])
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
          console.error(e)
          updateHtmlChunks({ newMarkdown, force: true});
        }
      });
    },
    get() { return text },
    sync() { setSyncText(true) },
    refresh() { updateHtmlChunks({ newMarkdown: text, force: true }) },
    onSync(action) { setOnSync({ action }) },
    copy() { copyHtmlAsRichText(htmlChunks.map(c => c.html).join("\n")) }
  }
}