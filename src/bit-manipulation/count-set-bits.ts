/** Counts the set bits in the binary representation of the given numeric input */
export function countSetBits(value: number): number {
    const bits: number[] = (value).toString(2)
        .split('')
        .map((bit) => parseInt(bit, 10));
    const setBits = bits.reduce((previous, current) => {
        if (current === 1) {
            previous++;
        }
        return previous;
    }, 0);
    return setBits;
}
