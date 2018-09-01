import { recursiveMultiply } from './recursive-multiply';

describe('recursiveMultiply', () => {
  it('should return 0 if one of the numbers if 0', () => {
    const a = 0;
    const b = 7;
    const expected = 0;

    expect(recursiveMultiply(a, b)).toBe(expected);
  });

  it('should return the other number if one of them is 1', () => {
    const a = 1;
    const b = 7;
    const expected = b;

    expect(recursiveMultiply(a, b)).toBe(expected);
  });

  it('should return the product of numbers if both of them are larger than 1', () => {
    const a = 3;
    const b = 4;
    const expected = 12;

    expect(recursiveMultiply(a, b)).toBe(expected);
  });

  it('should throw an error if one of the arguments is a negative number', () => {
    const a = -3;
    const b = 4;

    expect(() => {
      recursiveMultiply(a, b);
    }).toThrow('Arguments must be positive integers');
  });
});
