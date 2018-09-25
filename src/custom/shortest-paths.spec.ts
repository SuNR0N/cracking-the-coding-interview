import { shortestPaths } from './shortest-paths';

describe('shortestPaths', () => {
  it('should throw an error if the map does not have a start point', () => {
    const map = [
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 'B'],
    ];
    expect(() => {
      shortestPaths(map);
    }).toThrow('Invalid map - missing start point');
  });

  it('should throw an error if the map has multiple start points', () => {
    const map = [
      ['A', 'A', 0, 0],
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 'B'],
    ];
    expect(() => {
      shortestPaths(map);
    }).toThrow('Invalid map - multiple start points');
  });

  it('should throw an error if the map does not have a destination point', () => {
    const map = [
      ['A', 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 1],
    ];
    expect(() => {
      shortestPaths(map);
    }).toThrow('Invalid map - missing destination point');
  });

  it('should throw an error if the map has multiple destination points', () => {
    const map = [
      ['A', 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 1, 'B'],
      [0, 0, 1, 'B'],
    ];
    expect(() => {
      shortestPaths(map);
    }).toThrow('Invalid map - multiple destination points');
  });

  it('should throw an error if the map has invalid symbols', () => {
    const map = [
      ['A', 0, 0, 0],
      [1, 1, 'X', 0],
      [0, 1, 1, 0],
      [0, 0, 1, 'B'],
    ];
    expect(() => {
      shortestPaths(map);
    }).toThrow('Invalid map - unknown symbol');
  });

  it('should throw an error if the map has an invalid dimension', () => {
    const map = [
      ['A', 0, 0, 0],
      [1, 1, 0, 0, 1],
      [0, 1, 1, 0],
      [0, 0, 1, 'B'],
    ];
    expect(() => {
      shortestPaths(map);
    }).toThrow('Invalid map - dimension');
  });

  it('should return an empty list if no path exists between A and B', () => {
    const map = [
      ['A', 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 'B'],
    ];
    const paths = shortestPaths(map);

    expect(paths).toHaveLength(0);
  });

  it('should return a single path if only one route exists between A and B', () => {
    const map = [
      ['A', 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 'B'],
    ];
    const paths = shortestPaths(map);

    expect(paths).toEqual([
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [2, 1],
        [2, 2],
        [3, 2],
        [3, 3],
      ],
    ]);
  });

  it('should return a single path if multiple routes exist between A and B but only one is the shortest', () => {
    const map = [
      ['A', 1, 1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 'B'],
    ];
    const paths = shortestPaths(map);

    expect(paths).toEqual([
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [4, 1],
        [4, 2],
        [4, 3],
        [4, 4],
        [4, 5],
        [4, 6],
      ],
    ]);
  });

  it('should return multiple paths if multiple routes exist between A and B but more than one is the shortest', () => {
    const map = [
      ['A', 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 'B'],
    ];
    const paths = shortestPaths(map);

    expect(paths).toEqual([
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
        [0, 6],
        [1, 6],
        [2, 6],
        [3, 6],
        [4, 6],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [4, 1],
        [4, 2],
        [4, 3],
        [4, 4],
        [4, 5],
        [4, 6],
      ],
    ]);
  });
});
