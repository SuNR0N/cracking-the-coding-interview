import { getPrimeFactorization } from './get-prime-factorization';

describe('getPrimeFactorization', () => {
  it('should return undefined for a negative number', () => {
    const input = -3;

    expect(getPrimeFactorization(input)).toBeUndefined();
  });

  it('should return undefined for zero', () => {
    const input = 0;

    expect(getPrimeFactorization(input)).toBeUndefined();
  });

  it('should return undefined for 1', () => {
    const input = 1;

    expect(getPrimeFactorization(input)).toBeUndefined();
  });

  it('should return a map of primes with their associated powers', () => {
    const input = 12844;
    const expected: Map<number, number> = new Map([
      [2, 2],
      [13, 2],
      [19, 1],
    ]);

    expect(getPrimeFactorization(input)).toEqual(expected);
  });
});
