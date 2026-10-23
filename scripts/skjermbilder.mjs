// Tar skjermbilder av forsiden på 375 og 1440 px, lys og mørk modus.
// Start først appen: npm run build && npx next start -p 3100
// Kjør: node scripts/skjermbilder.mjs  (PW_CHROMIUM=/sti/til/chromium hvis nødvendig)
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = process.env.BASE_URL || 'http://localhost:3100';
const UT = 'skjermbilder';
mkdirSync(UT, { recursive: true });

const browser = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});
for (const colorScheme of ['light', 'dark']) {
  for (const width of [375, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme });
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    // Last inn lazy-bilder før helsidebildet
    await page.evaluate(() =>
      Promise.all(
        [...document.images].map((img) => {
          img.loading = 'eager';
          return img.decode().catch(() => {});
        }),
      ),
    );
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: `${UT}/forside-${width}-${colorScheme}.png`, fullPage: true });
    await page.close();
  }
}
await browser.close();
console.log(`Lagret i ${UT}/`);
