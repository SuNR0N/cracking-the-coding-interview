import { greatestCommonDivisor } from './greatest-common-divisor';

describe('greatestCommonDivisor', () => {
    it('should throw an error without any arguments', () => {
        expect(() => {
            greatestCommonDivisor();
        }).toThrow('Invalid argument');
    });

    it('should return 1 if at least one of the arguments is 1', () => {
        const expected = 1;

        expect(greatestCommonDivisor(1, 4, 8)).toBe(expected);
    });

    it('should return the greatest common divisor of the provided arguments', () => {
        const expected = 6;

        expect(greatestCommonDivisor(54, 24)).toBe(expected);
    });
});
