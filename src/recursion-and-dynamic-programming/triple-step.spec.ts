import { tripleStep } from './triple-step';

describe('tripleStep', () => {
  it('should return 0 way for a staircase with 0 step', () => {
    const input = 0;
    const expected: number[][] = [];

    expect(tripleStep(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should return 1 way for a staircase with 1 step', () => {
    const input = 1;
    const expected: number[][] = [
      [1],
    ];

    expect(tripleStep(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should return 2 ways for a staircase with 2 steps', () => {
    const input = 2;
    const expected: number[][] = [
      [1, 1],
      [2],
    ];

    expect(tripleStep(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should return 4 ways for a staircase with 3 steps', () => {
    const input = 3;
    const expected: number[][] = [
      [1, 1, 1],
      [1, 2],
      [2, 1],
      [3],
    ];

    expect(tripleStep(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should return 13 ways for a staircase with 5 steps', () => {
    const input = 5;
    const expected: number[][] = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 2],
      [1, 1, 2, 1],
      [1, 2, 1, 1],
      [1, 2, 2],
      [1, 1, 3],
      [1, 3, 1],
      [2, 1, 1, 1],
      [2, 1, 2],
      [2, 2, 1],
      [2, 3],
      [3, 1, 1],
      [3, 2],
    ];

    expect(tripleStep(input)).toEqual(expect.arrayContaining(expected));
  });
});
