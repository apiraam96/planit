import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import {viteCommonjs} from '@originjs/vite-plugin-commonjs'

export default defineConfig({
  plugins: [react(), viteCommonjs()],
  server: {proxy: {'/api': 'http://localhost:3000'}},
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

