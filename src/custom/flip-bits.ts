/**
 * An arbitrary number of bits are represented as an array of numbers.
 * In each cycle if both neighbours of a given bit are either 0 or 1 then the bit is
 * replaced with 1, otherwise with 0. Assume that the missing neighbour of bits with a
 * single neighbour is always 0. The function computes the state of bits after the
 * provided number of cycles.
 *
 * @param bits Array of 0/1 bits
 * @param cycles Number of cycles
 */
export function flipBits(bits: number[], cycles: number): number[] {
  const isValid = bits.every((bit) => bit === 0 || bit === 1);
  if (!isValid) {
    throw new Error('Invalid bits array');
  }
  if (!Number.isInteger(cycles) || cycles < 0) {
    throw new Error('Number of cycles should be a non negative integer');
  }
  for (let i = 0; i < cycles; i++) {
    bits = bits.map((_bit, index, arr) => {
      const leftNeighbour = arr[index - 1] || 0;
      const rightNeighbour = arr[index + 1] || 0;
      if (leftNeighbour === 0 && rightNeighbour === 0 || leftNeighbour === 1 && rightNeighbour === 1) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  return bits;
}
