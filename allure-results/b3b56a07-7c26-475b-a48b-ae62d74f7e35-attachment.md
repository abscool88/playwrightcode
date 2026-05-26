# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: flighttest.spec.js >> Flight search API test
- Location: tests\flighttest.spec.js:3:1

# Error details

```
Error: locator.selectOption: Target page, context or browser has been closed
Call log:
  - waiting for locator('#select[name="fromPort"]')

```

# Test source

```ts
  1  | class FlightHelper {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.departureCity = this.page.locator('#select[name="fromPort"]');
  5  |         this.arrivalCity = this.page.locator('#select[name="toPort"]');
  6  |     }
  7  |     
  8  |     async searchFlights(departure, arrival) {
  9  |         await this.page.goto('https://www.blazedemo.com');
> 10 |         await this.departureCity.selectOption(departure);
     |                                  ^ Error: locator.selectOption: Target page, context or browser has been closed
  11 |         await this.arrivalCity.selectOption(arrival);
  12 |         await this.page.getByRole('button', { name: 'Find Flights' }).click();
  13 |     }
  14 | }
  15 | 
  16 | module.exports = { FlightHelper };
  17 | 
```