/** Swaps odd and even bits in an integer */
export function pairwiseSwap(value: number): number {
  const numberRegExp = /^(-?)(\d+)$/;
  const numberRegExpExec = numberRegExp.exec(value.toString(2));
  if (!numberRegExpExec) {
    throw new Error('Invalid input');
  }
  const binaryArr = numberRegExpExec[2].split('');
  for (let i = binaryArr.length - 1; i > 0; i -= 2) {
    const tmp = binaryArr[i];
    binaryArr[i] = binaryArr[i - 1];
    binaryArr[i - 1] = tmp;
  }
  const swappedBinary = numberRegExpExec[1] + binaryArr.join('');
  return parseInt(swappedBinary, 2);
}
