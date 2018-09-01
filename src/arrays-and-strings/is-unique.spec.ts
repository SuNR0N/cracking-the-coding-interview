import { isUnique } from './is-unique';

describe('isUnique', () => {
  it('should return true if the input contains each letter of the alphabet at least once', () => {
    const sample = 'Sphinx of black quartz, judge my vow';
    expect(isUnique(sample)).toBe(true);
  });

  it('should return true if the input contains each letter of the alphabet exactly once', () => {
    const sample = 'abcdefghijklmnopqrstuvwxyz';
    expect(isUnique(sample)).toBe(true);
  });

  it('should return false if the input does not contain each letter of the alphabet at least once', () => {
    const sample = 'foobar';
    expect(isUnique(sample)).toBe(false);
  });
});
