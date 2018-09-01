import { getPrimeFactorization } from './get-prime-factorization';

/** Returns the greatest common divisor of the provided list of numbers */
export function greatestCommonDivisor(...numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('Invalid argument');
  }
  if (numbers.some((value) => value === 1)) {
    return 1;
  }
  const maps: Array<Map<number, number>> = numbers
    .map((value) => getPrimeFactorization(value) as Map<number, number>);
  const firstMap = maps[0];
  const commonPrimes: number[] = [];
  for (const prime of firstMap.keys()) {
    if (maps.every((map) => map.has(prime))) {
      commonPrimes.push(prime);
    }
  }
  const gcd = commonPrimes.reduce((previous, current) => {
    const minPower = Math.min(...maps.map((map) => map.get(current) as number));
    previous = previous * Math.pow(current, minPower);
    return previous;
  }, 1);
  return gcd;
}
