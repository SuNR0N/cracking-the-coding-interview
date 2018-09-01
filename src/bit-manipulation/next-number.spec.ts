import {
  INext,
  nextNumber,
} from './next-number';

describe('nextNumber', () => {
  it('should throw an error for negative numbers', () => {
    const input = -3;

    expect(() => {
      nextNumber(input);
    }).toThrow('Only positive integers are accepted as an argument');
  });

  it('should throw an error for 0', () => {
    const input = 0;

    expect(() => {
      nextNumber(input);
    }).toThrow('No next smallest or largest number exists which fulfills the criteria');
  });

  it('should return the next smallest and largest numbers for an input having zeros and ones in it', () => {
    const input = 123; // 1111011
    const expected: INext = {
      largest: 125, // 1111101
      smallest: 119, // 1110111
    };

    expect(nextNumber(input)).toEqual(expected);
  });

  it('should return the next smallest and largest numbers for an input having only ones in it', () => {
    const input = 15; // 1111
    const expected: INext = {
      largest: 23, // 10111
      smallest: -15, // -1111
    };

    expect(nextNumber(input)).toEqual(expected);
  });
});
