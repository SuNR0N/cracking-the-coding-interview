import { parens } from './parens';

describe('parens', () => {
    it('should throw an error for negative integers', () => {
        const input = -1;

        expect(() => {
            parens(input);
        }).toThrow('Invalid input');
    });

    it('should return 0 combination for 0', () => {
        const input = 0;
        const expected: string[] = [];

        expect(parens(input)).toEqual(expect.arrayContaining(expected));
    });

    it('should return 1 combination for 1', () => {
        const input = 1;
        const expected: string[] = [
            '()',
        ];

        expect(parens(input)).toEqual(expect.arrayContaining(expected));
    });

    it('should return 2 combinations for 2', () => {
        const input = 2;
        const expected: string[] = [
            '(())',
            '()()',
        ];

        expect(parens(input)).toEqual(expect.arrayContaining(expected));
    });

    it('should return 5 combinations for 3', () => {
        const input = 3;
        const expected: string[] = [
            '((()))',
            '(()())',
            '(())()',
            '()(())',
            '()()()',
        ];

        expect(parens(input)).toEqual(expect.arrayContaining(expected));
    });
});
