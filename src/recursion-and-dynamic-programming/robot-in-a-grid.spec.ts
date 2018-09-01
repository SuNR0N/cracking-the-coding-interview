import { robotInAGrid } from './robot-in-a-grid';

describe('robotInAGrid', () => {
  it('should find a given path if it exists', () => {
    const input: string[][] = [
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'O', ' '],
      ['O', ' ', ' ', ' ', ' '],
      [' ', ' ', 'O', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
    ];
    const validPath: string[][] = [
      ['X', ' ', ' ', ' ', ' '],
      ['X', 'X', ' ', 'O', ' '],
      ['O', 'X', 'X', 'X', ' '],
      [' ', ' ', 'O', 'X', 'X'],
      [' ', ' ', ' ', ' ', 'X'],
    ];

    const foundPath = robotInAGrid(input).some((grid) => {
      return grid.every((row, index) => row.join('') === validPath[index].join(''));
    });
    expect(foundPath).toBe(true);
  });

  it('should return all possible paths', () => {
    const input: string[][] = [
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'O', ' '],
      ['O', ' ', ' ', ' ', ' '],
      [' ', ' ', 'O', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
    ];
    const expected = 18;

    expect(robotInAGrid(input)).toHaveLength(expected);
  });

  it('should return an empty array if no path exists', () => {
    const input: string[][] = [
      [' ', 'O', ' ', ' ', ' '],
      ['O', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
    ];
    const expected = 0;

    expect(robotInAGrid(input)).toHaveLength(expected);
  });

  it('should throw an error if a grid is invalid due to off limit start or end cells', () => {
    const input: string[][] = [
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', 'O'],
    ];

    expect(() => {
      robotInAGrid(input);
    }).toThrow('Invali grid. Top left or bottom right cells are off limits');
  });
});
