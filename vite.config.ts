import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Si tu repo es username.github.io, usa base: '/'
  // Si tu repo tiene otro nombre (ej: Portfolio), usa base: '/Portfolio/'
  base: '/Portfolio/',
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
