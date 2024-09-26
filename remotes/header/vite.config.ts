import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: "header",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/App.tsx"
        },
        remotes: {
          remoteCard: "http://localhost:4001/assets/remoteEntry.js",
        },
        shared: ["react", "react-dom"],
      })
  ],
    build: {
        target: "esnext",
        minify: true,
        cssCodeSplit: false,
    }
})
