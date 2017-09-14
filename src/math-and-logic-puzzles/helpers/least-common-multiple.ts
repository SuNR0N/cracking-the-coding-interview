import { getPrimeFactorization } from './get-prime-factorization';

/** Returns the least common multiple of the provided list of numbers */
export function leastCommonMultiple(...numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error('Invalid argument');
    }
    numbers = numbers.filter((value) => value !== 1);
    const maps: Array<Map<number, number>> = numbers
        .map((value) => getPrimeFactorization(value) as Map<number, number>);
    const primes: Set<number> = new Set();
    maps.forEach((map) => {
        for (const prime of map.keys()) {
            primes.add(prime);
        }
    });
    const lcm = Array.from(primes).reduce((previous, current) => {
        const maxPower = Math.max(...maps.map((map) => map.get(current) || 1));
        previous = previous * Math.pow(current, maxPower);
        return previous;
    }, 1);
    return lcm;
}
