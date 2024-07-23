import markdownIt from "markdown-it";

/** @param {markdownIt} md  */
export default function markdownSourceMap(md) {
  md.renderer.rules.paragraph_open = addLineNumberToTokens;
  md.renderer.rules.heading_open = addLineNumberToTokens;
  md.renderer.rules.list_item_open = addLineNumberToTokens;
  md.renderer.rules.table_open = addLineNumberToTokens;
}

/**
 * @param {import("markdown-it/index.js").Token[]} tokens
 * @param {number} idx
 * @param {import("markdown-it/index.js").Renderer} self
 */
function addLineNumberToTokens(tokens, idx, options, env, self) {
  if (tokens[idx].map) {
    const line = tokens[idx].map[0] + env.startLine - (env.chunkId === 0 ? 0 : 1);
    tokens[idx].attrSet("data-source-line", line.toString());
  }

  // pass tokens to the default renderer
  return self.renderToken(tokens, idx, options);
}
