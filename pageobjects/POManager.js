const {LoginPage} = require('./LoginPage');
const {DashboardPage} = require('./DashboardPage');
const {CartPage} = require('./CartPage');
const {CheckoutPage} = require('./CheckoutPage');

class POManager {
    constructor(page,ProductName) {
        this.page = page;
        this.ProductName = ProductName;
       this.LoginPage = new LoginPage(this.page);
       this.DashboardPage = new DashboardPage(this.page);
       this.CartPage = new CartPage(this.page, this.ProductName);
       this.CheckoutPage = new CheckoutPage(this.page);

    }

    getLoginPage() {
        return this.LoginPage;
    }

    getDashboardPage() {
        return this.DashboardPage;
    }

    getCartPage() {
        return this.CartPage;
    }

    getCheckoutPage() {
        return this.CheckoutPage;
    }

}

module.exports = {POManager};