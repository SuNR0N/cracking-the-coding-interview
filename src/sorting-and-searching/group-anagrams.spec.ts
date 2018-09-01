import { groupAnagrams } from './group-anagrams';

describe('groupAnagrams', () => {
  it('should order the words alphabetically if the list does not contain anagrams', () => {
    const words = [
      'abc',
      'xyz',
      'pqr',
      'xxx',
      'abba',
    ];
    const expected = [
      'abba',
      'abc',
      'pqr',
      'xxx',
      'xyz',
    ];

    groupAnagrams(words).forEach((word, index) => expect(word).toEqual(expected[index]));
  });

  it('should order the words alphabetically sorting the anagrams next to each other', () => {
    const words = [
      'ab',
      'aa',
      'ba',
      'abc',
      'abcd',
      'cba',
      'bca',
      'ac',
      'bb',
    ];
    const expected = [
      'aa',
      'ab',
      'ba',
      'abc',
      'bca',
      'cba',
      'abcd',
      'ac',
      'bb',
    ];

    groupAnagrams(words).forEach((word, index) => expect(word).toEqual(expected[index]));
  });

  it('should order the words alphabetically sorting the anagrams next to each other if the list contains duplicates', () => {
    const words = [
      'ab',
      'aa',
      'ba',
      'abc',
      'abcd',
      'cba',
      'bca',
      'ac',
      'bb',
      'ba',
      'aa',
    ];
    const expected = [
      'aa',
      'aa',
      'ab',
      'ba',
      'ba',
      'abc',
      'bca',
      'cba',
      'abcd',
      'ac',
      'bb',
    ];

    groupAnagrams(words).forEach((word, index) => expect(word).toEqual(expected[index]));
  });
});
