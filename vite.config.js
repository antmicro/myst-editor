import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { resolve } from 'path'
import macrosPlugin from 'vite-plugin-babel-macros';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  root: 'src',
  plugins: [macrosPlugin(), preact()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    lib: {
      entry: [
        resolve(__dirname, 'src/MystEditor.js'),
        resolve(__dirname, 'src/styles/MystEditor.css'),
        resolve(__dirname, 'src/index.html')
      ],
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: 'MystEditor.css',
        chunkFileNames: (chunk) => {
          if (chunk.name === "MystEditor") {
            // This will be the main MystEditor library file
            return "MystEditor.js";
          }
          return "[name]-[hash].js";
        },
        entryFileNames: (chunk) => {
          if (chunk.name === "MystEditor") {
            // This will apply to files generated for the index.html MyST demo
            return "MystEditorDemo.js";
          }
          return "[name].js";
        }
      }
    }
  },
  define: {
    'process.env': {}
  },
  test: {
    testTimeout: 20_000
  }
})
