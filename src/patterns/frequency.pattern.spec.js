import { validateAnagram } from "./frequency.pattern.js";

describe('validateAnagram', () => {
    it('should return early if string are not of the same length', () => {
        const str1 = 'anna';
        const str2 = 'ana';
        const result = validateAnagram(str1, str2);
        expect(result).toBe(false);
    })

    it('should return false if one word has unique letters', () => {
        const str1 = 'anna';
        const str2 = 'anda';
        const result = validateAnagram(str1, str2);
        expect(result).toBe(false);
    })

    it('should return false if letters are the same but their number is different', () => {
        const str1 = 'anna';
        const str2 = 'anaa';
        const result = validateAnagram(str1, str2);
        expect(result).toBe(false);
    })

    // it('should return false if words have same length, letters, but they are not anagram', () => {
    //     const str1 = 'anagram';
    //     const str2 = 'mragana';
    //     const result = validateAnagram(str1, str2);
    //     expect(result).toBe(false);
    // })

    // it('should return true if words create anagram', () => {
    //     const str1 = 'anagram';
    //     const str2 = 'margana';
    //     const result = validateAnagram(str1, str2);
    //     expect(result).toBe(true);
    // })
})