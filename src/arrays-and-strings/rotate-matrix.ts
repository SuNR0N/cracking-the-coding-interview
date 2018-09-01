/** Rotates the given NxN input matrix by 90 degrees clockwise */
export function rotateMatrix(input: number[][]): number[][] {
  const rows = input.length;
  const columns = input[0].length;
  if (rows !== columns) {
    throw new Error('Invalid input');
  }
  const layers = rows === 1 ? 0 : Math.ceil(rows / 2);
  if (layers === 0) {
    return input;
  } else {
    const result = initMatrix(rows);
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        result[column][columns - 1 - row] = input[row][column];
      }
    }
    return result;
  }
}

function initMatrix(dimension: number): number[][] {
  const result: number[][] = [];
  for (let row = 0; row < dimension; row++) {
    result[row] = new Array(dimension);
    for (let column = 0; column < dimension; column++) {
      result[row][column] = 0;
    }
  }

  return result;
}
