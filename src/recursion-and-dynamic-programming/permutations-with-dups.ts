/** Computes all distinct permutations of a string of not necessarily unique characters */
export function permutationsWithDups(input: string): string[][] {
  const chars = input.split('');
  let permutations: Set<string> = new Set();
  for (let len = chars.length; len > 0; len--) {
    if (permutations.size === 0) {
      chars.forEach((char) => permutations.add(char));
    } else {
      permutations = Array.from(permutations).reduce((previous, current) => {
        const availableChars = chars.slice();
        current.split('').forEach((char) => {
          const indexToRemove = availableChars.indexOf(char);
          availableChars.splice(indexToRemove, 1);
        });
        availableChars.map((char) => current.concat(char))
          .forEach((sequence) => previous.add(sequence));
        return previous;
      }, new Set<string>());
    }
  }
  return Array.from(permutations).map((permutation) => permutation.split(''));
}
