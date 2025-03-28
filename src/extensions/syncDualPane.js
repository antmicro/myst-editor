import { EditorView } from "codemirror";
import { markdownUpdatedEffect } from "../text";
import { findNearestElementForLine, getLineById } from "../markdown/markdownSourceMap";
import { EditorSelection } from "@codemirror/state";

const previewTopPadding = 20;
const debounceTimeout = 100;
/** This is the best way I can think of to check if the user caused the markdown to update.
 * If it takes longer than this to update the preview, we have bigger problems.
 */
const typedToUpdateThreshold = 500;

export const syncPreviewWithCursor = (text, preview, lastTyped) => {
  let timeout;

  return EditorView.updateListener.of((update) => {
    const cursorLineBefore = update.startState.doc.lineAt(update.startState.selection.main.head).number;
    const cursorLineAfter = update.state.doc.lineAt(update.state.selection.main.head).number;
    const selectionChanged = update.selectionSet && (cursorLineBefore !== cursorLineAfter || cursorLineBefore === 1);
    const timeSinceLastTyped = lastTyped.current === null ? typedToUpdateThreshold : performance.now() - lastTyped.current;
    const markdownUpdated =
      update.transactions.some((t) => t.effects.some((e) => e.is(markdownUpdatedEffect))) && timeSinceLastTyped < typedToUpdateThreshold;
    const resized = update.geometryChanged && !update.viewportChanged;
    if (update.docChanged || (!selectionChanged && !markdownUpdated && !resized)) {
      return;
    }

    function sync() {
      const [matchingElem, matchingLine] = findNearestElementForLine(cursorLineAfter, text.lineMap, preview);
      if (matchingElem) {
        scrollPreviewElemIntoView({
          view: update.view,
          matchingLine,
          matchingElem,
          behavior: "smooth",
          preview,
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

  const top = matchingRect.top + preview.scrollTop - elemScrollOffset - previewRect.top + (editor?.scrollTop ?? 0);
  preview.scrollTo({ top, behavior });
}

/**
 * @param {{ target: HTMLElement }} ev
 * @param {Map<number, string>} lineMap
 * @param {HTMLElement} preview
 * @param { EditorView } editor
 */
export function handlePreviewClickToScroll(ev, lineMap, preview, editor) {
  let id = ev.target.getAttribute("data-line-id");
  let elem = ev.target;
  if (!id) {
    // check parents and siblings
    while (elem && elem.tagName !== "HTML-CHUNK") {
      const parent = elem.parentElement;
      [id, elem] = findSoruceMappedPreviousElement(elem);
      if (id) break;
      elem = parent;
    }
  }
  if (!id) return;

  const lineNumber = getLineById(lineMap, id);
  const line = editor.state.doc.line(lineNumber);
  const visible = editor.visibleRanges[0];
  function setCursor() {
    editor.dispatch({
      selection: EditorSelection.create([EditorSelection.range(line.to, line.to)]),
    });
  }
  function keepScrolling() {
    const { canScroll, editorParent } = scrollEditorToLine(elem, preview, line, editor);
    if (canScroll) {
      editorParent.addEventListener("scrollend", keepScrolling, { once: true });
    } else {
      setCursor();
    }
  }

  if (line.from >= visible.from && line.to <= visible.to) {
    // if visible -> scroll just once
    const { canScroll, editorParent } = scrollEditorToLine(elem, preview, line, editor);
    if (canScroll) {
      editorParent.addEventListener("scrollend", setCursor, { once: true });
    } else {
      setCursor();
    }
  } else {
    // When the section of the document is not rendered by CodeMirror, we do not have an accurate position of the line.
    // This is because there is line wrapping, which means some lines will end up with a bigger height
    // We keep smooth scrolling util we end up with some threshold of the desired position.
    keepScrolling();
  }
}

function scrollEditorToLine(elem, preview, line, editor) {
  const lineBlock = editor.lineBlockAt(line.from);
  const targetRect = elem.getBoundingClientRect();
  const previewRect = preview.current.getBoundingClientRect();
  const editorParent = editor.dom.parentElement;

  const editorScrollOffset = targetRect.top;
  const top = lineBlock.top - editorScrollOffset + previewRect.top + previewTopPadding;
  const direction = Math.sign(editorParent.scrollTop - top);
  const threshhold = 5;
  const canScroll =
    !(direction === 1 && editorParent.scrollTop === 0) &&
    !(direction === -1 && editorParent.scrollTop + editorParent.clientHeight >= editorParent.scrollHeight) &&
    Math.abs(editorParent.scrollTop - top) > threshhold;
  editorParent.scrollTo({
    top,
    behavior: "smooth",
  });

  return { canScroll, editorParent };
}

export function findSoruceMappedPreviousElement(startingElem) {
  let elem = startingElem;
  while (elem != null) {
    const id = elem.getAttribute("data-line-id");
    if (id) return [id, elem];
    elem = elem.previousElementSibling;
  }

  return [undefined, elem];
}
