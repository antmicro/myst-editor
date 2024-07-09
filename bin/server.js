#!/usr/bin/env node

/**
 * @type {any}
 */
import WebSocket from 'ws';
import http from 'http';
const wss = new WebSocket.Server({ noServer: true })
import { setupWSConnection, docs } from './utils.js'

const port = process.env.PORT || 4444

const server = http.createServer((request, response) => {
  if (request.url.startsWith("/check/")) {
    const [_, room] = request.url.split("/check/");
    response.writeHead(docs.has(room) ? 200 : 204);
    response.end();
  } else {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('okay');
  }
})

wss.on('connection', setupWSConnection)

server.on('upgrade', (request, socket, head) => {
  // You may check auth of request here..
  // See https://github.com/websockets/ws#client-authentication
  /**
   * @param {any} ws
   */
  const handleAuth = ws => {
    wss.emit('connection', ws, request)
  }
  wss.handleUpgrade(request, socket, head, handleAuth)
})

server.listen(port, () => {
  console.log(`running on port ${port}`)
})
