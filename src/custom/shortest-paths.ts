/**
 * Computes the shortest routes from A to B without leaving the road
 * A indicates the start
 * B indicates the destination
 * 1 indicates a cell with a road
 * 0 indicatea a cell without a road
 * One can move to top, right, bottom and left cells
 * @param map Map represented by an NxM matrix
 */
export function shortestPaths(map: Array<Array<string | number>>): number[][][] {
  const rowCount = map.length;
  const columnCount = map[0].length;
  const validSymbols = [1, 0, 'A', 'B'];
  let start: [number, number] | undefined;
  let destination: [number, number] | undefined;

  for (let r = 0; r < rowCount; r++) {
    for (let c = 0; c < columnCount; c++) {
      if (map[r].length !== columnCount) {
        throw new Error('Invalid map - dimension');
      }
      const currentSymbol = map[r][c];
      if (!validSymbols.includes(currentSymbol)) {
        throw new Error('Invalid map - unknown symbol');
      }
      if (currentSymbol === 'A') {
        if (start) {
          throw new Error('Invalid map - multiple start points');
        } else {
          start = [r, c];
        }
      } else if (currentSymbol === 'B') {
        if (destination) {
          throw new Error('Invalid map - multiple destination points');
        } else {
          destination = [r, c];
        }
      }
    }
  }

  if (!start) {
    throw new Error('Invalid map - missing start point');
  } else if (!destination) {
    throw new Error('Invalid map - missing destination point');
  }

  return solve(map, start);
}

function solve(map: Array<Array<string | number>>, coordinate: [number, number]): number[][][] {
  const pathsMap: Map<string, Array<[number, number]>> = new Map();
  const solutions: Set<Array<[number, number]>> = new Set();
  const key = coordinate.toString();
  const marked = new Set<string>([key]);
  const queue = [key];
  let minDistance: number | undefined;
  pathsMap.set(key, [coordinate]);
  while (queue.length !== 0) {
    const nextNode = queue.shift()!;
    const coord = nextNode.split(',').map(Number) as [number, number];
    const children = getChildren(map, coord);
    for (const child of children) {
      const [r, c] = child;
      const childKey = child.toString();
      const pathFromParent = pathsMap.get(nextNode)!;
      const currentPath = [...pathFromParent, child];
      if (map[r][c] === 'B') {
        if (!minDistance) {
          minDistance = currentPath.length;
        }
        if (currentPath.length === minDistance) {
          solutions.add(currentPath);
        }
      }
      pathsMap.set(childKey, currentPath);
      if (!marked.has(childKey)) {
        marked.add(childKey);
        queue.push(childKey);
      }
    }
  }
  return Array.from(solutions);
}

function getChildren(
  map: Array<Array<string | number>>,
  coordinate: [number, number],
): Array<[number, number]> {
  const children: Array<[number, number]> = [];
  const [r, c] = coordinate;
  const topCell = map[r - 1] && map[r - 1][c];
  if (topCell === 1 || topCell === 'B') {
    children.push([r - 1, c]);
  }
  const rightCell = map[r] && map[r][c + 1];
  if (rightCell === 1 || rightCell === 'B') {
    children.push([r, c + 1]);
  }
  const bottomCell = map[r + 1] && map[r + 1][c];
  if (bottomCell === 1 || bottomCell === 'B') {
    children.push([r + 1, c]);
  }
  const leftCell = map[r] && map[r][c - 1];
  if (leftCell === 1 || leftCell === 'B') {
    children.push([r, c - 1]);
  }
  return children;
}
