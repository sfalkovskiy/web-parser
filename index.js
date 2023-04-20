import { launch } from 'puppeteer';
import { SITE_URL } from './utilities/constants.js';
import getDataFromPage from './utilities/getDataFromPage.js';
import writeData from './utilities/writeData.js';
import writeToFileData from './utilities/writeToFileData.js';

const main = async () => {
  const browser = await launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(SITE_URL);

  const tourData = await getDataFromPage(page);

  const rows = writeData(tourData);

  writeToFileData(rows);

  await browser.close();
};

main();
