import { Signal, signal } from "@preact/signals";
import { EditorView } from "codemirror";
import { createContext } from "preact";

/**
 * @param {{id: string}} params
 * @returns {{ id: Signal<string>, editorView?: Signal<EditorView> }}
 */
export function createMystState({ id }) {
  return {
    id: signal(id),
    editorView: signal(null),
  };
}

/** @type {import("preact").Context<ReturnType<createMystState>>} */
export const MystState = createContext();
