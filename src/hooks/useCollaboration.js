import * as Y from "yjs";
import * as awarenessProtocol from "y-protocols/awareness.js";
import { WebsocketProvider } from "y-websocket";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";

WebsocketProvider.prototype.watchCollabolators = function (hook) {
  this.awareness.on("change", ({ added, removed }) => {
    if (added || removed) {
      let collabolators = Array.from(this.awareness.states)
        .map(([key, { user }]) => ({ login: user.name, color: user.color }))
        .reduce((curr, data) => {
          curr[data.login] = data;
          return curr;
        }, {});
      hook(Object.values(collabolators));
    }
  });
};

export default function useCollaboration(settings, parent) {
  if (!settings.enabled) {
    return {};
  }

  const ydoc = useMemo(() => new Y.Doc(), []);
  const [synced, setSynced] = useState(false);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState(false);
  const ytext = useMemo(() => ydoc.getText("codemirror"), []);
  const changeMap = useRef(new Map());

  // Y.js does not throw errors, it only logs them. We want to raise a
  // fatal error when there are any errors in the collaborative state
  // so we add a hook to `console.error` which checks if it came from Yjs.
  useEffect(() => {
    const defaultError = console.error;
    const isFromYjs = (err) => err?.includes("Caught error while handling a Yjs update");
    console.error = (...err) => {
      if (isFromYjs(err[0])) setError("Collaboration error occured. Please check browser logs and restart the MyST Editor");
      defaultError(...err);
    };
  }, []);

  const provider = useMemo(() => {
    const prov = new WebsocketProvider(settings.wsUrl ?? "ws://localhost:4444", settings.room, ydoc, {
      connect: true,
      params: {},
      WebSocketPolyfill: WebSocket,
      awareness: new awarenessProtocol.Awareness(ydoc),
      maxBackoffTime: 2500,
    });

    prov.awareness.setLocalStateField("user", {
      name: settings.username,
      color: settings.color,
    });

    prov.ws.onerror = () => setError(true);
    prov.on("sync", setSynced);
    prov.on("status", ({ status }) => setConnected(status == "connected"));

    ytext.observe((_, tr) => {
      if (!tr.local) return;
      prov.awareness.setLocalStateField("lastChanged", Date.now());
    });
    prov.awareness.on("change", () => {
      prov.awareness.getStates().forEach((state, id) => {
        if (id === prov.awareness.clientID || !state.lastChanged || changeMap.current.get(id)?.lastChanged === state.lastChanged) return;

        const oldTimer = changeMap.current.get(id)?.timer;
        clearTimeout(oldTimer);

        if (!oldTimer) {
          parent.querySelectorAll(".cm-ySelectionInfo").forEach((/** @type {HTMLElement} */ n) => {
            if (n.innerText !== state.user.name) return;
            n.classList.add("active");
          });
        }
        const timer = setTimeout(() => {
          parent.querySelectorAll(".cm-ySelectionInfo").forEach((/** @type {HTMLElement} */ n) => {
            if (n.innerText !== state.user.name) return;
            n.classList.remove("active");
          });
          changeMap.current.set(id, { ...changeMap.current.get(id), timer: null });
        }, settings.hideUsernameDelay ?? 5000);
        changeMap.current.set(id, {
          lastChanged: state.lastChanged,
          timer,
        });
      });
    });

    return prov;
  }, []);

  const undoManager = useMemo(
    () =>
      new Y.UndoManager(ytext, {
        trackedOrigins: new Set([provider.doc.clientID, null]),
        ignoreRemoteMapChanges: true,
      }),
    [],
  );

  useEffect(() => !provider.ws && setError(true), [connected]);

  return {
    provider,
    undoManager,
    ytext,
    ydoc,
    error,
    ready: synced && connected,
  };
}
