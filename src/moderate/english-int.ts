export function englishInt(n: number): string {
  const sign = n < 0 ? 'Minus' : '';
  const word: Map<number, number> = new Map();
  const words: Map<number, string> = new Map([
    [0, 'Zero'],
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three'],
    [4, 'Four'],
    [5, 'Five'],
    [6, 'Six'],
    [7, 'Seven'],
    [8, 'Eight'],
    [9, 'Nine'],
    [10, 'Ten'],
    [11, 'Eleven'],
    [12, 'Twelve'],
    [13, 'Thirteen'],
    [14, 'Fourteen'],
    [15, 'Fifteen'],
    [16, 'Sixteen'],
    [17, 'Seventeen'],
    [18, 'Eighteen'],
    [19, 'Nineteen'],
    [20, 'Twenty'],
    [30, 'Thirty'],
    [40, 'Forty'],
    [50, 'Fifty'],
    [60, 'Sixty'],
    [70, 'Seventy'],
    [80, 'Eighty'],
    [90, 'Ninety'],
    [100, 'Hundred'],
    [1000, 'Thousand'],
    [1000000, 'Million'],
    [1000000000, 'Billion'],
  ]);
  if (n === 0) {
    return words.get(n)!;
  }
  if (sign) {
    n *= -1;
  }

  const divisors = Array.from(words.keys()).reverse();

  while (n > 1) {
    for (const divisor of divisors) {
      const flooredRatio = Math.floor(n / divisor);
      if (flooredRatio >= 1) {
        word.set(divisor, flooredRatio);
        n -= divisor * flooredRatio;
      } else {
        continue;
      }
    }
  }

  return Array.from(word.entries()).reduce((previous, [key, value]) => {
    let str = words.get(key) || '';
    if (key >= 100) {
      let prefix = words.get(value);
      if (!prefix) {
        prefix = englishInt(value);
      }
      str = `${prefix} ${str}`;
    }
    previous += previous ? ` ${str}` : str;
    return previous;
  }, sign);
}
