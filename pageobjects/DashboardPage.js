class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productCards = page.locator(".card-body b");
        this.cartBtn =page.locator("[routerlink*='cart']");
         
    }

    async searchProductAndAddToCart(productName) {
       await this.page.locator(".card-body b").first().waitFor();
               const allcontents = await this.productCards.allTextContents();
               console.log(allcontents);
              const productCount = await this.products.count();
              console.log(productCount);
                for(let i=0; i<productCount; i++){
                   if((await this.products.nth(i).locator("b").textContent()) === productName){
                      console.log("product found");
                            await this.products.nth(i).locator("text= Add To Cart").click();
                            break;
                   }}

}

async navigateToCart(){
    
    await this.cartBtn.click();
}
}
module.exports = { DashboardPage };