import { preview } from 'vite';
import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

// Routes to pre-render
const routes = [
  '/',
  '/laser-hair-removal',
  '/skin-clinic',
  '/ingredients',
  '/booking',
  '/about',
  '/contact',
  '/quiz',
  '/concerns',
  '/concerns/acne',
  '/concerns/pigmentation',
  '/concerns/sensitivity',
  '/concerns/ingrowns',
  '/concerns/anti-ageing',
  '/ingredients/niacinamide',
  '/ingredients/hyaluronic-acid',
  '/ingredients/vitamin-c',
  '/ingredients/salicylic-acid',
  '/ingredients/lactic-acid',
  '/ingredients/azelaic-acid',
  '/ingredients/tranexamic-acid',
  '/ingredients/ceramides',
  '/ingredients/squalane',
  '/ingredients/peptides',
  '/ingredients/centella-asiatica',
  '/ingredients/green-tea-extract',
  '/ingredients/panthenol',
  '/ingredients/propolis',
  '/ingredients/snail-mucin',
  '/guides',
  '/guides/acne'
];

async function prerender() {
  console.log('🚀 Starting pre-rendering...');

  // Start Vite preview server
  const previewServer = await preview({
    preview: {
      port: 4173,
      strictPort: true
    }
  });

  console.log('✅ Server started on http://localhost:4173');

  // Launch Puppeteer
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });

  console.log('✅ Browser launched');

  let successCount = 0;
  let errorCount = 0;

  // Pre-render each route
  for (const route of routes) {
    try {
      const page = await browser.newPage();
      
      // Set user agent to avoid being treated as a bot
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
      
      const url = `http://localhost:4173${route}`;
      console.log(`📄 Rendering ${route}...`);
      
      // Navigate and wait for content
      await page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      // Wait a bit for React to fully render
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Get the rendered HTML
      const html = await page.content();

      // Save to dist folder
      const filePath = route === '/' 
        ? 'dist/index.html'
        : `dist${route}/index.html`;
      
      const dir = dirname(filePath);
      mkdirSync(dir, { recursive: true });
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

  console.log(`\n🎉 Pre-rendering complete!`);
  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);
}

prerender().catch(console.error);
