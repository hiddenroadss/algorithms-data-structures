import { fib} from '../basic/fib';

describe('Fibonacci function tests', () => {
  test.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [10, 55]
  ])('fib(%i) should return %i', (input, expectedOutput) => {
    expect(fib(input)).toBe(expectedOutput);
  });
});