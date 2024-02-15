import { factorial } from "../basic/factorial";

describe('factorial', () => {
    it.each([
      [1, 1],
      [2, 2],
      [4, 24],
      [7, 5040]
    ])('factorial(%i) should return %i', (input, expectedOutput) => {
      expect(factorial(input)).toEqual(expectedOutput);
    });

    it('should return 1 when passing 0 factorial', () => {
        const result = factorial(0);
        expect(result).toBe(1);
    })
  });