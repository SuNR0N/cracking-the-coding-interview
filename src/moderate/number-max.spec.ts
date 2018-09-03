import { numberMax } from './number-max';

describe('numberMax', () => {
  it('should return one of the numbers if they are equal', () => {
    const num = numberMax(3, 3);

    expect(num).toBe(3);
  });

  it('should return the first number if it is the larger', () => {
    const num = numberMax(21, 13);

    expect(num).toBe(21);
  });

  it('should return the second number if it is the larger', () => {
    const num = numberMax(13, 21);

    expect(num).toBe(21);
  });
});
