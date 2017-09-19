/**
 * Returns the first index which fulfills the A[i] === i condition
 * @param numbers Sorted array of integers
 */
export function magicIndex(numbers: number[]): number | undefined {
    const uniqueNumbers = numbers.filter((value, index, arr) => arr.indexOf(value) === index);
    const isUnique = uniqueNumbers.length === numbers.length;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === i) {
            return i;
        }
        if (isUnique && numbers[i] > i) {
            return;
        }
    }
}
