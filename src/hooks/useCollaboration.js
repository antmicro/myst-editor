import * as Y from "yjs";
import * as awarenessProtocol from "y-protocols/awareness.js";
import { WebsocketProvider } from "y-websocket";
import { useMemo, useState } from "preact/hooks";

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

export default function useCollaboration(settings) {
  if (!settings.enabled) {
    return {};
  }

  const ydoc = useMemo(() => new Y.Doc(), []);
  const [ready, setReady] = useState(false);

  const provider = useMemo(() => {
    const prov = new WebsocketProvider(
      settings.wsUrl ?? "ws://localhost:4444",
      settings.room,
      ydoc,
      {
        connect: true,
        params: {},
        WebSocketPolyfill: WebSocket,
        awareness: new awarenessProtocol.Awareness(ydoc),
        maxBackoffTime: 2500,
      },
    );

    prov.awareness.setLocalStateField("user", {
      name: settings.username,
      color: settings.color,
    });

    prov.on("status", ({ status }) => {
      if (status != "connected") return;

      prov.on("sync", (isSynced) => {
        if (!isSynced) return;

        prov.firstUser = true;
        setReady(true);
      });
    });

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

  return {
    provider,
    undoManager,
    ytext,
    ydoc,
    ready,
  };
}
