import { getPrimeFactorization } from '../math-and-logic-puzzles/helpers';

/**
 * Computes the number of trailing zeros in n factorial
 * @param n Base of factorial
 */
export function factorialZeros(n: number): number {
  if (n < 0) {
    throw new Error('Argument should be a non negative integer');
  }
  const primes: Map<number, number> = new Map([
    [2, 0],
    [5, 0],
  ]);
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0 || i % 5 === 0) {
      const p = getPrimeFactorization(i);
      if (p) {
        const countOfTwos = p.get(2) || 0;
        const countOfFives = p.get(5) || 0;
        const currentCountOfTwos = primes.get(2)!;
        const currentCountOfFives = primes.get(5)!;
        primes.set(2, currentCountOfTwos + countOfTwos);
        primes.set(5, currentCountOfFives + countOfFives);
      }
    }
  }
  return primes.get(2)! < primes.get(5)! ? primes.get(2)! : primes.get(5)!;
}
