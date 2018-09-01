import { powerSet } from './power-set';

describe('powerSet', () => {
  it('should return an empty set without any arguments', () => {
    const expected: number[][] = [
      [],
    ];
    const expectedSets = 1;

    expect(powerSet()).toHaveLength(expectedSets);
    expect(powerSet()
      .map((set) => Array.from(set))).toEqual(expect.arrayContaining(expected));
  });

  it('should return two sets if the input array has a single value', () => {
    const expected: number[][] = [
      [],
      [1],
    ];
    const expectedSets = 2;

    expect(powerSet(1)).toHaveLength(expectedSets);
    expect(powerSet(1)
      .map((set) => Array.from(set))).toEqual(expect.arrayContaining(expected));
  });

  it('should return two sets if the input array has the same value multiple times', () => {
    const expected: number[][] = [
      [],
      [1],
    ];
    const expectedSets = 2;

    expect(powerSet(1, 1, 1)).toHaveLength(expectedSets);
    expect(powerSet(1, 1, 1)
      .map((set) => Array.from(set))).toEqual(expect.arrayContaining(expected));
  });

  it('should return all sets if the input has multiple unique values', () => {
    const expected: number[][] = [
      [],
      [1],
      [2],
      [3],
      [1, 2],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ];
    const expectedSets = 8;

    expect(powerSet(1, 2, 3)).toHaveLength(expectedSets);
    expect(powerSet(1, 2, 3)
      .map((set) => Array.from(set))).toEqual(expect.arrayContaining(expected));
  });
});
