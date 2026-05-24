const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'serial' });  // this will run the tests in this file in parallel mode, meaning that they will run simultaneously instead of one after the other
test('more validations', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //     await page.goto("https://google.com");
    //     await page.goBack();
    //     await page.goForward();
    await page.locator("#displayed-text").waitFor();  // wait for element to appear on page
    await expect(page.locator("#displayed-text")).toBeVisible();;  // check if element is visible on page
    await page.locator("#hide-textbox").click();  // click on hide button to hide the text box
    await expect(page.locator("#displayed-text")).toBeHidden();  // check if element is hidden on page
    await page.locator("#show-textbox").click();  // click on show button to show the text box
    await expect(page.locator("#displayed-text")).toBeVisible();  // check if element is visible on page
    await page.locator("#confirmbtn").click();  // click on confirm button to trigger alert
    page.on('dialog', dialog => dialog.accept());  // this will automatically accept any alert that appears on the page, allowing us to verify that the alert is being triggered correctly when we interact with the page
    await page.locator("#mousehover").hover();

    const iframe = page.frameLocator("#courses-iframe");  // this will switch the context to the iframe with the id of courses-iframe, allowing us to interact with elements inside the iframe
    await iframe.locator("li a[href*='lifetime-access']:visible").click();  // this will click on the link with the text of "lifetime access" that is visible on the page, allowing us to verify that we can interact with elements inside the iframe
});

test('Screenshot and visual comparison', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //     await page.goto("https://google.com");
    //     await page.goBack();
    //     await page.goForward();
    await page.locator("#displayed-text").waitFor();  // wait for element to appear on page
    await expect(page.locator("#displayed-text")).toBeVisible();;  // check if element is visible on page
    await page.locator("#displayed-text").screenshot({ path: 'screenshot1.png'});
    await page.locator("#hide-textbox").click();  // click on hide button to hide the text box
    //await page.screenshot({ path: 'screenshot.png', fullPage: true });  // this will take a screenshot of the entire page and save it as screenshot.png in the root directory of the project, allowing us to visually compare the state of the page before and after interacting with it 
     
     await expect(page.locator("#displayed-text")).toBeHidden();
   // await page.locator("#show-textbox").click();  // click on show button to show the text box
    //await page.screenshot({ path: 'screenshot.png', fullPage: true });  // this will take a screenshot of the entire page and save it as screenshot.png in the root directory of the project, allowing us to visually compare the state of the page before and after interacting with it 
    //await expect(page.locator("#displayed-text")).toBeVisible();  // check if element is visible on page

});


test('Visual comparison with baseline image', async ({ page }) => {

    await page.goto("https://google.com/");
    expect(await page.screenshot()).toMatchSnapshot('google-landing.png');  // this will take a screenshot of the element with the class of signin and compare it to the baseline image of rediff-signin.png, allowing us to visually compare the state of the element to the expected state defined in the baseline image
});