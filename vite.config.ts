import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, mkdirSync, writeFileSync, readFileSync, existsSync } from "fs";

// Routes to prerender for SEO
const prerenderRoutes = [
  "/",
  "/laser-hair-removal",
  "/skin-clinic",
  "/ingredients",
  "/booking",
  "/about",
  "/contact",
  "/quiz",
  "/concerns",
  "/concerns/acne",
  "/concerns/pigmentation",
  "/concerns/sensitivity",
  "/concerns/ingrowns",
  "/concerns/anti-ageing",
  "/ingredients/niacinamide",
  "/ingredients/hyaluronic-acid",
  "/ingredients/vitamin-c",
  "/ingredients/salicylic-acid",
  "/ingredients/lactic-acid",
  "/ingredients/azelaic-acid",
  "/ingredients/tranexamic-acid",
  "/ingredients/ceramides",
  "/ingredients/squalane",
  "/ingredients/peptides",
  "/ingredients/centella-asiatica",
  "/ingredients/green-tea-extract",
  "/ingredients/panthenol",
  "/ingredients/propolis",
  "/ingredients/snail-mucin",
  "/guides",
  "/guides/acne",
  "/faq",
];

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
    // Post-build: Copy CNAME and create prerendered route directories
    {
      name: "post-build-seo",
      closeBundle() {
        // Copy CNAME file to dist for GitHub Pages custom domain
        try {
          copyFileSync("CNAME", "dist/CNAME");
          console.log("✓ Copied CNAME to dist/");
        } catch (err) {
          console.warn("⚠ Could not copy CNAME:", err);
        }
        
        // Create directories for each route with index.html copies
        // This enables GitHub Pages to serve proper HTML for each route
        const distIndexPath = "dist/index.html";
        if (existsSync(distIndexPath)) {
          const indexHtml = readFileSync(distIndexPath, "utf-8");
          
          for (const route of prerenderRoutes) {
            if (route === "/") continue; // Skip root, already has index.html
            
            const routePath = `dist${route}`;
            try {
              mkdirSync(routePath, { recursive: true });
              writeFileSync(`${routePath}/index.html`, indexHtml);
              console.log(`✓ Created ${routePath}/index.html`);
            } catch (err) {
              console.warn(`⚠ Could not create ${routePath}/index.html:`, err);
            }
          }
          console.log(`✓ Created ${prerenderRoutes.length - 1} route directories for SEO`);
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
