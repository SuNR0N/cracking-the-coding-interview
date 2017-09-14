import { isPrime } from './is-prime';

describe('isPrime', () => {
    it('should return false for a negative number', () => {
        const input = -3;
        const expected = false;

        expect(isPrime(input)).toBe(expected);
    });

    it('should return false for zero', () => {
        const input = 0;
        const expected = false;

        expect(isPrime(input)).toBe(expected);
    });

    it('should return false for 1', () => {
        const input = 1;
        const expected = false;

        expect(isPrime(input)).toBe(expected);
    });

    it('should return true for a prime number', () => {
        const input = 1217;
        const expected = true;

        expect(isPrime(input)).toBe(expected);
    });

    it('should return false for a number greater than 1 which is not a prime', () => {
        const input = 85;
        const expected = false;

        expect(isPrime(input)).toBe(expected);
    });
});
