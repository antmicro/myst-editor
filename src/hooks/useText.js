import markdownitDocutils from 'markdown-it-docutils'
import purify from 'dompurify'
import markdownIt from 'markdown-it'
import { markdownReplacer, useCustomRoles } from './markdownReplacer';
import { useEffect, useMemo, useState } from "preact/hooks";

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

export const useText = (initialText, transforms, customRoles) => {
  const [text, setText] = useState(initialText);
  const [syncText, setSyncText] = useState(false);
  const [onSync, setOnSync] = useState({ action: (text) => { } });

  const markdown = useMemo(
    () => markdownIt({ breaks: true, linkify: true })
      .use(markdownitDocutils)
      .use(markdownReplacer(transforms))
      .use(useCustomRoles(customRoles)),
    []
  );

  useEffect(exposeText(text), [text]);

  useEffect(() => {
    if (syncText) {
      onSync.action(text);
      setSyncText(false);
    }
  }, [syncText]);

  return {
    set: setText,
    get() { return text },
    sync() { setSyncText(true) },
    onSync(action) { setOnSync({ action }) },
    renderAndSanitize() { return purify.sanitize(markdown.render(text)) },
    copy() { copyHtmlAsRichText(this.renderAndSanitize()) }
  }
}