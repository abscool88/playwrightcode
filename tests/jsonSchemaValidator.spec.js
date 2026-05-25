import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

const ajv = new Ajv();

test('Validate API response schema', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  const responseBody = await response.json();

  const schema = {
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      username: { type: 'string' },
      email: { type: 'string' }
    },
    required: ['id', 'name', 'username', 'email']
  };

  const validate = ajv.compile(schema);
  const valid = validate(responseBody);

  if (!valid) {
    console.error('Errors:', ajv.errorsText(validate.errors));
  }
  expect(valid).toBe(true);
});
