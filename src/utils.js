import { EditorView } from "codemirror";
import { findNearestElementForLine } from "./markdown/markdownSourceMap";

/**
 * @param {number} pos Nonnegative integer offset of the heading in the active document.
 * @param {object} context Editor state used for navigation.
 */
export function scrollToPos(pos, { editorView, options, text, collab }) {
  const view = editorView.peek();
  // While switching rooms the headings already describe the new file, but the view still holds the old one.
  if (!view || (options.collaboration.peek().enabled && !collab.peek()?.editorReady.peek())) return;
  view.dispatch({ selection: { anchor: pos, head: pos }, effects: EditorView.scrollIntoView(pos, { y: "start" }) });

  // In Preview mode the editor is hidden, so the scroll above is invisible - scroll the preview pane instead.
  const preview = options.mode.peek() === "Preview" && text.preview.peek();
  if (!preview) return;
  const [elem] = findNearestElementForLine(view.state.doc.lineAt(pos).number, text.lineMap, preview);
  if (!elem) return;
  preview.scrollTo({ top: preview.scrollTop + elem.getBoundingClientRect().top - preview.getBoundingClientRect().top, behavior: "smooth" });
}

export async function waitForElement(parent, id) {
  return new Promise((resolve) => {
    const elem = parent.getElementById(id);
    if (elem) {
      resolve(elem);
      return;
    }

    const observer = new MutationObserver(() => {
      const elem = parent.getElementById(id);
      if (elem) {
        observer.disconnect();
        resolve(elem);
      }
    });

    observer.observe(parent, { childList: true, subtree: true });
  });
}
