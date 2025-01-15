import markdownIt from "markdown-it";

const mappedAttrs = ["src", "href"];

const mapToken = (token, mapFunc) => {
  for (const attrName of mappedAttrs) {
    const attr = token.attrGet(attrName);
    if (attr) token.attrSet(attrName, mapFunc(token.tag, attr));
  }
};

export function markdownItMapUrls(/** @type {markdownIt} */ md) {
  md.core.ruler.after("inline", "map_urls", (state) => {
    if (state.env.mapUrl == undefined) return;

    for (const token of state.tokens) {
      mapToken(token, state.env.mapUrl);
      token.children?.forEach?.((c) => mapToken(c, state.env.mapUrl));
    }
  });
}