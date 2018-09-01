/** Counts how many possible ways can a staircase with n steps be climbed by 1, 2 or 3 hops at a time */
export function tripleStep(steps: number, ways: number[][] = [], currentWay: number[] = []): number[][] {
  const hops = [1, 2, 3];
  if (steps === 0) {
    ways.push(currentWay);
  }
  for (const hop of hops) {
    if (hop <= steps) {
      const way = currentWay.slice().concat([hop]);
      tripleStep(steps - hop, ways, way);
    }
  }
  return ways;
}
