export function rotateLeft(input: number[], numberOfRotations: number): number[] {
    const ret: number[] = [];
    const len = input.length;
    input.forEach((value, index) => {
        ret.splice(((len - (numberOfRotations % len) + index) % len), 0, value);
    });
    return ret;
}
