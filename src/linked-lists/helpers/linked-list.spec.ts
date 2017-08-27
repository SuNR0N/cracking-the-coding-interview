import { LinkedList, Node } from './';

describe('LinkedList', () => {
    describe('fromValues', () => {
        it('should throw an error if it is called without any arguments', () => {
            expect(() => {
                LinkedList.fromValues();
            }).toThrow('List of arguments should contain at least one number');
        });

        it('should create a linked list with the provided values', () => {
            const linkedList = LinkedList.fromValues(1, 2, 3);
            const expectedHead = Node.fromValues(1, 2, 3);
            const expectedMiddle = Node.fromValues(2, 3);
            const expectedTail = new Node(3);

            expect(linkedList.head).toEqual(expectedHead);
            expect(linkedList.head.next).toEqual(expectedMiddle);
            expect(linkedList.head.next.next).toEqual(expectedTail);
        });
    });

    describe('constructor', () => {
        it('should create a linked list with the provided node as its head', () => {
            const head = new Node(1);
            const linkedList = new LinkedList(head);

            expect(linkedList.head).toBe(head);
        });
    });

    describe('append', () => {
        it('should create a new node with the provided value and add it as the tail of the list', () => {
            const head = new Node(1);
            const linkedList = new LinkedList(head);
            const expectedTail = new Node(2);
            linkedList.append(2);

            expect(linkedList.head.next).toBeInstanceOf(Node);
            expect(linkedList.head.next).toEqual(expectedTail);
        });
    });

    describe('remove', () => {
        it('should set the head of the list to undefined if it matches the provided value', () => {
            const head = new Node(1);
            const linkedList = new LinkedList(head);
            linkedList.remove(1);

            expect(linkedList.head).toBeUndefined();
        });

        it('should remove the node with the matching data value from the list', () => {
            const linkedList = LinkedList.fromValues(1, 2, 3);
            const expectedHead = Node.fromValues(1, 3);
            const expectedTail = new Node(3);
            linkedList.remove(2);

            expect(linkedList.head).toEqual(expectedHead);
            expect(linkedList.head.next).toEqual(expectedTail);
        });

        it('should remove all nodes with the matching data value from the list', () => {
            const linkedList = LinkedList.fromValues(1, 2, 2, 3, 2);
            const expectedHead = Node.fromValues(1, 3);
            const expectedTail = new Node(3);
            linkedList.remove(2);

            expect(linkedList.head).toEqual(expectedHead);
            expect(linkedList.head.next).toEqual(expectedTail);
        });

        it('should change the head of the list if it removes the head as it matches the provided value', () => {
            const linkedList = LinkedList.fromValues(1, 1, 1, 3);
            const expectedHead = new Node(3);
            linkedList.remove(1);

            expect(linkedList.head).toEqual(expectedHead);
        });
    });

    describe('toString', () => {
        it('should stringify the linked list with only one node', () => {
            const head = new Node(1);
            const linkedList = new LinkedList(head);
            const expected = 'LinkedList [ 1 ]';

            expect(linkedList.toString()).toEqual(expected);
        });

        it('should stringify the linked list with multiple nodes', () => {
            const linkedList = LinkedList.fromValues(1, 2, 3);
            const expected = 'LinkedList [ 1 -> 2 -> 3 ]';

            expect(linkedList.toString()).toEqual(expected);
        });
    });

    describe('toArray', () => {
        it('should convert the linked list to an array of numbers', () => {
            const linkedList = LinkedList.fromValues(1, 2, 3);
            const expected = [ 1, 2, 3];

            expect(linkedList.toArray()).toEqual(expected);
        });
    });
});
