/** Compresses the given input string using the counts of the repeated characters */
export function stringCompression(input: string): string {
    const lastCharCountRegExp = new RegExp(/([a-zA-Z])(\d{1,})$/);
    const compressed = input.split('')
        .reduce((previous, current, index, arr) => {
            const match = lastCharCountRegExp.exec(previous);
            if (match && match[1] === current) {
                previous = previous.replace(lastCharCountRegExp, current + (parseInt(match[2], 10) + 1));
            } else {
                previous += (current + 1);
            }
            return previous;
        }, '');
    if (compressed.length < input.length) {
        return compressed;
    } else {
        return input;
    }
}

/** Compresses the given input string using the counts of the repeated characters */
export function stringCompressionV2(input: string): string {
    let charToCompress: string = '';
    let charCount = 0;
    let compressed = '';
    input.split('').forEach((value) => {
        if (!charToCompress) {
            charToCompress = value;
            charCount++;
        } else if (charToCompress === value) {
            charCount++;
        } else {
            compressed += charToCompress + charCount;
            charToCompress = value;
            charCount = 1;
        }
    });

    compressed += charToCompress + charCount;
    if (compressed.length < input.length) {
        return compressed;
    } else {
        return input;
    }
}
