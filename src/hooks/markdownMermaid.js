import mermaid from "mermaid";
import { waitForElement } from "../utils";

const markdownItMermaid = (md, { preview }) => {
  mermaid.initialize({
    theme: "neutral",
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
    const id = Math.random().toString().replace(".", "");
    token.attrSet("data-mermaid-id", id);

    waitForElement(preview.current, `[data-mermaid-id="${id}"]`).then((el) => {
      mermaid
        .render(`mermaid-${id}`, code)
        .then(({ svg }) => {
          el.innerHTML = svg;
          el.className = "mermaid";
        })
        .catch((err) => {
          el.innerHTML = `<b>Mermaid error:</b>\n${err}`;
          el.classList.remove("mermaid");
        });
    });

    return `<pre ${self.renderAttrs(token)}>${code}</pre>`;
  };
};

export default markdownItMermaid;
