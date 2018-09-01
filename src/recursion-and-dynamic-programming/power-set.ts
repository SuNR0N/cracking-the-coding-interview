/** Returns the power sets of the given set of numbers */
export function powerSet(...values: number[]): Array<Set<number>> {
  const set = new Set(values);
  const sets: Array<Set<number>> = [];
  for (const value of set) {
    const newSets: Array<Set<number>> = [];
    for (const s of sets) {
      const newSet = new Set<number>(s);
      newSet.add(value);
      newSets.push(newSet);
    }
    sets.push(...newSets);
    sets.push(new Set([value]));
  }
  sets.push(new Set());
  return sets;
}
