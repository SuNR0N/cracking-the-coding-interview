/** Determines the number of bits which you would need to flip to convert a to b */
export function conversion(a: number, b: number): number {
    let binaryA = a.toString(2);
    let binaryB = b.toString(2);
    const lengthDiff = binaryA.length - binaryB.length;
    if (lengthDiff > 0) {
        binaryB = '0'.repeat(lengthDiff).concat(binaryB);
    }
    if (lengthDiff < 0) {
        binaryA = '0'.repeat(lengthDiff * -1).concat(binaryA);
    }
    const binaryAArr = binaryA.split('');
    const binaryBArr = binaryB.split('');
    let bitsToFlip = 0;
    binaryAArr.forEach((bit, index) => {
        if (bit !== binaryBArr[index]) {
            bitsToFlip++;
        }
    });
    return bitsToFlip;
}
