class LoginPage {
    constructor(page) {
        this.page = page;
        this.signInUsername = page.locator("#userEmail");
        this.signInPassword = page.locator("#userPassword");
        this.signInButton = page.locator("#login");
    }

    async landOnLoginPage() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(email, password) {

        await this.signInUsername.fill(email);
        await this.signInPassword.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle')

    }
}

module.exports = { LoginPage };