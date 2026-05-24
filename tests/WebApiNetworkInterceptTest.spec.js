const {test,expect,request} = require('@playwright/test');
const {ApiUtils} =  require('../utils/ApiUtils');
const loginPayload = {userEmail: "abhishekgup88@gmail.com", userPassword: "Lucknow@88"};
let token;
let response;
const orderPayload  = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]};
let orderId;
const fakepayload = {data: [], message: "No Orders"};
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

  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/69e7c771f86ba51a657a6868", 
   async route  => {  
      const response = await page.request.fetch(route.request());
     let body = JSON.stringify(fakepayload);  // convert this object to JSON object string because route.fulfill() requires the body to be a string
      route.fulfill() // this will sent response back to browser.// will fulfill the request with the response from the server, but we can modify the response before fulfilling it
      {
         response,body // this is the response from the server
      }
      //How we want to route the request (intercept the request and modify the response)
      //API request - >|Fakeresponse|Browser -> Playwright -> Intercept the request -> Modify the response -> Send the modified response to the browser
   }

  )
   await page.locator("button[routerlink*='myorders']").click();
   page.pause();
   await page.locator("tbody").waitFor();

   const rows = await page.locator("tbody tr");
 
 
});

