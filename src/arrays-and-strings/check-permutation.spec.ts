import { checkPermutation } from './check-permutation';

describe('checkPermutation', () => {
  it('should return false if the arguments differ in length', () => {
    const first = 'abc';
    const second = 'abcd';
    expect(checkPermutation(first, second)).toBe(false);
  });

  it('should return false if the arguments are not the permutations of each other', () => {
    const first = 'abc';
    const second = 'abd';
    expect(checkPermutation(first, second)).toBe(false);
  });

  it('should return true if the arguments are the permutations of each other', () => {
    const first = 'abc';
    const second = 'cba';
    expect(checkPermutation(first, second)).toBe(true);
  });

  it('should return true if the arguments are the same', () => {
    const first = 'abc';
    const second = 'abc';
    expect(checkPermutation(first, second)).toBe(true);
  });
});
