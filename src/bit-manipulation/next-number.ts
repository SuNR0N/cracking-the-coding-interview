import { countSetBits } from './count-set-bits';

export interface INext {
  smallest: number;
  largest: number;
}

/** Returns the next smallest and largest numbers that have the same number of 1 bits in their binary representation */
export function nextNumber(value: number): INext {
  if (value === 0) {
    throw new Error('No next smallest or largest number exists which fulfills the criteria');
  } else if (value < 0) {
    throw new Error('Only positive integers are accepted as an argument');
  }
  const setBits = countSetBits(value);
  let smallest = value;
  let largest = value;
  let smallestSetBits: number | undefined;
  let largestSetBits: number | undefined;
  while (smallestSetBits !== setBits) {
    smallestSetBits = countSetBits(--smallest);
  }
  while (largestSetBits !== setBits) {
    largestSetBits = countSetBits(++largest);
  }
  return {
    largest,
    smallest,
  };
}
