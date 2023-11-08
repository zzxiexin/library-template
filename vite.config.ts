import { defineConfig } from 'vite'
import path from 'path'

const resolve = (fileName) => path.resolve(__dirname, fileName)

export default defineConfig({
  build: {
    lib: {
      entry: resolve('/lib/index.ts'),
      name: 'umdName',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs', 'umd', 'iife'],
    },
    sourcemap: false,
  },
})
