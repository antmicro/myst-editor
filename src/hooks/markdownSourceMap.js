import markdownIt from "markdown-it";

/** @param {markdownIt} md  */
export default function markdownSourceMap(md) {
  md.use(overrideDefaultDirectives);
  const overrideRules = [...Object.keys(md.renderer.rules), "paragraph_open", "heading_open", "list_item_open", "table_open", "admonition_open"];

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

// the fallback renderer rule for unhandled and error directives does not output the token attributes into the html
function overrideDefaultDirectives(/** @type {markdownIt} */ md) {
  function newRule(defaultRule) {
    return (tokens, idx) => {
      const token = tokens[idx];
      let html = defaultRule(tokens, idx);
      const asideCloseIdx = html.indexOf(">");
      for (const [key, value] of token.attrs) {
        html = html.slice(0, asideCloseIdx) + ` ${key}="${value}"` + html.slice(asideCloseIdx);
      }
      return html;
    };
  }

  md.renderer.rules.directive = newRule(md.renderer.rules.directive);
  md.renderer.rules["directive_error"] = newRule(md.renderer.rules["directive_error"]);
}
