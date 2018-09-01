import { leastCommonMultiple } from './least-common-multiple';

describe('leastCommonMultiple', () => {
  it('should throw an error without any arguments', () => {
    expect(() => {
      leastCommonMultiple();
    }).toThrow('Invalid argument');
  });

  it('should return the least common multiple of the provided arguments', () => {
    const expected = 504;

    expect(leastCommonMultiple(8, 9, 21)).toBe(expected);
  });
});
