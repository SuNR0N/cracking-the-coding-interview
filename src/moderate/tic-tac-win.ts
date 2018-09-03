/**
 * Returns the symbol of the winning player if the game has finished
 * @param puzzle Tic Tac Toe puzzle represented by a 3x3 string matrix
 */
export function ticTacWin(puzzle: string[][]): string | undefined {
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
  const dimension = 3;
  const winner: Set<string> = new Set();
  validateBoard(puzzle);
  for (let r = 0; r < dimension; r++) {
    for (let c = 0; c < dimension; c++) {
      const currentSymbol = puzzle[r][c];
      directions.forEach((dir) => {
        const symbol = checkPattern(currentSymbol, [r, c], dir, puzzle);
        if (symbol) {
          winner.add(symbol);
        }
      });
    }
  }
  if (winner.size === 2) {
    throw new Error('Invalid board - mulitple winners');
  } else if (winner.size === 1) {
    return Array.from(winner.values())[0];
  } else {
    return;
  }
}

function validateBoard(puzzle: string[][]): void {
  const dimension = 3;
  const validSymbols = ['X', 'O', ''];
  if (puzzle.length !== dimension) {
    throw new Error('Invalid board - dimension');
  }
  const symbols: Map<string, number> = puzzle.reduce((previous, row) => {
    if (row.length !== dimension) {
      throw new Error('Invalid board - dimension');
    }
    row.forEach((symbol) => {
      if (!validSymbols.includes(symbol)) {
        throw new Error('Invalid board - unknown symbol');
      }
      const symbolCount = previous.get(symbol);
      previous.set(symbol, symbolCount ? symbolCount + 1 : 1);
    });
    return previous;
  }, new Map());
  const xCount = symbols.get('X') || 0;
  const oCount = symbols.get('O') || 0;
  if (Math.abs(xCount - oCount) > 1) {
    throw new Error('Invalid board - wrong symbol count');
  }
}

function checkPattern(prefix: string, coords: [number, number], direction: [number, number], puzzle: string[][]): string | undefined {
  const dimension = puzzle.length;
  const pattern = new RegExp(`^O{1,${dimension}}$|^X{1,${dimension}}$`);
  if (pattern.test(prefix)) {
    if (prefix.length < dimension) {
      const nextCoords: [number, number] = [
        coords[0] + direction[0],
        coords[1] + direction[1],
      ];
      const [r, c] = nextCoords;
      const nextChar = puzzle[r] && puzzle[r][c];
      if (nextChar) {
        return checkPattern(prefix + nextChar, nextCoords, direction, puzzle);
      }
    } else {
      return prefix[0];
    }
  }
  return;
}
