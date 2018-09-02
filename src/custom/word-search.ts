/**
 * Returns all the words which can be found horizontally, vertically and diagonally in the provided word puzzle
 * @param puzzle Puzzle to solve represented as an array of strings (NxM matrix)
 * @param wordList List of valid words
 */
export function wordSearch(puzzle: string[], wordList: string[]): string[] {
  if (wordList.length === 0) {
    throw new Error('Word list cannot be empty');
  }
  const rows = puzzle.length;
  const columns = puzzle[0] && puzzle[0].length || 0;
  if (rows === 0 || columns === 0) {
    throw new Error('Invalid puzzle');
  }
  const directions: Array<[number, number]> = [
    [-1, 0],  // Top
    [-1, 1],  // Top right
    [0, 1],   // Right
    [1, 1],   // Bottom right
    [1, 0],   // Bottom
    [1, -1],  // Bottom left
    [0, -1],  // Left
    [-1, -1], // Top left
  ];
  const solutions: Set<string> = new Set();
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const currentChar = puzzle[r][c];
      directions.forEach((dir) => {
        const word = findWord(currentChar, [r, c], dir, puzzle, wordList);
        if (word) {
          solutions.add(word);
        }
      });
    }
  }
  return Array.from(solutions);
}

function findWord(
  prefix: string,
  coords: [number, number],
  direction: [number, number],
  puzzle: string[],
  wordList: string[],
): string | undefined {
  const matches = wordList.filter((word) => word.startsWith(prefix));
  if (matches.length > 0) {
    if (matches.length === 1 && matches[0] === prefix) {
      return prefix;
    } else {
      const nextCoords: [number, number] = [
        coords[0] + direction[0],
        coords[1] + direction[1],
      ];
      const [r, c] = nextCoords;
      const nextChar = puzzle[r] && puzzle[r][c];
      if (nextChar) {
        return findWord(prefix + nextChar, nextCoords, direction, puzzle, matches);
      }
    }
  }
  return;
}
