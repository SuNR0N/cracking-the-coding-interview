/**
 * Returns the longest sequence of 1 bits which can be achieved via flipping
 * a single 0 bit in the binary representation of the provided input
 */
export function flipBitToWin(value: number): number {
  const binaryString = value.toString(2);
  const map: Map<number, number> = new Map();
  let lengthOfOnes = 0;
  let startIndex = -1;
  binaryString.split('').forEach((bit, index) => {
    if (bit === '1') {
      if (startIndex === -1) {
        startIndex = index;
      }
      lengthOfOnes++;
    } else {
      if (startIndex !== -1 && lengthOfOnes > 0) {
        map.set(startIndex, lengthOfOnes);
        lengthOfOnes = 0;
        startIndex = -1;
      }
    }
  });
  if (startIndex !== -1 && lengthOfOnes > 0) {
    map.set(startIndex, lengthOfOnes);
    lengthOfOnes = 0;
    startIndex = -1;
  }
  if (map.size === 0) {
    return 1;
  }
  const maxLengthOfOnes = Math.max(...map.values());
  const candidates = [maxLengthOfOnes];
  const startPositions = Array.from(map.keys());
  const countOfSequences = startPositions.length;
  startPositions.forEach((key, index, arr) => {
    if (index < countOfSequences - 2) {
      const nextStartPosition = arr[index + 1];
      const currentSequenceLength = map.get(key) as number;
      const nextSequenceLength = map.get(nextStartPosition) as number;
      if (key + currentSequenceLength + 1 === nextStartPosition) {
        candidates.push(currentSequenceLength + 1 + nextSequenceLength);
      }
    }
  });
  return Math.max(...candidates);
}
