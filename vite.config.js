import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { resolve } from "path";
import macrosPlugin from "vite-plugin-babel-macros";
import { nodePolyfills } from "vite-plugin-node-polyfills";

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
    lib: {
      entry: [resolve(__dirname, "src/MystEditor.jsx"), resolve(__dirname, "src/index.html"), resolve(__dirname, "src/myst-git/git.html")],
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        assetFileNames: "MystEditor.css",
        manualChunks: (module) => {
          if (module.includes("index.html")) {
            return "index";
          } else if (module.includes("git.html")) {
            return "git";
          } else {
            return "MystEditor";
          }
        },
      },
    },
  },
  define: {
    "process.env": {},
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
