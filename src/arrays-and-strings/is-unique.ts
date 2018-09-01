/** Determines if a string has all unique characters */
export function isUnique(input: string): boolean {
  const aCode = 97;
  const numberOfLetters = 26;
  const keys: Set<string> = new Set();
  for (let index = aCode; index < aCode + numberOfLetters; index++) {
    const letter = String.fromCharCode(index);
    keys.add(letter);
  }

  const chars = input.split('').map((c) => c.toLowerCase());
  for (const char of chars) {
    keys.delete(char);
    if (keys.size === 0) {
      break;
    }
  }

  return keys.size === 0;
}
