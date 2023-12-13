import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // https://vitejs.dev/config/server-options.html#server-proxy (fixing CORS error by adding proxy)
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [react()],
})
