const {expect} = require('@playwright/test');

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.paymentTypes = page.locator(".payment__types");
        this.selectCountry = page.locator("[placeholder*='Select Country']");
        this.dropdownOptions = page.locator(".ta-results");
        this.placeOrderBtn = page.locator(".action__submit");
        this.orderConfirmationMsg = page.locator(".hero-primary");
        this.emailOnCheckoutPage = page.locator(".user__name [type='text']").nth(1);
    }

    async selectCountryAndPlaceOrder(email) {
        await this.paymentTypes.waitFor(); // wait for payment types to appear on checkout page
        await this.selectCountry.pressSequentially("India"); // type "India" in the country selection input
        await this.dropdownOptions.waitFor(); // wait for dropdown options to appear
        const optionsCount = await this.dropdownOptions.locator("button").count(); // count the number of options in the dropdown
        for (let i = 0; i < optionsCount; i++) {
            if ((await this.dropdownOptions.locator("button").nth(i).textContent()) === " India") {
                await this.dropdownOptions.locator("button").nth(i).click(); // click on the option that matches "India"
                break;
            }
        }
        await this.selectCountry.waitFor(); // wait for the country selection input to be filled with the selected country
        const countryValue = await this.selectCountry.inputValue(); // get the value of the country selection input to verify it is filled correctly
        console.log(countryValue);
        expect(countryValue).toBe("India"); // assertion to verify the country selection input is filled with "India"

        expect(this.emailOnCheckoutPage).toHaveValue(email); // assertion to verify the email input on checkout page is filled with the same value as the email input on login page
        await this.placeOrderBtn.click(); // click on the place order button to complete the purchase

    }
}

module.exports = { CheckoutPage };