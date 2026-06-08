import markdownIt from "markdown-it";

export const criticMarkers = [0x2d /* - */, 0x2b /* + */, 0x7e /* ~ */];

export const criticMarkup = (/** @type {markdownIt} */ md) => {
  md.inline.ruler.before("strikethrough", "critic-markup", (state, silent) => {
    const start = state.pos;
    let pos = start;

    // Opening
    if (state.src.charCodeAt(pos) != 0x7b /* { */) return false;
    pos++;
    if (!criticMarkers.includes(state.src.charCodeAt(pos))) return false;
    const marker = state.src.charCodeAt(pos);
    pos++;
    if (state.src.charCodeAt(pos) != marker) return false;
    pos++;

    // Inner content
    const innerStart = pos;
    while (pos < state.posMax) {
      if (state.src.charCodeAt(pos) == marker && state.src.charCodeAt(pos + 1) == marker && state.src.charCodeAt(pos + 2) == 0x7d /* } */) break;
      pos++;
    }
    const content = state.src.slice(innerStart, pos);
    if (marker == 0x7e /* ~ */) {
      // Reject if no replacement mark
      if (!content.includes("~>")) return false;
      const [del, ins] = content.split("~>");
      if (!del || !ins) return false;
    } else if (content.length === 0) return false;

    // Closing
    if (state.src.charCodeAt(pos) != marker) return false;
    pos++;
    if (state.src.charCodeAt(pos) != marker) return false;
    pos++;
    if (state.src.charCodeAt(pos) != 0x7d /* } */) return false;
    pos++;
    state.pos = pos;
    if (silent) return true;

    if (marker == 0x2d /* - */) {
      // Deletion
      state.push("cirtic_del_open", "del", 1);
      const token_i = state.push("text", "", 0);
      token_i.content = content;
      state.push("critic_del_close", "del", -1);
    } else if (marker == 0x2b /* + */) {
      // Addition
      state.push("cirtic_ins_open", "ins", 1);
      const token_i = state.push("text", "", 0);
      token_i.content = content;
      state.push("critic_ins_close", "ins", -1);
    } else {
      // Replacement
      const parts = content.split("~>");

      state.push("cirtic_del_open", "del", 1);
      let token_i = state.push("text", "", 0);
      token_i.content = parts[0];
      state.push("critic_del_close", "del", -1);

      state.push("cirtic_ins_open", "ins", 1);
      token_i = state.push("text", "", 0);
      token_i.content = parts[1];
      state.push("critic_ins_close", "ins", -1);
    }

    return true;
  });

  const findMultilineSuggestion = (state, token, closingMarker) => {
    const lines = state.src.split("\n");
    const lineStartPosition = lines.slice(0, token.map[0]).join("\n").length;
    const lineEndPosition = state.src.slice(lineStartPosition).indexOf(closingMarker) + closingMarker.length;
    const prefixStartPosition = state.src.slice(lineStartPosition).indexOf(token.content);
    return { closeLine: token.map[0], content: state.src.slice(prefixStartPosition, lineEndPosition) };
  };

  const extendOpenTokenMaps = (tokens, inlineIdx, endLine) => {
    const openTokens = [];
    for (let idx = 0; idx < inlineIdx; idx++) {
      const token = tokens[idx];
      if (token.nesting == 1) {
        openTokens.push(token);
      } else if (token.nesting == -1) {
        openTokens.pop();
      }
    }

    openTokens.filter((token) => token.map).forEach((token) => (token.map[1] = endLine));
  };

  const findRemovalEnd = (tokens, startIdx, closingTokenIdx) => {
    let depth = 0;
    for (let idx = startIdx; idx < tokens.length; idx++) {
      depth += tokens[idx].nesting;
      if (idx >= closingTokenIdx && depth <= 0) return idx;
    }

    return closingTokenIdx;
  };

  md.core.ruler.after("block", "critic-block", (state) => {
    for (let idx = 0; idx < state.tokens.length; idx++) {
      const token = state.tokens[idx];
      if (token.type != "inline") continue;

      const match = token.content.match(`{(\\${criticMarkers.map((m) => String.fromCharCode(m)).join("{2}|\\")}{2})`);
      if (!match) continue;

      const openingEnd = match.index + 3;
      const closingMarker = match[1] + "}";
      if (token.content.slice(openingEnd).includes(closingMarker)) continue;

      const suggestion = findMultilineSuggestion(state, token, closingMarker);
      if (!suggestion) continue;
      if (match[1] == "~~" && !suggestion.content.includes("~>")) continue;

      const closingTokenIdx = state.tokens.slice(idx + 1).findIndex((t) => t.content.includes(closingMarker));
      if (closingTokenIdx === -1) continue;

      token.content = suggestion.content;
      token.children = [];
      token.map = [token.map[0], suggestion.closeLine + 1];

      extendOpenTokenMaps(state.tokens, idx, token.map[1]);

      const removeStart = state.tokens.slice(idx + 1).findIndex((t) => t.nesting === -1) + idx + 2;
      const removeEnd = findRemovalEnd(state.tokens, removeStart, idx + closingTokenIdx + 1);
      state.tokens.splice(removeStart, removeEnd - removeStart + 1);
    }
  });
};
