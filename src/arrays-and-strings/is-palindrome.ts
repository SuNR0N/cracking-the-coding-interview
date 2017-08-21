/** Determines if the input is a palindrome */
export function isPalindrome(input: string): boolean {
    const letters = input.toLowerCase().split('');
    const length = letters.length;
    const indexToCheck = Math.floor(letters.length / 2);
    for (let i = 0; i < indexToCheck; i++) {
        if (letters[i] !== letters[length - 1 - i]) {
            return false;
        }
    }
    return true;
}
