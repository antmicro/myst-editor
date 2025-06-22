import { getLineById } from "./markdownSourceMap";
import { EditorView } from "codemirror";
import markdownIt from "markdown-it";

/**
 * @param {{ target: HTMLElement }} ev
 * @param {Map<number, string>} lineMap
 * @param { EditorView } editor
 */
export function syncCheckboxes(ev, lineMap, editor) {
  if (ev.target.tagName != "INPUT") return;
  const id = ev.target.parentElement.getAttribute("data-line-id");
  const lineNumber = getLineById(lineMap, id);
  const line = editor.state.doc.line(lineNumber);
  const openIdx = line.text.indexOf("[");
  const closeIdx = line.text.indexOf("]");

  editor.dispatch({
    changes: {
      from: line.from + openIdx + 1,
      to: line.from + closeIdx,
      insert: ev.target.checked ? "x" : " ",
    },
  });
}

export function markdownCheckboxes(/** @type {markdownIt} */ md) {
  md.block.ruler.before("paragraph", "checkbox", (state, startLine, _, silent) => {
    const start = state.bMarks[startLine] + state.tShift[startLine];
    let pos = start;
    let max = state.eMarks[startLine];

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) return false;

    if (state.src.charCodeAt(pos) !== 0x5b /* [ */) return false;
    pos++;
    let checked;
    if (state.src.charCodeAt(pos) === 0x20 /* space */) checked = false;
    else if (state.src.charCodeAt(pos) === 0x78 || state.src.charCodeAt(pos) === 0x58 /* x || X */) checked = true;
    else return false;
    pos++;
    if (state.src.charCodeAt(pos) !== 0x5d /* ] */) return false;
    pos++;

    if (silent) return true;

    state.line = startLine + 1;

    const tokenLabelOpen = state.push("label_open", "label", 1);
    tokenLabelOpen.map = [startLine, state.line];

    const tokenCheckbox = state.push("checkbox", "input", 0);
    tokenCheckbox.markup = state.src.slice(start, pos - 1);
    tokenCheckbox.map = [startLine, state.line];
    tokenCheckbox.attrSet("type", "checkbox");
    if (checked) {
      tokenCheckbox.attrSet("checked");
    }

    const tokenInline = state.push("inline", "", 0);
    tokenInline.content = state.src.slice(pos, max).trim();
    tokenInline.map = [startLine, state.line];
    tokenInline.children = [];

    state.push("label_close", "label", -1);

    return true;
  });
}
