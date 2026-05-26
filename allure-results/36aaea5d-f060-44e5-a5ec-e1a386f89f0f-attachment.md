# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: flighttest.spec.js >> Flight search API test
- Location: tests\flighttest.spec.js:3:1

# Error details

```
TypeError: FlightHelper is not a constructor
```

# Test source

```ts
  1  | const {test,expect} = require('@playwright/test');
  2  | const { FlightHelper } = require('../pageobjects/FlightHelper');
  3  | test('Flight search API test', async ({page}) => {
  4  | 
> 5  |     const flightHelper = new FlightHelper(page);
     |                          ^ TypeError: FlightHelper is not a constructor
  6  |     await flightHelper.searchFlights('Boston', 'London');
  7  |     //await page.getByRole('button',{name:'Find Flights'}).click();
  8  |   
  9  |      
  10 |     await page.locator('//tbody/tr/td').first().waitFor();
  11 |        const formcount = page.locator('//form[@method="post"]').count();
  12 |        console.log("Formcount" +formcount)
  13 | 
  14 | 
  15 |     //let count =6;
  16 |     //const an = 
  17 | 
  18 |    // const priceList=await page.locator("//table/tbody/tr[1]/form/following::td[${count}}]").textContent();
  19 | 
  20 | 
  21 | 
  22 | 
  23 | 
  24 | 
  25 | 
  26 | 
  27 | 
  28 | 
  29 | });
```