'use strict';

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://techibaba.com');
    await page.screenshot({path: 'full.png', fullPage: true});
    await browser.close();
  })();