import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { pluginExposeRenderer } from "lovable-tagger";
import Prerender from "vite-plugin-prerender";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && pluginExposeRenderer(),
    mode === "production" &&
      Prerender({
        staticDir: path.join(__dirname, "dist"),
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
        renderer: new Prerender.PuppeteerRenderer({
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
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
