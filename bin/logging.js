import * as Y from 'yjs'

import fs from 'fs'
import path from 'path';

if (process.env.LOGDIR) {
    console.log(`Logging to ${process.env.LOGDIR}/{room name}/ydoc.log`)
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
    let to = delta.find(x => x.delete)?.delete || '';
    let content = delta.find(x => x.insert)?.insert || ''
    return { [`doc[${from}:${from + to}]`]: content }
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

    if (!fs.existsSync(process.env.LOGDIR)) {
        fs.mkdirSync(process.env.LOGDIR, { recursive: true });
    }

    doc.getXmlFragment("codemirror")
        .observe((event, transaction) => logAsync(docName, {
            peer: peer(transaction),
            ...humanReadableDelta(event.changes.delta)
        }));

    const observeComment = (event, transaction) => logAsync(docName, {
        peer: peer(transaction),
        commentId: event.target.getAttribute("comment-id"),
        ...humanReadableDelta(event.changes.delta)
    });

    var comments = {}
    doc.getMap()
        .observe((event, transaction) => {
            const newComments = event.currentTarget.toJSON();

            logAsync(docName, { peer: peer(transaction), room: docName, comments: newComments });

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
}

