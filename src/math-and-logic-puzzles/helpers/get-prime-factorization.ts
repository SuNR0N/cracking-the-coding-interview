/** Returns the prime factorization of the given number if it exists */
export function getPrimeFactorization(value: number): Map<number, number> | undefined {
  if (value <= 1) {
    return;
  }
  const map: Map<number, number> = new Map();
  let currentDivisor = 2;
  while (value !== 1) {
    if (value % currentDivisor === 0) {
      let currentPower = map.get(currentDivisor);
      currentPower = !currentPower ? 1 : (currentPower + 1);
      map.set(currentDivisor, currentPower);
      value = value / currentDivisor;
    } else {
      currentDivisor++;
    }
  }
  return map;
}
