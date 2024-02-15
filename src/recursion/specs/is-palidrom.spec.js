import { isPalindrome } from "../complex/is-palidrom";

describe('isPalindrome', () => {
  it('returns true for a single-letter string', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('returns true for a palindrome string', () => {
    expect(isPalindrome('abba')).toBe(true);
  });

  it('returns false for a non-palindrome string', () => {
    expect(isPalindrome('abcdef')).toBe(false);
  });

  it('ignores case when checking for palindromes', () => {
    expect(isPalindrome('Aba')).toBe(true);
  });
});