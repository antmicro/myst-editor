import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  root: 'src',
  plugins: [preact()],
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
      }
    }
  },
})
