import { productOfArray } from "../basic/product-of-array";

describe('productOfArray function tests', () => {
  test.each([
    [[1, 2, 3], 6],
    [[1, 2, 3, 10], 60]
  ])('productOfArray(%p) should return %i', (input, expectedOutput) => {
    expect(productOfArray(input)).toEqual(expectedOutput);
  });
});