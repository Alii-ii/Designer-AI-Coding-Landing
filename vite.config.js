import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Designer-AI-Coding-Landing/',
  plugins: [react()],
  server: {
    port: 8082,
    strictPort: false,
    host: '0.0.0.0',
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 8082,
      timeout: 5000,
      overlay: true
    },
    watch: {
      usePolling: true,
      interval: 100
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 4174,
    strictPort: true,
  },
});