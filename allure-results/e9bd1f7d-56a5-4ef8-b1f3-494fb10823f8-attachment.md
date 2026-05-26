# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MoreValidations.spec.js >> Visual comparison with baseline image
- Location: tests\MoreValidations.spec.js:43:1

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected) failed

  45211 pixels (ratio 0.05 of all image pixels) are different.

  Snapshot: google-landing.png

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]:
        - img [ref=e16]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - generic [ref=e22]:
    - link "Men's IPL 2026 Playoffs" [ref=e23] [cursor=pointer]:
      - /url: /search?sca_esv=46bc13bb03f41cf0&q=Indian+Premier+League+&oi=ddle&noiga=1&ct=460148945&hl=en&si=AL3DRZGDMkmBg1SB5TH8o8Xeh03tgmwpgZCgiYi5BFB_ELNOTBR2qQvSWtENTVdEqHTMOUxhjfZGmORbmablzumf33-t27uivSiATPQAPsjj8iD3F4f1fplT2NlnoX71CytWKTyFhEfE&sa=X&ved=0ahUKEwiNzsfhoteUAxUcaHADHXZyF9kQPQgG
      - img "Men's IPL 2026 Playoffs" [ref=e25]
    - button "Share" [ref=e27]:
      - generic "Share" [ref=e28] [cursor=pointer]:
        - img [ref=e32]
  - search [ref=e35]:
    - generic [ref=e37]:
      - generic [ref=e39]:
        - button "Add files and tools" [ref=e42] [cursor=pointer]:
          - img [ref=e44]
        - combobox "Search" [ref=e47]
        - generic [ref=e48]:
          - generic [ref=e49]:
            - button "Search by voice" [ref=e50] [cursor=pointer]:
              - img [ref=e51]
            - button "Search by image" [ref=e53] [cursor=pointer]:
              - img [ref=e54]
          - link "AI Mode" [ref=e56] [cursor=pointer]:
            - generic [ref=e58]:
              - img [ref=e60]
              - generic [ref=e67]: AI Mode
      - generic [ref=e69]:
        - button "Google Search" [ref=e70] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e71] [cursor=pointer]
  - generic [ref=e72]:
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - dialog "Choose Chrome, the browser built by Google":
                      - generic [ref=e81]:
                        - generic [ref=e82]:
                          - generic [ref=e83]: Choose Chrome, the browser built by Google
                          - generic [ref=e84]: Try a fast, secure browser with automatic updates
                          - generic [ref=e85]:
                            - text: By downloading Chrome, you agree to the
                            - link "Google Terms of Service" [ref=e86] [cursor=pointer]:
                              - /url: https://policies.google.com/terms
                            - text: and
                            - link "Chrome and ChromeOS Additional Terms of Service" [ref=e87] [cursor=pointer]:
                              - /url: https://www.google.com/chrome/terms/
                            - text: .
                          - checkbox "Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. Learn more." [ref=e89]:
                            - checkbox "Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. Learn more." [checked] [ref=e90]
                            - generic [ref=e91]:
                              - text: Help make Google Chrome better by automatically sending usage statistics and crash reports to Google.
                              - link "Learn more" [ref=e92] [cursor=pointer]:
                                - /url: https://support.google.com/chrome/answer/96817
                              - text: .
                        - generic [ref=e93]:
                          - button "Do not use Chrome" [ref=e94] [cursor=pointer]:
                            - generic [ref=e96]: Do not use Chrome
                          - button "Download Chrome" [ref=e97] [cursor=pointer]:
                            - generic [ref=e99]: Download Chrome
    - generic [ref=e101]:
      - text: "Google offered in:"
      - link "हिन्दी" [ref=e102] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_-r6VKUeZ-THoWlWCgWtistUsxzI%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiNzsfhoteUAxUcaHADHXZyF9kQ2ZgBCDw
      - link "বাংলা" [ref=e103] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_-r6VKUeZ-THoWlWCgWtistUsxzI%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwiNzsfhoteUAxUcaHADHXZyF9kQ2ZgBCD0
      - link "తెలుగు" [ref=e104] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_-r6VKUeZ-THoWlWCgWtistUsxzI%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwiNzsfhoteUAxUcaHADHXZyF9kQ2ZgBCD4
      - link "मराठी" [ref=e105] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_-r6VKUeZ-THoWlWCgWtistUsxzI%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwiNzsfhoteUAxUcaHADHXZyF9kQ2ZgBCD8
      - link "தமிழ்" [ref=e106] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_-r6VKUeZ-THoWlWCgWtistUsxzI%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiNzsfhoteUAxUcaHADHXZyF9kQ2ZgBCEA
      - link "ગુજરાતી" [ref=e107] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_-r6VKUeZ-THoWlWCgWtistUsxzI%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwiNzsfhoteUAxUcaHADHXZyF9kQ2ZgBCEE
      - link "ಕನ್ನಡ" [ref=e108] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_-r6VKUeZ-THoWlWCgWtistUsxzI%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwiNzsfhoteUAxUcaHADHXZyF9kQ2ZgBCEI
      - link "മലയാളം" [ref=e109] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_-r6VKUeZ-THoWlWCgWtistUsxzI%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwiNzsfhoteUAxUcaHADHXZyF9kQ2ZgBCEM
      - link "ਪੰਜਾਬੀ" [ref=e110] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_-r6VKUeZ-THoWlWCgWtistUsxzI%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwiNzsfhoteUAxUcaHADHXZyF9kQ2ZgBCEQ
  - contentinfo [ref=e112]:
    - generic [ref=e113]: India
    - generic [ref=e114]:
      - generic [ref=e115]:
        - link "Advertising" [ref=e116] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e117] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e118] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e119]:
        - link "Privacy" [ref=e120] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e121] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e125] [cursor=pointer]:
          - generic [ref=e126]: Settings
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test.describe.configure({ mode: 'serial' });  // this will run the tests in this file in parallel mode, meaning that they will run simultaneously instead of one after the other
  4  | test('more validations', async ({ page }) => {
  5  |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  6  |     //     await page.goto("https://google.com");
  7  |     //     await page.goBack();
  8  |     //     await page.goForward();
  9  |     await page.locator("#displayed-text").waitFor();  // wait for element to appear on page
  10 |     await expect(page.locator("#displayed-text")).toBeVisible();;  // check if element is visible on page
  11 |     await page.locator("#hide-textbox").click();  // click on hide button to hide the text box
  12 |     await expect(page.locator("#displayed-text")).toBeHidden();  // check if element is hidden on page
  13 |     await page.locator("#show-textbox").click();  // click on show button to show the text box
  14 |     await expect(page.locator("#displayed-text")).toBeVisible();  // check if element is visible on page
  15 |     await page.locator("#confirmbtn").click();  // click on confirm button to trigger alert
  16 |     page.on('dialog', dialog => dialog.accept());  // this will automatically accept any alert that appears on the page, allowing us to verify that the alert is being triggered correctly when we interact with the page
  17 |     await page.locator("#mousehover").hover();
  18 | 
  19 |     const iframe = page.frameLocator("#courses-iframe");  // this will switch the context to the iframe with the id of courses-iframe, allowing us to interact with elements inside the iframe
  20 |     await iframe.locator("li a[href*='lifetime-access']:visible").click();  // this will click on the link with the text of "lifetime access" that is visible on the page, allowing us to verify that we can interact with elements inside the iframe
  21 | });
  22 | 
  23 | test('Screenshot and visual comparison', async ({ page }) => {
  24 | 
  25 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  26 |     //     await page.goto("https://google.com");
  27 |     //     await page.goBack();
  28 |     //     await page.goForward();
  29 |     await page.locator("#displayed-text").waitFor();  // wait for element to appear on page
  30 |     await expect(page.locator("#displayed-text")).toBeVisible();;  // check if element is visible on page
  31 |     await page.locator("#displayed-text").screenshot({ path: 'screenshot1.png'});
  32 |     await page.locator("#hide-textbox").click();  // click on hide button to hide the text box
  33 |     //await page.screenshot({ path: 'screenshot.png', fullPage: true });  // this will take a screenshot of the entire page and save it as screenshot.png in the root directory of the project, allowing us to visually compare the state of the page before and after interacting with it 
  34 |      
  35 |      await expect(page.locator("#displayed-text")).toBeHidden();
  36 |    // await page.locator("#show-textbox").click();  // click on show button to show the text box
  37 |     //await page.screenshot({ path: 'screenshot.png', fullPage: true });  // this will take a screenshot of the entire page and save it as screenshot.png in the root directory of the project, allowing us to visually compare the state of the page before and after interacting with it 
  38 |     //await expect(page.locator("#displayed-text")).toBeVisible();  // check if element is visible on page
  39 | 
  40 | });
  41 | 
  42 | 
  43 | test('Visual comparison with baseline image', async ({ page }) => {
  44 | 
  45 |     await page.goto("https://google.com/");
> 46 |     expect(await page.screenshot()).toMatchSnapshot('google-landing.png');  // this will take a screenshot of the element with the class of signin and compare it to the baseline image of rediff-signin.png, allowing us to visually compare the state of the element to the expected state defined in the baseline image
     |                                     ^ Error: expect(Buffer).toMatchSnapshot(expected) failed
  47 | });
```