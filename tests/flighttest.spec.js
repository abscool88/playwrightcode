const {test,expect} = require('@playwright/test');
const { FlightHelper } = require('../pageobjects/FlightHelper');
test('Flight search API test', async ({page}) => {

    const flightHelper = new FlightHelper(page);
    await flightHelper.searchFlights('Boston', 'London');
    //await page.getByRole('button',{name:'Find Flights'}).click();
  
     
    await page.locator('//tbody/tr/td').first().waitFor();
       const formcount = page.locator('//form[@method="post"]').count();
       console.log("Formcount" +formcount)


    //let count =6;
    //const an = 

   // const priceList=await page.locator("//table/tbody/tr[1]/form/following::td[${count}}]").textContent();










});