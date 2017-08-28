import { LinkedList } from './helpers/linked-list';

/** Checks whether the provided linked list is a palindrome or not */
export function palindrome(input: LinkedList): boolean {
    const arr = input.toArray();
    const length = arr.length;
    if (length <= 1) {
        return true;
    } else {
        const middleIndex = length / 2;
        for (let i = 0; i < middleIndex; i++) {
            if (arr[i] !== arr[length - 1 - i]) {
                return false;
            }
        }
    }
    return true;
}
