import { someRecursive } from "../complex/some-recursive";

describe("Testing someRecursive function", () => {

    it("Array where all numbers are odd", () => {
      expect(someRecursive([1, 3, 5, 7], val => val % 2 !== 0)).toBe(true);
    });
  
    it("Array where one number is odd", () => {
      expect(someRecursive([2, 4, 6, 7], val => val % 2 !== 0)).toBe(true);
    });
  
    it("Array where all numbers are even", () => {
      expect(someRecursive([2, 4, 6, 8], val => val % 2 !== 0)).toBe(false);
    });
  
    it("Array where no numbers are greater than 10", () => {
      expect(someRecursive([2, 4, 6, 8], val => val > 10)).toBe(false);
    });
  
    it("Array where some numbers are greater than 10", () => {
      expect(someRecursive([2, 4, 20, 8], val => val > 10)).toBe(true);
    });
  
  });