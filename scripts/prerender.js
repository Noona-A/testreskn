import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/laser-hair-removal',
  '/skin-clinic',
  '/ingredients',
  '/booking',
  '/about',
  '/contact',
  '/quiz',
  '/services',
  '/concerns',
  '/concerns/acne',
  '/concerns/pigmentation',
  '/concerns/sensitivity',
  '/concerns/ingrowns',
  '/concerns/anti-ageing',
  '/services/online-consultation',
  '/services/in-clinic-consultation',
  '/services/prescription-acne',
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
  '/ingredients/snail-mucin'
];

const PORT = 3000;
const DIST_DIR = path.join(__dirname, '..', 'dist');

async function startServer() {
  const app = express();
  
  // Serve static files
  app.use(express.static(DIST_DIR));
  
  // SPA fallback - serve index.html for all routes
  app.use((req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });
  
  return new Promise((resolve) => {
    const server = app.listen(PORT, () => {
      console.log(`✓ Server started at http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function waitForServer(url, maxAttempts = 10) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      await new Promise((resolve, reject) => {
        http.get(url, (res) => {
          if (res.statusCode === 200) resolve();
          else reject();
        }).on('error', reject);
      });
      console.log('✓ Server is ready');
      return true;
    } catch (e) {
      console.log(`Waiting for server... (${i + 1}/${maxAttempts})`);
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  return false;
}

async function prerenderPage(page, route) {
  const url = `http://localhost:${PORT}${route}`;
  
  console.log(`Prerendering: ${route}`);
  
  // Navigate and wait for the page to load
  await page.goto(url, { 
    waitUntil: 'networkidle',
    timeout: 30000 
  });
  
  // Wait for React to fully render (check for content in root div)
  await page.waitForFunction(
    () => {
      const root = document.getElementById('root');
      return root && root.children.length > 0;
    },
    { timeout: 10000 }
  ).catch(() => {
    console.warn(`Warning: Root div may be empty for ${route}`);
  });
  
  // Additional wait to ensure all components are mounted
  await page.waitForTimeout(3000);
  
  // Get the fully rendered HTML
  const html = await page.content();
  
  // Verify we got actual content (not just empty root div)
  if (html.includes('<div id="root"></div>') && !html.includes('<div id="root"><')) {
    throw new Error('Page rendered but root div is empty');
  }
  
  // Determine output path
  const outputPath = route === '/' 
    ? path.join(DIST_DIR, 'index.html')
    : path.join(DIST_DIR, route, 'index.html');
  
  // Create directory if needed
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Save the rendered HTML
  fs.writeFileSync(outputPath, html);
  
  // Verify file was written and has content
  const fileSize = fs.statSync(outputPath).size;
  if (fileSize < 1000) {
    throw new Error(`File too small (${fileSize} bytes), likely failed to render`);
  }
  
  console.log(`✓ Saved: ${outputPath} (${Math.round(fileSize / 1024)}KB)`);
  return true;
}

(async () => {
  let server = null;
  let browser = null;
  
  try {
    // Verify dist directory exists
    if (!fs.existsSync(DIST_DIR)) {
      throw new Error(`Dist directory not found: ${DIST_DIR}`);
    }
    
    // Start server
    server = await startServer();
    
    // Wait for server to be ready
    const serverReady = await waitForServer(`http://localhost:${PORT}`);
    if (!serverReady) {
      throw new Error('Server failed to start');
    }
    
    // Launch browser
    console.log('Launching browser...');
    browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      viewport: { width: 1920, height: 1080 }
    });
    
    let successCount = 0;
    let failedRoutes = [];
    
    // Process routes sequentially to avoid overwhelming the server
    for (const route of routes) {
      const page = await context.newPage();
      
      try {
        await prerenderPage(page, route);
        successCount++;
      } catch (error) {
        console.error(`✗ Failed to prerender ${route}:`, error.message);
        failedRoutes.push(route);
      } finally {
        await page.close();
      }
    }
    
    console.log(`\n✓ Successfully prerendered ${successCount}/${routes.length} pages`);
    
    if (failedRoutes.length > 0) {
      console.log(`\n⚠ Failed routes (${failedRoutes.length}):`);
      failedRoutes.forEach(route => console.log(`  - ${route}`));
    }
    
    // Exit with success if we got at least the home page
    if (successCount === 0) {
      console.error('\n✗ No pages were successfully prerendered');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('\n✗ Fatal error during prerendering:', error);
    process.exit(1);
  } finally {
    // Cleanup
    if (browser) {
      await browser.close();
      console.log('✓ Browser closed');
    }
    if (server) {
      server.close();
      console.log('✓ Server stopped');
    }
  }
})();
