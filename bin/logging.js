import * as Y from "yjs";

import fs from "fs";
import path from "path";

if (process.env.LOGDIR) {
  console.log(`Logging to ${process.env.LOGDIR}/{room name}.log`);
  if (!fs.existsSync(process.env.LOGDIR)) {
    fs.mkdirSync(process.env.LOGDIR, { recursive: true });
  }
} else {
  console.log("Logging is disabled");
}

const logFile = (room) => path.join(process.env.LOGDIR, room + ".log");

export const logAsync = async (room, obj) => {
  if (!process.env.LOGDIR) return;

  return await new Promise((r) => r(JSON.stringify({ time: new Date().toISOString().slice(0, -2), ...obj }) + "\n")).then((data) => {
    const logFilePath = logFile(room);
    fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
    fs.appendFileSync(logFilePath, data);
  });
};

const humanReadableDelta = (delta) => {
  delta.filter((d) => typeof d.insert?.join == "function").forEach((delta) => (delta.insert = delta.insert.join("")));

  let from = delta.find((x) => x.retain)?.retain || "";
  let size = delta.find((x) => x.delete)?.delete || "";
  let content = delta.find((x) => x.insert)?.insert || "";
  return { [`doc[${from}:${from + size}]`]: content };
};

const origin = (/** @type {Y.Transaction}*/ transaction) => {
  if (transaction.origin?._sender?._socket?.remoteAddress) {
    return "client";
  }
  return "unknown";
};

export default (/** @type {Y.Doc} */ doc, docName) => {
  if (!process.env.LOGDIR) return;

  try {
    doc.getText("codemirror").observe((event, transaction) =>
      logAsync(docName, {
        origin: origin(transaction),
        event: "doc-update",
        username: transaction.origin?.__username ?? "",
        ...humanReadableDelta(event.changes.delta),
      }),
    );

    const observeComment = (event, transaction) =>
      logAsync(docName, {
        origin: origin(transaction),
        event: "comment-update",
        username: transaction.origin?.__username ?? "",
        commentId: event.target.getAttribute("comment-id"),
        ...humanReadableDelta(event.changes.delta),
      });

    // Keep track of observed comments
    var comments = {};

    doc.getMap().observe((event, transaction) => {
      const newComments = event.currentTarget.toJSON();

      logAsync(docName, { event: "comment-update", origin: origin(transaction), comments: newComments });

      Object.keys(newComments)
        .filter((commentId) => !comments[commentId])
        .forEach((commentId) => {
          const commentText = doc.getText("comments/" + commentId);
          commentText.setAttribute("comment-id", commentId);
          commentText.observe(observeComment);
        });

      Object.keys(comments)
        .filter((commentId) => !newComments[commentId])
        .forEach((commentId) => doc.getText("comments/" + commentId).unobserve(observeComment));

      comments = newComments;
    });
  } catch (e) {
    console.error(e);
    console.error(`Failed to initialize logging for room ${docName} due to the error above`);
  }
};
