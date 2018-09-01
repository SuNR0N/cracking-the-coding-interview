/** Rotates the elements of the given input array by the provided number of rotations to the left */
export function leftRotation(input: number[], numberOfRotations: number): number[] {
  const ret: number[] = [];
  const len = input.length;
  input.forEach((value, index) => {
    ret.splice(((len - (numberOfRotations % len) + index) % len), 0, value);
  });
  return ret;
}
