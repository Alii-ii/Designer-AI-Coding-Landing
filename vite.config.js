import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/Designer-AI-Coding-Landing/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    port: 8082,
    host: true,
    open: true
  },
  build: {
    chunkSizeWarningLimit: 1000
  }
}); 