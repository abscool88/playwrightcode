# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: appClient.spec.js >> practice login test
- Location: tests\appClient.spec.js:8:1

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 50000ms exceeded.
Call log:
  - waiting for locator('h3:has-text(\'undefined\')') to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e26]:
    - generic [ref=e27]:
      - heading "My Cart" [level=1] [ref=e28]
      - button "Continue Shopping❯" [ref=e29] [cursor=pointer]
    - list [ref=e31]:
      - listitem [ref=e32] [cursor=pointer]:
        - generic [ref=e33]:
          - generic [ref=e34]:
            - paragraph [ref=e35]: "#6960eac0c941646b7a8b3e68"
            - heading "ZARA COAT 3" [level=3] [ref=e36]
            - paragraph [ref=e37]: MRP $ 11500
            - paragraph [ref=e38]: In Stock
          - paragraph [ref=e40]: $ 11500
          - generic [ref=e41]:
            - button "Buy Now❯" [ref=e42]
            - button "❯" [ref=e43]:
              - generic [ref=e44]: 
              - text: ❯
    - list [ref=e46]:
      - listitem [ref=e47]:
        - generic [ref=e48]: Subtotal
        - generic [ref=e49]: $11500
      - listitem [ref=e50]:
        - generic [ref=e51]: Total
        - generic [ref=e52]: $11500
      - listitem [ref=e53]:
        - button "Checkout❯" [ref=e54] [cursor=pointer]
```

# Test source

```ts
  1  | const {expect} = require('@playwright/test');
  2  | 
  3  | class CartPage {  
  4  |     
  5  |     constructor(page, productName) {
  6  |         this.page = page;
  7  |         this.checkoutBtn = this.page.locator("button:has-text('Checkout')");
  8  |         this.product = this.page.locator(`h3:has-text('${productName}')`);
  9  |     }
  10 | 
  11 |     async verifyProductInCartandClickCheckout() {
> 12 |         await this.product.waitFor();
     |                            ^ Error: locator.waitFor: Test timeout of 50000ms exceeded.
  13 |         const bool = await this.product.isVisible();
  14 |         expect(bool).toBeTruthy();
  15 |         console.log("product is visible in cart" + bool);
  16 |         await this.checkoutBtn.click();
  17 |     }
  18 | 
  19 |     
  20 |     }
  21 | 
  22 | module.exports = { CartPage };
```