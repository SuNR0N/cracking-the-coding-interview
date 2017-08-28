import { LinkedList, Node } from './helpers';
import { returnKthToLast } from './return-kth-to-last';

describe('returnKthToLast', () => {
    it('should return undefined if the list is empty', () => {
        const input = new LinkedList();

        expect(returnKthToLast(input, 1)).toBeUndefined();
    });

    it('should return the last element of the list if k is 0', () => {
        const input = LinkedList.fromValues(1, 2, 3, 4, 5);
        const expected = new Node(5);

        expect(returnKthToLast(input, 0)).toEqual(expected);
    });

    it('should return the kth element of the list from backwards if k > 0', () => {
        const input = LinkedList.fromValues(1, 2, 3, 4, 5);
        const expected = Node.fromValues(3, 4, 5);

        expect(returnKthToLast(input, 2)).toEqual(expected);
    });

    it('should return undefined if kth element from backwards does not exist', () => {
        const input = LinkedList.fromValues(1, 2, 3);

        expect(returnKthToLast(input, 3)).toBeUndefined();
    });
});
