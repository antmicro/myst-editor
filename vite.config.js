import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { resolve } from "path";
import macrosPlugin from "vite-plugin-babel-macros";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { execFileSync } from "node:child_process";

const commitSha = process.env.CI_COMMIT_SHA || process.env.GITHUB_SHA || execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
// Set by CI, so the repository URL doesn't have to be stored here
const commitUrl = process.env.MYST_EDITOR_COMMIT_URL?.replaceAll("{sha}", commitSha) || null;

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  root: "src",
  plugins: [
    macrosPlugin(),
    preact(),
    nodePolyfills({
      include: ["path"],
    }),
  ],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: [resolve(__dirname, "src/MystEditor.jsx"), resolve(__dirname, "src/index.html"), resolve(__dirname, "src/myst-git/git.html")],
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        assetFileNames: "MystEditor.css",
        chunkFileNames: "assets/[name]-[hash].js",
        manualChunks: {
          MystEditor: [resolve(__dirname, "src/MystEditor.jsx")],
          index: [resolve(__dirname, "src/index.html")],
          git: [
            resolve(__dirname, "src/myst-git/git.html"),
            resolve(__dirname, "src/myst-git/demo-data.js"),
            resolve(__dirname, "src/myst-git/stubGitBackend.js"),
          ],
        },
      },
    },
  },
  define: {
    "process.env": {},
    __MYST_EDITOR_SHA__: JSON.stringify(commitSha),
    __MYST_EDITOR_COMMIT_URL__: JSON.stringify(commitUrl),
  },
  // https://github.com/redhat-developer/yaml-language-server/issues/1014
  resolve: {
    alias: [
      {
        find: "vscode-json-languageservice/lib/umd",
        replacement: "vscode-json-languageservice/lib/esm",
      },
    ],
  },
});
