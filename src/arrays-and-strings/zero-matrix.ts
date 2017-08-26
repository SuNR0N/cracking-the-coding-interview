/** Sets its entire row and column to 0 in the input matrix if a given element is 0 */
export function zeroMatrix(matrix: number[][]): number[][] {
    const dimension = matrix.length;
    const rowsToNullify: Set<number> = new Set();
    const columnsToNullify: Set<number> = new Set();
    for (let row = 0; row < dimension; row++) {
        for (let column = 0; column < dimension; column++) {
            if (matrix[row][column] === 0) {
                rowsToNullify.add(row);
                columnsToNullify.add(column);
            }
        }
    }
    for (let row = 0; row < dimension; row++) {
        for (let column = 0; column < dimension; column++) {
            if (rowsToNullify.has(row) || columnsToNullify.has(column)) {
                matrix[row][column] = 0;
            }
        }
    }
    return matrix;
}
