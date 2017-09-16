import { flipBitToWin } from './flip-bit-to-win';

describe('flipBitToWin', () => {
    it('should return the length of the binary representation if it contains only ones', () => {
        const input = 0b1111111;
        const expectedLength = 7;

        expect(flipBitToWin(input)).toBe(expectedLength);
    });

    it('should return 1 if the binary string contains only zeros', () => {
        const input = 0b0000000;
        const expectedLength = 1;

        expect(flipBitToWin(input)).toBe(expectedLength);
    });

    it('should return the longest sequence of ones which can be reached via flipping a single 0 bit', () => {
        const input = 0b1110011011110111011;
        const expectedLength = 8;

        expect(flipBitToWin(input)).toBe(expectedLength);
    });
});
