# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\jsonSchemaValidator.spec.js >> Validate API response schema
- Location: tests\jsonSchemaValidator.spec.js:6:5

# Error details

```
SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import Ajv from 'ajv';
  3  | 
  4  | const ajv = new Ajv();
  5  | 
  6  | test('Validate API response schema', async ({ request }) => {
  7  |   const response = await request.get('https://example.com');
> 8  |   const responseBody = await response.json();
     |                        ^ SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON
  9  | 
  10 |   const schema = {
  11 |     type: 'object',
  12 |     properties: {
  13 |       id: { type: 'number' },
  14 |       name: { type: 'string' }
  15 |     },
  16 |     required: ['id', 'name']
  17 |   };
  18 | 
  19 |   const validate = ajv.compile(schema);
  20 |   const valid = validate(responseBody);
  21 | 
  22 |   if (!valid) {
  23 |     console.error('Errors:', ajv.errorsText(validate.errors));
  24 |   }
  25 |   expect(valid).toBe(true);
  26 | });
  27 | 
```