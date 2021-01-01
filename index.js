// third-party libraries
require("dotenv").config();
const puppeteer = require("puppeteer");

const ps5Url = process.env.EBAY_PS5;
const xBoxUrl = process.env.EBAY_XBOX;

const scrapper = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(xBoxUrl);
  // await page.waitFor(1000);
  // browser.close();
  // await page.screenshot({
  //   path: "main-example.png",
  // });
};

scrapper().then((res) => {
  console.log("Scrapper working", res);
});
