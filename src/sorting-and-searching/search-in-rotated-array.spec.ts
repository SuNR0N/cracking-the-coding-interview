import { searchInRotatedArray } from './search-in-rotated-array';

describe('searchInRotatedArray', () => {
    it('should find each element in the array', () => {
        const arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

        arr.forEach((n, index) => {
            expect(searchInRotatedArray(n, arr)).toBe(index);
        });
    });

    it('should throw an error if a given value cannot be found in the array', () => {
        const arr = [4, 5, 1, 2, 3];
        const value = 6;

        expect(() => {
            searchInRotatedArray(value, arr);
        }).toThrow('6 does not exist in the provided array');
    });

    it('should find one of the duplicate entries in the array', () => {
        const arr = [5, 6, 7, 8, 9, 10, 1, 2, 2, 3, 4];
        const value = 2;
        const expected = /^[78]$/;

        expect(searchInRotatedArray(value, arr).toString()).toMatch(expected);
    });
});
