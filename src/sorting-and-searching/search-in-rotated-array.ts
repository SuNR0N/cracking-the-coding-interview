/** Finds the index of the given value in a rotated array which was initially ordered in an ascending way */
export function searchInRotatedArray(value: number, arr: number[], fromIndex = 0, toIndex = arr.length - 1): number {
  const middleIndex = Math.floor((fromIndex + toIndex) / 2);
  const middleValue = arr[middleIndex];
  const fromValue = arr[fromIndex];
  const toValue = arr[toIndex];
  if (middleValue === value) {
    return middleIndex;
  } else if (fromValue === value) {
    return fromIndex;
  } else if (toValue === value) {
    return toIndex;
  } else if (fromIndex === toIndex) {
    throw new Error(`${value} does not exist in the provided array`);
  } else if (value > middleValue) {
    if (fromValue > middleValue && fromValue < value) {
      return searchInRotatedArray(value, arr, fromIndex, middleIndex);
    } else {
      return searchInRotatedArray(value, arr, middleIndex + 1, toIndex);
    }
  } else {
    if (fromValue > middleValue || fromValue < value) {
      return searchInRotatedArray(value, arr, fromIndex, middleIndex);
    } else {
      return searchInRotatedArray(value, arr, middleIndex + 1, toIndex);
    }
  }
}
