import { getLineById } from "./markdownSourceMap";
import { EditorView } from "codemirror";

/**
 * @param {{ target: HTMLElement }} ev
 * @param {{ current: Map<number, string> }} lineMap
 * @param { EditorView } editor
 */
export function syncCheckboxes(ev, lineMap, editor) {
  if (ev.target.tagName != "INPUT") return;
  const id = ev.target.getAttribute("data-line-id");
  const lineNumber = getLineById(lineMap.current, id);
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
