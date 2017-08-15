import { leftRotation } from './left-rotation';

describe('leftRotation', () => {
    const input = [1, 2, 3, 4, 5];

    it('should not modify the order if the number of rotations is 0', () => {
        const actual = leftRotation(input, 0);
        expect(actual).toEqual(input);
    });

    it('should rotate the array by 2 to the left if the number of rotations is 2', () => {
        const expected = [3, 4, 5, 1, 2];
        const actual = leftRotation(input, 2);
        expect(actual).toEqual(expected);
    });

    it('should rotate the array by 2 to the right if the number of rotations is -2', () => {
        const expected = [4, 5, 1, 2, 3];
        const actual = leftRotation(input, -2);
        expect(actual).toEqual(expected);
    });

    it('should not modify the order if the number of rotations is a multiple of the length', () => {
        const actual = leftRotation(input, 10);
        expect(actual).toEqual(input);
    });
});
