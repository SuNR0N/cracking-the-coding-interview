import { wordSearch } from './word-search';

describe('wordSearch', () => {
  const wordList = [
    'foo',
    'bar',
  ];

  it('should throw an error if the word list is empty', () => {
    const puzzle = [
      'abcde',
      'fghij',
      'klmno',
      'pqrst',
      'uvwxy',
    ];

    expect(() => {
      wordSearch(puzzle, []);
    }).toThrow('Word list cannot be empty');
  });

  it('should throw an error if the puzzle is invalid', () => {
    expect(() => {
      wordSearch([], wordList);
    }).toThrow('Invalid puzzle');
  });

  it('should return an empty array if no valid word exists in the puzzle', () => {
    const puzzle = [
      'abcde',
      'fghij',
      'klmno',
      'pqrst',
      'uvwxy',
    ];
    const solutions = wordSearch(puzzle, wordList);

    expect(solutions).toHaveLength(0);
  });

  it('should return a word if it can be found horizontally', () => {
    const puzzle = [
      'abcde',
      'gfooj',
      'klmno',
      'pqrst',
      'uvwxy',
    ];
    const solutions = wordSearch(puzzle, wordList);

    expect(solutions).toEqual(['foo']);
  });

  it('should return a word if it can be found horizontally in reverse', () => {
    const puzzle = [
      'abcde',
      'goofj',
      'klmno',
      'pqrst',
      'uvwxy',
    ];
    const solutions = wordSearch(puzzle, wordList);

    expect(solutions).toEqual(['foo']);
  });

  it('should return a word if it can be found vertically', () => {
    const puzzle = [
      'abcde',
      'fghij',
      'olmno',
      'oqrst',
      'uvwxy',
    ];
    const solutions = wordSearch(puzzle, wordList);

    expect(solutions).toEqual(['foo']);
  });

  it('should return a word if it can be found vertically in reverse', () => {
    const puzzle = [
      'abcde',
      'ughij',
      'olmno',
      'oqrst',
      'fvwxy',
    ];
    const solutions = wordSearch(puzzle, wordList);

    expect(solutions).toEqual(['foo']);
  });

  it('should return a word if it can be found diagonally', () => {
    const puzzle = [
      'abcde',
      'fghij',
      'komno',
      'pqost',
      'uvwxy',
    ];
    const solutions = wordSearch(puzzle, wordList);

    expect(solutions).toEqual(['foo']);
  });

  it('should return a word if it can be found diagonally in reverse', () => {
    const puzzle = [
      'abcde',
      'xghij',
      'komno',
      'pqost',
      'uvwfy',
    ];
    const solutions = wordSearch(puzzle, wordList);

    expect(solutions).toEqual(['foo']);
  });

  it('should return all the words which can be found', () => {
    const puzzle = [
      'abare',
      'fghij',
      'komno',
      'pqost',
      'uvwxy',
    ];
    const solutions = wordSearch(puzzle, wordList);

    expect(solutions).toEqual([
      'bar',
      'foo',
    ]);
  });
});
