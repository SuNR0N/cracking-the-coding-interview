/**
 * Based on a guess and a solution returns you the number of hits and pseudo-hits you have
 * You have a hit if the character at the same position is matching
 * You have a pseudo-hit if a given character exists in the solution but it is at the wrong position in the guess
 * @param guess Array of characters with a length of 4 containing R,G,B or Y
 * @param solution Array of characters with a length of 4 containing R,G,B or Y
 */
export function masterMind(guess: string, solution: string): string {
  if (guess.length !== 4 || solution.length !== 4) {
    throw new Error('Invalid guess or solution length');
  }
  const validChars = new Set(['R', 'Y', 'G', 'B']);
  const guessChars: Map<string, number> = new Map([
    ['R', 0],
    ['Y', 0],
    ['G', 0],
    ['B', 0],
  ]);
  const solutionChars: Map<string, number> = new Map([
    ['R', 0],
    ['Y', 0],
    ['G', 0],
    ['B', 0],
  ]);
  let numberOfHits = 0;
  let numberOfPseudoHits = 0;
  for (let i = 0; i < 4; i++) {
    const currentGuessChar = guess[i];
    if (!validChars.has(currentGuessChar)) {
      throw new Error('Invalid character in guess');
    }
    const currentSolutionChar = solution[i];
    if (!validChars.has(currentSolutionChar)) {
      throw new Error('Invalid character in solution');
    }
    if (currentGuessChar === currentSolutionChar) {
      numberOfHits++;
    } else {
      const currentGuessCharCount = guessChars.get(currentGuessChar)!;
      const currentSolutionCharCount = solutionChars.get(currentSolutionChar)!;
      guessChars.set(currentGuessChar, currentGuessCharCount + 1);
      solutionChars.set(currentSolutionChar, currentSolutionCharCount + 1);
    }
  }
  for (const [key, count] of guessChars.entries()) {
    numberOfPseudoHits += Math.min(count, solutionChars.get(key)!);
  }

  return `You have ${numberOfHits} hit(s) and ${numberOfPseudoHits} pseudo-hit(s)`;
}
