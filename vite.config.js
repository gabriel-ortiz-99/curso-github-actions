import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://gabriel-ortiz-99.github.io/curso-github-actions/',
  plugins: [react()]
})
