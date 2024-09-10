import { EditorView } from "codemirror";
import { markdownUpdatedStateEffect } from "../hooks/useText";
import { findNearestElementForLine } from "../hooks/markdownSourceMap";

export const syncPreviewWithCursor = (lineMap, preview) =>
  EditorView.updateListener.of((update) => {
    const cursorLineBefore = update.startState.doc.lineAt(update.startState.selection.main.head).number;
    const cursorLineAfter = update.state.doc.lineAt(update.state.selection.main.head).number;
    const selectionChanged = update.selectionSet && (cursorLineBefore !== cursorLineAfter || cursorLineBefore === 1);
    const markdownUpdated = update.transactions.some((t) => t.effects.some((e) => e.is(markdownUpdatedStateEffect)));
    const resized = update.geometryChanged && !update.viewportChanged;
    if (update.docChanged || (!selectionChanged && !markdownUpdated && !resized)) {
      return;
    }

    const editorRect = update.view.dom.parentElement.getBoundingClientRect();
    const topBlock = update.view.lineBlockAtHeight(editorRect.top - update.view.documentTop);
    const topLine = update.view.state.doc.lineAt(topBlock.from).number + 1;
    const bottomBlock = update.view.lineBlockAtHeight(editorRect.top + editorRect.height - update.view.documentTop);
    const bottomLine = update.view.state.doc.lineAt(bottomBlock.from).number;

    const [matchingElem, matchingLine] = findNearestElementForLine(cursorLineAfter, lineMap, preview.current);
    if (matchingElem) {
      const bottomOffset = bottomLine == cursorLineBefore && cursorLineAfter > cursorLineBefore ? 18 : 0;
      const topOffset =
        matchingLine !== 1 && (topLine == cursorLineAfter || (topLine == cursorLineBefore && cursorLineAfter <= cursorLineBefore)) ? 18 : 0;
      scrollPreviewElemIntoView({
        view: update.view,
        matchingLine,
        matchingElem,
        behavior: "smooth",
        offset: -100 + bottomOffset + topOffset,
        preview: preview.current,
      });
    }
  });

/** @param {Object} param0
 * @param {EditorView} param0.view
 */
function scrollPreviewElemIntoView({ view, matchingLine, matchingElem, behavior = "auto", offset = 0, preview }) {
  const cursorBlock = view.lineBlockAt(view.state.doc.line(matchingLine).from);
  const editorRect = view.dom.parentElement.getBoundingClientRect();
  const previewRect = preview.getBoundingClientRect();
  let matchingRect = matchingElem.getBoundingClientRect();

  const editorCursorPositionRelative = Math.max((cursorBlock.top - view.dom.parentElement.scrollTop) / editorRect.height, 0);
  const elemScrollOffset = previewRect.height * editorCursorPositionRelative;

  const top = matchingRect.top + preview.scrollTop - elemScrollOffset + offset;
  if (behavior == "smooth") {
    smoothScrollTo(preview, top);
  } else {
    preview.scrollTo({ top, behavior });
  }
}

export const syncPreviewWithEditorScroll = (lineMap, preview) => {
  let ticking = false;
  let wheeling = false;
  let wheelTimeout;

  return EditorView.domEventHandlers({
    wheel: () => {
      clearTimeout(wheelTimeout);
      wheeling = true;
      wheelTimeout = setTimeout(() => {
        wheeling = false;
      }, 200);
    },
    scroll: (_, view) => {
      if (!wheeling || ticking) return;

      window.requestAnimationFrame(() => {
        const cursorLine = view.state.doc.lineAt(view.state.selection.main.head).number;
        const editorRect = view.dom.parentElement.getBoundingClientRect();
        const topBlock = view.lineBlockAtHeight(editorRect.top - view.documentTop);
        const topLine = view.state.doc.lineAt(topBlock.from).number + 1;
        const line = Math.max(cursorLine, topLine);
        const [matchingElem, matchingLine] = findNearestElementForLine(line, lineMap, preview.current);
        if (matchingElem) {
          scrollPreviewElemIntoView({
            view,
            matchingLine,
            matchingElem,
            offset: cursorLine >= topLine ? -100 : -80,
            preview: preview.current,
          });
        }
        ticking = false;
      });

      ticking = true;
    },
  });
};

