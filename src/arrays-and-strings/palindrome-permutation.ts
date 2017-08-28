/** Determines if the input is a permutation of a palindrome */
export function palindromePermutation(input: string): boolean {
    const dict = input.toLowerCase()
        .replace(/ /g, '')
        .split('')
        .reduce<Map<string, number>>((previous, current) => {
            let charCount = previous.get(current);
            if (charCount === undefined) {
                previous.set(current, 1);
            } else {
                previous.set(current, ++charCount);
            }
            return previous;
        }, new Map<string, number>());

    let numberOfOddCharacters = 0;
    for (const count of dict.values()) {
        if (count % 2 !== 0) {
            numberOfOddCharacters++;
            if (numberOfOddCharacters > 1) {
                return false;
            }
        }
    }

    return true;
}
