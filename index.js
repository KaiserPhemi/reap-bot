// third-party libraries
const puppeteer = require("puppeteer");

const ps5Url = process.env.EBAY_PS5;

console.log("the url", ps5Url);

// initialize app
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.screenshot({
    path: "main-example.png",
  });
})();
