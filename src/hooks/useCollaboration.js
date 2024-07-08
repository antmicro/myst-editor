import * as Y from "yjs";
import * as awarenessProtocol from "y-protocols/awareness.js";
import { WebsocketProvider } from "y-websocket";
import { useEffect, useMemo, useState } from "preact/hooks";

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

const checkDocExists = (settings) =>
  fetch(settings.wsUrl.replace("ws://", "http://").replace("wss://", "https://") + "/check/" + settings.room, { mode: "no-cors" }).then(
    (r) => r.status !== 204,
  );

export default function useCollaboration(settings, text) {
  if (!settings.enabled) {
    return {};
  }

  const ydoc = useMemo(() => new Y.Doc(), []);

  const [docContentSynced, setDocContentSynced] = useState(false);
  const [synced, setSynced] = useState(false);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState(false);

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

    return prov;
  }, []);

  const ytext = useMemo(() => ydoc.getText("codemirror"), []);

  const undoManager = useMemo(
    () =>
      new Y.UndoManager(ytext, {
        trackedOrigins: new Set([provider.doc.clientID, null]),
        ignoreRemoteMapChanges: true,
      }),
    [],
  );

  useEffect(() => {
    checkDocExists(settings).then((exists) => {
      if (exists) {
        console.warn("[Collaboration] Document does not exist! Overriding with initial content");
        ytext.applyDelta([{ insert: text.get() }]);
      }
      setDocContentSynced(true);
    });
  }, []);

  useEffect(() => !provider.ws && setError(true), [connected]);

  return {
    provider,
    undoManager,
    ytext,
    ydoc,
    error,
    ready: synced && connected && docContentSynced,
  };
}
