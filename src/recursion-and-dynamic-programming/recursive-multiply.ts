/** Returns the product of two positive integers without using the * operator */
export function recursiveMultiply(a: number, b: number, result: number = 0): number {
  const larger = a > b ? a : b;
  let smaller = a < b ? a : b;
  if (smaller < 0 || larger < 0) {
    throw new Error('Arguments must be positive integers');
  }
  if (smaller === 0) {
    return 0;
  } else if (smaller === 1) {
    return result + larger;
  } else {
    return recursiveMultiply(larger, --smaller, result + larger);
  }
}
