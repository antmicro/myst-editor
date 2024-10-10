import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

/**
 * @param {Object} param0
 * @param {Y.Text} param0.ytext
 * @param {WebsocketProvider} param0.prov
 * @param {number} param0.hideDelay
 * @returns
 */
export function hideUsernames({ ytext, prov, parent, hideDelay = 5000 }) {
  const changeMap = new Map();
  const loadDate = Date.now();

  ytext.observe((_, tr) => {
    if (!tr.local) return;
    prov.awareness.setLocalStateField("lastChanged", Date.now());
  });
  prov.awareness.on("change", () => {
    prov.awareness.getStates().forEach((state, id) => {
      const localState = id === prov.awareness.clientID;
      const newChange = state.lastChanged && changeMap.get(id)?.lastChanged !== state.lastChanged && state.lastChanged >= loadDate;
      if (localState || !newChange) return;

      const oldTimer = changeMap.get(id)?.timer;
      clearTimeout(oldTimer);

      const showUsername = () => {
        parent.querySelectorAll(".cm-ySelectionInfo").forEach((/** @type {HTMLElement} */ n) => {
          if (n.innerText !== state.user.name) return;
          n.classList.add("active");
        });
      };

      const hideUsername = () => {
        parent.querySelectorAll(".cm-ySelectionInfo").forEach((/** @type {HTMLElement} */ n) => {
          if (n.innerText !== state.user.name) return;
          n.classList.remove("active");
        });
      };

      if (!oldTimer) {
        showUsername();
        // y-codemirror.next does not expose anything to modify decorations so we need this hack
        const observer = new MutationObserver((mutations) => {
          for (const mutation of mutations) {
            const editorTarget = mutation.target.className.includes("cm-line");
            const caretChanged = Boolean([...mutation.removedNodes].find((n) => n.classList?.contains?.("cm-ySelectionCaret")));
            if (editorTarget && caretChanged) {
              showUsername();
            }
          }
        });
        observer.observe(parent, { childList: true, subtree: true });
        changeMap.set(id, { ...changeMap.get(id), observer });
      }
      const timer = setTimeout(() => {
        hideUsername();
        changeMap.get(id).observer.disconnect();
        changeMap.set(id, { ...changeMap.get(id), timer: null });
      }, hideDelay);
      changeMap.set(id, { ...changeMap.get(id), timer, lastChanged: state.lastChanged });
    });
  });
}
