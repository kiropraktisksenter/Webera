import { chromium } from 'playwright';
import { existsSync, mkdirSync } from 'fs';

const shots = [
  { url: 'http://localhost:3001/previews/klinikk/index.html', out: 'screenshot-klinikk.png' },
  { url: 'http://localhost:3001/previews/fysio/index.html',   out: 'screenshot-fysio.png' },
  { url: 'http://localhost:3001/previews/psykolog/index.html',out: 'screenshot-psykolog.png' },
  { url: 'https://kiropraktisksenter.no',                     out: 'screenshot-kiropraktisk.png' },
];

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

for (const { url, out } of shots) {
  console.log('Capturing', url);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: `public/images/${out}`,
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
  console.log('  → saved', out);
}

await browser.close();
console.log('Done.');
