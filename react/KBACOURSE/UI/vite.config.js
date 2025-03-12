import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    port:8003,
    proxy:{
      '/api':{
        target:'http://localhost:8009/',
        changeOrigin: true,
        rewrite:(path) => path.replace(/^\/api/,""),
      }
    }
  }
})
