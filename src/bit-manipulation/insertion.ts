/** Inserts the binary representation of m into n such that m starts at bit j and ends at bit i */
export function insertion(n: number, m: number, i: number, j: number): number {
  const binaryN = n.toString(2);
  const binaryM = m.toString(2);
  const lengthOfM = binaryM.length;
  if (j - i < lengthOfM - 1) {
    throw new Error(`${binaryM} cannot fit between ${i} and ${j}`);
  }
  const prefix = binaryN.slice(0, binaryN.length - j - 1);
  const postfix = binaryN.slice(-i);
  return parseInt(prefix + binaryM + postfix, 2);
}
