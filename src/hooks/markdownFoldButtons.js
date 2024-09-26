import { getLineById, SRC_LINE_ID } from "./markdownSourceMap";
import { toggleFold, foldable, foldedRanges, foldGutter } from "@codemirror/language";
import foldIcon from "../icons/fold.svg";

export function addFoldUI(/** @type {import("markdown-it").Token} */ token, /** @type {string} */ baseOutput, env) {
  const id = token.attrGet(SRC_LINE_ID);
  if (id) {
    const lineNumber = getLineById(env.lineMap.current, id);
    const line = window.myst_editor.main_editor.state.doc.line(lineNumber);
    const range = foldable(window.myst_editor.main_editor.state, line.from, line.to);
    if (range) {
      const ranges = foldedRanges(window.myst_editor.main_editor.state);
      let folded = false;
      ranges.between(range.from, range.to, (from, to) => {
        if (from === range.from && to === range.to) {
          folded = true;
        }
      });

      if (!folded) {
        return addFoldArrow(baseOutput, id);
      } else {
        return addUnfoldButtons(baseOutput, id);
      }
    }
  }

  return baseOutput;
}

const addFoldArrow = (baseOutput, id) => {
  const firstElementEndIdx = baseOutput.indexOf(">") + 1;
  return (
    baseOutput.slice(0, firstElementEndIdx) +
    `<button class="fold fold-arrow" data-btn-id="${id}" data-remove title="Fold line"><img src=${foldIcon} alt="fold" /></button>` +
    baseOutput.slice(firstElementEndIdx)
  );
};

const addUnfoldButtons = (/** @type {string} */ baseOutput, id) => {
  const firstElementEndIdx = baseOutput.indexOf(">") + 1;
  const arrow = `<button class="fold fold-arrow unfold" data-btn-id="${id}" data-remove title="Unfold line"><img src=${foldIcon} alt="fold" /></button>`;
  const dots = `<button class="fold fold-dots" data-btn-id="${id}" data-remove title="unfold"><span>...</span></button>`;
  if (baseOutput.endsWith("</pre>\n")) {
    return arrow + baseOutput.slice(0, baseOutput.indexOf("</pre>")) + dots + "</pre>";
  } else {
    return baseOutput.slice(0, firstElementEndIdx) + arrow + baseOutput.slice(firstElementEndIdx) + dots;
  }
};

export function handlePreviewFold(/** @type {MouseEvent} */ ev, lineMap) {
  /** @type {HTMLElement} */
  let button = ev.target.classList.contains("fold") ? ev.target : ev.target.parentElement;
  if (!button.classList.contains("fold")) return;
  ev.preventDefault();

  const lineId = button.getAttribute("data-btn-id");
  const lineNumber = getLineById(lineMap.current, lineId);
  const line = window.myst_editor.main_editor.state.doc.line(lineNumber);
  window.myst_editor.main_editor.dispatch({
    selection: { anchor: line.to, head: line.to },
  });
  toggleFold(window.myst_editor.main_editor);
}

export const foldArrowGutter = foldGutter({
  markerDOM(open) {
    const img = document.createElement("img");
    img.src = foldIcon;
    img.alt = "fold";
    img.title = "Fold line";
    img.classList.add("fold-arrow");
    if (!open) {
      img.classList.add("unfold");
    }
    return img;
  },
});
