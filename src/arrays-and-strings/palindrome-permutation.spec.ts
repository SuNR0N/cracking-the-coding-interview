import { palindromePermutation } from './palindrome-permutation';

describe('palindromePermutation', () => {
  it('should return true if only one character has an odd count within the input', () => {
    const input = 'Tact Coa';
    expect(palindromePermutation(input)).toBe(true);
  });

  it('should return true if all characters have an even count within the input', () => {
    const input = 'Noon';
    expect(palindromePermutation(input)).toBe(true);
  });

  it('should return false if more than one characters have an odd count within the input', () => {
    const input = 'Levels';
    expect(palindromePermutation(input)).toBe(false);
  });
});
