// third-party libraries
require("dotenv").config();
const puppeteer = require("puppeteer");

const soldPS5 = process.env.SOLD_PS5;
const xBoxUrl = process.env.EBAY_XBOX;

const scrapper = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(soldPS5, { waitUntil: "networkidle2" });
  let data = await page.evaluate(() => {
    let totalItemsSold = document.querySelector('span[class="rcnt"]').innerText;
    let itemName = document.querySelector('span[class="kwcat"]').innerText;

    return { totalItemsSold, itemName };
  });

  console.log(data);

  // browser.close();
  // await page.screenshot({
  //   path: "main-example.png",
  // });
};

scrapper().then((res) => {
  console.log("Scrapper working", res);
});
