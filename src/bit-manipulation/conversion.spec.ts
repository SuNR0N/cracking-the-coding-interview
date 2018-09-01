import { conversion } from './conversion';

describe('conversion', () => {
  it('should return the number of bits which must be flipped to get b from a if b longer than a', () => {
    const a = 13;   // 00001101
    const b = 221;  // 11011101
    const expected = 3;

    expect(conversion(a, b)).toBe(expected);
  });

  it('should return the number of bits which must be flipped to get b from a if a longer than b', () => {
    const a = 31;   // 11111
    const b = 6;    // 00110
    const expected = 3;

    expect(conversion(a, b)).toBe(expected);
  });

  it('should return the number of bits which must be flipped to get b from a if they have the same bit count', () => {
    const a = 29;   // 11101
    const b = 15;   // 01111
    const expected = 2;

    expect(conversion(a, b)).toBe(expected);
  });
});
