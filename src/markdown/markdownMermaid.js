import { waitForElement } from "../utils";
import { getLineById } from "./markdownSourceMap";
import IMurMurHash from "imurmurhash";

const markdownItMermaid = (md, { lineMap, parent, theme }) => {
  // We want to keep a cache based on line numbers to retrieve the previous version.
  // This allows for a flicker-free editing experience.
  // key = line number
  const lineCache = new Map();
  const hashSeed = 42;
  // key = hash of diagram source code
  const contentCache = new Map();
  let pelePromise;
  const loadPele = () => (pelePromise ??= import("pele/lazy"));

  const original =
    md.renderer.rules.fence ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    /** @type {import("markdown-it/index.js").Token} */
    const token = tokens[idx];
    if (token.info !== "mermaid") {
      return original(tokens, idx, options, env, self);
    }

    const code = token.content.trim();
    const lineNumber = getLineById(lineMap, token.attrGet("data-line-id"));
    let cached = lineCache.get(lineNumber);
    const hash = new IMurMurHash(code, hashSeed).result();
    if (!cached || cached.hash !== hash) {
      cached = contentCache.get(hash) ?? cached;
    }
    const id = Math.random().toString().replace(".", "");
    token.attrSet("id", `mermaid-${id}`);
    token.attrSet("data-mermaid-theme", theme);

    if (cached) {
      token.attrSet("class", "mermaid");
    }

    if (!cached || cached.code !== code) {
      waitForElement(parent, `mermaid-${id}`).then((el) => {
        loadPele()
          .then(({ renderAsync }) => renderAsync(code, { idPrefix: `mermaid-${id}` }))
          .then(({ svg }) => {
            const saved = { svg, code, hash };
            lineCache.set(lineNumber, saved);
            contentCache.set(hash, saved);
            el.innerHTML = svg;
            el.className = "mermaid";
          })
          .catch((err) => {
            const label = document.createElement("b");
            label.textContent = "Mermaid error:";
            el.replaceChildren(label, document.createTextNode(`\n${err}`));
            el.classList.remove("mermaid");
          });
      });
    }

    return `<pre ${self.renderAttrs(token)}>${cached?.svg ?? md.utils.escapeHtml(code)}</pre>`;
  };
};

export default markdownItMermaid;
