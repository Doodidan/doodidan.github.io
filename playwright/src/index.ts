import { chromium } from 'playwright';
import { filepath, route } from './config.js';

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto(route);
await page.pdf({ path: filepath });

await browser.close();
