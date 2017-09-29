import { IPoint, paintFill } from './paint-fill';

describe('paintFill', () => {
    it('should throw an error for an invalid point', () => {
        const screen: number[][] = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
        const point: IPoint = { x: 3, y: 2 };
        const color: number = 1;

        expect(() => {
            paintFill(screen, point, color);
        }).toThrow('Invalid point');
    });

    it('should fill the given pixel only if it does not have adjacent pixels with the same color', () => {
        const screen: number[][] = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ];
        const point: IPoint = { x: 1, y: 1 };
        const color: number = 2;
        const expected: number[][] = [
            [0, 0, 0],
            [0, 2, 0],
            [0, 0, 0],
        ];

        expect(paintFill(screen, point, color)).toEqual(expect.arrayContaining(expected));
    });

    it('should fill the surroundings of the given point with the new color', () => {
        const screen: number[][] = [
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
            [0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        ];
        const point: IPoint = { x: 4, y: 1 };
        const color: number = 2;
        const expected: number[][] = [
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 2, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 2, 0, 1, 0, 0, 0],
            [0, 0, 2, 2, 2, 2, 0, 0, 0, 0],
            [0, 0, 2, 2, 0, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 0, 0, 2, 0],
            [0, 0, 0, 2, 0, 2, 2, 2, 2, 0],
            [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
            [1, 0, 0, 2, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        ];

        expect(paintFill(screen, point, color)).toEqual(expect.arrayContaining(expected));
    });

    it('should should not change the color of the pixel if the new color is the same as the original', () => {
        const screen: number[][] = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
        ];
        const point: IPoint = { x: 2, y: 2 };
        const color: number = 1;
        const expected: number[][] = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        expect(paintFill(screen, point, color)).toEqual(expect.arrayContaining(expected));
    });
});
