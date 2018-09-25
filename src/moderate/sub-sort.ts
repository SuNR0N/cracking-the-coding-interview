/**
 * Finds indices m and n such that if you sorted elements m through n
 * then the entire array would be sorted
 * @param input Array of integers
 */
export function subSort(input: number[]): [number, number] | undefined {
  const len = input.length;
  let minValue: number | undefined;
  let maxValue: number | undefined;
  let minIndex: number | undefined = 0;
  let maxIndex: number | undefined = len - 1;
  let leftMaxDiff: number | undefined;
  let leftMinValue: number | undefined;
  let rightMaxDiff: number | undefined;
  let rightMaxValue: number | undefined;
  for (let i = 0; i < len; i++) {
    const left = input[i];
    const right = input[len - 1 - i];
    if (minValue === undefined || minValue <= left && minIndex === i - 1) {
      minValue = left;
      minIndex = i;
    }
    if (left < minValue) {
      const diff = minValue - left;
      if (leftMaxDiff === undefined || diff > leftMaxDiff) {
        leftMaxDiff = diff;
        leftMinValue = left;
      }
    }
    if (maxValue === undefined || maxValue >= right && maxIndex === len - i) {
      maxValue = right;
      maxIndex = len - 1 - i;
    }
    if (right > maxValue) {
      const diff = right - maxValue;
      if (rightMaxDiff === undefined || diff > rightMaxDiff) {
        rightMaxDiff = diff;
        rightMaxValue = right;
      }
    }
  }
  if (leftMinValue && rightMaxValue) {
    minIndex = undefined;
    maxIndex = undefined;
    for (let i = 0; i < len; i++) {
      const left = input[i];
      const right = input[len - 1 - i];
      if (leftMinValue <= left && minIndex === undefined) {
        minIndex = i;
      }
      if (rightMaxValue >= right && maxIndex === undefined) {
        maxIndex = len - 1 - i;
      }
    }
  }

  if (minIndex === len - 1 && maxIndex === 0) {
    return;
  } else {
    return [minIndex!, maxIndex!];
  }
}
