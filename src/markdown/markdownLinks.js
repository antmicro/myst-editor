import markdownIt from "markdown-it";

/** Extension to markdownIt which invalidates links starting with `(` */
export function checkLinks(/** @type {markdownIt} */ md) {
  const defaultRule = md.renderer.rules.link_open;
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const render = defaultRule ?? self.renderToken.bind(self);
    const href = tokens[idx].attrs?.find((a) => a[0] == "href")?.[1];
    if (href?.startsWith("(")) {
      const linkLabel = tokens[idx + 1];
      const linkClose = tokens[idx + 2];
      linkLabel.content = `[${linkLabel.content}]`;
      linkClose.type = "text";
      linkClose.content = `(${href})`;
      return "";
    }

    return render(tokens, idx, options, env, self);
  };
}
