/** Prints all valid combinations of n pairs of parentheses */
export function parens(n: number, value: string = '(', combinations: string[] = []): string[] {
  if (n < 0) {
    throw new Error('Invalid input');
  }
  const parentheses = value.split('');
  const opened = parentheses.filter((p) => p === '(').length;
  const canAddOpened = opened < n;
  const canAddClosed = parentheses.filter((p) => p === ')').length < opened;
  if (canAddOpened) {
    parens(n, value + '(', combinations);
  }
  if (canAddClosed) {
    parens(n, value + ')', combinations);
  }
  if (value.length === 2 * n) {
    combinations.push(value);
  }
  return combinations;
}
