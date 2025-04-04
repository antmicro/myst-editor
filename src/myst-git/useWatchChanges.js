import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

const parseStatuses = (statuses) => {
  const roomNames = Object.keys(statuses);
  return roomNames.map((name) => {
    const [_, __, branch, commitHash, ...rest] = name.split("/");
    const file = rest.join("/");
    return { branch, commitHash, file, tags: statuses[name] };
  });
};

const SOCKET_RECONNECT_MS = 1000;
const connect = async (url, statusSocket, docsWithChanges) => {
  try {
    const socket = new WebSocket(url);
    socket.onmessage = (ev) => {
      try {
        const statuses = JSON.parse(ev.data);
        docsWithChanges.value = parseStatuses(statuses);
      } catch (err) {
        socket.close();
      }
    };
    socket.onclose = () => setTimeout(() => connect(url, statusSocket, docsWithChanges), SOCKET_RECONNECT_MS);
    statusSocket.current = socket;
  } catch (error) {
    console.warn(`Failed to open status socket: ${error}`);
  }
};

export const useWatchChanges = (props, repo) => {
  const statusSocket = useRef(null);
  const docsWithChanges = useSignal([]);

  useEffect(() => {
    (async () => {
      connect(`${props.collaboration.wsUrl}/${repo}?status`, statusSocket, docsWithChanges);
    })();
  }, []);

  return { statusSocket, docsWithChanges };
};
