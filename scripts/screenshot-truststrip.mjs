import { chromium } from "playwright";
import { mkdirSync } from "fs";

mkdirSync("scripts/screenshots", { recursive: true });
const browser = await chromium.launch();

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await mobile.evaluate(() => window.scrollTo(0, 600));
await mobile.waitForTimeout(200);
await mobile.screenshot({ path: "scripts/screenshots/truststrip-mobile-1.png" });
await mobile.waitForTimeout(2200);
await mobile.screenshot({ path: "scripts/screenshots/truststrip-mobile-2.png" });
await mobile.waitForTimeout(2200);
await mobile.screenshot({ path: "scripts/screenshots/truststrip-mobile-3.png" });

const desktop = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await desktop.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await desktop.evaluate(() => window.scrollTo(0, 600));
await desktop.waitForTimeout(200);
await desktop.screenshot({ path: "scripts/screenshots/truststrip-desktop.png" });

await browser.close();
