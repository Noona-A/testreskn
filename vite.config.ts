import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { copyFileSync } from "fs";

// Pre-rendering of every route (and sitemap generation) happens in scripts/prerender.mjs,
// which runs after `vite build`. Keep the route list there, not here.

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // Use root base so both GitHub Pages with custom domain and local preview work
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    {
      name: "copy-cname",
      closeBundle() {
        // Copy CNAME file to dist for GitHub Pages custom domain
        try {
          copyFileSync("CNAME", "dist/CNAME");
          console.log("✓ Copied CNAME to dist/");
        } catch (err) {
          console.warn("⚠ Could not copy CNAME:", err);
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Ensure a single React instance is used across all dependencies (prevents hook context issues)
    dedupe: ["react", "react-dom"],
  },
}));
