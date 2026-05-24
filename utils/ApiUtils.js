class ApiUtils {
    constructor(apiContext,loginPayload) {
        this.apiContext = apiContext;  // this.apiContext = apiContext; is used to assign the passed apiContext to the instance variable this.apiContext, allowing it to be accessed in other methods of the class.
        this.loginPayload = loginPayload;  // this.loginPayload = loginPayload; is used to assign the passed loginPayload to the instance variable this.loginPayload, allowing it to be accessed in other methods of the class.
    }
    async getToken() {
       const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
           {
               data: this.loginPayload
           });
          // expect(loginResponse.status()).toBeTruthy();
           const loginResponseJson = await loginResponse.json();
           console.log(loginResponseJson);
           let token = loginResponseJson.token;
           return  token;
}

async createOrder(orderPayload) {
    let response ={};
    response.token = await this.getToken(); 
    const placeOrderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", { 
        data: orderPayload,
        headers : {
            'Authorization': response.token,  // this refers to curent class instance and getToken() is method of the class which will return the token value
            'Content-Type': 'application/json'
        }});

        
  //  expect(placeOrderResponse.status()).toBeTruthy();
    const placeOrderResponseJson = await placeOrderResponse.json();
    const orderId = placeOrderResponseJson.orders[0];
    response.orderId = orderId;
    console.log("orderIdFromResponse: " + orderId);

    return response;
      
}}

module.exports = {ApiUtils};