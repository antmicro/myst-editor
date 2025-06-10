import { batch, computed, signal } from "@preact/signals";
import { WebsocketProvider } from "y-websocket";
import * as Y from "yjs";
import * as awarenessProtocol from "y-protocols/awareness.js";
import { hideUsernames } from "./extensions/hideUsernames";
import { YComments } from "./comments/ycomments";

export class CollaborationClient {
  #synced = signal(false);
  #connected = signal(false);
  #lockMsg = signal(null);
  #users = signal([]);
  #localUser = {};
  #offlineHandler;
  #onlineHandler;
  lockMsg = computed(() => this.#lockMsg.value);
  users = computed(() => this.#users.value);
  #heartbeatInterval = null;
  storedSuggestions = signal([]);

  constructor(settings, editorOptions = { id: null, parent: null, hideUsernameDelay: null, getAvatar: () => {}, getUserUrl: () => {} }) {
    this.ready = computed(() => this.#synced.value && this.#connected.value);
    this.ydoc = new Y.Doc();
    this.settings = settings;
    this.provider = new WebsocketProvider(settings.wsUrl, settings.room, this.ydoc, {
      connect: settings.mode === "websocket",
      params: {},
      WebSocketPolyfill: WebSocket,
      awareness: new awarenessProtocol.Awareness(this.ydoc),
      maxBackoffTime: 2500,
    });
    if (settings.mode === "local") {
      this.provider.shouldConnect = true;
      this.provider.connectBc();
      batch(() => {
        this.#synced.value = true;
        this.#connected.value = true;
      });
    }

    if (settings.mode !== "local") {
      this.#heartbeatInterval = setInterval(() => {
        if (this.ready.peek() && Date.now() - this.provider.wsLastMessageReceived > 5_000) {
          console.error("Heartbeat wasn't recieved from signal server in the last 5 seconds");
          this.provider.disconnect();
          this.provider.connect();
        }
      }, 5_000);
    }

    // Allow joining without username to collect data
    if (settings.username) {
      // We cannot detect the local user being added in the awareness change callback
      this.#localUser = {
        name: settings.username,
        color: settings.color,
        avatarUrl: editorOptions.getAvatar(settings.username),
        userUrl: editorOptions.getUserUrl(settings.username),
      };
      this.#users.value = [this.#localUser];
      this.provider.awareness.on("update", () => {
        // Get unique users by name
        const states = [...this.provider.awareness.getStates().values()]
          .map((state) => state.user)
          .concat(this.#localUser)
          .filter((u) => u?.name)
          .reduce((curr, user) => {
            curr[user.name] = user;
            return curr;
          }, {});
        // Added and removed awaraness params are not reliable in all browsers
        const newUsers = Object.values(states).map((u) => u.name);
        const currentUsers = this.#users.peek().map((u) => u.name);
        if (newUsers.every((u) => currentUsers.includes(u)) && currentUsers.every((u) => newUsers.includes(u))) return;

        this.#users.value = Object.values(states)
          .sort((u1, u2) => u1.name.localeCompare(u2.name))
          .map((u) => ({ ...u, avatarUrl: editorOptions.getAvatar(u.name), userUrl: editorOptions.getUserUrl(u.name) }));
      });
      this.provider.awareness.setLocalStateField("user", {
        name: settings.username,
        color: settings.color,
      });
    }

    this.provider.on("sync", (sync) => (this.#synced.value = sync));
    this.provider.on("status", ({ status }) => (this.#connected.value = status == "connected"));
    this.#offlineHandler = () => {
      if (this.settings.mode !== "local" && import.meta.env.PROD) {
        this.provider.disconnect();
      }
    };
    this.#onlineHandler = () => {
      if (this.settings.mode !== "local" && import.meta.env.PROD) {
        this.provider.connect();
      }
    };
    window.addEventListener("offline", this.#offlineHandler);
    window.addEventListener("online", this.#onlineHandler);

    if (editorOptions.parent) {
      hideUsernames({
        ytext: this.ydoc.getText("codemirror"),
        prov: this.provider,
        parent: editorOptions.parent,
        hideDelay: editorOptions.hideUsernameDelay,
      });
    }

    this.ytext = this.ydoc.getText("codemirror");
    this.undoManager = new Y.UndoManager(this.ytext, {
      trackedOrigins: new Set([this.provider.doc.clientID, null]),
      ignoreRemoteMapChanges: true,
    });

    if (settings.commentsEnabled && editorOptions.id) {
      this.ycomments = new YComments(this.ydoc, this.provider, editorOptions.getAvatar, editorOptions.getUserUrl);
    }

    this.metaMap = this.ydoc.getMap("meta");
    this.metaMap.observe(() => {
      this.#lockMsg.value = this.metaMap.get("lock");
    });

    const suggestions = this.ydoc.getArray("critic-suggestions");
    this.storedSuggestions.value = suggestions.toArray();
    suggestions.observe(() => {
      this.storedSuggestions.value = suggestions.toArray();
    });
  }

  lock(msg = "Document locked") {
    this.metaMap.set("lock", msg);
  }

  unlock() {
    this.metaMap.delete("lock");
  }

  storeSuggestion(suggestion) {
    const suggestions = this.ydoc.getArray("critic-suggestions");
    suggestions.push([{ ...suggestion, appliedBy: this.#localUser, appliedTimestamp: Date.now() }]);
  }

  getSuggestion(id) {
    const suggestions = this.ydoc.getArray("critic-suggestions");
    return suggestions.toArray().find((s) => s.id === id);
  }

  removeSuggestion(id) {
    const suggestions = this.ydoc.getArray("critic-suggestions");
    const idx = suggestions.toArray().findIndex((s) => s.id === id);
    if (idx === -1) return;
    suggestions.delete(idx, 1);
  }

  destroy() {
    window.removeEventListener("offline", this.#offlineHandler);
    window.removeEventListener("online", this.#onlineHandler);
    this.provider.destroy();
    this.ydoc.destroy();
    clearInterval(this.#heartbeatInterval);
  }
}
