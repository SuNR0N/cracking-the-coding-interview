import { eightQueens } from './eight-queens';

describe('eightQueens', () => {
    it('should throw an error for a non positive number of queens', () => {
        const n = 0;

        expect(() => {
            eightQueens(n);
        }).toThrow('Invalid input');
    });

    it('should return 1 solution for 1 queen on a 1x1 board', () => {
        const n = 1;
        const expected = 1;

        expect(eightQueens(n).size).toBe(expected);
    });

    it('should return 0 solution for 2 queens on a 2x2 board', () => {
        const n = 2;
        const expected = 0;

        expect(eightQueens(n).size).toBe(expected);
    });

    it('should return 0 solution for 3 queens on a 3x3 board', () => {
        const n = 3;
        const expected = 0;

        expect(eightQueens(n).size).toBe(expected);
    });

    it('should return 2 solutions for 4 queens on a 4x4 board', () => {
        const n = 4;
        const expected = 2;

        expect(eightQueens(n).size).toBe(expected);
    });

    it('should return 10 solutions for 5 queens on a 5x5 board', () => {
        const n = 5;
        const expected = 10;

        expect(eightQueens(n).size).toBe(expected);
    });

    it('should return 4 solutions for 6 queens on a 6x6 board', () => {
        const n = 6;
        const expected = 4;

        expect(eightQueens(n).size).toBe(expected);
    });

    it('should return 40 solutions for 7 queens on a 7x7 board', () => {
        const n = 7;
        const expected = 40;

        expect(eightQueens(n).size).toBe(expected);
    });

    it('should return 92 solutions for 8 queens on a 8x8 board', () => {
        const expected = 92;

        expect(eightQueens().size).toBe(expected);
    });
});
