import markdownIt from "markdown-it";

export function markdownFrontmatter(/** @type {markdownIt} */ md) {
  md.block.ruler.before("hr", "frontmatter", (state, startLine, endLine) => {
    if (startLine !== 0) return false;
    const lineText = state.src.slice(state.bMarks[startLine], state.eMarks[startLine]);
    if (lineText !== "---") return false;

    let endFound = false;
    let line;
    for (line = startLine + 1; line <= endLine; line++) {
      const lineText = state.src.slice(state.bMarks[line], state.eMarks[line]);
      if (lineText === "---") {
        endFound = true;
        break;
      }
    }
    if (!endFound) return false;

    state.line = line + 1;
    return true;
  });
}