/**
 * @param {HTMLElement} preview
 * @param {EditorView} view
 */
export function syncEditorWithPreviewScroll(/** @type {HTMLElement} */ preview, lineMap, view) {
  let ticking = false;
  let wheeling = false;
  let wheelTimeout;

  preview.onwheel = () => {
    clearTimeout(wheelTimeout);
    wheeling = true;
    wheelTimeout = setTimeout(() => {
      wheeling = false;
    }, 200);
  };

  preview.onscroll = () => {
    if (!wheeling || ticking) return;

    window.requestAnimationFrame(() => {
      const cursorLine = view.state.doc.lineAt(view.state.selection.main.head).number;
      const editorRect = view.dom.parentElement.getBoundingClientRect();
      const topBlock = view.lineBlockAtHeight(editorRect.top - view.documentTop);
      const topLine = view.state.doc.lineAt(topBlock.from).number + 1;
      if (cursorLine >= topLine) {
        // scroll to match the cursor position
        const [matchingElem, matchingLine] = findNearestElementForLine(cursorLine, lineMap);
        if (matchingElem) {
          const mystPreviewRect = preview.getBoundingClientRect();
          const cursorBlock = view.lineBlockAt(view.state.doc.line(matchingLine).from);
          const elemRect = matchingElem.getBoundingClientRect();

          const previewCursorPositionRelative = Math.max(elemRect.top / mystPreviewRect.height, 0);
          const editorScrollOffset = editorRect.height * previewCursorPositionRelative;
          view.dom.parentElement.scrollTo({
            // +100 is here to account for padding
            top: cursorBlock.top + 100 - editorScrollOffset,
            behavior: "auto",
          });
        }
      } else {
        // scroll to match the first visible element int the preview
        let topChild;
        const children = preview.getElementsByTagName("*");
        for (const child of children) {
          if (child.classList.contains("cm-previewFocus") || !child.hasAttribute("data-line-id")) continue;
          const rect = child.getBoundingClientRect();
          if (rect.top - preview.getBoundingClientRect().top >= 0) {
            topChild = child;
            break;
          }
        }
        const id = topChild.getAttribute("data-line-id");
        let line;
        for (const [lineNum, elId] of lineMap.current.entries()) {
          if (elId === id) {
            line = lineNum;
            break;
          }
        }

        if (line) {
          view.dom.parentElement.scrollTo({
            top: view.lineBlockAt(view.state.doc.line(line).from).top + 20,
            behavior: "auto",
          });
        }
      }

      ticking = false;
    });

    ticking = true;
  };
}

const scrollAnimIds = new Map();

function smoothScrollTo(/** @type {HTMLElement} */ element, top) {
  const startTop = element.scrollTop;
  const diff = top - startTop;
  let startTime;
  if (scrollAnimIds.has(element.className)) {
    cancelAnimationFrame(scrollAnimIds.get(element.className));
  }

  function animateScroll(time) {
    const dt = time - startTime;
    let pos = startTop + diff * dt * 0.01;
    pos = top > startTop ? Math.min(pos, top) : Math.max(pos, top);
    element.scrollTo({ top: pos });

    if (pos != top) {
      const id = requestAnimationFrame((time) => {
        animateScroll(time);
      });
      scrollAnimIds.set(element.className, id);
    }
  }

  const id = requestAnimationFrame((time) => {
    if (!startTime) {
      startTime = time;
    }
    animateScroll(time);
  });
  scrollAnimIds.set(element.className, id);
}
