import MarkdownIt from "markdown-it";
import { getLineById } from "./markdownSourceMap";
import { toggleFold } from "@codemirror/language";

export function markdownFoldButtons(/** @type {MarkdownIt} */ md) {
  md.use(paragraphFold).use(headingFold);
}

function paragraphFold(/** @type {MarkdownIt} */ md) {
  const baseRule = md.renderer.rules.paragraph_open ?? md.renderer.renderToken;
  md.renderer.rules.paragraph_open = (tokens, idx, options, env, self) => {
    const baseOutput = baseRule(tokens, idx, options, env, self);
    const inlineToken = tokens[idx + 1];
    let multiline = false;
    for (const tok of inlineToken.children) {
      if (tok.type === "softbreak") {
        multiline = true;
        break;
      }
    }
    if (!multiline) return baseOutput;

    return addFoldArrow(baseOutput);
  };
}

function headingFold(/** @type {MarkdownIt} */ md) {
  const baseRule = md.renderer.rules.heading_open ?? md.renderer.renderToken;
  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    const baseOutput = baseRule(tokens, idx, options, env, self);

    return addFoldArrow(baseOutput);
  };
}

const addFoldArrow = (baseOutput) => {
  return baseOutput + `<button class="fold-arrow" title="Fold line"><span>⌄</span></button>`;
};

export function handlePreviewFold(/** @type {MouseEvent} */ ev, lineMap) {
  let button = ev.target.className === "fold-arrow" ? ev.target : ev.target.parentElement;
  if (button.className !== "fold-arrow") return;

  const lineId = button.nextElementSibling.getAttribute("data-line-id");
  const lineNumber = getLineById(lineMap.current, lineId);
  const line = window.myst_editor.main_editor.state.doc.line(lineNumber);
  window.myst_editor.main_editor.dispatch({
    selection: { anchor: line.to, head: line.to },
  });
  toggleFold(window.myst_editor.main_editor);
}
