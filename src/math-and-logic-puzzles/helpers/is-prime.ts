/** Checks whether the given input is a prime number */
export function isPrime(value: number): boolean {
    if (value < 2) {
        return false;
    }
    const squareRoot = Math.sqrt(value);
    for (let i = 2; i <= squareRoot; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
}
