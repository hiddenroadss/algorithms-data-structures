import { power } from "../basic/power"

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

describe('power', () => {
    it('should return 1 if exponent is 0', () => {
        const result = power(2, 0);
        expect(result).toBe(1)
    })

    it('should return the base to the power of the exponent', () => {
        expect(power(2, 2)).toBe(4);
        expect(power(2, 4)).toBe(16);
      });
})