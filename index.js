// third-party libraries
const puppeteer = require("puppeteer");

// initialize app
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.screenshot({
    path: "main-example.png",
  });
})();
