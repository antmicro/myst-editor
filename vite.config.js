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
        resolve(__dirname, 'src/MystEditor.jsx'),
        resolve(__dirname, 'src/index.html')
      ],
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: 'MystEditor.css',
        manualChunks: (module) => {
          if (module.includes("index.html")) {
            return "index";
          } else {
            return "MystEditor";
          }
        }
      }
    }
  },
  define: {
    'process.env': {}
  }
})
