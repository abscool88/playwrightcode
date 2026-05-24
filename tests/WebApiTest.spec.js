const {test,expect,request} = require('@playwright/test');
const {ApiUtils} =  require('../utils/ApiUtils');
const loginPayload = {userEmail: "abhishekgup88@gmail.com", userPassword: "Lucknow@88"};
let token;
let response;
const orderPayload  = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]};
let orderId;

test.beforeAll(async () => // empty function to run before each test, can be used for setup tasks like logging in or navigating to a specific page
{
 const apiContext = await request.newContext();
 const apiUtils = new ApiUtils(apiContext,loginPayload);
 response = await apiUtils.createOrder(orderPayload);

});

test('Web and API test',async ({page})=> {

  //  const apiUtils = new ApiUtils(apiContext,loginPayload);
 //   const orderId = await apiUtils.createOrder(orderPayload);

  page.addInitScript(value => 
    {
    window.localStorage.setItem('token', value);
  }, response.token);  // this will set the token in local storage before the page loads, allowing the user to be authenticated when the page loads


 //await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  const email = "abhishekgup88@gmail.com";
  await page.goto("https://rahulshettyacademy.com/client/");

 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();

   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      console.log("rowOrderId: " + rowOrderId);
      page.pause();
      if (response.orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   await page.locator(".col-text").waitFor();
   const orderIdDetails = await page.locator(".col-text").textContent();
   console.log("orderIdDetails: " + orderIdDetails);
   expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
 
});

