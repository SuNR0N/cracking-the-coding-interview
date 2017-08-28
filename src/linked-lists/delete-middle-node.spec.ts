import { deleteMiddleNode } from './delete-middle-node';
import { LinkedList } from './helpers';

describe('deleteMiddleNode', () => {
    it('should not remove the given node if it is the last', () => {
        const linkedList = LinkedList.fromValues(1, 2);
        const input = linkedList.getNode(1);
        const expected = linkedList;
        deleteMiddleNode(input);

        expect(linkedList).toEqual(expected);
    });

    it('should remove the given node if it is not the last', () => {
        const linkedList = LinkedList.fromValues(1, 2, 3, 4, 5);
        const input = linkedList.getNode(2);
        const expected = LinkedList.fromValues(1, 2, 4, 5);
        deleteMiddleNode(input);

        expect(linkedList).toEqual(expected);
    });
});
