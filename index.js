const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://stackoverflow.com/');
    await page.screenshot({ path: 'stack.jpg' })
    const input = 'js-search-field';
    const button = 'js-search-submit';
    await page.waitForSelector(input);
    await page.type(input, "puppeteer");
    await page.click(button);
    await browser.close();    
})();