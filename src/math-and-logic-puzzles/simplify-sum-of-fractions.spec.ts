import { IPair, simplifySumOfFractions } from './simplify-sum-of-fractions';

describe('simplifySumOfFractions', () => {
    it('should throw an error if one of the denominators is 0', () => {
        const numerator1 = 1;
        const denominator1 = 0;
        const numerator2 = 2;
        const denominator2 = 1;

        expect(() => {
            simplifySumOfFractions(numerator1, denominator1, numerator2, denominator2);
        }).toThrow('Fractions cannot have 0 denominators');
    });

    it('should sum the numerators only if fractions have a common denominator and the sum cannot be simplified', () => {
        const numerator1 = 5;
        const denominator1 = 3;
        const numerator2 = 8;
        const denominator2 = 3;
        const expected: IPair = {
            denominator: 3,
            numerator: 13,
        };

        expect(simplifySumOfFractions(numerator1, denominator1, numerator2, denominator2)).toEqual(expected);
    });

    it('should sum simplify the sum of fractions if they have a common denominator and the sum can be simplified', () => {
        const numerator1 = 2;
        const denominator1 = 4;
        const numerator2 = 8;
        const denominator2 = 4;
        const expected: IPair = {
            denominator: 2,
            numerator: 5,
        };

        expect(simplifySumOfFractions(numerator1, denominator1, numerator2, denominator2)).toEqual(expected);
    });

    it('should return the sum of fractions if they do not have a common denominator and the sum cannot be simplified', () => {
        const numerator1 = 5;
        const denominator1 = 2;
        const numerator2 = 8;
        const denominator2 = 3;
        const expected: IPair = {
            denominator: 6,
            numerator: 31,
        };

        expect(simplifySumOfFractions(numerator1, denominator1, numerator2, denominator2)).toEqual(expected);
    });

    it('should simplify the result if the fractions do not have a common denominator and the sum can be simplified', () => {
        const numerator1 = 10;
        const denominator1 = 4;
        const numerator2 = 10;
        const denominator2 = 5;
        const expected: IPair = {
            denominator: 2,
            numerator: 9,
        };

        expect(simplifySumOfFractions(numerator1, denominator1, numerator2, denominator2)).toEqual(expected);
    });
});
