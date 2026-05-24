
const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/placeOrderTestData.json')));
const { log } = require('node:console');
const {customtest} = require('../utils/base-test');


for (const data of dataset) {
   test(`@Web testlogin for v ${data.productName}`,{tag: '@Web'}, async ({ page }) => {
      const orderConfirmationMsg = page.locator(".hero-primary");

      const email = data.username;
      const password = data.password;
      const productName = data.productName;
      
      const poManager = new POManager(page, productName);
      const loginPage = poManager.getLoginPage();
      const dashboardPage = poManager.getDashboardPage();
      const cartPage = poManager.getCartPage();
      const checkoutPage = poManager.getCheckoutPage();

      await loginPage.landOnLoginPage();
      await loginPage.validLogin(email, password);

      await dashboardPage.searchProductAndAddToCart(productName);
      await dashboardPage.navigateToCart();
      await cartPage.verifyProductInCartandClickCheckout();
      await checkoutPage.selectCountryAndPlaceOrder(email);


      await orderConfirmationMsg.waitFor(); // wait for the order confirmation message to appear
      console.log(await orderConfirmationMsg.textContent());

      expect(orderConfirmationMsg).toHaveText("Thankyou for the order."); // assertion to verify the order confirmation message is correct
      const orderIdval = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
      console.log(orderIdval);

      await page.locator("button[routerlink*='myorders']").click();
      await page.locator("tbody").waitFor();

      const rows = await page.locator("tbody tr");


      for (let i = 0; i < await rows.count(); ++i) {
         const rowOrderId = await rows.nth(i).locator("th").textContent();
         console.log("rowOrderId: " + rowOrderId);
         page.pause();
         if (orderIdval.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
         }
      }
      await page.locator(".col-text").waitFor();
      const orderIdDetails = await page.locator(".col-text").textContent();
      console.log("orderIdDetails: " + orderIdDetails);
      expect(orderIdval.includes(orderIdDetails)).toBeTruthy();

   });
}
  
test.describe('group', { tag: '@report' }, () => {

customtest('Zeb test for placing order', async ({ page,testDataForOrder}) => {
const orderConfirmationMsg = page.locator(".hero-primary");


      const email = testDataForOrder.username;
      const password = testDataForOrder.password;
      const productName = testDataForOrder.productName;

      const poManager = new POManager(page, productName);
      const loginPage = poManager.getLoginPage();
      const dashboardPage = poManager.getDashboardPage();
      const cartPage = poManager.getCartPage();
      const checkoutPage = poManager.getCheckoutPage();

      await loginPage.landOnLoginPage();
      await loginPage.validLogin(email, password);

      await dashboardPage.searchProductAndAddToCart(productName);
      await dashboardPage.navigateToCart();
      await cartPage.verifyProductInCartandClickCheckout();
      await checkoutPage.selectCountryAndPlaceOrder(email);


      await orderConfirmationMsg.waitFor(); // wait for the order confirmation message to appear
      console.log(await orderConfirmationMsg.textContent());

      expect(orderConfirmationMsg).toHaveText("Thankyou for the order."); // assertion to verify the order confirmation message is correct
      const orderIdval = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
      console.log(orderIdval);

      await page.locator("button[routerlink*='myorders']").click();
      await page.locator("tbody").waitFor();

      const rows = await page.locator("tbody tr");


      for (let i = 0; i < await rows.count(); ++i) {
         const rowOrderId = await rows.nth(i).locator("th").textContent();
         console.log("rowOrderId: " + rowOrderId);
         page.pause();
         if (orderIdval.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
         }
      }
      await page.locator(".col-text").waitFor();
      const orderIdDetails = await page.locator(".col-text").textContent();
      console.log("orderIdDetails: " + orderIdDetails);
      expect(orderIdval.includes(orderIdDetails)).toBeTruthy();


   });

});