import markdownitDocutils from 'markdown-it-docutils'
import purify from 'dompurify'
import markdownIt from 'markdown-it'
import { markdownReplacer, useCustomRoles } from './markdownReplacer';
import { useEffect, useMemo, useReducer, useState } from "preact/hooks";
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
const findDiff = (oldChunks, newChunks) => {
  if (newChunks.length !== oldChunks.length) return null;
  return newChunks
    .map((newChunk, idx) => ({ newChunk, oldChunk: oldChunks[idx] }))
    .filter(({newChunk, oldChunk}) => newChunk.hash !== oldChunk.hash)
    .map(({newChunk, oldChunk}) => ({ oldHash: oldChunk.hash, newChunk }))
}


/** @param {{preview: { current: Element } }} */
export const useText = ({ initialText, transforms, customRoles, preview }) => {
  const [text, setText] = useState(initialText);
  const [syncText, setSyncText] = useState(false);
  const [onSync, setOnSync] = useState({ action: (text) => { } });

  /** 
   * Split the document into chunks and re-render only the chunks which were changed
   * 
   * @type {[{ md: string, html: string }[], Dispatch<string>]} 
   */
  const [htmlChunks, updateHtmlChunks] = useReducer(
    (oldChunks, newMarkdown) => {
      const htmlLookup = oldChunks.reduce(
        (newChunks, { hash, html }) => {
          newChunks[hash] = html;
          return newChunks;
        },
        {}
      );

      const newHtmlChunks = newMarkdown
        .split(/(?=\n#{1,3} )/g) // Perform a split without removing the delimeter
        .map(md => {
          let hash = new IMurMurHash(md, 42).result();
          return {
            md,
            hash,
            html: htmlLookup[hash] || `<html-chunk id="html-chunk-${hash}">` + purify.sanitize(markdown.render(md)) + "</html-chunk>"
          }
        })

      let diff = findDiff(htmlChunks, newHtmlChunks);

      if (diff === null) { // We can't infer which chunks were changed, so we update the entire document
        preview.current.innerHTML = newHtmlChunks.map(c => c.html).join("\n");
      } else {
        diff.forEach(({ oldHash, newChunk }) => { // Go through every changed chunk and update its hash and content
          let node = preview.current.querySelector("html-chunk#html-chunk-" + oldHash);
          node.innerHTML = newChunk.html;
          node.id = "html-chunk-" + newChunk.hash;
        })
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

  useEffect(() => {
    updateHtmlChunks(initialText);
  }, [])

  useEffect(exposeText(text), [text]);

  useEffect(() => {
    if (syncText) {
      onSync.action(text);
      setSyncText(false);
    }
  }, [syncText]);

  return {
    set(newMarkdown) {
      setText(text);
      setTimeout(() => updateHtmlChunks(newMarkdown));
    },
    get() { return text },
    sync() { setSyncText(true) },
    onSync(action) { setOnSync({ action }) },
    copy() { copyHtmlAsRichText(htmlChunks.map(c => c.html).join("\n")) }
  }
}