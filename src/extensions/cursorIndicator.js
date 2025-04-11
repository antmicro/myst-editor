import { EditorView } from "codemirror";
import { markdownUpdatedEffect } from "../text";
import { findNearestElementForLine } from "../markdown/markdownSourceMap";

export const cursorIndicator = (text, preview) =>
  EditorView.updateListener.of((update) => {
    const cursorLineBefore = update.startState.doc.lineAt(update.startState.selection.main.head).number;
    const cursorLineAfter = update.state.doc.lineAt(update.state.selection.main.head).number;
    const selectionChanged = update.selectionSet && (cursorLineBefore !== cursorLineAfter || cursorLineBefore === 1);
    const markdownUpdated = update.transactions.some((t) => t.effects.some((e) => e.is(markdownUpdatedEffect)));
    const resized = update.geometryChanged && !update.viewportChanged;
    if (update.docChanged || (!selectionChanged && !markdownUpdated && !resized && !update.focusChanged)) {
      return;
    }

    const [matchingElem] = findNearestElementForLine(cursorLineAfter, text.lineMap, preview);
    const previewElement = preview.querySelector(".cm-previewFocus");
    if (matchingElem && update.view.hasFocus) {
      const previewRect = preview.getBoundingClientRect();
      let matchingRect = matchingElem.getBoundingClientRect();

      previewElement.style.top = `${matchingRect.top - previewRect.top + preview.scrollTop}px`;
      // the decoration of a list item is not contained within it's clientRect
      const leftPos =
        matchingRect.left - previewRect.left - 12.5 - (matchingElem.tagName === "LI" || matchingElem.parentElement.tagName === "LI" ? 17 : 0);
      previewElement.style.left = `${leftPos}px`;
      previewElement.style.height = `${matchingRect.height}px`;
    } else {
      previewElement.style.height = "0px";
    }
  });
