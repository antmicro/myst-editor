import { signal } from "@preact/signals";
import { createContext } from "preact";

/**
 * @param {{id: string}} params
 * @returns
 */
export function createMystState({ id }) {
  return {
    id: signal(id),
  };
}

/** @type {import("preact").Context<ReturnType<createMystState>>} */
export const MystState = createContext();
