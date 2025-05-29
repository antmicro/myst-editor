import mermaid from "mermaid";
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

  mermaid.initialize({
    theme,
    suppressErrorRendering: true,
  });

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

    if (cached) {
      token.attrSet("class", "mermaid");
    }

    if (!cached || cached.code !== code) {
      const container = document.createElement("div");
      container.style.position = "fixed";
      container.style.visibility = "none";
      document.body.appendChild(container);

      waitForElement(parent, `mermaid-${id}`).then((el) => {
        mermaid
          .render(`mermaid-${id}`, code, container)
          .then(({ svg }) => {
            const saved = { svg, code, hash };
            lineCache.set(lineNumber, saved);
            contentCache.set(hash, saved);
            el.innerHTML = svg;
            el.className = "mermaid";
          })
          .catch((err) => {
            el.innerHTML = `<b>Mermaid error:</b>\n${err}`;
            el.classList.remove("mermaid");
          })
          .finally(() => {
            container.remove();
          });
      });
    }

    return `<pre ${self.renderAttrs(token)}>${cached?.svg ?? code}</pre>`;
  };
};

export default markdownItMermaid;
