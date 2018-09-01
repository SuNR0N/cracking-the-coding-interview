import { countSetBits } from './count-set-bits';

describe('countSetBits', () => {
  it('should return 0 if the binary representation does not contain ones', () => {
    const input = 0; // 0
    const expected = 0;

    expect(countSetBits(input)).toBe(expected);
  });

  it('should return the length of the binary representation if all bits are one', () => {
    const input = 31; // 11111
    const expected = 5;

    expect(countSetBits(input)).toBe(expected);
  });

  it('should return the number of ones in the binary representation if it contains zeros and ones', () => {
    const input = 41; // 101001
    const expected = 3;

    expect(countSetBits(input)).toBe(expected);
  });
});
