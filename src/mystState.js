import { Signal, signal } from "@preact/signals";
import { EditorView } from "codemirror";
import { createContext } from "preact";
import { Doc } from "yjs";

export const predefinedButtons = {
  printToPdf: {
    id: "print-to-pdf",
    tooltip: "Print document as pdf",
    action: () => window.print(),
  },
  templateManager: { id: "template-manager" },
  copyHtml: { id: "copy-html", tooltip: "Copy document as HTML" },
  fullscreen: { id: "fullscreen", tooltip: "Fullscreen" },
  refresh: { id: "refresh", tooltip: "Refresh issue links" },
};

export const defaultButtons = [
  predefinedButtons.fullscreen,
  predefinedButtons.copyHtml,
  predefinedButtons.refresh,
  predefinedButtons.printToPdf,
  predefinedButtons.templateManager,
];

const defaults = {
  id: "",
  title: "",
  mode: "Both",
  initialText: "",
  includeButtons: defaultButtons,
  topbar: true,
  templatelist: "",
  collaboration: {
    enabled: false,
    commentsEnabled: false,
    resolvingCommentsEnabled: false,
    wsUrl: "ws://localhost:4444",
    username: "",
    room: "0",
    color: "#ff0000",
  },
  spellcheckOpts: { dict: "en_US", dictionaryPath: "/dictionaries" },
  customRoles: [],
  transforms: [],
  customDirectives: [],
  // this will create a bogus random avatar when no specific getAvatar function is provided
  getAvatar: (login) => `https://secure.gravatar.com/avatar/${login}?s=30&d=identicon`,
  getUserUrl: (username) => "#",
  backslashLineBreak: true,
  hideUsernameDelay: 5000,
  parent: null,
  syncScroll: false,
  unfoldedHeadings: null,
  mapUrl: (tag, url) => url,
};

export function createMystState(/** @type {typeof defaults} */ opts) {
  const fullOptions = { ...defaults, ...opts };
  /** @typedef {Omit<typeof defaults, "parent" | "initialText">} SignalOpts */
  /** @type {{ [key in keyof SignalOpts]: Signal<SignalOpts[key]> } & { parent: DocumentFragment, initialText: string }} */
  const signalOptions = { parent: fullOptions.parent, initialText: fullOptions.initialText };
  for (const opt in fullOptions) {
    if (Object.prototype.hasOwnProperty.call(fullOptions, opt) && opt != "parent" && opt != "initialText") {
      signalOptions[opt] = signal(fullOptions[opt]);
    }
  }

  return {
    options: signalOptions,
    /** @type {Signal<EditorView?>} */
    editorView: signal(null),
    cache: {
      transform: new Map(),
    },
    collab: {
      /** @type {Signal<Doc?>} */
      ydoc: signal(null),
    },
  };
}

/** @type {import("preact").Context<ReturnType<createMystState>>} */
export const MystState = createContext();
