import { binaryToString } from './binary-to-string';

describe('binaryToString', () => {
    it('should throw an error if the given input is an integer', () => {
        const input = 5;

        expect(() => {
            binaryToString(input);
        }).toThrow('Invalid input');
    });

    it('should return the given real number as a binary if it can be represented accurately', () => {
        const input = 5.125;
        const expected = input.toString(2);

        expect(binaryToString(input)).toBe(expected);
    });

    it('should return the given fraction as a binary if it can be represented accurately', () => {
        const input = 0.125;
        const expected = input.toString(2);

        expect(binaryToString(input)).toBe(expected);
    });

    it('should throw an error if the given real number canot be represented accurately in a binary format', () => {
        const input = 5.126;

        expect(() => {
            binaryToString(input);
        }).toThrow('Number cannot be represented accurately');
    });
});
