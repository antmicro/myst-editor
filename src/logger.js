import { Facet } from "@codemirror/state";
import { effect } from "@preact/signals";
import { createContext } from "preact";

const MAX_LOG_SIZE = 100;

export function getTimestamp() {
  const now = new Date();
  return now.toTimeString().split(" ")[0] + `.${now.getMilliseconds().toString().padStart(3, "0")}`;
}

/**
 * @param {ReturnType<import("./mystState").createMystState>} state
 */
export function createLogger(state) {
  const logs = [];
  let removed = 0;
  const log = (/** @type {string} */ msg) => {
    if (logs.length === MAX_LOG_SIZE) {
      logs.shift();
      removed++;
    }

    logs.push(`#${logs.length + 1 + removed} [${getTimestamp()}] ${msg}`);
  };
  const getLogString = () => logs.join("\n");

  if (state.options.collaboration.peek().enabled) {
    const roomCleanup = effect(() => {
      log(`Joining room: ${state.options.collaboration.value.room}`);
    });
    state.cleanups.push(roomCleanup);
  }
  const modeCleanup = effect(() => {
    log(`Setting editor view mode: ${state.options.mode.value}`);
  });
  state.cleanups.push(modeCleanup);
  const settingsCleanup = effect(() => {
    log(
      `Using user settings: ${state.userSettings.value
        .filter((s) => s.enabled)
        .map((s) => s.id)
        .join(", ")}`,
    );
  });
  state.cleanups.push(settingsCleanup);

  return {
    log,
    getLogString,
    get logs() {
      return logs;
    },
  };
}

export const loggerFacet = Facet.define({
  combine: (inputs) => (inputs.length == 0 ? null : inputs[0]),
});

/** @type {import("preact").Context<ReturnType<createLogger>>} */
export const Logger = createContext();
