const {test,expect} = require('@playwright/test');

// First test to check if the test framework is working
test('first ui basics',async ({browser})=> {
  const context =await browser.newContext();
  const page =await context.newPage();
  const username = page.locator("input#username");
  const password = page.locator("[type=password]");
  const signInBtn = page.locator("#signInBtn");
  const radioOption = page.locator("#usertype");
  const terms = page.locator("#terms");
  const okBtn = page.locator("#okayBtn");
  const blinkLink = page.locator("[href*='documents-request']"); 
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
   await username.fill("rahulshettyacademy");  //css selector - user fill to input
   await password.fill("Learning@830$3mK2");  //css selector - user fill to input 
   const dropdown = page.locator("select.form-control");
   await dropdown.selectOption("consult");  //css selector - select option from dropdown
   await radioOption.last().click();
   expect (await radioOption.last().isChecked()).toBeTruthy();  //css selector - assertion for radio button
   
   await okBtn.click();
   await terms.check();  //css selector - check the checkbox
    expect (await terms.isChecked()).toBeTruthy();  //css selector - assertion for checkbox
   await terms.uncheck();  //css selector - uncheck the checkbox
   
    expect (await terms.isChecked()).toBeFalsy();  //css selector - assertion for checkbox
   await expect (blinkLink).toHaveAttribute("class", "blinkingText");  //css selector - assertion for link class attribute
    await signInBtn.click();  //css selector - click on sign in button
  // await page.pause();
//    console.log( await page.locator('[style*="block"]').textContent());  //css selector - wait for error message to appear
//    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
     //css selector - assertion for error message

     // get first product card name
        const productCards = page.locator(".card-body a");
        console.log(await productCards.first().textContent());
        console.log(await productCards.nth(1).textContent());
        const allcontents = await productCards.allTextContents();
        console.log(allcontents);




});


test('New Page link',async ({browser})=> {
  const context =await browser.newContext();
  const page =await context.newPage(); 
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
   const username = page.locator("input#username");
     const blinkLink = page.locator("[href*='documents-request']"); 
   // await blinkLink.click();

     const [newPage] = await Promise.all([
        context.waitForEvent('page'), // wait for newpage so it will be providing as param
         blinkLink.click(),
        ])
  
       // newPage.waitForLoadState();
        const text =await newPage.locator(".red").textContent();  //css selector - wait for element to appear on new page
        console.log(await newPage.title());
        console.log(text);
        //css selector - click on element on new page
         const domainName = text.split("@")[1].split(" ")[0];  //string manipulation to get the domain name from the text
        console.log(domainName);
        await username.fill(domainName);  //css selector - fill the username input with the domain name from the new page
        console.log(await username.inputValue());  //css selector - get the value of the username input to verify it is filled correctly
        

});


test('practice login test',async ({page})=> {
 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  const username = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const signInBtn = page.locator("#login");
   console.log(await page.title());
   await username.fill("abhishekgup88@gmail.com");  //css selector - user fill to input
   await password.fill("Lucknow@88");  //css selector - user fill to input 
   await signInBtn.click();  //css selector - click on sign in button
//    console.log( await page.locator('[style*="block"]').textContent());  //css selector - wait for error message to appear
//    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
     //css selector - assertion for error message

     // get first product card name
        const productCards = page.locator(".card-body b");
       console.log(await productCards.first().textContent());
       console.log(await productCards.nth(1).textContent());
        const allcontents = await productCards.allTextContents();
        console.log(allcontents);

});

test('second ui test',async ({page})=> {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
    console.log(await page.title());
    

});