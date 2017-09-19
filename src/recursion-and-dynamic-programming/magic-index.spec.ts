import { magicIndex } from './magic-index';

describe('magicIndex', () => {
    it('should return undefined it no magic index exists', () => {
        const input = [1, 2, 3, 4, 5];

        expect(magicIndex(input)).toBeUndefined();
    });

    it('should return the magic index if it exists', () => {
        const input = [-2, -1, 1, 3, 5];
        const expected = 3;

        expect(magicIndex(input)).toBe(expected);
    });

    it('should return the first magic index if multiple indices exist', () => {
        const input = [0, 1, 2, 3, 4, 5];
        const expected = 0;

        expect(magicIndex(input)).toBe(expected);
    });

    it('should return the first magic index if the elements of the array are not unique', () => {
        const input = [1, 2, 3, 4, 4, 4, 4, 7, 7];
        const expected = 4;

        expect(magicIndex(input)).toBe(expected);
    });
});
