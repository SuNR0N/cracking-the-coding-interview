import { greatestCommonDivisor } from '../../math-and-logic-puzzles/helpers/greatest-common-divisor';

export interface IFraction {
  numerator: number;
  denominator: number;
}

export function simplifyFraction(fraction: IFraction): IFraction {
  const gcd = greatestCommonDivisor(fraction.numerator, fraction.denominator);
  if (gcd === 1) {
    return fraction;
  } else {
    return {
      denominator: fraction.denominator / gcd,
      numerator: fraction.numerator / gcd,
    };
  }
}
