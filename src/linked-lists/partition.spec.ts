import { LinkedList } from './helpers';
import { partition } from './partition';

describe('partition', () => {
    it('should not modify an empty linked list', () => {
        const input = new LinkedList();
        const x = 1;
        const expected = input;
        partition(input, x);

        expect(input).toEqual(expected);
    });

    it('should not modify a linked list where all nodes less than the provided value', () => {
        const input = LinkedList.fromValues(1, 2, 3, 4, 5);
        const x = 6;
        const expected = input;
        partition(input, x);

        expect(input).toEqual(expected);
    });

    it('should not modify a linked list where all nodes greater or equal than the provided value', () => {
        const input = LinkedList.fromValues(3, 4, 5, 6, 7);
        const x = 3;
        const expected = input;
        partition(input, x);

        expect(input).toEqual(expected);
    });

    it('should partition a linked list where there are nodes which less/greater than the provided value', () => {
        const input = LinkedList.fromValues(3, 2, 7, 1, 9, 8);
        const x = 5;
        const expected = LinkedList.fromValues(3, 2, 1, 7, 9, 8);
        partition(input, x);

        expect(input).toEqual(expected);
    });

    it('should partition a linked list where there are nodes which less/equal/greater than the provided value', () => {
        const input = LinkedList.fromValues(3, 2, 7, 5, 1, 9, 8);
        const x = 5;
        const expected = LinkedList.fromValues(3, 2, 1, 7, 5, 9, 8);
        partition(input, x);

        expect(input).toEqual(expected);
    });
});
