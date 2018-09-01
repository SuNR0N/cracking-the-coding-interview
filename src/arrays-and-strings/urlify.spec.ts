import { urlify } from './urlify';

describe('urlify', () => {
  it('should replace single spaces with %20 within the input string', () => {
    const input = 'Mr John Smith    ';
    const expected = 'Mr%20John%20Smith';
    expect(urlify(input, 13)).toBe(expected);
  });

  it('should replace multiple spaces with multitple %20 within the input string', () => {
    const input = 'Mr  John   Smith    ';
    const expected = 'Mr%20%20John%20%20%20Smith';
    expect(urlify(input, 16)).toBe(expected);
  });

  it('should not modify the input string if it does not contain a space', () => {
    const input = 'MrJohnSmith';
    const expected = input;
    expect(urlify(input, 11)).toBe(expected);
  });

  it('should throw an error if the length of the trimmed string differs from the true length', () => {
    const input = ' Mr John Smith ';
    expect(() => {
      urlify(input, 15);
    }).toThrow('Invalid input');
  });
});
