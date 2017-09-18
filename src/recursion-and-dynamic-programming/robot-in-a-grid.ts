export interface ICoordinate {
    x: number;
    y: number;
}

/** Returns all possible routes how the bottom right cell can be reached from the top left one skipping all off limit cells */
export function robotInAGrid(grid: string[][]): string[][][] {
    const rows = grid.length;
    const columns = grid[0].length;
    const startCoordinate: ICoordinate = {
        x: 0,
        y: 0,
    };
    const endCoordinate: ICoordinate = {
        x: columns - 1,
        y: rows - 1,
    };
    const startCell = grid[startCoordinate.y][startCoordinate.x];
    const endCell = grid[endCoordinate.y][endCoordinate.x];
    if (startCell === 'O' || endCell === 'O') {
        throw new Error('Invali grid. Top left or bottom right cells are off limits');
    }
    const paths = discoverPaths(grid, startCoordinate);
    const possiblePaths = Array.from(paths.entries())
        .filter((entry) => entry[0].x === endCoordinate.x && entry[0].y === endCoordinate.y)
        .map((entry) => entry[1])
        .map((path) => {
            const g = grid.map((row) => row.slice());
            path.forEach((coord) => g[coord.y][coord.x] = 'X');
            return g;
        });
    return possiblePaths;
}

function discoverPaths(
    grid: string[][],
    startPos: ICoordinate,
    memo: Map<ICoordinate, ICoordinate[]> = new Map(),
    paths: ICoordinate[] = [],
): Map<ICoordinate, ICoordinate[]> {
    memo.set(startPos, paths);
    paths.push(startPos);
    const rightCell: string | undefined = grid[startPos.y][startPos.x + 1];
    if (typeof rightCell === 'string' && rightCell !== 'O') {
        const rightCellCoordinate: ICoordinate = {
            x: startPos.x + 1,
            y: startPos.y,
        };
        discoverPaths(grid, rightCellCoordinate, memo, paths.slice());
    }
    const bottomCell: string | undefined = grid[startPos.y + 1] && grid[startPos.y + 1][startPos.x];
    if (typeof bottomCell === 'string' && bottomCell !== 'O') {
        const bottomCellCoordinate: ICoordinate = {
            x: startPos.x,
            y: startPos.y + 1,
        };
        discoverPaths(grid, bottomCellCoordinate, memo, paths.slice());
    }
    return memo;
}
