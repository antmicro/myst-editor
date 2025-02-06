import { markdownKeymap } from "@codemirror/lang-markdown";
import { Prec } from "@codemirror/state";
import { keymap, ViewPlugin, ViewUpdate } from "@codemirror/view";
import { Signal, signal, effect } from "@preact/signals";
import { EditorView } from "codemirror";
import { createContext } from "preact";
import { closeBrackets } from "@codemirror/autocomplete";
import Settings from "./components/Settings";
import { CollaborationClient } from "./collaboration";
import { CodeMirror as VimCM, vim } from "@replit/codemirror-vim";
import { collabClientFacet } from "./extensions";

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
  settings: { id: "settings", tooltip: "Editor settings", dropdown: Settings },
};

export const defaultButtons = [
  predefinedButtons.fullscreen,
  predefinedButtons.settings,
  predefinedButtons.copyHtml,
  predefinedButtons.refresh,
  predefinedButtons.printToPdf,
  predefinedButtons.templateManager,
];

// The vim plugin stores some functions as globals, but we need to differentiate between editors
const undoManagers = new WeakMap();
const { undo: originalUndo, redo: originalRedo } = VimCM.commands;
VimCM.commands.undo = (cm) => (undoManagers.get(cm)?.undo ?? originalUndo)(cm);
VimCM.commands.redo = (cm) => (undoManagers.get(cm)?.redo ?? originalRedo)(cm);

const defaultUserSettings = [
  {
    id: "auto-markdown",
    title: "Autocomplete Markdown",
    enabled: false,
    extension: Prec.high(keymap.of(markdownKeymap)),
  },
  {
    id: "autoclose-bracket",
    title: "Autoclose brackets",
    enabled: false,
    extension: closeBrackets(),
  },
  {
    id: "links-new-tab",
    title: "Open links in new tabs",
    enabled: false,
    markdown(md) {
      const defaultRule = md.renderer.rules.link_open;
      md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const render = defaultRule ?? self.renderToken.bind(self);
        tokens[idx].attrSet("target", "_blank");
        tokens[idx].attrSet("rel", "noreferrer");
        return render(tokens, idx, options, env, self);
      };
    },
  },
  {
    id: "scroll-past-end",
    title: "Scroll past last line",
    enabled: false,
    extension: ViewPlugin.fromClass(
      class {
        constructor(view) {
          this.view = view;
          this.observer = new ResizeObserver(() => {
            view.dom.style.paddingBottom = `${view.dom.parentElement.clientHeight - 20 - view.defaultLineHeight}px`;
          });
          this.observer.observe(view.dom.parentElement);
        }
        destroy() {
          this.view.dom.style.paddingBottom = "0px";
          this.observer.disconnect();
        }
      },
    ),
  },
  {
    id: "vim",
    title: "Vim mode",
    enabled: false,
    comments: true,
    extension: [
      Prec.high(vim()),
      ViewPlugin.fromClass(
        class {
          constructor(view) {
            const undoManager = view.state.facet(collabClientFacet)[0]?.undoManager;
            if (undoManager) undoManagers.set(view.cm, { undo: () => undoManager.undo(), redo: () => undoManager.redo() });
          }
        },
      ),
    ],
  },
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
    mode: "websocket",
  },
  spellcheckOpts: null,
  customRoles: [],
  transforms: [],
  customDirectives: [],
  // this will create a bogus random avatar when no specific getAvatar function is provided
  getAvatar: (login) => `https://secure.gravatar.com/avatar/${login}?s=30&d=identicon`,
  avatarCrossorigin: null,
  getUserUrl: (username) => "#",
  backslashLineBreak: true,
  hideUsernameDelay: 5000,
  parent: null,
  syncScroll: false,
  unfoldedHeadings: null,
  mapUrl: (tag, url) => url,
  yamlSchema: null,
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

  let browserSettings = JSON.parse(localStorage.getItem("myst/settings"));
  let userSettings = [...defaultUserSettings];
  if (browserSettings) {
    userSettings = userSettings.map((s) => {
      const browserSetting = browserSettings.find((bSetting) => bSetting.id == s.id);
      return browserSetting ? { ...s, enabled: browserSetting.enabled } : s;
    });
  }
  const collab = signal(null);
  const collabCleanup = effect(() => {
    if (!signalOptions.collaboration.value.enabled) return;
    const client = new CollaborationClient(signalOptions.collaboration.value, {
      id: signalOptions.id.value,
      parent: opts.parent,
      getAvatar: signalOptions.getAvatar.value,
      getUserUrl: signalOptions.getUserUrl.value,
    });
    collab.value = client;

    return () => client.destroy();
  });

  return {
    options: signalOptions,
    /** @type {Signal<EditorView?>} */
    editorView: signal(null),
    cache: {
      transform: new Map(),
    },
    userSettings: signal(userSettings),
    collab,
    cleanups: [collabCleanup],
  };
}

/** @type {import("preact").Context<ReturnType<createMystState>>} */
export const MystState = createContext();
