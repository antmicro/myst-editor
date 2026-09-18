import markdownIt from "markdown-it";

/** Extension to markdownIt which invalidates links starting with `(` */
export function checkLinks(/** @type {markdownIt} */ md) {
  const defaultOpen = md.renderer.rules.link_open;
  const defaultClose = md.renderer.rules.link_close;

  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const href = tokens[idx].attrGet("href");
    if (href?.startsWith("(")) {
      // The label can contain zero or many tokens, so find its matching close token.
      let nesting = 1;
      for (let i = idx + 1; i < tokens.length; i++) {
        nesting += tokens[i].nesting;
        if (nesting === 0) {
          tokens[i].meta = { ...tokens[i].meta, invalidLinkHref: href };
          return "[";
        }
      }
    }

    return defaultOpen ? defaultOpen(tokens, idx, options, env, self) : self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.link_close = (tokens, idx, options, env, self) => {
    const href = tokens[idx].meta?.invalidLinkHref;
    if (href !== undefined) return `](${md.utils.escapeHtml(href)})`;
    return defaultClose ? defaultClose(tokens, idx, options, env, self) : self.renderToken(tokens, idx, options);
  };
}
