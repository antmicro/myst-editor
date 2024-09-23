import { EditorView } from "codemirror";
import { markdownUpdatedStateEffect } from "../hooks/useText";
import { findNearestElementForLine } from "../hooks/markdownSourceMap";

const previewTopPadding = 20;
const debounceTimeout = 50;

export const syncPreviewWithCursor = (lineMap, preview) => {
  let timeout;

  return EditorView.updateListener.of((update) => {
    const cursorLineBefore = update.startState.doc.lineAt(update.startState.selection.main.head).number;
    const cursorLineAfter = update.state.doc.lineAt(update.state.selection.main.head).number;
    const selectionChanged = update.selectionSet && (cursorLineBefore !== cursorLineAfter || cursorLineBefore === 1);
    const markdownUpdated = update.transactions.some((t) => t.effects.some((e) => e.is(markdownUpdatedStateEffect)));
    const resized = update.geometryChanged && !update.viewportChanged;
    if (update.docChanged || (!selectionChanged && !markdownUpdated && !resized)) {
      return;
    }

    function sync() {
      const [matchingElem, matchingLine] = findNearestElementForLine(cursorLineAfter, lineMap, preview.current);
      if (matchingElem) {
        scrollPreviewElemIntoView({
          view: update.view,
          matchingLine,
          matchingElem,
          behavior: "smooth",
          preview: preview.current,
        });
      }
    }

    clearTimeout(timeout);
    timeout = setTimeout(sync, debounceTimeout);
  });
};

/** @param {Object} param0
 * @param {EditorView} param0.view
 */
function scrollPreviewElemIntoView({ view, matchingLine, matchingElem, behavior = "auto", preview }) {
  const cursorBlock = view.lineBlockAt(view.state.doc.line(matchingLine).from);
  const previewRect = preview.getBoundingClientRect();
  const editor = view.dom.parentElement;
  let matchingRect = matchingElem.getBoundingClientRect();

  const elemScrollOffset = cursorBlock.top + previewTopPadding;

  const top = matchingRect.top + preview.scrollTop - elemScrollOffset - previewRect.top + editor.scrollTop;
  preview.scrollTo({ top, behavior });
}
