import { masterMind } from './master-mind';

describe('masterMind', () => {
  it('should throw an error if the guess has an invalid format', () => {
    const guess = 'RRR';
    const solution = 'YYGG';

    expect(() => {
      masterMind(guess, solution);
    }).toThrow('Invalid guess or solution length');
  });

  it('should throw an error if the solution has an invalid format', () => {
    const guess = 'RBRB';
    const solution = 'RRR';

    expect(() => {
      masterMind(guess, solution);
    }).toThrow('Invalid guess or solution length');
  });

  it('should throw an error if the guess has an invalid character', () => {
    const guess = 'RBRX';
    const solution = 'YYGG';

    expect(() => {
      masterMind(guess, solution);
    }).toThrow('Invalid character in guess');
  });

  it('should throw an error if the solution has an invalid character', () => {
    const guess = 'RBRB';
    const solution = 'YXGG';

    expect(() => {
      masterMind(guess, solution);
    }).toThrow('Invalid character in solution');
  });

  it('should return 0 hits and 0 pseudo-hits for "RBRB" and "YYGG"', () => {
    const guess = 'RBRB';
    const solution = 'YYGG';
    const result = masterMind(guess, solution);

    expect(result).toBe('You have 0 hit(s) and 0 pseudo-hit(s)');
  });

  it('should return 1 hits and 1 pseudo-hits for "RGBY" and "GGRR"', () => {
    const guess = 'RGBY';
    const solution = 'GGRR';
    const result = masterMind(guess, solution);

    expect(result).toBe('You have 1 hit(s) and 1 pseudo-hit(s)');
  });

  it('should return 0 hits and 4 pseudo-hits for "RYGB" and "YGBR"', () => {
    const guess = 'RYGB';
    const solution = 'YGBR';
    const result = masterMind(guess, solution);

    expect(result).toBe('You have 0 hit(s) and 4 pseudo-hit(s)');
  });

  it('should return 3 hits and 0 pseudo-hits for "RGBY" and "RGBR"', () => {
    const guess = 'RGBY';
    const solution = 'RGBR';
    const result = masterMind(guess, solution);

    expect(result).toBe('You have 3 hit(s) and 0 pseudo-hit(s)');
  });

  it('should return 4 hits and 0 pseudo-hits for "RGBY" and "RGBY"', () => {
    const guess = 'RGBY';
    const solution = 'RGBY';
    const result = masterMind(guess, solution);

    expect(result).toBe('You have 4 hit(s) and 0 pseudo-hit(s)');
  });
});
