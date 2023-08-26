const puppeteer = require('puppeteer');
const { By, until } = puppeteer;
const urlbox = require('urlbox');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const wait = async (selector) => await page.waitForSelector(selector);

    const frequency = 3;
    const mobileNumber = "6380719842";
    const smsInterval = 35;

    await page.goto('https://www.rummycircle.com/baf.html?11141705&baf_promo_code=FUZZ');

    await page.waitForSelector('#mobile_input');
    await page.type('#mobile_input', mobileNumber);

    await page.click('#getStarted');

    await page.waitForTimeout(smsInterval * 1000);

    for (let i = 0; i < frequency; i++) {
      await page.click('#get_opt_call_btn');
      await page.waitForTimeout(smsInterval * 1000);
    }

    await browser.close();
  } catch (error) {
    console.error('Error occurred:', error);
  }
})();
