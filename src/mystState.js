import { Signal, signal } from "@preact/signals";
import { EditorView } from "codemirror";
import { createContext } from "preact";

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

/**
 * @param {{id: string}} params
 * @returns {{ id: Signal<string>, editorView?: Signal<EditorView>, cache: { transform: Map<string, string> } } }}
 */
export function createMystState({ id }) {
  return {
    id: signal(id),
    editorView: signal(null),
    cache: {
      transform: new Map(),
    },
  };
}

/** @type {import("preact").Context<ReturnType<createMystState>>} */
export const MystState = createContext();
