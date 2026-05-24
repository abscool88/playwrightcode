const { test, expect } = require('@playwright/test');

test('amazon product search for mobile', async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    const searchBox = page.locator("#twotabsearchtextbox");
    await searchBox.fill("mobile");
    await searchBox.press("Enter");
    let count = 0;
    //await page.waitForLoadState('networkidle')
    await page.locator('.a-link-normal h2 span').first().waitFor();
    const productTitles = await page.locator(".a-link-normal h2 span");  // this will locate all the product titles on the search results page that contain the text "mobile", allowing us to verify that the search results are relevant to the search query and to extract information about the products listed in the search results
    const productCount = await productTitles.count();
    console.log("Number of products found: " + productCount);
    const allMobileTitles = await productTitles.allTextContents();  // this will get the text content of all the product titles located by the previous locator and store them in an array, allowing us to verify that the search results are relevant to the search query and to extract information about the products listed in the search results
    for (let mobile of allMobileTitles) {
        if (mobile.toLowerCase().includes("mobile")) {
            console.log(mobile);
            count = count + 1;
        }

    }
    console.log("Number of products with 'mobile' in the title: " + count);
    /*  for(let i=0; i<productCount; i++){
         console.log(await productTitles.nth(i).textContent());  // print the title of each product found in the search results
     } */
}); 