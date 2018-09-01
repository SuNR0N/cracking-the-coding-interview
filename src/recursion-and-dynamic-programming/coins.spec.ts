import { coins } from './coins';

describe('coins', () => {
  it('should throw an error for a non positive integer', () => {
    const n = 0;

    expect(() => {
      coins(n);
    }).toThrow('0 cannot be represented with coins of 25,10,5 and 1');
  });

  it('should return 1 combination for 3', () => {
    const n = 3;
    const expected = [
      [1, 1, 1],
    ];

    expect(coins(n)).toEqual(expect.arrayContaining(expected));
  });

  it('should return 2 combinations for 7', () => {
    const n = 7;
    const expected = [
      [1, 1, 5],
      [1, 1, 1, 1, 1, 1, 1],
    ];

    expect(coins(n)).toEqual(expect.arrayContaining(expected));
  });

  it('should return 6 combinations for 17', () => {
    const n = 17;
    const expected = [
      [1, 1, 10, 5],
      [1, 1, 1, 1, 1, 1, 1, 10],
      [1, 1, 5, 5, 5],
      [1, 1, 1, 1, 1, 1, 1, 5, 5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

    expect(coins(n)).toEqual(expect.arrayContaining(expected));
  });

  it('should return 18 combinations for 32', () => {
    const n = 32;
    const expected = [
      [1, 1, 25, 5],
      [1, 1, 1, 1, 1, 1, 1, 25],
      [1, 1, 10, 10, 10],
      [1, 1, 10, 10, 5, 5],
      [1, 1, 1, 1, 1, 1, 1, 10, 10, 5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 10],
      [1, 1, 10, 5, 5, 5, 5],
      [1, 1, 1, 1, 1, 1, 1, 10, 5, 5, 5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 5, 5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10],
      [1, 1, 5, 5, 5, 5, 5, 5],
      [1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

    expect(coins(n)).toEqual(expect.arrayContaining(expected));
  });
});
