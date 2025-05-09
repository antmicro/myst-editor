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
 * @type {{bindState: function(string,WSSharedDoc):Promise<void>, writeState:function(string,WSSharedDoc):Promise<any>, provider: LeveldbPersistence | undefined}|null}
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

const getPrefix = (docname) => {
  if (!docname.includes("/")) return undefined;
  return docname.split("/").slice(0, 2).join("/");
};
const DOCS_WITH_CHANGES = "docsWithChanges";
const docsWithChanges = new Map();
const statusConns = new Map();

const sendStatusUpdates = (prefix, statuses) => {
  const msg = JSON.stringify(statuses);
  statusConns.get(prefix).forEach((_, conn) => {
    try {
      conn.send(msg);
    } catch (error) {
      conn.close();
    }
  });
};

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

async function updateDocStatus(docname, fn) {
  if (!persistence) return;
  const docPrefix = getPrefix(docname);
  try {
    const currentMetadataCache = docsWithChanges.get(docPrefix) ?? {};
    let currentMetadata = currentMetadataCache[docname];
    if (!currentMetadata) {
      const dbMetadata = (await persistence.provider.getMeta(docPrefix, DOCS_WITH_CHANGES)) || {};
      currentMetadata = dbMetadata[docname] ?? {};
      currentMetadataCache[docname] = currentMetadata;
      docsWithChanges.set(docPrefix, currentMetadataCache);
    }

    const newMetadata = fn(currentMetadata);

    if (Object.keys(newMetadata).length === Object.keys(currentMetadata).length && Object.keys(newMetadata).every((tag) => tag in currentMetadata))
      return;

    // Status changed
    if (Object.keys(newMetadata).length === 0) {
      delete currentMetadataCache[docname];
    } else {
      currentMetadataCache[docname] = newMetadata;
    }

    await persistence.provider.setMeta(docPrefix, DOCS_WITH_CHANGES, currentMetadataCache);
    docsWithChanges.set(docPrefix, currentMetadataCache);

    sendStatusUpdates(docPrefix, currentMetadataCache);
  } catch (error) {
    await logAsync(docname, { event: "error", msg: `Error while updating document change status: ${error}` });
  }
}

async function markDocWithChanges(docname, tags = {}) {
  await updateDocStatus(docname, (meta) => ({ ...meta, ...tags }));
}

async function unmarkDocWithChanges(docname, tags = {}) {
  await updateDocStatus(docname, (meta) => Object.fromEntries(Object.entries(meta).filter(([tag]) => !(tag in tags))));
}

/**
 * @param {str} docPrefix Part of the docname up to the second '/'
 * @returns {string[]} Returns docnames starting with `docPrefix` that contain changes
 * */
async function getDocsWithChanges(docPrefix) {
  if (!persistence) return {};
  const cachedMetadata = docsWithChanges.get(docPrefix);
  if (cachedMetadata != undefined) {
    return cachedMetadata;
  }

  try {
    let metadata = (await persistence.provider.getMeta(docPrefix, DOCS_WITH_CHANGES)) ?? {};
    docsWithChanges.set(docPrefix, metadata);
    return metadata;
  } catch (error) {
    console.error(error);
  }
}

/**
 *  @param {Y.Transaction} tr
 *  @param {Y.Map} commentMap
 */
async function onCommentChange(docname, commentMap) {
  if (commentMap.size != 0) {
    markDocWithChanges(docname, { comments: true });
  } else {
    unmarkDocWithChanges(docname, { comments: true });
  }
}

/**
 * @param {Y.Doc} doc
 * @param {string} docname
 */
async function onTextChange(doc, docname) {
  const metaMap = doc.getMap("meta");
  const initial = metaMap.get("initial");
  // We want to ignore the initial text that is inserted into an empty document on edtior startup. Subsequent changes should however mark the document as changed.
  if (initial === true) {
    metaMap.set("initial", false);
  } else if (initial == false) {
    markDocWithChanges(docname, { text: true });
  }
}

const getYDocLock = new Map();

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
/**
 * Gets a Y.Doc by name, whether in memory or on disk
 *
 * @param {string} docname - the name of the Y.Doc to find or create
 * @param {boolean} gc - whether to allow gc on the doc (applies only when created)
 * @return {Promise<WSSharedDoc>}
 */
