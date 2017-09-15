export function binaryToString(value: number): string {
    // return value.toString(2);
    const realNumberRegExp = /^(\d{1,})(.\d{1,})$/;
    const realNumberRegExpExec = realNumberRegExp.exec(value.toString());
    if (!realNumberRegExpExec) {
        throw new Error('Invalid input');
    }
    const decimal = parseInt(realNumberRegExpExec[1], 10);
    const fraction = parseFloat(realNumberRegExpExec[2]);
    const decimalBinaryStr = decimalToBinaryString(decimal);
    const fractionBinaryStr = fractionToBinaryString(fraction, decimalBinaryStr);
    return `${decimalBinaryStr}.${fractionBinaryStr}`;
}

function decimalToBinaryString(value: number): string {
    let digits: number[] = [];
    let currentPower = 0;
    let currentDigit = 1;
    while (currentDigit <= value) {
        digits = [currentDigit].concat(digits);
        currentDigit = Math.pow(2, ++currentPower);
    }
    return digits.reduce((previous, current) => {
        previous += (value >= current) ? '1' : '0';
        value = value % current;
        return previous;
    }, '') || '0';
}

function fractionToBinaryString(fraction: number, decimalBinaryStr: string): string {
    const decimalBinaryLength = decimalBinaryStr.length;
    let currentPower = 0;
    let currentDigit = 1;
    let s = '';
    while (fraction % currentDigit !== 0) {
        currentDigit = Math.pow(2, --currentPower);
        const remainder = fraction % currentDigit;
        s += (remainder === fraction) ? '0' : '1';
        fraction = remainder;
        if (decimalBinaryLength + s.length - 1 === 32) {
            throw new Error('Number cannot be represented accurately');
        }
    }
    return s;
}
