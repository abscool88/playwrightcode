# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\jsonSchemaValidator.spec.js >> json schema validation test
- Location: tests\jsonSchemaValidator.spec.js:4:5

# Error details

```
ReferenceError: request is not defined
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import Ajv from 'ajv';
  3  | 
  4  | test('json schema validation test', async () => {
  5  | 
> 6  |     const response = await request.get("https://example.com");
     |                      ^ ReferenceError: request is not defined
  7  |     const responseJson= await response.json();
  8  | 
  9  |    const ajv = new Ajv();
  10 |    const schema = {
  11 |      type: "object",
  12 |      properties: {
  13 |        id: { type: "string", format: "uuid" },
  14 |        email: { type: "string", format: "email" }
  15 |      },
  16 |      required: ["id", "email"]
  17 |    };
  18 | 
  19 | 
  20 |     const validate = ajv.compile(schema);
  21 |     const valid = validate(responseJson);
  22 | 
  23 |     if (!valid) {
  24 |       console.log(validate.errors);
  25 |     }   
  26 |     expect(valid).toBeTruthy();
  27 | }   );
```