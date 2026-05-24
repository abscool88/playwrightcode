import {test, expect} from "@playwright/test";

test('angular app login test', async ({page}) => {
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Employed").click();
  await page.getByLabel("Gender").selectOption("Female");
  await page.getByPlaceholder("Password").fill("12345678");
  await page.getByRole("button", {name: "Submit"}).click();
  await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
  await page.getByRole("link", {name: "Shop"}).click(); 
  await page.locator("app-card").first().waitFor();
  await page.locator("app-card").filter({hasText:"Blackberry"}).getByRole("button").click();  
});