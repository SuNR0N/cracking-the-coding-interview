/**
 * Generates all possible lengths for a diving board
 * @param k Number of planks which have to be used
 * @param shorterPlankSize Size of the shorter plank
 * @param longerPlankSize Size of the larger plank
 */
export function divingBoard(k: number, shorterPlankSize: number, longerPlankSize: number): any[] {
  const possibleLengths: Set<number> = new Set();
  if (k === 1) {
    possibleLengths.add(shorterPlankSize);
    possibleLengths.add(longerPlankSize);
  } else {
    let variations: number[][] = [[shorterPlankSize], [longerPlankSize]];
    for (let i = 1; i < k; i++) {
      variations = variations.reduce((previous, current) => {
        const newVariationsWithShorter = [...current, shorterPlankSize];
        const newVariationsWithLonger = [...current, longerPlankSize];
        if (i === k - 1) {
          possibleLengths.add(newVariationsWithShorter.reduce((sum, value) => sum + value, 0));
          possibleLengths.add(newVariationsWithLonger.reduce((sum, value) => sum + value, 0));
        }
        previous.push(newVariationsWithShorter);
        previous.push(newVariationsWithLonger);
        return previous;
      }, [] as number[][]);
    }
  }

  return Array.from(possibleLengths);
}
