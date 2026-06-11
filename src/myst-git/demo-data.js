export const docsRoot = "docs";
export const indexPath = "docs/index.md";

export const demoBranches = ["feature", "main"];

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

/**
 * In-memory repo state matching the demo layout used by a future real git backend.
 * @returns {{ branches: Record<string, string>, commits: Record<string, { message: string, parent?: string, files: Record<string, string> }>, history: Record<string, string[]> }}
 */
export function createInitialRepoState() {
  return {
    branches: { main: "aaa", feature: "bbb" },
    commits: {
      aaa: { message: "Initial commit", files: { ...initialCommitFiles } },
      bbb: { message: "Add feature document", parent: "aaa", files: { ...featureCommitFiles } },
    },
    history: {
      main: ["aaa"],
      feature: ["bbb", "aaa"],
    },
  };
}
