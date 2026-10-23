// Lager app/opengraph-image.png (1200×630) fra scripts/og-bilde.html.
// Kjør: node scripts/lag-og-bilde.mjs
import { chromium } from 'playwright';
import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const html = fileURLToPath(new URL('./og-bilde.html', import.meta.url));
// PW_CHROMIUM lar deg peke på en ferdig installert Chromium.
const browser = await chromium.launch(
  process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
);
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(`file://${html}`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'app/opengraph-image.png' });
copyFileSync('app/opengraph-image.png', 'app/twitter-image.png');
await browser.close();
console.log('Lagret app/opengraph-image.png og app/twitter-image.png');
