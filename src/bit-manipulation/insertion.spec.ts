import { insertion } from './insertion';

describe('insertion', () => {
  it('should throw an error if m does not fit into the provided space', () => {
    const n = 0b10000000000;
    const m = 0b10011;
    const i = 2;
    const j = 5;

    expect(() => {
      insertion(n, m, i, j);
    }).toThrow('10011 cannot fit between 2 and 5');
  });

  it('should insert m into n if it fits', () => {
    const n = 0b10000000000;
    const m = 0b10011;
    const i = 2;
    const j = 6;
    const expected = 0b10001001100;

    expect(insertion(n, m, i, j)).toBe(expected);
  });

  it('should insert m into n if it fits and remove additional bits from n if the specified range is longer than m', () => {
    const n = 0b10000000000;
    const m = 0b10011;
    const i = 2;
    const j = 8;
    const expected = 0b101001100;

    expect(insertion(n, m, i, j)).toBe(expected);
  });
});