export const getYDoc = async (docname, gc = true, attempt = 0) => {
  if (attempt > 5) return null;

  if (getYDocLock.get(docname)) {
    await sleep(2000);
    return getYDoc(docname, gc, attempt + 1);
  }
  try {
    getYDocLock.set(docname, true);
    var existingDoc = docs.get(docname);
    if (existingDoc) return existingDoc;

    const doc = new WSSharedDoc(docname);
    doc.gc = gc;
    if (persistence !== null) {
      await logAsync(docname, { event: "connection-setup", msg: "Initializing persistent document '" + docname + "'" });
      await persistence.bindState(docname, doc);
      await logAsync(docname, { event: "connection-setup", msg: "Document '" + docname + "' was loaded" });
    } else {
      logAsync(docname, { event: "connection-setup", msg: "Persistence is disabled: creating a new document '" + docname + "'" });
    }
    logChanges(doc, docname);
    docs.set(docname, doc);

    if (persistence !== null && docname.includes("/")) {
      // watch doc for changes
      const commentMap = doc.getMap();
      commentMap.observe(() => onCommentChange(docname, commentMap));
      doc.getText("codemirror").observe(() => onTextChange(doc, docname));
    }

    return doc;
  } finally {
    getYDocLock.set(docname, false);
  }
};

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
const closeConn = (doc, conn, reason) => {
  if (doc.conns.has(conn)) {
    /**
     * @type {Set<number>}
     */
    // @ts-ignore
    const controlledIds = doc.conns.get(conn);
    doc.conns.delete(conn);

    logAsync(doc.name, { event: "connection-teardown", connectionId: conn.__connectionId, reason });

    awarenessProtocol.removeAwarenessStates(doc.awareness, Array.from(controlledIds), null);
    if (doc.conns.size === 0 && persistence !== null) {
      // If persisted, we store state and destroy ydocument but we do not ever delete a document from the memory.
      // This is so that we can avoid race condition on the persistence layer which happen when the document
      // is persisted (when a WS connection is being closed) and then immediately loaded from DB (when a new WS connection is being opened).
      persistence
        .writeState(doc.name, doc)
        .then(() => logAsync(doc.name, { event: "connection-teardown", connectionId: conn.__connectionId, reason, msg: "Document state persisted" }));
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
    closeConn(doc, conn, "Connection state not connecting or open");
  }
  try {
    logAsync(doc.name, { event: "ws-message-send", connectionId: conn.__connectionId, msg: tryDecode(m) });
    conn.send(
      m,
      /** @param {any} err */ (err) => {
        err != null && closeConn(doc, conn, "Callback error while sending");
      },
    );
  } catch (e) {
    closeConn(doc, conn, "Error caught while sending");
  }
};

const pingTimeout = 30000;

/**
 * @param {any} conn
 * @param {any} req
 * @param {any} opts
 */
export const setupWSConnection = async (conn, req, { docName = req.url.split("?")[0], gc = true } = {}) => {
  conn.__connectionId = Math.floor(Math.random() * 100000);
  conn.binaryType = "arraybuffer";
  logAsync(docName, { event: "connection-setup", msg: "New connection", connectionId: conn.__connectionId });

  // get doc, initialize if it does not exist yet
  const docPromise = getYDoc(docName, gc);

  conn.on(
    "message",
    /** @param {ArrayBuffer} message */ (message) =>
      docPromise.then((doc) => {
        if (doc) messageListener(conn, doc, new Uint8Array(message));
      }),
  );

  const doc = await docPromise;
  if (!doc) {
    conn.close();
    return;
  }

  doc.conns.set(conn, new Set());
  // listen and reply to events

  // Check if connection is still alive
  let pongReceived = true;
  const pingInterval = setInterval(() => {
    if (!pongReceived) {
      if (doc.conns.has(conn)) {
        closeConn(doc, conn, `Pong not received after ${pingTimeout}ms`);
      }
      clearInterval(pingInterval);
    } else if (doc.conns.has(conn)) {
      pongReceived = false;
      try {
        conn.ping();
      } catch (e) {
        closeConn(doc, conn, "Caught error while pinging");
        clearInterval(pingInterval);
      }
    }
  }, pingTimeout);
  conn.on("close", () => {
    closeConn(doc, conn, "Close event");
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
  console.log(`[handleRequest] Received ${request.method} request with url: ${request.url}`);
  const params = new URLSearchParams(request.url?.split("?")[1]);
  console.log(`[handleRequest] parsed parameters: ${[...params.entries()]}`);

  if (request.url.startsWith("connections/") && request.method == "PATCH") {
    const room = request.url?.split("?")[0].replace("connections/", "");

    console.log(`[handleRequest] room is ${room} (${new TextEncoder().encode(room)})`);
    console.log(`[handleRequest] room is present: ${docs.has(room)}`);
    console.log(`[handleRequest] Total rooms: ${docs.size}`);

    const doc = docs.get(room);
    if (!doc) return { code: 404, error: `Room ${room} does not exist` };

    console.log(`Disconnecting ${params.get("users")}`);

    if (!params.get("users")) {
      return { code: 400, error: "No users were supplied" };
    }

    logAsync(doc.name, {
      event: "remove-connections",
      msg: `Received a request to drop connections to ${doc.name} with users which are not ${params.get("users")}`,
    });

    const usersWithAccess = params.get("users").split(",");
    console.log(`[handleRequest] Users with access ${usersWithAccess}`);

    for (const conn of doc.conns.keys()) {
      if (!usersWithAccess.includes(conn.__username)) {
        conn.close();
        logAsync(doc.name, {
          event: "remove-connections",
          msg: `Dropping connection with ${conn.__username}`,
        });
      }
    }

    return { error: null };
  }

  return { error: "Unknown endpoint", code: 404 };
};

/**
 * @param {WebSocket} conn
 * @param {http.IncomingMessage} req
 */
export const setupStatusConnection = async (conn, req) => {
  const prefix = req.url.split("?")[0];
  if (!statusConns.has(prefix)) {
    statusConns.set(prefix, new Map());
  }
  const listenerMap = statusConns.get(prefix);
  listenerMap.set(conn, "");

  let pongReceived = true;
  const pingInterval = setInterval(() => {
    if (!pongReceived) {
      conn.close();
    } else {
      pongReceived = false;
      try {
        conn.ping();
      } catch (e) {
        conn.close();
      }
    }
  }, pingTimeout);

  conn.on("pong", () => {
    pongReceived = true;
  });

  conn.on("message", async (data) => {
    if (!data) return;
    await unmarkDocWithChanges(data, { comments: true, text: true });
  });

  conn.on("close", () => {
    clearInterval(pingInterval);
    listenerMap.delete(conn);
  });

  try {
    // send initial statuses
    conn.send(JSON.stringify(await getDocsWithChanges(prefix)));
  } catch (error) {
    conn.close();
  }
};
