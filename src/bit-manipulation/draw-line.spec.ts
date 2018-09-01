import { drawLine } from './draw-line';

describe('drawLine', () => {
  it('should throw an error for invalid values within the screen array', () => {
    const screen: number[] = [0, 256, -1, 0];
    const width = 8;
    const x1 = 3;
    const x2 = 7;
    const y = 2;

    expect(() => {
      drawLine(screen, width, x1, x2, y);
    }).toThrow('Invalid screen representation');
  });

  it('should throw an error if the width is not divisible by 8', () => {
    const screen: number[] = [0, 0, 0, 0];
    const width = 13;
    const x1 = 3;
    const x2 = 7;
    const y = 2;

    expect(() => {
      drawLine(screen, width, x1, x2, y);
    }).toThrow('Invalid width. It must be divisible by 8');
  });

  it('should throw an error if y is larger than the height of the screen', () => {
    const screen: number[] = [0, 0, 0, 0];
    const width = 8;
    const x1 = -1;
    const x2 = 8;
    const y = 2;

    expect(() => {
      drawLine(screen, width, x1, x2, y);
    }).toThrow('Invalid x position. Value must be between 0 and 7');
  });

  it('should throw an error if x is larger than the width of the screen', () => {
    const screen: number[] = [0, 0, 0, 0];
    const width = 8;
    const x1 = 3;
    const x2 = 7;
    const y = 10;

    expect(() => {
      drawLine(screen, width, x1, x2, y);
    }).toThrow('Invalid y position. Value must be between 0 and 3');
  });

  it('should return the 2 dimensional screen array representing the drawn horizontal line with ones if x2 > x1', () => {
    const screen: number[] = [0, 0, 0, 0];
    const width = 8;
    const x1 = 3;
    const x2 = 7;
    const y = 2;
    const expected: number[][] = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    expect(drawLine(screen, width, x1, x2, y)).toEqual(expect.arrayContaining(expected));
  });

  it('should return the 2 dimensional screen array representing the drawn horizontal line with ones if x1 > x2', () => {
    const screen: number[] = [0, 0, 0, 0];
    const width = 8;
    const x1 = 7;
    const x2 = 3;
    const y = 2;
    const expected: number[][] = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    expect(drawLine(screen, width, x1, x2, y)).toEqual(expect.arrayContaining(expected));
  });

  it('should return the 2 dimensional screen array representing a dot with a single one if x1 = x2', () => {
    const screen: number[] = [0, 0, 0, 0];
    const width = 8;
    const x1 = 5;
    const x2 = 5;
    const y = 2;
    const expected: number[][] = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    expect(drawLine(screen, width, x1, x2, y)).toEqual(expect.arrayContaining(expected));
  });
});
