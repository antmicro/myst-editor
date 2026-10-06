/** Mark lists and list items that follow a blank line so preview spacing can follow the source. */
export function markdownListSpacing(md) {
  md.core.ruler.after("block", "list_spacing", (state) => {
    const lines = state.src.split(/\r\n?|\n/);
    const lists = [];

    for (const token of state.tokens) {
      if (token.type === "bullet_list_open" || token.type === "ordered_list_open") {
        const startLine = token.map?.[0];
        if (startLine > 0 && lines[startLine - 1].trim() === "") {
          token.attrJoin("class", "myst-list-after-blank");
        }
        lists.push(false);
      } else if (token.type === "bullet_list_close" || token.type === "ordered_list_close") {
        lists.pop();
      } else if (token.type === "list_item_open") {
        const startLine = token.map?.[0];
        if (lists.at(-1) && startLine > 0 && lines[startLine - 1].trim() === "") {
          token.attrJoin("class", "myst-list-item-after-blank");
        }
        lists[lists.length - 1] = true;
      }
    }
  });
}
