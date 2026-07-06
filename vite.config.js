import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Base path must match your GitHub repo name for Project Pages
  // (https://<user>.github.io/<repo>/). Change if the repo is renamed.
  base: '/forkari/',
  plugins: [react(), tailwindcss()],
})
