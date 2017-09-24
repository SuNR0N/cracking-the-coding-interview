import { permutationsWithDups } from './permutations-with-dups';

describe('permutationsWithDups', () => {
    it('should return all distinct permutations for a string of unique characters', () => {
        const input = 'abc';
        const expected = [
            ['a', 'b', 'c'],
            ['a', 'c', 'b'],
            ['b', 'a', 'c'],
            ['b', 'c', 'a'],
            ['c', 'a', 'b'],
            ['c', 'b', 'a'],
        ];

        expect(permutationsWithDups(input)).toEqual(expect.arrayContaining(expected));
    });

    it('should return all distinct permutations for a string of non unique characters', () => {
        const input = 'foo';
        const expected = [
            ['f', 'o', 'o'],
            ['o', 'f', 'o'],
            ['o', 'o', 'f'],
        ];

        expect(permutationsWithDups(input)).toEqual(expect.arrayContaining(expected));
    });

    it('should return one permutation for a string which contains a single character multiple times', () => {
        const input = 'www';
        const expected = [
            ['w', 'w', 'w'],
        ];

        expect(permutationsWithDups(input)).toEqual(expect.arrayContaining(expected));
    });
});
