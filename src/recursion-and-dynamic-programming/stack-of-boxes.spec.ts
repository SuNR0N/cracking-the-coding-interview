import { IBox, stackOfBoxes } from './stack-of-boxes';

describe('stackOfBoxes', () => {
    it('should return 0 if there is no box in the stack', () => {
        const boxes: IBox[] = [];
        const expected = 0;

        expect(stackOfBoxes(boxes)).toBe(expected);
    });

    it('should return the height of the box if there is only 1 in the stack', () => {
        const boxes: IBox[] = [
            { depth: 1, height: 2, width: 3 },
        ];
        const expected = 2;

        expect(stackOfBoxes(boxes)).toBe(expected);
    });

    it('should return the height of the tallest box if it is taller than the highest stack', () => {
        const boxes: IBox[] = [
            { depth: 1, height: 57, width: 1 },
            { depth: 2, height: 1, width: 2 },
            { depth: 7, height: 9, width: 8 },
            { depth: 4, height: 4, width: 4 },
            { depth: 15, height: 16, width: 12 },
            { depth: 20, height: 25, width: 19 },
        ];
        const expected = 57;

        expect(stackOfBoxes(boxes)).toBe(expected);
    });

    it('should return the sum of heights if all boxes can be stacked on top of each', () => {
        const boxes: IBox[] = [
            { depth: 2, height: 1, width: 2 },
            { depth: 7, height: 9, width: 8 },
            { depth: 4, height: 4, width: 4 },
            { depth: 15, height: 16, width: 12 },
            { depth: 20, height: 25, width: 19 },
        ];
        const expected = 55;

        expect(stackOfBoxes(boxes)).toBe(expected);
    });

    it('should return the height of the tallest stack if multiple stacks can be created', () => {
        const boxes: IBox[] = [
            { depth: 2, height: 1, width: 2 },
            { depth: 7, height: 9, width: 8 },
            { depth: 4, height: 4, width: 4 },
            { depth: 15, height: 16, width: 12 },
            { depth: 14, height: 17, width: 14 },
            { depth: 20, height: 25, width: 19 },
        ];
        const expected = 56;

        expect(stackOfBoxes(boxes)).toBe(expected);
    });
});
