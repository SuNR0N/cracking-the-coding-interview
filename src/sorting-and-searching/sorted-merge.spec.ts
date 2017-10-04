import { sortedMerge } from './sorted-merge';

describe('sortedMerge', () => {
    it('should return A if B is empty', () => {
        const a = [1, 2, 3];
        const b: number[] = [];
        const expected = [1, 2, 3];

        expect(sortedMerge(a, b)).toEqual(expect.arrayContaining(expected));
    });

    it('should return B if A is empty', () => {
        const a: number[] = [];
        const b = [1, 2, 3];
        const expected = [1, 2, 3];

        expect(sortedMerge(a, b)).toEqual(expect.arrayContaining(expected));
    });

    it('should return the merged array if A contains duplicates', () => {
        const a = [1, 1, 2, 2, 3, 3];
        const b = [4, 5, 6];
        const expected = [1, 1, 2, 2, 3, 3, 4, 5, 6];

        expect(sortedMerge(a, b)).toEqual(expect.arrayContaining(expected));
    });

    it('should return the merged array if B contains duplicates', () => {
        const a = [4, 5, 6];
        const b = [1, 1, 2, 2, 3, 3];
        const expected = [1, 1, 2, 2, 3, 3, 4, 5, 6];

        expect(sortedMerge(a, b)).toEqual(expect.arrayContaining(expected));
    });

    it('should return the merged array if both arrays contain duplicates', () => {
        const a = [1, 1, 3, 3];
        const b = [2, 2, 4, 4];
        const expected = [1, 1, 2, 2, 3, 3, 4, 4];

        expect(sortedMerge(a, b)).toEqual(expect.arrayContaining(expected));
    });

    it('should return the merged array if the two arrays have same elements', () => {
        const a = [1, 2, 3, 4, 5, 6, 7];
        const b = [2, 4, 6, 8, 10];
        const expected = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 10];

        expect(sortedMerge(a, b)).toEqual(expect.arrayContaining(expected));
    });

    it('should return the merged array if each element is unique in the arrays', () => {
        const a = [1, 3, 5, 7, 9];
        const b = [2, 4, 6, 8, 10];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        expect(sortedMerge(a, b)).toEqual(expect.arrayContaining(expected));
    });
});
