import { LinkedList } from './helpers';
import { removeDups } from './remove-dups';

describe.only('removeDups', () => {
    it('should not remove any elements from the list if it does not contain duplicates', () => {
        const input = LinkedList.fromValues(1, 2, 3, 4, 5);
        const expected = [1, 2, 3, 4, 5];
        removeDups(input);
        expect(input.toArray()).toEqual(expect.arrayContaining(expected));
    });

    it('should remove all duplicates of a given node', () => {
        const input = LinkedList.fromValues(1, 2, 3, 2, 4, 5, 2);
        const expected = [1, 2, 3, 4, 5];
        removeDups(input);
        expect(input.toArray()).toEqual(expect.arrayContaining(expected));
    });

    it('should remove all duplicates for every node', () => {
        const input = LinkedList.fromValues(1, 2, 3, 4, 5, 5, 4, 3, 2, 1);
        const expected = [1, 2, 3, 4, 5];
        removeDups(input);
        expect(input.toArray()).toEqual(expect.arrayContaining(expected));
    });
});
