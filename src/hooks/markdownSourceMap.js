import markdownIt from "markdown-it";

/** @param {markdownIt} md  */
export default function markdownSourceMap(md) {
  const overrideRules = [...Object.keys(md.renderer.rules), "paragraph_open", "heading_open", "list_item_open", "table_open"];

  for (const rule of overrideRules) {
    const temp = md.renderer.rules[rule];
    md.renderer.rules[rule] = addLineNumberToTokens(temp);
  }
}

function addLineNumberToTokens(defaultRule) {
  /**
   * @param {import("markdown-it/index.js").Token[]} tokens
   * @param {number} idx
   * @param {import("markdown-it/index.js").Renderer} self
   */
  return (tokens, idx, options, env, self) => {
    if (tokens[idx].map) {
      const line = tokens[idx].map[0] + env.startLine - (env.chunkId === 0 ? 0 : 1);
      tokens[idx].attrSet("data-source-line", line.toString());
    }

    if (defaultRule) {
      // if a rule existed for this token, execute it
      return defaultRule(tokens, idx, options, env, self);
    } else {
      // pass tokens to the default renderer
      return self.renderToken(tokens, idx, options);
    }
  };
}
