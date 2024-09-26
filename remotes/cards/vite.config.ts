import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cards",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
        "./products": "./src/Stores/products"
      },
      shared: ["react", "react-dom", "jotai"],
    })
  ],
  build: {
    target: "esnext",
    minify: true,
    cssCodeSplit: false,
  }
})
