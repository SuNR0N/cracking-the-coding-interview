/** Lists all combinations how the given boolean expression can be parenthesized to evaluate to the provided result */
export function booleanEvaluation(expression: string, result: boolean): string[] {
  const combinations = parenthesize(expression);
  // tslint:disable-next-line:no-eval
  return Array.from(combinations).filter((combination) => Boolean(eval(combination)) === result);
}

function parenthesize(expression: string): Set<string> {
  const combinations: Set<string> = new Set();
  for (let i = 0; i < expression.length / 2 - 1; i++) {
    const first = expression.substring(0, 2 * i + 1);
    let firstCombinations: Set<string> | undefined;
    if (first.length > 3) {
      firstCombinations = parenthesize(first);
    }
    const operator = expression.substring(2 * i + 1, 2 * i + 2);
    const second = expression.substring(2 * i + 2);
    let secondCombinations: Set<string> | undefined;
    if (second.length > 3) {
      secondCombinations = parenthesize(second);
    }
    if (first.length <= 3 && second.length <= 3) {
      combinations.add(`(${first})${operator}(${second})`);
    }
    if (firstCombinations && secondCombinations) {
      for (const firstCombination of firstCombinations.values()) {
        for (const secondCombination of secondCombinations.values()) {
          combinations.add(`(${firstCombination})${operator}(${secondCombination})`);
          combinations.add(`(${first})${operator}(${secondCombination})`);
        }
        combinations.add(`(${firstCombination})${operator}(${second})`);
      }
    } else if (firstCombinations) {
      for (const firstCombination of firstCombinations.values()) {
        combinations.add(`(${firstCombination})${operator}(${second})`);
      }
    } else if (secondCombinations) {
      for (const secondCombination of secondCombinations.values()) {
        combinations.add(`(${first})${operator}(${secondCombination})`);
      }
    }
  }
  return combinations;
}
