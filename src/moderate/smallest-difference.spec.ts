import { smallestDifference } from './smallest-difference';

describe('smallestDifference', () => {
  it('should throw an error if the first array is empty', () => {
    expect(() => {
      smallestDifference([], [1, 2, 3]);
    }).toThrow('None of the arguments should be empty');
  });

  it('should throw an error if the second array is empty', () => {
    expect(() => {
      smallestDifference([1, 2, 3], []);
    }).toThrow('None of the arguments should be empty');
  });

  it('should return the smallest difference', () => {
    const a: number[] = [1, 3, 15, 11, 2];
    const b: number[] = [23, 127, 235, 19, 8];
    const diff = smallestDifference(a, b);

    expect(diff).toBe(3);
  });
});
