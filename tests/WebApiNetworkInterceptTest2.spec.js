const { test, expect, request } = require('@playwright/test');
const { ApiUtils } = require('../utils/ApiUtils');
const loginPayload = { userEmail: "abhishekgup88@gmail.com", userPassword: "Lucknow@88" };
let token;
let response;
const orderPayload = { orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
let orderId;
const fakepayload = { data: [], message: "No Orders" };
test.beforeAll(async () => // empty function to run before each test, can be used for setup tasks like logging in or navigating to a specific page
{
   const apiContext = await request.newContext();
   const apiUtils = new ApiUtils(apiContext, loginPayload);
   response = await apiUtils.createOrder(orderPayload);

});

test('Web and API test', async ({ page }) => {

   //  const apiUtils = new ApiUtils(apiContext,loginPayload);
   //   const orderId = await apiUtils.createOrder(orderPayload);

   page.addInitScript(value => {
      window.localStorage.setItem('token', value);
   }, response.token);  // this will set the token in local storage before the page loads, allowing the user to be authenticated when the page loads

   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("button[routerlink*='myorders']").click();
   await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
      route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' }))
   await page.locator("button:has-text('View')").first().click();

   await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");


});

