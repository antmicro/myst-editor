import markdownIt from "markdown-it";

// https://github.com/markdown-it/markdown-it/blob/master/lib/rules_block/fence.mjs
// We want to extend what characters can make fenced code blocks and make colons also work
export function colonFencedBlocks(/** @type {markdownIt} */ md) {
  md.block.ruler.at(
    "fence",
    (state, startLine, endLine, silent) => {
      let pos = state.bMarks[startLine] + state.tShift[startLine];
      let max = state.eMarks[startLine];

      // if it's indented more than 3 spaces, it should be a code block
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }

      if (pos + 3 > max) {
        return false;
      }

      const marker = state.src.charCodeAt(pos);

      // here we also consider colon as a marker
      if (marker !== 0x7e /* ~ */ && marker !== 0x60 /* ` */ && marker !== 0x3a /* : */) {
        return false;
      }

      // scan marker length
      let mem = pos;
      pos = state.skipChars(pos, marker);

      let len = pos - mem;

      if (len < 3) {
        return false;
      }

      const markup = state.src.slice(mem, pos);
      const params = state.src.slice(pos, max);

      if (marker === 0x60 /* ` */) {
        if (params.indexOf(String.fromCharCode(marker)) >= 0) {
          return false;
        }
      }

      // Since start is found, we can report success here in validation mode
      if (silent) {
        return true;
      }

      // search end of block
      let nextLine = startLine;
      let haveEndMarker = false;

      for (;;) {
        nextLine++;
        if (nextLine >= endLine) {
          // unclosed block should be autoclosed by end of document.
          // also block seems to be autoclosed by end of parent
          break;
        }

        pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];

        if (pos < max && state.sCount[nextLine] < state.blkIndent) {
          // non-empty line with negative indent should stop the list:
          // - ```
          //  test
          break;
        }

        if (state.src.charCodeAt(pos) !== marker) {
          continue;
        }

        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          // closing fence should be indented less than 4 spaces
          continue;
        }

        pos = state.skipChars(pos, marker);

        // closing code fence must be at least as long as the opening one
        if (pos - mem < len) {
          continue;
        }

        // make sure tail has spaces only
        pos = state.skipSpaces(pos);

        if (pos < max) {
          continue;
        }

        haveEndMarker = true;
        // found!
        break;
      }

      // If a fence has heading spaces, they should be removed from its inner block
      len = state.sCount[startLine];

      state.line = nextLine + (haveEndMarker ? 1 : 0);

      const token = state.push("fence", "code", 0);
      token.info = params;
      token.content = state.getLines(startLine + 1, nextLine, len, true);
      token.markup = markup;
      token.map = [startLine, state.line];

      return true;
    },
    { alt: ["paragraph", "reference", "blockquote", "list"] },
  );
}
