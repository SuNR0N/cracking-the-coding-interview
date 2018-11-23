/**
 * Returns the provided positive integer as a roman numeral
 * @param n Positive integer
 */
export function romanNumeral(n: number): string {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error('Invalid number');
  }
  const valueMap = new Map<number, string>([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M'],
  ]);
  const thousands = Math.floor(n / 1000);
  const base = thousands > 0 ? valueMap.get(1000)!.repeat(thousands) : '';
  n = n % 1000;
  const digits = `${n}`
    .split('')
    .map(Number);
  return digits.reduce((str, digit, index, arr) => {
    const placeValue = 10 ** (arr.length - 1 - index);
    const placeValueTimesFive = placeValue * 5;
    const placeValueTimesTen = placeValue * 10;
    const value = valueMap.get(placeValue);
    const valueFive = valueMap.get(placeValueTimesFive);
    const valueTen = valueMap.get(placeValueTimesTen);
    if (digit > 0 && digit < 4) {
      str += value!.repeat(digit);
    } else if (digit === 4) {
      str += `${value}${valueFive}`;
    } else if (digit === 5) {
      str += valueFive!;
    } else if (digit > 5 && digit < 9) {
      str += `${valueFive}${value!.repeat(digit % 5)}`;
    } else if (digit === 9) {
      str += `${value}${valueTen}`;
    }
    return str;
  }, base);
}
