import {
  ITowers,
  towersOfHanoi,
} from './towers-of-hanoi';

describe('towersOfHanoi', () => {
  it('should throw an error for non positive integers', () => {
    const input = 0;

    expect(() => {
      towersOfHanoi(input);
    }).toThrow('Number of disks must be a positive integer');
  });

  it('should return 2 steps for 1 disk', () => {
    const input = 1;
    const expected: ITowers[] = [
      {
        first: [1],
        last: [],
        middle: [],
      },
      {
        first: [],
        last: [1],
        middle: [],
      },
    ];

    expect(towersOfHanoi(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should return 4 steps for 2 disks', () => {
    const input = 2;
    const expected: ITowers[] = [
      {
        first: [2, 1],
        last: [],
        middle: [],
      },
      {
        first: [2],
        last: [],
        middle: [1],
      },
      {
        first: [],
        last: [2],
        middle: [1],
      },
      {
        first: [],
        last: [2, 1],
        middle: [],
      },
    ];

    expect(towersOfHanoi(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should return 8 steps for 3 disks', () => {
    const input = 3;
    const expected: ITowers[] = [
      {
        first: [3, 2, 1],
        last: [],
        middle: [],
      },
      {
        first: [3, 2],
        last: [1],
        middle: [],
      },
      {
        first: [3],
        last: [1],
        middle: [2],
      },
      {
        first: [3],
        last: [],
        middle: [2, 1],
      },
      {
        first: [],
        last: [3],
        middle: [2, 1],
      },
      {
        first: [1],
        last: [3],
        middle: [2],
      },
      {
        first: [1],
        last: [3, 2],
        middle: [],
      },
      {
        first: [],
        last: [3, 2, 1],
        middle: [],
      },
    ];

    expect(towersOfHanoi(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should return 16 steps for 4 disks', () => {
    const input = 4;
    const expected: ITowers[] = [
      {
        first: [4, 3, 2, 1],
        last: [],
        middle: [],
      },
      {
        first: [4, 3, 2],
        last: [],
        middle: [1],
      },
      {
        first: [4, 3],
        last: [2],
        middle: [1],
      },
      {
        first: [4, 3],
        last: [2, 1],
        middle: [],
      },
      {
        first: [4],
        last: [2, 1],
        middle: [3],
      },
      {
        first: [4, 1],
        last: [2],
        middle: [3],
      },
      {
        first: [4, 1],
        last: [],
        middle: [3, 2],
      },
      {
        first: [4],
        last: [],
        middle: [3, 2, 1],
      },
      {
        first: [],
        last: [4],
        middle: [3, 2, 1],
      },
      {
        first: [],
        last: [4, 1],
        middle: [3, 2],
      },
      {
        first: [2],
        last: [4, 1],
        middle: [3],
      },
      {
        first: [2, 1],
        last: [4],
        middle: [3],
      },
      {
        first: [2, 1],
        last: [4, 3],
        middle: [],
      },
      {
        first: [2],
        last: [4, 3],
        middle: [1],
      },
      {
        first: [],
        last: [4, 3, 2],
        middle: [1],
      },
      {
        first: [],
        last: [4, 3, 2, 1],
        middle: [],
      },
    ];

    expect(towersOfHanoi(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should return 32 steps for 5 disks', () => {
    const input = 5;
    const expected = 32;

    expect(towersOfHanoi(input)).toHaveLength(expected);
  });
});
