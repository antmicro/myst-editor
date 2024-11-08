import * as Y from "yjs";
import * as syncProtocol from "y-protocols/sync.js";
import * as awarenessProtocol from "y-protocols/awareness.js";
import { LeveldbPersistence } from "y-leveldb";

import * as encoding from "lib0/encoding.js";
import * as decoding from "lib0/decoding.js";
import * as map from "lib0/map.js";

import debounce from "lodash.debounce";

import { callbackHandler } from "./callback.js";
import { isCallbackSet } from "./callback.js";

import logChanges, { logAsync } from "./logging.js";

const CALLBACK_DEBOUNCE_WAIT = parseInt(process.env.CALLBACK_DEBOUNCE_WAIT) || 2000;
const CALLBACK_DEBOUNCE_MAXWAIT = parseInt(process.env.CALLBACK_DEBOUNCE_MAXWAIT) || 10000;

const wsReadyStateConnecting = 0;
const wsReadyStateOpen = 1;
const wsReadyStateClosing = 2; // eslint-disable-line
const wsReadyStateClosed = 3; // eslint-disable-line

// disable gc when using snapshots!
const gcEnabled = process.env.GC !== "false" && process.env.GC !== "0";
const persistenceDir = process.env.YPERSISTENCE;
/**
 * @type {{bindState: function(string,WSSharedDoc):void, writeState:function(string,WSSharedDoc):Promise<any>, provider: any}|null}
 */
let persistence = null;
if (typeof persistenceDir === "string") {
  console.info('Persisting documents to "' + persistenceDir + '"');
  // @ts-ignore
  const ldb = new LeveldbPersistence(persistenceDir);
  persistence = {
    provider: ldb,
    bindState: async (docName, ydoc) => {
      logAsync(docName, { event: "persistence", msg: "Adding a persistence hook for doc: '" + docName + "'" });
      const persistedYdoc = await ldb.getYDoc(docName);
      const newUpdates = Y.encodeStateAsUpdate(ydoc);
      ldb.storeUpdate(docName, newUpdates);
      Y.applyUpdate(ydoc, Y.encodeStateAsUpdate(persistedYdoc));
      ydoc.on(
        "update",
        /** @type {Y.Update} */ (update) => {
          logAsync(docName, { event: "persistence", msg: "Persisting document update" });
          ldb.storeUpdate(docName, update);
        },
      );
    },
    // eslint-disable-next-line no-unused-vars
    writeState: async (docName, ydoc) => {},
  };
}

/**
 * @param {{bindState: function(string,WSSharedDoc):void,
 * writeState:function(string,WSSharedDoc):Promise<any>,provider:any}|null} persistence_
 */
export const setPersistence = (persistence_) => {
  persistence = persistence_;
};

/**
 * @return {null|{bindState: function(string,WSSharedDoc):void,
 * writeState:function(string,WSSharedDoc):Promise<any>}|null} used persistence layer
 */
export const getPersistence = () => persistence;

/**
 * @type {Map<string,WSSharedDoc>}
 */
export const docs = new Map();
// exporting docs so that others can use it

const messageSync = 0;
const messageAwareness = 1;
// const messageAuth = 2

/**
 * @param {Uint8Array} update
 * @param {any} origin
 * @param {WSSharedDoc} doc
 */
const updateHandler = (update, origin, doc) => {
  const encoder = encoding.createEncoder();
  encoding.writeVarUint(encoder, messageSync);
  syncProtocol.writeUpdate(encoder, update);
  const message = encoding.toUint8Array(encoder);
  doc.conns.forEach((_, conn) => send(doc, conn, message));
};

