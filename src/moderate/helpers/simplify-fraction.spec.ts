import {
  IFraction,
  simplifyFraction,
} from './simplify-fraction';

describe('simplifyFraction', () => {
  it('should return the simplified fraction if it can be simplified', () => {
    const fraction: IFraction = {
      denominator: 12,
      numerator: 8,
    };
    const simplified = simplifyFraction(fraction);

    expect(simplified.numerator).toBe(3);
    expect(simplified.denominator).toBe(4);
  });

  it('should return the original fraction if it cannot be simplified', () => {
    const fraction: IFraction = {
      denominator: 7,
      numerator: 5,
    };
    const simplified = simplifyFraction(fraction);

    expect(simplified).toBe(fraction);
  });
});
