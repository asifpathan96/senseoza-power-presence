import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { pluginExposeRenderer } from "lovable-tagger";
import VitePluginPrerender from "@prerenderer/plugin-vite";
import { JSDOMRenderer } from "@prerenderer/renderer-jsdom";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && pluginExposeRenderer(),
    mode === "production" &&
      VitePluginPrerender({
        routes: [
          "/",
          "/about",
          "/services",
          "/services/ai-marketing",
          "/services/seo",
          "/services/social-media",
          "/services/content-marketing",
          "/services/ppc-ads",
          "/services/web-design",
          "/services/email-automation",
          "/services/analytics",
          "/services/influencer-marketing",
          "/services/ai-agents-automation",
          "/case-studies",
          "/testimonials",
          "/blog",
          "/contact",
        ],
        renderer: new JSDOMRenderer({
          renderAfterTime: 2000,
        }),
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
