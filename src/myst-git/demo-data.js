export const docsRoot = "docs";
export const indexPath = "docs/index.md";

/** Enough items to paginate past PAGE_SIZE (20) in stubGitBackend. */
export const DEMO_BRANCH_COUNT = 45;
export const DEMO_FEATURE_COMMIT_COUNT = 45;

/** 7-char hex hashes (git-style abbreviations). */
export const DEMO_INITIAL_COMMIT = "4a3f2b1";
export const DEMO_FEATURE_TIP = "e7c91d0";

function demoMiddleCommitHash(seq) {
  return ((seq * 2654435761) >>> 0).toString(16).padStart(7, "0").slice(-7);
}

const mainIndex = `# Demo Documentation

\`\`\`{toctree}
file1
file2
\`\`\`

Welcome to the MyST editor git demo. Edit files, then use the Commit button to save.
`;

const featureIndex = mainIndex.replace("file2\n```", "file2\nfeature\n```");

const file1 = `# Document 1

## Introduction

This is the first document in the demo repository.

## Content

Edit this text and commit the changes to see git history.
`;

const file2 = `# Document 2

## Overview

This is the second document in the demo repository.

## Details

Edit this text and commit the changes to see git history.
`;

const feature = `# Feature Document

This file was added on the feature branch.
`;

/** Initial commit on main — three files, index without feature. */
const initialCommitFiles = {
  [indexPath]: mainIndex,
  "docs/file1.md": file1,
  "docs/file2.md": file2,
};

/** Feature branch tip — adds feature.md and updates the index toctree. */
const featureCommitFiles = {
  ...initialCommitFiles,
  [indexPath]: featureIndex,
  "docs/feature.md": feature,
};

export const demoBranches = [
  "feature",
  "main",
  ...Array.from({ length: DEMO_BRANCH_COUNT - 2 }, (_, i) => `branch-${String(i + 3).padStart(3, "0")}`),
];

function buildFeatureHistory() {
  const commits = {
    [DEMO_INITIAL_COMMIT]: { message: "Initial commit", files: { ...initialCommitFiles } },
  };

  let parent = DEMO_INITIAL_COMMIT;
  const middleHashes = [];
  for (let i = 1; i < DEMO_FEATURE_COMMIT_COUNT - 1; i++) {
    const hash = demoMiddleCommitHash(i);
    commits[hash] = {
      message: `Update docs (${i})`,
      parent,
      files: { ...initialCommitFiles },
    };
    middleHashes.push(hash);
    parent = hash;
  }

  commits[DEMO_FEATURE_TIP] = { message: "Add feature document", parent, files: { ...featureCommitFiles } };

  return {
    commits,
    history: [DEMO_FEATURE_TIP, ...middleHashes.reverse(), DEMO_INITIAL_COMMIT],
  };
}

/**
 * In-memory repo state matching the demo layout used by a future real git backend.
 * @returns {{ branches: Record<string, string>, commits: Record<string, { message: string, parent?: string, files: Record<string, string> }>, history: Record<string, string[]> }}
 */
export function createInitialRepoState() {
  const { commits, history: featureHistory } = buildFeatureHistory();
  const extraBranches = demoBranches.filter((b) => b !== "main" && b !== "feature");

  return {
    branches: {
      main: DEMO_INITIAL_COMMIT,
      feature: DEMO_FEATURE_TIP,
      ...Object.fromEntries(extraBranches.map((b) => [b, DEMO_INITIAL_COMMIT])),
    },
    commits,
    history: {
      main: [DEMO_INITIAL_COMMIT],
      feature: featureHistory,
      ...Object.fromEntries(extraBranches.map((b) => [b, [DEMO_INITIAL_COMMIT]])),
    },
  };
}
