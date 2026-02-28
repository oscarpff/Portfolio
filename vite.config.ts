import { defineConfig } from "vite";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Si tu repo es username.github.io, usa base: '/'
  // Si tu repo tiene otro nombre (ej: ND_Portfolio), usa base: '/ND_Portfolio/'
  base: '/ND_Portfolio/',
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
