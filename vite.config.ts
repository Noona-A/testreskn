import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use root base so both GitHub Pages with custom domain and local preview work
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    // Post-build: Copy CNAME file for GitHub Pages custom domain
    {
      name: "copy-cname",
      closeBundle() {
        try {
          copyFileSync("CNAME", "dist/CNAME");
          console.log("✓ Copied CNAME to dist/");
        } catch (err) {
          console.warn("⚠ Could not copy CNAME:", err);
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Ensure a single React instance is used across all dependencies (prevents hook context issues)
    dedupe: ["react", "react-dom"],
  },
}));
