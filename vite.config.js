import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Served at the root of the custom domain (ethangoldstein.dev)
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
  },
})
