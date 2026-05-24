const {expect} = require('@playwright/test');

class CartPage {  
    
    constructor(page, productName) {
        this.page = page;
        this.checkoutBtn = this.page.locator("button:has-text('Checkout')");
        this.product = this.page.locator(`h3:has-text('${productName}')`);
    }

    async verifyProductInCartandClickCheckout() {
        await this.product.waitFor();
        const bool = await this.product.isVisible();
        expect(bool).toBeTruthy();
        console.log("product is visible in cart" + bool);
        await this.checkoutBtn.click();
    }

    
    }

module.exports = { CartPage };