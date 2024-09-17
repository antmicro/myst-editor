import { EditorView } from "codemirror";
import { markdownUpdatedStateEffect } from "../hooks/useText";
import { findNearestElementForLine } from "../hooks/markdownSourceMap";

export const cursorIndicator = (lineMap, preview) =>
  EditorView.updateListener.of((update) => {
    const cursorLineBefore = update.startState.doc.lineAt(update.startState.selection.main.head).number;
    const cursorLineAfter = update.state.doc.lineAt(update.state.selection.main.head).number;
    const selectionChanged = update.selectionSet && (cursorLineBefore !== cursorLineAfter || cursorLineBefore === 1);
    const markdownUpdated = update.transactions.some((t) => t.effects.some((e) => e.is(markdownUpdatedStateEffect)));
    const resized = update.geometryChanged && !update.viewportChanged;
    if (update.docChanged || (!selectionChanged && !markdownUpdated && !resized)) {
      return;
    }

    const [matchingElem] = findNearestElementForLine(cursorLineAfter, lineMap, preview.current);
    const previewElement = preview.current.querySelector(".cm-previewFocus");
    if (matchingElem) {
      const previewRect = preview.current.getBoundingClientRect();
      let matchingRect = matchingElem.getBoundingClientRect();

      previewElement.style.top = `${matchingRect.top - previewRect.top + preview.current.scrollTop}px`;
      // the decoration of a list item is not contained within it's clientRect
      const leftPos =
        matchingRect.left - previewRect.left - 12.5 - (matchingElem.tagName === "LI" || matchingElem.parentElement.tagName === "LI" ? 17 : 0);
      previewElement.style.left = `${leftPos}px`;
      previewElement.style.height = `${matchingRect.height}px`;
    } else {
      previewElement.style.height = "0px";
    }
  });