class WSSharedDoc extends Y.Doc {
  /**
   * @param {string} name
   */
  constructor(name) {
    super({ gc: gcEnabled });
    this.name = name;
    /**
     * Maps from conn to set of controlled user ids. Delete all user ids from awareness when this conn is closed
     * @type {Map<WebSocket, Set<number>>}
     */
    this.conns = new Map();
    /**
     * @type {awarenessProtocol.Awareness}
     */
    this.awareness = new awarenessProtocol.Awareness(this);
    this.awareness.setLocalState(null);
    /**
     * @param {{ added: Array<number>, updated: Array<number>, removed: Array<number> }} changes
     * @param {Object | null} conn Origin is the connection that made the change
     */
    const awarenessChangeHandler = ({ added, updated, removed }, conn) => {
      const changedClients = added.concat(updated, removed);
      if (conn !== null) {
        const connControlledIDs = /** @type {Set<number>} */ (this.conns.get(conn));
        if (connControlledIDs !== undefined) {
          added.forEach((clientID) => {
            connControlledIDs.add(clientID);
          });
          removed.forEach((clientID) => {
            connControlledIDs.delete(clientID);
          });
        }
      }
      // broadcast awareness update
      const encoder = encoding.createEncoder();
      encoding.writeVarUint(encoder, messageAwareness);
      encoding.writeVarUint8Array(encoder, awarenessProtocol.encodeAwarenessUpdate(this.awareness, changedClients));
      const buff = encoding.toUint8Array(encoder);

      if (conn && conn.__username == undefined && changedClients.length > 0) {
        const state = this.awareness.states.get(changedClients[0]);
        if (state) {
          conn.__username = state?.user?.name;
        }
      }

      this.conns.forEach((_, c) => {
        send(this, c, buff);
      });
    };
    this.awareness.on("update", awarenessChangeHandler);
    this.on("update", updateHandler);
    if (isCallbackSet) {
      this.on("update", debounce(callbackHandler, CALLBACK_DEBOUNCE_WAIT, { maxWait: CALLBACK_DEBOUNCE_MAXWAIT }));
    }
  }
}

/**
 * Gets a Y.Doc by name, whether in memory or on disk
 *
 * @param {string} docname - the name of the Y.Doc to find or create
 * @param {boolean} gc - whether to allow gc on the doc (applies only when created)
 * @return {WSSharedDoc}
 */
export const getYDoc = (docname, gc = true) =>
  map.setIfUndefined(docs, docname, () => {
    const doc = new WSSharedDoc(docname);
    doc.gc = gc;
    if (persistence !== null) {
      logAsync(docname, { event: "connection-setup", msg: "Loading persistent document '" + docname + "'" });
      persistence.bindState(docname, doc);
    } else {
      logAsync(docname, { event: "connection-setup", msg: "Persistence is disabled: creating a new document '" + docname + "'" });
    }
    logChanges(doc, docname);
    return doc;
  });

/**  @param {Uint8Array} msg */
const tryDecode = (msg) => {
  try {
    const maxLogSize = 1000;
    const msgHead = msg.slice(0, maxLogSize);
    return new TextDecoder().decode(msgHead) + (msgHead.length == maxLogSize ? ` .....<${msg.length - maxLogSize} bytes more>` : "");
  } catch (e) {
    return { failedToDecode: e.toString() };
  }
};

/**
 * @param {any} conn
 * @param {WSSharedDoc} doc
 * @param {Uint8Array} message
 */
const messageListener = (conn, doc, message) => {
  try {
    const encoder = encoding.createEncoder();
    const decoder = decoding.createDecoder(message);
    const messageType = decoding.readVarUint(decoder);

    switch (messageType) {
      case messageSync:
        logAsync(doc.name, { event: "ws-message-recv", type: "sync", connectionId: conn.__connectionId, msg: tryDecode(message) });

        encoding.writeVarUint(encoder, messageSync);
        syncProtocol.readSyncMessage(decoder, encoder, doc, conn);

        // If the `encoder` only contains the type of reply message and no
        // message, there is no need to send the message. When `encoder` only
        // contains the type of reply, its length is 1.
        if (encoding.length(encoder) > 1) {
          send(doc, conn, encoding.toUint8Array(encoder));
        }
        break;
      case messageAwareness: {
        awarenessProtocol.applyAwarenessUpdate(doc.awareness, decoding.readVarUint8Array(decoder), conn);
        break;
      }
    }
  } catch (err) {
    console.error(err);
    doc.emit("error", [err]);
  }
};

/**
 * @param {WSSharedDoc} doc
 * @param {any} conn
 */
