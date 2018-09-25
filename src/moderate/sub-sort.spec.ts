import { subSort } from './sub-sort';

describe('subSort', () => {
  it('should return undefined if the array is already sorted', () => {
    const input = [1, 2, 4, 6, 7, 7, 7, 10, 11, 12, 16, 18, 19];

    expect(subSort(input)).toBeUndefined();
  });

  it('should return the first and last index if it does not have sorted sequences at the ends', () => {
    const input = [19, 2, 4, 6, 7, 7, 7, 10, 11, 12, 16, 18, 1];
    const [min, max] = subSort(input);

    expect(min).toBe(0);
    expect(max).toBe(12);
  });

  it('should return the optimal index pair in between the elements have to be sorted to get a fully sorted array', () => {
    const input = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
    const [min, max] = subSort(input);

    expect(min).toBe(3);
    expect(max).toBe(9);
  });
});
