import { listPrimes } from './list-primes';

describe('listPrimes', () => {
    it('should return an empty array if the given value is smaller than the first prime', () => {
        const input = 1;
        const expected: number[] = [];

        expect(listPrimes(input)).toEqual(expected);
    });

    it('should return 2 only if the input is 2', () => {
        const input = 2;
        const expected = [2];

        expect(listPrimes(input)).toEqual(expected);
    });

    it('should return all primes less than the provided value if it is not a prime', () => {
        const input = 12;
        const expected = [2, 3, 5, 7, 11];

        expect(listPrimes(input)).toEqual(expected);
    });

    it('should return all primes less than or equal the provided value if it is a prime', () => {
        const input = 13;
        const expected = [2, 3, 5, 7, 11, 13];

        expect(listPrimes(input)).toEqual(expected);
    });
});
