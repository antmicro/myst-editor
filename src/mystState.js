import { markdownKeymap } from "@codemirror/lang-markdown";
import { Annotation, Prec } from "@codemirror/state";
import { keymap, lineNumbers, ViewPlugin } from "@codemirror/view";
import { Signal, signal, effect } from "@preact/signals";
import { EditorView } from "codemirror";
import { createContext } from "preact";
import { closeBrackets } from "@codemirror/autocomplete";
import Settings from "./components/Settings";
import { CollaborationClient } from "./collaboration";
import { CodeMirror as VimCM, vim } from "@replit/codemirror-vim";
import { collabClientFacet, lineNumbersCompartment } from "./extensions";
import { TextManager } from "./text";
import Templates from "./components/Templates";
import { yRemoteAnnotation } from "./extensions/collab";
import { syntaxTree } from "@codemirror/language";

/** @type {{ id: string; tooltip?: string; text?: string; action?: Function; dropdown?: Function }} */
export const predefinedButtons = {
  printToPdf: {
    id: "print-to-pdf",
    tooltip: "Print document as pdf",
    action: () => window.print(),
  },
  templateManager: { id: "templates", tooltip: "Templates", dropdown: Templates },
  copyHtml: { id: "copy-html", tooltip: "Copy document as HTML" },
  fullscreen: { id: "fullscreen", tooltip: "Fullscreen" },
  refresh: { id: "refresh", tooltip: "Refresh issue links" },
  settings: { id: "settings", tooltip: "Editor settings", dropdown: Settings },
  suggestMode: { id: "suggest-mode", tooltip: "Toggle suggest mode", active: (state) => state.suggestMode.value },
};

export const defaultButtons = [
  predefinedButtons.fullscreen,
  predefinedButtons.settings,
  predefinedButtons.copyHtml,
  predefinedButtons.refresh,
  predefinedButtons.printToPdf,
  predefinedButtons.templateManager,
  predefinedButtons.suggestMode,
];

// The vim plugin stores some functions as globals, but we need to differentiate between editors
const undoManagers = new WeakMap();
const { undo: originalUndo, redo: originalRedo } = VimCM.commands;
VimCM.commands.undo = (cm) => (undoManagers.get(cm)?.undo ?? originalUndo)(cm);
VimCM.commands.redo = (cm) => (undoManagers.get(cm)?.redo ?? originalRedo)(cm);

const reorderAnnotation = Annotation.define();

const formatRelativeNumbers = (line, state) => {
  if (line > state.doc.lines) return "0";
  const cursorLine = state.doc.lineAt(state.selection.main.head).number;
  return Math.abs(cursorLine - line).toString();
};

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
  {
    id: "relative-line-numbers",
    title: "Relative line numbers",
    enabled: false,
    extension: [
      ViewPlugin.fromClass(
        class {
          constructor(view) {
            this.view = view;
            this.setRelativeLines();
          }
          update(update) {
            if (!update.selectionSet) return;
            this.setRelativeLines();
          }
          setRelativeLines() {
            queueMicrotask(() => {
              this.view.dispatch({
                effects: lineNumbersCompartment.reconfigure(lineNumbers({ formatNumber: formatRelativeNumbers })),
              });
            });
          }
          destroy() {
            queueMicrotask(() => {
              this.view.dispatch({
                effects: lineNumbersCompartment.reconfigure(lineNumbers()),
              });
            });
          }
        },
      ),
    ],
  },
  {
    id: "auto-ordered-lists",
    title: "Automatically number ordered lists",
    enabled: false,
    extension: EditorView.updateListener.of((update) => {
      if (!update.docChanged || update.transactions.some((tr) => tr.annotation(reorderAnnotation) || tr.annotation(yRemoteAnnotation))) return;

      const tree = syntaxTree(update.state);
      const changes = [];
      const visisted = new Set();
      update.changes.iterChangedRanges((_, __, from, to) => {
        tree.iterate({
          from,
          to,
          enter(cursor) {
            if (cursor.name !== "OrderedList") return true;
            if (visisted.has(cursor.node.from)) return false;
            visisted.add(cursor.node.from);

            let lastNum;
            const items = cursor.node.getChildren("ListItem");
            for (const item of items) {
              const markLength = item.tree.children[0].length - 1;
              const num = parseInt(update.state.sliceDoc(item.from, item.from + markLength));
              if (lastNum && num != lastNum + 1) {
                changes.push({ from: item.from, to: item.from + markLength, insert: String(lastNum + 1) });
                lastNum = lastNum + 1;
              } else {
                lastNum = num;
              }
            }

            return false;
          },
        });
      });

      if (changes.length > 0) {
        update.view.dispatch({ changes, annotations: reorderAnnotation.of(true) });
      }
    }),
  },
];

