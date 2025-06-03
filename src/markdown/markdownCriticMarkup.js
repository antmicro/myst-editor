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

  // Detect lines that contain a multi line suggestion and mark them as an inline token
  // This way the rule above can render these without other block tokens interrupting.
  md.block.ruler.before("table", "critic-block", (state, startLine, endLine, silent) => {
    const start = state.bMarks[startLine] + state.tShift[startLine];
    const line = state.src.slice(start, state.eMarks[startLine]);

    // Detect CriticMarkup opening on this line
    const [openingEnd, marker] = findOpening(line);
    if (openingEnd == -1) return false;
    const openingEndPos = start + openingEnd;

    // Find closing tag
    const text = state.src.slice(openingEndPos, state.eMarks[endLine]);
    const closingStart = text.indexOf(`${String.fromCharCode(marker).repeat(2)}}`);
    if (closingStart == -1) return false;
    const closingPos = openingEndPos + closingStart;
    if (closingPos < state.eMarks[startLine]) return false;
    if (marker == 0x7e /* ~ */ && !text.slice(0, closingStart).includes("~>")) return false;

    if (silent) return true;

    let closeLine = startLine;
    while (closingPos + 3 > state.eMarks[closeLine]) {
      closeLine++;
    }

    state.line = closeLine + 1;

    const token_o = state.push("critic_block_open", "div", 1);
    token_o.map = [startLine, state.line];

    const token = state.push("inline", "", 0);
    token.content = state.src.slice(openingEndPos - 3, openingEndPos + closingStart + 3);
    token.children = [];
    token.map = [startLine, state.line];

    state.push("critic_block_close", "div", -1);

    return true;
  });
};

const findOpening = (line) => {
  let pos = -1;
  while (pos < line.length) {
    pos++;

    if (line.charCodeAt(pos) != 0x7b /* { */) continue;
    pos++;
    const marker = line.charCodeAt(pos);
    if (!criticMarkers.includes(marker)) continue;
    pos++;
    if (line.charCodeAt(pos) != marker) continue;
    pos++;

    return [pos, marker];
  }

  return [-1, -1];
};
