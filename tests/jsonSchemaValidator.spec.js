import {test,expect} from '@playwright/test';
import Ajv from 'ajv';

test('json schema validation test', async () => {

    const response = await request.get("https://example.com");
    const responseJson= await response.json();

   const ajv = new Ajv();
   const schema = {
     type: "object",
     properties: {
       id: { type: "string", format: "uuid" },
       email: { type: "string", format: "email" }
     },
     required: ["id", "email"]
   };


    const validate = ajv.compile(schema);
    const valid = validate(responseJson);

    if (!valid) {
      console.log(validate.errors);
    }   
    expect(valid).toBeTruthy();
}   );