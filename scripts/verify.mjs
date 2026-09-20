import { preview } from 'vite';
import puppeteer from 'puppeteer';
const SP = process.argv[2] || 'dist';
const server = await preview({ preview: { port: 4174, strictPort: true } });
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const pages = ['/guides/acne', '/concerns/acne', '/ingredients/niacinamide', '/'];
for (const route of pages) {
  for (const [name, vp] of [['mobile', { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }], ['desktop', { width: 1280, height: 900 }]]) {
    const page = await browser.newPage();
    const errors = [];
    page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`${m.type()}: ${m.text().slice(0, 160)}`); });
    page.on('pageerror', (e) => errors.push('pageerror: ' + e.message.slice(0, 160)));
    await page.setViewport(vp);
    await page.goto('http://localhost:4174' + route, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 1500));
    const canon = await page.evaluate(() => Array.from(document.querySelectorAll('link[rel=canonical]')).map((l) => l.href));
    const title = await page.title();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    const file = `${SP}/shot_${route.replace(/\//g, '_') || '_home'}_${name}.png`;
    await page.screenshot({ path: file, fullPage: false });
    console.log(`${route} [${name}] title="${title.slice(0, 50)}" canonical=${JSON.stringify(canon)} hOverflow=${overflow} errors=${errors.length}`);
    errors.slice(0, 4).forEach((e) => console.log('   ', e));
    await page.close();
  }
}
// interaction check: click a TOC button in the acne guide on desktop and confirm scroll
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });
await page.goto('http://localhost:4174/guides/acne', { waitUntil: 'networkidle2' });
await new Promise((r) => setTimeout(r, 1000));
const before = await page.evaluate(() => window.scrollY);
await page.evaluate(() => { const b = Array.from(document.querySelectorAll('nav[aria-label="Guide sections"] button')).find(x => x.textContent.includes('Hormonal')); b && b.click(); });
await new Promise((r) => setTimeout(r, 1500));
const after = await page.evaluate(() => window.scrollY);
const active = await page.evaluate(() => document.querySelector('nav[aria-label="Guide sections"] button.bg-primary')?.textContent);
console.log(`TOC click: scrollY ${before} -> ${after}, active="${active}"`);
await page.screenshot({ path: `${SP}/shot_acne_after_toc_click.png` });
await browser.close();
server.httpServer.close();
