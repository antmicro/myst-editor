import markdownIt from "markdown-it";

const colonFenceRegex = /:{3,}/g;

export function colonFencedBlocks(/** @type {markdownIt} */ md) {
  md.core.ruler.before("block", "colon", (state) => {
    state.src = state.src.replace(colonFenceRegex, (match) => "`".repeat(match.length));
  });
}