const defaults = {
  id: "",
  title: "",
  /** @type {"Both" | "Preview" | "Source" | "Diff" | "Resolved" | "Outline" | "Inline"} */
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
  getUserUrl: () => "#",
  backslashLineBreak: true,
  hideUsernameDelay: 5000,
  parent: null,
  syncScroll: false,
  unfoldedHeadings: null,
  mapUrl: (tag, url) => url,
  yamlSchema: null,
  onPreviewClick: () => {},
  onDiscardChanges: () => {},
  mermaidTheme: "neutral",
  cmDarkTheme: false,
};

export const modeChangeAnnotation = Annotation.define();

export function createMystState(/** @type {typeof defaults} */ opts) {
  const fullOptions = { ...defaults, ...opts };
  /** @typedef {Omit<typeof defaults, "parent">} SignalOpts */
  /** @type {{ [key in keyof SignalOpts]: Signal<SignalOpts[key]> } & { parent: DocumentFragment }} */
  const signalOptions = { parent: fullOptions.parent };
  for (const opt in fullOptions) {
    if (Object.prototype.hasOwnProperty.call(fullOptions, opt) && opt != "parent") {
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
  /** @type {Signal<CollaborationClient>} */
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
    const destroy = (/** @type {PageTransitionEvent} */ ev) => {
      if (ev.persisted) return;
      client.destroy();
    };
    window.addEventListener("pagehide", destroy);

    return () => {
      client.destroy();
      window.removeEventListener("pagehide", destroy);
    };
  });

  const state = {
    options: signalOptions,
    /** @type {Signal<EditorView?>} */
    editorView: signal(null),
    cache: {
      transform: new Map(),
    },
    userSettings: signal(userSettings),
    collab,
    cleanups: [collabCleanup],
    linter: signal({ status: "disabled", diagnostics: [] }),
    /** @type {TextManager} */
    text: null,
    /** @type {Signal<{level: number, text: string, pos: number}[]>} */
    headings: signal([]),
    /** @type {Signal<{ src: string; error: Error } | null>} */
    error: signal(null),
    suggestMode: signal(false),
  };
  state.text = new TextManager({ ...signalOptions, ...state });

  const ignoredErrors = ["ResizeObserver loop completed with undelivered notifications"];
  // Only pick up errors coming from Myst in production
  window.addEventListener("error", (ev) => {
    if (state.error.value) return;
    if (typeof ev.message == "string" && ignoredErrors.some((ie) => ev.message.startsWith(ie))) return;

    const err = ev.error instanceof Error ? ev.error : new Error(ev.message);
    if (import.meta.env.PROD && !err.stack.includes("MystEditor.js")) return;

    state.error.value = { src: "ErrorEvent", error: err };
  });

  // Yjs catches errors when handling updates so we need this to detect them
  const defaultConsoleError = console.error;
  console.error = (msg, ...args) => {
    if (typeof msg === "string" && msg.startsWith("Caught error while handling a Yjs update")) {
      if (state.error.value == null) {
        state.error.value = { src: "Yjs update error", error: args[0] };
      }
    }

    if (typeof msg === "string" && msg.startsWith("Unable to compute message")) {
      return;
    }

    defaultConsoleError(msg, ...args);
  };

  // Update comment positions when chaning editor modes
  const modeCleanup = effect(() => {
    state.options.mode.value;
    // Prevent tracking further nested signals with queueMicrotask
    queueMicrotask(() => state.collab.peek()?.ycomments?.updateMainCodeMirror());
  });
  state.cleanups.push(modeCleanup);

  return state;
}

/** @type {import("preact").Context<ReturnType<createMystState>>} */
export const MystState = createContext();
