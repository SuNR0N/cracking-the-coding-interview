import { flipBits } from './flip-bits';

describe('flipBits', () => {
  it('should throw an error if the provided array of bits has invalid elements', () => {
    expect(() => {
      flipBits([1, 2, 3, 4, 5], 1);
    }).toThrow('Invalid bits array');
  });

  it('should throw an error if the provided number of cycles is negative', () => {
    expect(() => {
      flipBits([1, 0, 0, 1, 0], -3);
    }).toThrow('Number of cycles should be a non negative integer');
  });

  it('should return the provided bits if the number of cycles is 0', () => {
    const bits = [1, 1, 0, 1, 0, 0, 1, 0, 0, 1];

    expect(flipBits(bits, 0)).toBe(bits);
  });

  it('should return the state of the provided bits after 1 cycle if the number of cycles is 1', () => {
    const bits = [1, 1, 0, 1, 0, 0, 1, 0, 0, 1];
    const expected = [0, 0, 1, 1, 0, 0, 1, 0, 0, 1];

    expect(flipBits(bits, 1)).toBe(expected);
  });

  it('should return the state of the provided bits after 2 cycles if the number of cycles is 2', () => {
    const bits = [1, 1, 0, 1, 0, 0, 1, 0, 0, 1];
    const expected = [1, 0, 0, 0, 0, 0, 1, 0, 0, 1];

    expect(flipBits(bits, 2)).toBe(expected);
  });
});
