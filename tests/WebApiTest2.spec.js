
const {test,expect} = require('@playwright/test');
let webContext;
 let email;
test.beforeAll(async ({browser}) => // empty function to run before each test, can be used for setup tasks like logging in or navigating to a specific page
{ 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");    
    const username = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const signInBtn = page.locator("#login");
    email = "abhishekgup88@gmail.com";
    await username.fill(email);  //css selector - user fill to input
    await password.fill("Lucknow@88");  //css selector - user fill to input 
    await signInBtn.click();  //css selector - click on sign in button
   await page.waitForLoadState('networkidle')
    await context.storageState({path: 'state.json'}); // save the storage state to a file, which can be used to restore the state in other tests
   webContext = await browser.newContext({storageState: 'state.json'}); // create a new context with the storage state from the file, which will allow the user to be authenticated in the new context
});
test('practice login test',async ()=> {

  const productName = "ZARA COAT 3";
  const page = await webContext.newPage();// created dynamically so page as fixture is not required // create a new page in the same context to ensure the storage state is applied
  await page.goto("https://rahulshettyacademy.com/client");

  const cartBtn =page.locator("[routerlink*='cart']");
  const checkoutBtn = page.locator("[class*=subtotal] button");
  const paymentTypes = page.locator(".payment__types");
  const selectCountry = page.locator("[placeholder*='Select Country']");
  const dropdownOptions = page.locator(".ta-results");
const placeOrderBtn = page.locator(".action__submit");
const orderConfirmationMsg = page.locator(".hero-primary");
const orderId = page.locator(".em-spacer-1 .ng-star-inserted");
   console.log(await page.title());
  
//    console.log( await page.locator('[style*="block"]').textContent());  //css selector - wait for error message to appear
//    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
     //css selector - assertion for error message
         const products = page.locator(".card-body");
     // get first product card name
        const productCards = page.locator(".card-body b");
       //console.log(await productCards.first().textContent());
       //console.log(await productCards.nth(1).textContent());
       await page.waitForLoadState('networkidle')
       await page.locator(".card-body b").first().waitFor();
        const allcontents = await productCards.allTextContents();
        console.log(allcontents);
       const productCount = await products.count();
       console.log(productCount);
         for(let i=0; i<productCount; i++){
            if((await products.nth(i).locator("b").textContent()) === productName){
               console.log("product found");
                     await products.nth(i).locator("text= Add To Cart").click();
                     break;
            }}
           await cartBtn.click();
            await page.locator('h3:has-text("ZARA COAT 3")').waitFor();
           const bool = await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
           expect(bool).toBeTruthy();  
           console.log("product is visible in cart" + bool);

           await checkoutBtn.click();
             await paymentTypes.waitFor(); // wait for payment types to appear on checkout page
            await selectCountry.pressSequentially("India"); // type "India" in the country selection input
             await dropdownOptions.waitFor(); // wait for dropdown options to appear
            const optionsCount = await dropdownOptions.locator("button").count(); // count the number of options in the dropdown
   for(let i=0; i<optionsCount; i++){ 
    if((await dropdownOptions.locator("button").nth(i).textContent()) === " India"){
       await dropdownOptions.locator("button").nth(i).click(); // click on the option that matches "India"
         break;
      }
}
  await selectCountry.waitFor(); // wait for the country selection input to be filled with the selected country
  const countryValue = await selectCountry.inputValue(); // get the value of the country selection input to verify it is filled correctly
  console.log(countryValue);
  expect(countryValue).toBe("India"); // assertion to verify the country selection input is filled with "India"
 
  expect(page.locator(".user__name [type='text']").nth(1)).toHaveValue(email); // assertion to verify the username input on checkout page is filled with the same value as the username input on login page
  await placeOrderBtn.click(); // click on the place order button to complete the purchase
 
  await orderConfirmationMsg.waitFor(); // wait for the order confirmation message to appear
  console.log(await orderConfirmationMsg.textContent());

  expect(orderConfirmationMsg).toHaveText("Thankyou for the order."); // assertion to verify the order confirmation message is correct
    const orderIdval= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
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