const closeConn = (doc, conn) => {
  if (doc.conns.has(conn)) {
    /**
     * @type {Set<number>}
     */
    // @ts-ignore
    const controlledIds = doc.conns.get(conn);
    doc.conns.delete(conn);

    logAsync(doc.name, { event: "connection-teardown", connectionId: conn.__connectionId });

    awarenessProtocol.removeAwarenessStates(doc.awareness, Array.from(controlledIds), null);
    if (doc.conns.size === 0 && persistence !== null) {
      // If persisted, we store state and destroy ydocument but we do not ever delete a document from the memory.
      // This is so that we can avoid race condition on the persistence layer which happen when the document
      // is persisted (when a WS connection is being closed) and then immediately loaded from DB (when a new WS connection is being opened).
      persistence
        .writeState(doc.name, doc)
        .then(() => logAsync(doc.name, { event: "connection-teardown", connectionId: conn.__connectionId, msg: "Document state persisted" }));
    }
  }
  conn.close();
};

/**
 * @param {WSSharedDoc} doc
 * @param {any} conn
 * @param {Uint8Array} m
 */
const send = (doc, conn, m) => {
  if (conn.readyState !== wsReadyStateConnecting && conn.readyState !== wsReadyStateOpen) {
    closeConn(doc, conn);
  }
  try {
    logAsync(doc.name, { event: "ws-message-send", connectionId: conn.__connectionId, msg: tryDecode(m) });
    conn.send(
      m,
      /** @param {any} err */ (err) => {
        err != null && closeConn(doc, conn);
      },
    );
  } catch (e) {
    closeConn(doc, conn);
  }
};

const pingTimeout = 30000;

/**
 * @param {any} conn
 * @param {any} req
 * @param {any} opts
 */
export const setupWSConnection = (conn, req, { docName = req.url.slice(1).split("?")[0], gc = true } = {}) => {
  conn.__connectionId = Math.floor(Math.random() * 100000);
  conn.binaryType = "arraybuffer";
  logAsync(docName, { event: "connection-setup", msg: "New connection", connectionId: conn.__connectionId });

  // get doc, initialize if it does not exist yet
  const doc = getYDoc(docName, gc);
  doc.conns.set(conn, new Set());
  // listen and reply to events
  conn.on("message", /** @param {ArrayBuffer} message */ (message) => messageListener(conn, doc, new Uint8Array(message)));

  // Check if connection is still alive
  let pongReceived = true;
  const pingInterval = setInterval(() => {
    if (!pongReceived) {
      if (doc.conns.has(conn)) {
        closeConn(doc, conn);
      }
      clearInterval(pingInterval);
    } else if (doc.conns.has(conn)) {
      pongReceived = false;
      try {
        conn.ping();
      } catch (e) {
        closeConn(doc, conn);
        clearInterval(pingInterval);
      }
    }
  }, pingTimeout);
  conn.on("close", () => {
    closeConn(doc, conn);
    clearInterval(pingInterval);
  });
  conn.on("pong", () => {
    pongReceived = true;
  });
  // put the following in a variables in a block so the interval handlers don't keep in in
  // scope
  {
    // send sync step 1
    const encoder = encoding.createEncoder();
    encoding.writeVarUint(encoder, messageSync);
    syncProtocol.writeSyncStep1(encoder, doc);
    send(doc, conn, encoding.toUint8Array(encoder));
    const awarenessStates = doc.awareness.getStates();
    if (awarenessStates.size > 0) {
      const encoder = encoding.createEncoder();
      encoding.writeVarUint(encoder, messageAwareness);
      encoding.writeVarUint8Array(encoder, awarenessProtocol.encodeAwarenessUpdate(doc.awareness, Array.from(awarenessStates.keys())));
      send(doc, conn, encoding.toUint8Array(encoder));
    }
  }
};

export const handleRequest = (/** @type {http.IncomingMessage} */ request) => {
  const params = new URLSearchParams(request.url?.split("?")[1]);

  if (!params.get("users")) {
    return;
  }

  if (request.url.startsWith("/connections/") && request.method == "PATCH") {
    const room = request.url?.split("?")[0].replace("/connections/", "");
    const doc = docs.get(room);
    if (!doc) return;

    logAsync(doc.name, {
      event: "remove-connections",
      msg: `Received a request to drop connections to ${doc.name} with users which are not ${params.get("users")}`,
    });

    const usersWithAccess = params.get("users").split(",");
    for (const conn of doc.conns.keys()) {
      if (!usersWithAccess.includes(conn.__username)) {
        conn.close();
        logAsync(doc.name, {
          event: "remove-connections",
          msg: `Dropping connection with ${conn.__username}`,
        });
      }
    }
  }
};
