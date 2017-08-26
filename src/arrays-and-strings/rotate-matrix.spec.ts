import { rotateMatrix } from './rotate-matrix';

describe('rotateMatrix', () => {
    it('should throw an error if the dimensions of the input matrix is not NxN', () => {
        const input: number[][] = [
            [1, 2],
        ];
        expect(() => {
            rotateMatrix(input);
        }).toThrow('Invalid input');
    });

    it('should not rotate a 1x1 matrix', () => {
        const input: number[][] = [
            [1],
        ];
        const expected = input;
        expect(rotateMatrix(input)).toEqual(expect.arrayContaining(expected));
    });

    it('should rotate one layer for a 2x2 matrix', () => {
        const input: number[][] = [
            [1, 2],
            [3, 4],
        ];
        const expected: number[][] = [
            [3, 1],
            [4, 2],
        ];
        expect(rotateMatrix(input)).toEqual(expect.arrayContaining(expected));
    });

    it('should rotate one layer for a 3x3 matrix', () => {
        const input: number[][] = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        const expected: number[][] = [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3],
        ];
        expect(rotateMatrix(input)).toEqual(expect.arrayContaining(expected));
    });

    it('should rotate two layers for a 4x4 matrix', () => {
        const input: number[][] = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 0, 1, 2],
            [3, 4, 5, 6],
        ];
        const expected: number[][] = [
            [3, 9, 5, 1],
            [4, 0, 6, 2],
            [5, 1, 7, 3],
            [6, 2, 8, 4],
        ];
        expect(rotateMatrix(input)).toEqual(expect.arrayContaining(expected));
    });

    it('should rotate three layers for a 7x7 matrix', () => {
        const input: number[][] = [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9, 0, 1],
            [2, 3, 4, 5, 6, 7, 8],
            [9, 0, 1, 2, 3, 4, 5],
            [6, 7, 8, 9, 0, 1, 2],
            [3, 4, 5, 6, 7, 8, 9],
        ];
        const expected: number[][] = [
            [3, 6, 9, 2, 5, 8, 1],
            [4, 7, 0, 3, 6, 9, 2],
            [5, 8, 1, 4, 7, 0, 3],
            [6, 9, 2, 5, 8, 1, 4],
            [7, 0, 3, 6, 9, 2, 5],
            [8, 1, 4, 7, 0, 3, 6],
            [9, 2, 5, 8, 1, 4, 7],
        ];
        expect(rotateMatrix(input)).toEqual(expect.arrayContaining(expected));
    });
});
