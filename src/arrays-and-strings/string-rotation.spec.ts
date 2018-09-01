import { stringRotation } from './string-rotation';

describe('stringRotation', () => {
  it('should return true if the second argument is a rotation of the first', () => {
    const first = 'waterbottle';
    const second = 'erbottlewat';
    expect(stringRotation(first, second)).toBe(true);
  });

  it('should return false if the second argument is not a rotation of the first', () => {
    const first = 'waterbottle';
    const second = 'rebottlewat';
    expect(stringRotation(first, second)).toBe(false);
  });

  it('should return false if the length of the second argument differs from the length of the first', () => {
    const first = 'waterbottle';
    const second = 'erbottlewate';
    expect(stringRotation(first, second)).toBe(false);
  });
});
