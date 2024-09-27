import { Signal, signal } from "@preact/signals";
import { EditorView } from "codemirror";
import { createContext } from "preact";

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
