interface ISquare {
  row: number;
  column: number;
}

/** Lists all solutions for how n queens can be placed on an nxn chess board so that no two queens threaten each other */
export function eightQueens(n: number = 8): Set<string> {
  if (n <= 0) {
    throw new Error('Invalid input');
  }
  const board: string[][] = new Array(n).fill(' ').map(() => new Array(n).fill(' '));
  return placeQueen(board);
}

function placeQueen(board: string[][], positions: string[] = [], solutions: Set<string> = new Set()): Set<string> {
  const dim = board.length;
  const emptySquares: ISquare[] = [];
  for (let r = 0; r < dim; r++) {
    for (let c = 0; c < dim; c++) {
      if (board[r][c] === ' ') {
        emptySquares.push({ row: r, column: c });
      }
    }
  }
  if (positions.length === dim) {
    solutions.add(positions.sort().join(','));
  }
  if (emptySquares.length >= dim - positions.length) {
    emptySquares.forEach((s) => {
      const cpBoard = board.map((row) => row.slice());
      cpBoard[s.row][s.column] = 'Q';
      for (let r = 0; r < dim; r++) {
        if (r !== s.row) {
          cpBoard[r][s.column] = 'X';
        }
      }
      for (let c = 0; c < dim; c++) {
        if (c !== s.column) {
          cpBoard[s.row][c] = 'X';
        }
      }
      for (let r = s.row - 1, c = s.column - 1; r >= 0 && c >= 0; r-- && c--) {
        cpBoard[r][c] = 'X';
      }
      for (let r = s.row - 1, c = s.column + 1; r >= 0 && c < dim; r-- && c++) {
        cpBoard[r][c] = 'X';
      }
      for (let r = s.row + 1, c = s.column - 1; r < dim && c >= 0; r++ && c--) {
        cpBoard[r][c] = 'X';
      }
      for (let r = s.row + 1, c = s.column + 1; r < dim && c < dim; r++ && c++) {
        cpBoard[r][c] = 'X';
      }
      placeQueen(cpBoard, positions.slice().concat(`${String.fromCharCode(97 + s.row)}${dim - s.column}`), solutions);
    });
  }
  return solutions;
}
