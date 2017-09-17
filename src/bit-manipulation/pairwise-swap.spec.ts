import { pairwiseSwap } from './pairwise-swap';

describe('pairwiseSwap', () => {
    it('should throw an error for a real number', () => {
        const input = 123.456;

        expect(() => {
            pairwiseSwap(input);
        }).toThrow('Invalid input');
    });

    it('should swap the bits for a positive integer with even bit count', () => {
        const input = 745;      // 1011101001
        const expected = 470;   // 0111010110

        expect(pairwiseSwap(input)).toBe(expected);
    });

    it('should swap the bits for a positive integer with odd bit count', () => {
        const input = 361;      // 101101001
        const expected = 406;   // 110010110

        expect(pairwiseSwap(input)).toBe(expected);
    });

    it('should swap the bits for a negative integer with even bit count', () => {
        const input = -745;     // -1011101001
        const expected = -470;  // -0111010110

        expect(pairwiseSwap(input)).toBe(expected);
    });

    it('should swap the bits for a negative integer with odd bit count', () => {
        const input = -361;      // -101101001
        const expected = -406;   // -110010110

        expect(pairwiseSwap(input)).toBe(expected);
    });
});
