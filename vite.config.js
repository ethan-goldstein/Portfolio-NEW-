import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages serves this repo at /Portfolio-NEW-/
  base: '/Portfolio-NEW-/',
  plugins: [react()],
  server: {
    port: 5173,
  },
})
