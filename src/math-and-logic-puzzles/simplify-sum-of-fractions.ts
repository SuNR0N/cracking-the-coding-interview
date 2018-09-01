import { greatestCommonDivisor } from './helpers/greatest-common-divisor';

export interface IPair {
  numerator: number;
  denominator: number;
}

/** Simplifies the sum of two fractions represented by their numerators and denominators */
export function simplifySumOfFractions(num1: number, denom1: number, num2: number, denom2: number): IPair {
  if (denom1 === 0 || denom2 === 0) {
    throw new Error('Fractions cannot have 0 denominators');
  }
  const commonDenominator = denom1 * denom2;
  const sumOfNumerators = num1 * denom2 + num2 * denom1;
  const gcd = greatestCommonDivisor(sumOfNumerators, commonDenominator);
  return {
    denominator: commonDenominator / gcd,
    numerator: sumOfNumerators / gcd,
  };
}
