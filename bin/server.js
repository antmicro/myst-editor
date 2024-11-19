#!/usr/bin/env node

/**
 * @type {any}
 */
import WebSocket from "ws";
import http from "http";
const wss = new WebSocket.Server({ noServer: true });
import { setupWSConnection, handleRequest } from "./utils.js";

const port = process.env.PORT || 4444;

const server = http.createServer((request, response) => {
  try {
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

server.on("upgrade", (request, socket, head) => {
  // You may check auth of request here..
  // See https://github.com/websockets/ws#client-authentication
  /**
   * @param {any} ws
   */
  const handleAuth = (ws) => {
    wss.emit("connection", ws, request);
  };
  wss.handleUpgrade(request, socket, head, handleAuth);
});

server.listen(port, () => {
  console.log(`running on port ${port}`);
});
