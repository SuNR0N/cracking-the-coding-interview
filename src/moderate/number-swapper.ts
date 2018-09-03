/**
 * Swaps the numbers in place
 * @param a First number
 * @param b Second number
 */
export function numberSwapper(a: number, b: number): [number, number] {
  a = a * b;
  b = a / b;
  a = a / b;
  return [a, b];
}
