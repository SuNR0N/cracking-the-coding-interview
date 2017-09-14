import { mostFrequent } from './most-frequent';

describe('mostFrequent', () => {
    it('should return undefined without any arguments', () => {
        expect(mostFrequent()).toBeUndefined();
    });

    it('should return the most frequent item', () => {
        const expected = 3;
        expect(mostFrequent(1, 2, 3, 2, 3, 3)).toBe(expected);
    });

    it('should return the item which reaches the max occurrence earlier if multiple values exist with the same occurrence', () => {
        const expected = 3;
        expect(mostFrequent(1, 2, 3, 2, 3, 3, 2)).toBe(expected);
    });
});
