import { createInitialRepoState, demoBranches } from "./demo-data.js";

const PAGE_SIZE = 20;

function cloneRepoState(state) {
  return structuredClone(state);
}

/**
 * In-memory git API for demos and tests. Models branches, commits, and file snapshots
 * the same way a real git backend would expose them via callbacks.
 *
 * @param {{ repoKey?: string, initialState?: ReturnType<typeof createInitialRepoState>, getBranch?: () => string }} [options]
 */
export function createStubGitBackend(options = {}) {
  const storageKey = `myst-stub-repo:${options.repoKey ?? "default"}`;
  let state = cloneRepoState(options.initialState ?? createInitialRepoState());
  let commitCounter = 0;
  const reload = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) ({ state, commitCounter } = JSON.parse(saved));
    } catch {}
  };
  reload();

  const getBranch = () => options.getBranch?.() ?? "main";

  function commitEntry(hash) {
    const entry = state.commits[hash];
    if (!entry) throw new Error(`Unknown commit: ${hash}`);
    return entry;
  }

  function listFilesAtCommit(hash) {
    return Object.keys(commitEntry(hash).files).filter((f) => f.endsWith(".md") || f.endsWith(".rst"));
  }

  return {
    initialBranches: [...demoBranches],

    async getBranches(page) {
      const start = (Math.max(1, page) - 1) * PAGE_SIZE;
      return demoBranches.slice(start, start + PAGE_SIZE);
    },

    async searchBranches(input) {
      const q = input.toLowerCase();
      return demoBranches.filter((b) => b.toLowerCase().includes(q)).slice(0, PAGE_SIZE);
    },

    async getCommits(branch, page) {
      const hashes = state.history[branch] ?? [];
      const start = (Math.max(1, page) - 1) * PAGE_SIZE;
      return hashes.slice(start, start + PAGE_SIZE).map((hash) => ({
        hash,
        message: commitEntry(hash).message,
      }));
    },

    async searchCommits(input, branch) {
      const q = input.toLowerCase();
      const hashes = state.history[branch] ?? [];
      return hashes
        .filter((hash) => commitEntry(hash).message.toLowerCase().includes(q))
        .slice(0, PAGE_SIZE)
        .map((hash) => ({ hash, message: commitEntry(hash).message }));
    },

    async getFiles(_branch, commit) {
      if (!commit?.hash) return [];
      reload();
      return listFilesAtCommit(commit.hash);
    },

    async getText(_branch, commit, file) {
      if (!commit?.hash) return "";
      reload();
      return commitEntry(commit.hash).files[file] ?? "";
    },

    async commitChanges(message, documents) {
      reload();
      const branch = getBranch();
      const parent = state.branches[branch];
      if (!parent) throw new Error(`Unknown branch: ${branch}`);

      commitCounter++;
      const hash = `offline-${commitCounter}`;
      const files = { ...commitEntry(parent).files };
      for (const { file, text } of documents) {
        files[file] = text;
      }

      state.commits[hash] = { message, parent, files };
      state.branches[branch] = hash;
      state.history[branch] = [hash, ...(state.history[branch] ?? []).filter((h) => h !== hash)];

      try {
        localStorage.setItem(storageKey, JSON.stringify({ state, commitCounter }));
      } catch {}
      return { hash, webUrl: "#" };
    },

    storeHistory: () => {},
  };
}

/** @typedef {ReturnType<typeof createStubGitBackend>} GitBackendCallbacks */

/**
 * Create git API callbacks for MystEditorGit.
 *
 * @param {"stub"} [kind] - Backend kind. A future `"http"` (or similar) can plug in here.
 * @param {Parameters<typeof createStubGitBackend>[0]} [options]
 * @returns {GitBackendCallbacks & { initialBranches: string[] }}
 */
export function createGitBackend(kind = "stub", options = {}) {
  switch (kind) {
    case "stub":
      return createStubGitBackend(options);
    default:
      throw new Error(`Unknown git backend: ${kind}`);
  }
}
