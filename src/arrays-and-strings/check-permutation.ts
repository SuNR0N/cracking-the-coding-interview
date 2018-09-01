/** Determines if one of the strings is a permutation of the other */
export function checkPermutation(first: string, second: string): boolean {
  const lettersFirst: Map<string, number> = first.split('')
    .reduce<Map<string, number>>((previous, current) => {
      const value = previous.get(current) || 0;
      previous.set(current, value + 1);
      return previous;
    }, new Map<string, number>());
  const lettersSecond: Map<string, number> = second.split('')
    .reduce<Map<string, number>>((previous, current) => {
      const value = previous.get(current) || 0;
      previous.set(current, value + 1);
      return previous;
    }, new Map<string, number>());

  if (lettersFirst.size !== lettersSecond.size) {
    return false;
  } else {
    for (const [letter, count] of lettersFirst.entries()) {
      if (lettersSecond.get(letter) !== count) {
        return false;
      }
    }
  }

  return true;
}
