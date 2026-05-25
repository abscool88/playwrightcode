
const {expect, test} = require('@playwright/test');

test('zero to left test', async ({page}) => {

const input = [2, 4, 0, 0, 5];

// Filter zeros and non-zeros separately
const zeros = input.filter(num => num === 0);
const nonZeros = input.filter(num => num !== 0);

// Combine them with zeros at the start
const output = [...zeros, ...nonZeros];

console.log(output); // [0, 0, 2, 4, 5]
});