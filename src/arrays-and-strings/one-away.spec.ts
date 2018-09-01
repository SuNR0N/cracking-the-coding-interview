import { oneAway } from './one-away';

describe('oneAway', () => {
  const first = 'pale';

  it('should return true if the two words are the same', () => {
    const second = 'pale';
    expect(oneAway(first, second)).toBe(true);
  });

  it('should return true if the second word has one less letter', () => {
    const second = 'ple';
    expect(oneAway(first, second)).toBe(true);
  });

  it('should return true if the second word has one more letter', () => {
    const second = 'pales';
    expect(oneAway(first, second)).toBe(true);
  });

  it('should return true if the second word differs in only one letter', () => {
    const second = 'bale';
    expect(oneAway(first, second)).toBe(true);
  });

  it('should return false if the second word differs in more than one letter', () => {
    const second = 'bake';
    expect(oneAway(first, second)).toBe(false);
  });

  it('should return false if the second word is longer by two letters', () => {
    const second = 'paleethnology';
    expect(oneAway(first, second)).toBe(false);
  });
});
