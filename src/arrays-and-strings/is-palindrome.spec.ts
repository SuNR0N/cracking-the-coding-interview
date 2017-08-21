import { isPalindrome } from './is-palindrome';

describe('isPalindrome', () => {
    it('should return true if only one character has an odd count within the input', () => {
        const input = 'Madam';
        expect(isPalindrome(input)).toBe(true);
    });

    it('should return true if all characters have an even count within the input', () => {
        const input = 'Noon';
        expect(isPalindrome(input)).toBe(true);
    });

    it('should return false if more than one characters have an odd count within the input', () => {
        const input = 'Foo';
        expect(isPalindrome(input)).toBe(false);
    });
});
