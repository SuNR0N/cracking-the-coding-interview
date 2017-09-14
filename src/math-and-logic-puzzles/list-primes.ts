import { isPrime } from './helpers/is-prime';

/** Lists all prime numbers less than or equal to the given argument */
export function listPrimes(value: number): number[] {
    const primes: number[] = [];
    let lastChecked: number = 0;
    while (lastChecked <= value) {
        if (isPrime(lastChecked)) {
            primes.push(lastChecked);
        }
        lastChecked++;
    }
    return primes;
}
