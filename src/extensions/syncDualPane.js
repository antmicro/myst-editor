import { EditorView } from "codemirror";
import { markdownUpdatedStateEffect } from "../hooks/useText";
import { findNearestElementForLine, getLineById } from "../hooks/markdownSourceMap";

const previewTopPadding = 20;

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
  });

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
    // This is needed to differentiate between scrolling caused by the user and scrolling caused by this JS file.
    // A side effect of this is that the scrolling will not sync if using the scrollbar.
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
        const bottomBlock = view.lineBlockAtHeight(editorRect.bottom - view.documentTop);
        const bottomLine = view.state.doc.lineAt(bottomBlock.from).number;
        const line = cursorLine < topLine || cursorLine > bottomLine ? topLine : cursorLine;
        const [matchingElem, matchingLine] = findNearestElementForLine(line, lineMap, preview.current);
        if (matchingElem) {
          scrollPreviewElemIntoView({
            view,
            matchingLine,
            matchingElem,
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
      const bottomBlock = view.lineBlockAtHeight(editorRect.bottom - editorRect.top + view.dom.parentElement.scrollTop);
      const bottomLine = view.state.doc.lineAt(bottomBlock.from).number - 2;
      if (cursorLine >= topLine && cursorLine <= bottomLine) {
        // scroll to match the cursor position
        const [matchingElem, matchingLine] = findNearestElementForLine(cursorLine, lineMap, preview);
        if (matchingElem) {
          const previewRect = preview.getBoundingClientRect();
          const cursorBlock = view.lineBlockAt(view.state.doc.line(matchingLine).from);
          const elemRect = matchingElem.getBoundingClientRect();

          const editorScrollOffset = elemRect.top;
          const top = cursorBlock.top - editorScrollOffset + previewRect.top + previewTopPadding;
          view.dom.parentElement.scrollTo({
            top,
            behavior: "auto",
          });
        }
      } else {
        // scroll to match the first visible element in the preview
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
        let line = getLineById(lineMap.current, id);

        if (line) {
          view.dom.parentElement.scrollTo({
            top: view.lineBlockAt(view.state.doc.line(line).from).top + previewTopPadding,
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
