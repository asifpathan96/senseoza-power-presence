import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { pluginExposeRenderer } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && pluginExposeRenderer(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
