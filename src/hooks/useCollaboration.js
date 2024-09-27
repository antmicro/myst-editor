import * as Y from "yjs";
import * as awarenessProtocol from "y-protocols/awareness.js";
import { WebsocketProvider } from "y-websocket";
import { useContext, useEffect, useMemo, useState } from "preact/hooks";
import { hideUsernames } from "../extensions/hideUsernames";
import { MystState } from "../mystState";
import { useSignalEffect } from "@preact/signals";

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

export default function useCollaboration() {
  const { options } = useContext(MystState);
  if (!options.collaboration.value.enabled) {
    return {};
  }

  const [ydoc, setYdoc] = useState(new Y.Doc());
  const [provider, setProvider] = useState(null);
  const [synced, setSynced] = useState(false);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState(false);

  // Y.js does not throw errors, it only logs them. We want to raise a
  // fatal error when there are any errors in the collaborative state
  // so we add a hook to `console.error` which checks if it came from Yjs.
  useEffect(() => {
    const defaultError = console.error;
    const isFromYjs = (err) => err?.includes("Caught error while handling a Yjs update");
    console.error = (...err) => {
      if (isFromYjs(err[0])) setError("Collaboration error occured. Please check browser logs and restart MyST Editor");
      defaultError(...err);
    };
  }, []);

  useSignalEffect(() => {
    setSynced(false);
    setConnected(false);
    setError(false);
    const doc = new Y.Doc();
    const prov = new WebsocketProvider(options.collaboration.value.wsUrl, options.collaboration.value.room, doc, {
      connect: true,
      params: {},
      WebSocketPolyfill: WebSocket,
      awareness: new awarenessProtocol.Awareness(doc),
      maxBackoffTime: 2500,
    });

    prov.awareness.setLocalStateField("user", {
      name: options.collaboration.value.username,
      color: options.collaboration.value.color,
    });

    prov.ws.onerror = () => setError(true);
    prov.on("sync", setSynced);
    prov.on("status", ({ status }) => setConnected(status == "connected"));

    hideUsernames({ ytext: doc.getText("codemirror"), prov, parent: options.parent, hideDelay: options.hideUsernameDelay.value });

    setProvider(prov);
    setYdoc(doc);

    return () => {
      prov.destroy();
      doc.destroy();
    };
  });

  const ytext = useMemo(() => ydoc.getText("codemirror"), [ydoc]);

  const undoManager = useMemo(
    () =>
      provider &&
      new Y.UndoManager(ytext, {
        trackedOrigins: new Set([provider.doc.clientID, null]),
        ignoreRemoteMapChanges: true,
      }),
    [ytext, provider],
  );

  useEffect(() => provider && !provider.ws && setError(true), [connected, provider]);

  return {
    provider,
    undoManager,
    ytext,
    ydoc,
    error,
    ready: synced && connected,
  };
}
