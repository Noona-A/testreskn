import { preview } from 'vite';
import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { dirname } from 'path';

const SITE_URL = 'https://resknclinic.co.uk';

/**
 * Every public route, with sitemap priority and change frequency.
 * This list is the single source of truth: it drives pre-rendering AND sitemap.xml,
 * so a page can no longer be rendered but missing from the sitemap (or vice versa).
 *
 * GitHub Pages serves `route/index.html` and 301s `/route` to `/route/`, so the
 * canonical and sitemap URLs use the trailing-slash form to match what is served.
 */
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/skin-clinic', priority: 0.9, changefreq: 'weekly' },
  { path: '/laser-hair-removal', priority: 0.9, changefreq: 'weekly' },
  { path: '/booking', priority: 0.9, changefreq: 'monthly' },
  { path: '/quiz', priority: 0.8, changefreq: 'monthly' },
  { path: '/about', priority: 0.6, changefreq: 'monthly' },
  { path: '/contact', priority: 0.6, changefreq: 'monthly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },

  // Guides (highest-value organic content)
  { path: '/guides', priority: 0.9, changefreq: 'weekly' },
  { path: '/guides/acne', priority: 0.9, changefreq: 'monthly' },

  // Skin concerns
  { path: '/concerns', priority: 0.8, changefreq: 'weekly' },
  { path: '/concerns/acne', priority: 0.8, changefreq: 'monthly' },
  { path: '/concerns/pigmentation', priority: 0.8, changefreq: 'monthly' },
  { path: '/concerns/sensitivity', priority: 0.8, changefreq: 'monthly' },
  { path: '/concerns/ingrowns', priority: 0.8, changefreq: 'monthly' },
  { path: '/concerns/anti-ageing', priority: 0.8, changefreq: 'monthly' },

  // Ingredients hub
  { path: '/ingredients', priority: 0.8, changefreq: 'weekly' },
  { path: '/ingredients/niacinamide', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/hyaluronic-acid', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/vitamin-c', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/salicylic-acid', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/lactic-acid', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/azelaic-acid', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/tranexamic-acid', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/ceramides', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/squalane', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/peptides', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/centella-asiatica', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/green-tea-extract', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/panthenol', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/propolis', priority: 0.7, changefreq: 'monthly' },
  { path: '/ingredients/snail-mucin', priority: 0.7, changefreq: 'monthly' },

  // Legal
  { path: '/privacy', priority: 0.2, changefreq: 'yearly' },
  { path: '/terms', priority: 0.2, changefreq: 'yearly' },
];

/** Rendered so they load without a flash, but noindex and kept out of the sitemap. */
const privateRoutes = ['/quiz/results', '/forms/medical-consent', '/forms/skin-assessment'];

const withSlash = (p) => (p === '/' ? '/' : `${p}/`);

function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const body = routes
    .map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${withSlash(r.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  writeFileSync('dist/sitemap.xml', xml);
  console.log(`✅ Wrote dist/sitemap.xml with ${routes.length} URLs`);
}

async function prerender() {
  console.log('🚀 Starting pre-rendering...');

  // Remove any stale static copies from earlier build approaches.
  if (existsSync('dist/static')) rmSync('dist/static', { recursive: true, force: true });

  const previewServer = await preview({
    preview: { port: 4173, strictPort: true },
  });
  console.log('✅ Server started on http://localhost:4173');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  });
  console.log('✅ Browser launched');

  let successCount = 0;
  let errorCount = 0;
  const allPaths = [...routes.map((r) => r.path), ...privateRoutes];

  for (const route of allPaths) {
    try {
      const page = await browser.newPage();
      // Desktop viewport so the desktop layout (all content visible) is what gets captured.
      await page.setViewport({ width: 1280, height: 900 });
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

      console.log(`📄 Rendering ${route}...`);
      await page.goto(`http://localhost:4173${route}`, { waitUntil: 'networkidle2', timeout: 30000 });

      // Wait for Helmet to commit the page-specific canonical before snapshotting.
      await page.waitForFunction(
        () => !!document.querySelector('link[rel="canonical"][data-rh="true"]'),
        { timeout: 10000 }
      ).catch(() => console.warn(`⚠ No Helmet canonical detected on ${route}`));
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const html = await page.content();
      const filePath = route === '/' ? 'dist/index.html' : `dist${route}/index.html`;
      mkdirSync(dirname(filePath), { recursive: true });
      writeFileSync(filePath, html);

      console.log(`✅ Saved ${filePath}`);
      successCount++;
      await page.close();
    } catch (error) {
      console.error(`❌ Error rendering ${route}:`, error.message);
      errorCount++;
    }
  }

  await browser.close();
  previewServer.httpServer.close();

  writeSitemap();

  console.log(`\n🎉 Pre-rendering complete!`);
  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  if (errorCount > 0) process.exitCode = 1;
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
