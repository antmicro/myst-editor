import { batch, computed, signal } from "@preact/signals";
import { WebsocketProvider } from "y-websocket";
import * as Y from "yjs";
import * as awarenessProtocol from "y-protocols/awareness.js";
import { encodeInitializeMessage, initializeYText, messageInitialized } from "./collaborationUtils";
import { hideUsernames } from "./extensions/hideUsernames";
import { YComments } from "./comments/ycomments";
import { reviewTransactionOrigin, YjsReviewAdapter } from "./yjsReviewAdapter";

export class CollaborationClient {
  #synced = signal(false);
  #connected = signal(false);
  #users = signal([]);
  #localUser = {};
  #offlineHandler;
  #onlineHandler;
  #initializationRequested = false;
  users = computed(() => this.#users.value);
  #heartbeatInterval = null;
  storedSuggestions = signal([]);
  editorReady = signal(false);

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
    this.provider.messageHandlers[messageInitialized] = () => {
      this.editorReady.value = true;
    };
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
    this.provider.on("status", ({ status }) => {
      const connected = status == "connected";
      this.#connected.value = connected;
      if (!connected && !this.editorReady.peek()) {
        this.#initializationRequested = false;
      }
    });
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
    const yreviews = this.ydoc.getMap("live-reviews");
    this.reviewAdapter = new YjsReviewAdapter({
      ydoc: this.ydoc,
      ytext: this.ytext,
      yreviews,
      getLocalUser: () => this.#localUser,
    });
    this.undoManager = new Y.UndoManager([this.ytext, yreviews], {
      trackedOrigins: new Set([this.provider.doc.clientID, null, reviewTransactionOrigin]),
      ignoreRemoteMapChanges: true,
    });

    if (settings.commentsEnabled && editorOptions.id) {
      this.ycomments = new YComments(this.ydoc, this.provider, editorOptions.getAvatar, editorOptions.getUserUrl);
    }

    this.metaMap = this.ydoc.getMap("meta");
    const suggestions = this.ydoc.getArray("critic-suggestions");
    this.storedSuggestions.value = suggestions.toArray();
    suggestions.observe(() => {
      this.storedSuggestions.value = suggestions.toArray();
    });
  }

  get localUser() {
    return { ...this.#localUser };
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

  setLiveReview(reviewItem) {
    const anchors = reviewItem.anchors.map(({ id, from, to }) => ({
      id,
      fromRelative: Y.encodeRelativePosition(Y.createRelativePositionFromTypeIndex(this.ytext, from, -1)),
      toRelative: Y.encodeRelativePosition(Y.createRelativePositionFromTypeIndex(this.ytext, to, 1)),
    }));

    this.yreviews.set(reviewItem.id, {
      id: reviewItem.id,
      kind: reviewItem.kind,
      type: reviewItem.type ?? null,
      text: reviewItem.text,
      comments: reviewItem.comments ?? [],
      draft: reviewItem.draft ?? false,
      resolved: reviewItem.resolved ?? false,
      resolution: reviewItem.resolution ?? null,
      resolvedAt: reviewItem.resolvedAt ?? null,
      resolvedBy: reviewItem.resolvedBy ?? null,
      resolvedAnchors: reviewItem.resolvedAnchors ?? [],
      replacementId: reviewItem.replacementId ?? null,
      anchors,
      author: reviewItem.author ?? this.#localUser,
      createdAt: reviewItem.createdAt ?? Date.now(),
    });
  }

  getLiveReview(sharedReview) {
    const anchors = sharedReview.anchors
      .map(({ id, fromRelative, toRelative }) => {
        const from = Y.createAbsolutePositionFromRelativePosition(Y.decodeRelativePosition(fromRelative), this.ydoc);
        const to = Y.createAbsolutePositionFromRelativePosition(Y.decodeRelativePosition(toRelative), this.ydoc);
        return from && to ? { id, from: from.index, to: to.index } : null;
      })
      .filter(Boolean);

    if (anchors.length === 0) return null;

    return {
      ...sharedReview,
      anchors,
    };
  }

  removeLiveReview(id) {
    this.yreviews.delete(id);
  }

  #initializeLocally(text) {
    const initialize = async () => {
      // Give pending BroadcastChannel updates a chance to apply after the
      // previous holder releases the lock.
      await new Promise((resolve) => setTimeout(resolve, 0));
      initializeYText(this.ydoc, text);
      this.editorReady.value = true;
    };

    if (navigator.locks) {
      navigator.locks.request(`myst-editor-initial-text:${this.settings.room}`, initialize);
    } else {
      initialize();
    }
  }

  initializeText(text) {
    if (this.editorReady.peek() || this.#initializationRequested) return;
    this.#initializationRequested = true;

    if (this.settings.mode === "local") {
      this.#initializeLocally(text);
      return;
    }

    if (!this.provider.ws || this.provider.ws.readyState !== WebSocket.OPEN) {
      this.#initializationRequested = false;
      return;
    }

    this.provider.ws.send(encodeInitializeMessage(text));
  }

  destroy() {
    window.removeEventListener("offline", this.#offlineHandler);
    window.removeEventListener("online", this.#onlineHandler);
    this.provider.destroy();
    this.ydoc.destroy();
    clearInterval(this.#heartbeatInterval);
  }
}
