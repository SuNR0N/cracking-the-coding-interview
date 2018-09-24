/**
 * Returns the coordinates of the specified number of nearest points to the origo
 * @param points Array of coordinates
 * @param n Number of nearest points
 */
export function nearestPoints(points: Array<[number, number]>, n: number): Array<[number, number]> {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('n must be a non negative integer');
  }
  const distancesMap: Map<number, number> = points.reduce((map, [x, y], index) => {
    if (isNaN(x) || isNaN(y)) {
      throw new Error('Points should contain valid coordinate pairs only');
    }
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    map.set(index, distance);
    return map;
  }, new Map());
  const sortedDistancesArray = Array.from(distancesMap.entries())
    .sort(([_i1, d1], [_i2, d2]) => d1 - d2);
  return sortedDistancesArray
    .slice(0, n < distancesMap.size ? n : undefined)
    .map(([index]) => points[index]);
}
