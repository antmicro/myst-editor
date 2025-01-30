#!/usr/bin/env node

/**
 * @type {any}
 */
import WebSocket from "ws";
import http from "http";
const wss = new WebSocket.Server({ noServer: true });
const statusWss = new WebSocket.Server({ noServer: true });
import { setupWSConnection, handleRequest, setupStatusConnection } from "./utils.js";

const port = process.env.PORT || 4444;

/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping */
function escapeRegExp(string) {
  if (!string) return;
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const HTTP_PREFIX = escapeRegExp(process.env.HTTP_PREFIX || "/");
const httpPrefixRegExp = new RegExp(`^${HTTP_PREFIX}`);
const WS_PREFIX = escapeRegExp(process.env.WS_PREFIX || "/");
const wsPrefixRegExp = new RegExp(`^${WS_PREFIX}`);

const server = http.createServer((request, response) => {
  try {
    request.url = request.url.replace(httpPrefixRegExp, "");
    const result = handleRequest(request);
    if (result.error) {
      response.writeHead(result.code);
      response.end(result.error);
    } else {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("okay");
    }
  } catch (e) {
    console.error(e);
    response.writeHead(500);
    response.end("error");
  }
});

wss.on("connection", setupWSConnection);

statusWss.on("connection", setupStatusConnection);

server.on("upgrade", (request, socket, head) => {
  request.url = request.url.replace(wsPrefixRegExp, "");
  const params = new URL(`http://${process.env.HOST ?? "localhost"}${request.url}`).searchParams;
  if (params.has("status")) {
    statusWss.handleUpgrade(request, socket, head, (ws) => {
      statusWss.emit("connection", ws, request);
    });
  } else {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit("connection", ws, request);
    });
  }
});

server.listen(port, () => {
  console.log(`running on port ${port}`);
});
