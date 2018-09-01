import { zeroMatrix } from './zero-matrix';

describe('zeroMatrix', () => {
  it('should not modify the matrix if it does not contain zeros', () => {
    const input: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = input;
    expect(zeroMatrix(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should return a zero matrix if it contains zeros diagonally', () => {
    const input: number[][] = [
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 0],
    ];
    const expected: number[][] = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(zeroMatrix(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should not fill rows or columns with zeros based on already replaced values', () => {
    const input: number[][] = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];
    const expected: number[][] = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    expect(zeroMatrix(input)).toEqual(expect.arrayContaining(expected));
  });
});
