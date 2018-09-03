/**
 * Computes the pair of values with the smallest (non-negative) difference
 * @param a First array of integers
 * @param b Second array of integers
 */
export function smallestDifference(a: number[], b: number[]): number {
  let difference: number = NaN;
  if (a.length === 0 || b.length === 0) {
    throw new Error('None of the arguments should be empty');
  }
  a.forEach((i) => {
    b.forEach((j) => {
      const currentDifference = i - j < 0 ? (i - j) * -1 : i - j;
      if (isNaN(difference) || currentDifference < difference) {
        difference = currentDifference;
      }
    });
  });
  return difference;
}
