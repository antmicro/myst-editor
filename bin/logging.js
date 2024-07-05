import * as Y from 'yjs'

import fs from 'fs'
import path from 'path';

if (process.env.LOGDIR) {
  console.log(`Logging to ${process.env.LOGDIR}/{room name}.log`)
} else {
  console.log("Logging is disabled");
}

const logFile = (room) => path.join(process.env.LOGDIR, room + ".log")

const logAsync = (room, obj) =>
  new Promise((r) => r(JSON.stringify({ time: Date.now(), ...obj }) + "\n"))
    .then(data => fs.appendFileSync(logFile(room), data));

const humanReadableDelta = (delta) => {
  delta.filter(d => typeof d.insert?.join == "function")
    .forEach(delta => delta.insert = delta.insert.join(""));

  let from = delta.find(x => x.retain)?.retain || '';
  let size = delta.find(x => x.delete)?.delete || '';
  let content = delta.find(x => x.insert)?.insert || ''
  return { [`doc[${from}:${from + size}]`]: content }
}

const peer = (/** @type {Y.Transaction}*/ transaction) => {
  if (transaction.origin?._sender?._socket?.remoteAddress) {
    const peerdata = transaction.origin?._sender?._socket?._peername;
    return { address: peerdata.address, port: peerdata.port }
  };
  return null;
}

export default (/** @type {Y.Doc} */ doc, docName) => {
  if (!process.env.LOGDIR) return;

  try {
    if (!fs.existsSync(process.env.LOGDIR)) {
      fs.mkdirSync(process.env.LOGDIR, { recursive: true });
    }

    doc.getText("codemirror")
      .observe((event, transaction) => logAsync(docName, {
        peer: peer(transaction),
        ...humanReadableDelta(event.changes.delta)
      }));

    const observeComment = (event, transaction) => logAsync(docName, {
      peer: peer(transaction),
      commentId: event.target.getAttribute("comment-id"),
      ...humanReadableDelta(event.changes.delta)
    });
    

    // Keep track of observed comments
    var comments = {}

    doc.getMap()
      .observe((event, transaction) => {
        const newComments = event.currentTarget.toJSON();

        logAsync(docName, { peer: peer(transaction), comments: newComments });

        Object.keys(newComments)
          .filter(commentId => !comments[commentId])
          .forEach(commentId => {
            const commentText = doc.getText("comments/" + commentId);
            commentText.setAttribute("comment-id", commentId);
            commentText.observe(observeComment);
          })

        Object.keys(comments)
          .filter(commentId => !newComments[commentId])
          .forEach(commentId => doc.getText("comments/" + commentId).unobserve(observeComment));

        comments = newComments;
      });
  } catch (e) {
    console.error(e)
    console.error(`Failed to initialize logging for room ${docName} due to the error above`)
  }
}

