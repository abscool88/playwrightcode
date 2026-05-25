const { test, expect } = require('@playwright/test');

test('amazon product search for mobile', async ({ page }) => {
    await page.goto('https://amazon.in');

  // 2. Search for a product (e.g., "laptop")
  await page.fill('#twotabsearchtextbox', 'laptop');
  await page.press('#twotabsearchtextbox', 'Enter');
  await page.waitForSelector('.puis-card-container');

  // 3. Fetch prices of the top 10 products
  // Selector targets the whole price string (e.g., "₹54,990")
  const priceElements = await page.$$eval('.puis-card-container .a-price-whole', elements => 
    elements.slice(0, 10).map(el => el.innerText)
  );

  // 4. Convert price strings to numbers (remove commas) and sort descending
  const prices = priceElements
    .map(priceStr => parseFloat(priceStr.replace(/,/g, '')))
    .filter(price => !isNaN(price)) // Ensure we only have valid numbers
    .sort((a, b) => b - a); // Descending order

  console.log('Top 10 Prices (Descending):', prices);

  //await browser.close();
});
