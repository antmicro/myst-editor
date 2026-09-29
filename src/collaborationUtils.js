// Message types 0-3 are reserved by y-websocket.
export const messageInitialize = 4;
export const messageInitialized = 5;

const encoder = new TextEncoder();
const decoder = new TextDecoder();

/** @param {string} text */
export const encodeInitializeMessage = (text) => {
  const encodedText = encoder.encode(text);
  const message = new Uint8Array(encodedText.length + 1);
  message[0] = messageInitialize;
  message.set(encodedText, 1);
  return message;
};

/** @param {Uint8Array} message */
export const decodeInitializeMessage = (message) => decoder.decode(message.subarray(1));

export const encodeInitializedMessage = () => Uint8Array.of(messageInitialized);

/**
 * Fills an empty document with its initial text. `initial` doubles as a marker that the document
 * was already initialized: it is set here and in MystEditorGit#carryForward, and never unset, so
 * its presence means the text must not be seeded again - even if it was since deleted.
 *
 * @param {import("yjs").Doc} doc
 * @param {string} text
 */
export const initializeYText = (doc, text) => {
  const ytext = doc.getText("codemirror");
  const meta = doc.getMap("meta");
  if (meta.has("initial")) return;

  doc.transact(() => {
    const seed = ytext.length === 0 && text.length > 0;
    // Setting `initial` to true makes the server ignore the insert below when tracking changes.
    meta.set("initial", seed);
    if (seed) ytext.insert(0, text);
  });
};
