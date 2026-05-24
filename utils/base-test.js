const base = require('@playwright/test');
                  //new object of base test class is created and exported to be used in the test files, allowing us to extend the base test class and use its
exports.customtest =base.test.extend({

    testDataForOrder:
    {
        username: "abhishekgup88@gmail.com",
        password: "Lucknow@88",
        productName: "ADIDAS ORIGINAL"
    }


}
)