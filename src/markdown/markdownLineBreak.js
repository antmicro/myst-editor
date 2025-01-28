export function backslashLineBreakPlugin(md) {
  const defaultTextRule = md.renderer.rules.text;
  md.renderer.rules.text = (tokens, idx, options, env, self) => {
    if (tokens[idx].content === "\\") {
      return "<br>";
    }

    return defaultTextRule(tokens, idx, options, env, self);
  };
}
