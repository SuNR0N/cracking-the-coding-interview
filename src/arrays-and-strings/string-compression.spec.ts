import { stringCompression } from './string-compression';

describe('stringCompression', () => {
    it('should return the compressed string if it is shorter than the original', () => {
        const input = 'aabcccccaaa';
        const expected = 'a2b1c5a3';
        expect(stringCompression(input)).toBe(expected);
    });

    it('should return a properly compressed string if it contains long chains of repeated characters', () => {
        const input = 'aaaaaaaaaaaaabbbbbbbbbbb';
        const expected = 'a13b11';
        expect(stringCompression(input)).toBe(expected);
    });

    it('should return the original string if it is equal in length with the compressed one', () => {
        const input = 'aabbcc';
        const expected = input;
        expect(stringCompression(input)).toBe(expected);
    });

    it('should return the original string if the compressed one is longer than the original', () => {
        const input = 'abc';
        const expected = input;
        expect(stringCompression(input)).toBe(expected);
    });
});
