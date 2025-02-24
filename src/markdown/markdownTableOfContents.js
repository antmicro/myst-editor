/**
 * @param {{current: Object}} headingsPerChunk
 * @param {import("markdown-it")} md
 */
export default function markdownTableOfContents(md, headingsPerChunk) {
  md.core.ruler.after("source_map", "toc", (state) => {
    if (state.env.chunkId == undefined) return;

    const headings = [];
    for (let i = 0; i < state.tokens.length; i++) {
      if (state.tokens[i].type !== "heading_open" || state.tokens[i + 1].children.length === 0) continue;
      headings.push({
        level: parseInt(state.tokens[i].tag.slice(1)),
        text: state.tokens[i + 1].children[0].content,
        lineId: state.tokens[i + 1].children[0].attrGet("data-line-id"),
      });
    }
    headingsPerChunk.current[state.env.chunkId] = headings;
  });
}
