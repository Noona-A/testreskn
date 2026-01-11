const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const http = require('http');
const handler = require('serve-handler');

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

(async () => {
  const PORT = 3000;
  
  // Start local server
  const server = http.createServer((request, response) => {
    return handler(request, response, { 
      public: 'dist',
      cleanUrls: false,
      rewrites: [{ source: '**', destination: '/index.html' }]
    });
  });
  
  await new Promise((resolve) => {
    server.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
      resolve();
    });
  });
  
  try {
    console.log('Launching browser...');
    const browser = await chromium.launch();
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    });
    
    let successCount = 0;
    
    for (const route of routes) {
      try {
        const page = await context.newPage();
        const url = `http://localhost:${PORT}${route}`;
        
        console.log(`Prerendering: ${route}`);
        await page.goto(url, { 
          waitUntil: 'networkidle',
          timeout: 30000 
        });
        
        // Wait for React to render
        await page.waitForTimeout(2000);
        
        // Wait for main content to be present
        await page.waitForSelector('#root', { timeout: 5000 }).catch(() => {});
        
        const html = await page.content();
        
        // Determine output path
        const outputPath = route === '/' 
          ? path.join('dist', 'index.html')
          : path.join('dist', route, 'index.html');
        
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }
        
        // Save the rendered HTML
        fs.writeFileSync(outputPath, html);
        console.log(`✓ Saved: ${outputPath}`);
        successCount++;
        
        await page.close();
      } catch (error) {
        console.error(`✗ Error prerendering ${route}:`, error.message);
        // Continue with next route even if one fails
      }
    }
    
    await browser.close();
    console.log(`\n✓ Successfully prerendered ${successCount}/${routes.length} pages`);
  } catch (error) {
    console.error('Fatal error during prerendering:', error);
    process.exit(1);
  } finally {
    server.close();
  }
})();
