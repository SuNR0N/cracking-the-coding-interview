import { permutationsWithoutDups } from './permutations-without-dups';

describe('permutationsWithoutDups', () => {
  it('should throw an error if the input contains non unique characters', () => {
    const input = 'foo';

    expect(() => {
      permutationsWithoutDups(input);
    }).toThrow('Invalid input');
  });

  it('should return one permutation for a string with a length of 1', () => {
    const input = 'a';
    const expected = [
      ['a'],
    ];

    expect(permutationsWithoutDups(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should return 2 permutations for a string with a length of 2', () => {
    const input = 'ab';
    const expected = [
      ['a', 'b'],
      ['b', 'a'],
    ];

    expect(permutationsWithoutDups(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should return 6 permutations for a string with a length of 3', () => {
    const input = 'abc';
    const expected = [
      ['a', 'b', 'c'],
      ['a', 'c', 'b'],
      ['b', 'a', 'c'],
      ['b', 'c', 'a'],
      ['c', 'a', 'b'],
      ['c', 'b', 'a'],
    ];

    expect(permutationsWithoutDups(input)).toEqual(expect.arrayContaining(expected));
  });
});
