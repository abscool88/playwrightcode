const { expect,test } = require("@playwright/test");

test("Calender test", async ({ page }) =>  // access page object from test function parameter
{
const monthNumber = 5; // month number for July (0-based index)
const year = 2026;
const date = 15;


  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
  await page.locator(".react-date-picker__inputGroup").click(); // click on the date picker input to open the calendar
  await page.locator(".react-calendar__navigation__label").dblclick(); // click on the month-year label to switch to month selection view
  await page.locator('button').filter({ hasText: year+"33" }).click();
  
    await page.locator(".react-calendar__year-view__months__month").nth(monthNumber-1).click(); // click on the previous month button to navigate to the desired month
    await page.locator("//abbr[text()='"+date+"']").click(); // click on the previous month button to navigate to the desired month
   


const selectedDate = await page.locator("[name='day']").inputValue(); // get the value of the date picker input to verify the selected date
console.log(selectedDate);
const selectedMonth = await page.locator("[name='month']").inputValue(); // get the value of the month input to verify the selected month
console.log(selectedMonth);
const selectedYear = await page.locator("[name='year']").inputValue(); // get the value of the year input to verify the selected year
console.log(selectedYear);
expect(parseInt(selectedDate)).toBe(date); // assertion to verify the selected date is correct
expect(parseInt(selectedMonth)).toBe(monthNumber); // assertion to verify the selected month is correct (0-based index)
expect(parseInt(selectedYear)).toBe(year); // assertion to verify the selected year is correct
}
);

