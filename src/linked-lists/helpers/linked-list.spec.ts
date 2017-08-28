import { LinkedList, Node } from './';

describe('LinkedList', () => {
    describe('fromValues', () => {
        it('should create an empty list if it is called without any arguments', () => {
            const linkedList = LinkedList.fromValues();
            expect(linkedList.head).toBeUndefined();
        });

        it('should create a linked list with the provided values', () => {
            const linkedList = LinkedList.fromValues(1, 2, 3);
            const expectedHead = Node.fromValues(1, 2, 3);
            const expectedMiddle = Node.fromValues(2, 3);
            const expectedTail = new Node(3);

            expect(linkedList.getNode(0)).toEqual(expectedHead);
            expect(linkedList.getNode(1)).toEqual(expectedMiddle);
            expect(linkedList.getNode(2)).toEqual(expectedTail);
        });
    });

    describe('constructor', () => {
        it('should create a linked list with the provided node as its head', () => {
            const head = new Node(1);
            const linkedList = new LinkedList(head);

            expect(linkedList.head).toBe(head);
        });
    });

    describe('getNode', () => {
        it('should return the nth node if it exists', () => {
            const linkedList = LinkedList.fromValues(1, 2, 3);
            const expected = Node.fromValues(2, 3);

            expect(linkedList.getNode(1)).toEqual(expected);
        });

        it('should return undefined if the nth node does not exist', () => {
            const linkedList = LinkedList.fromValues(1, 2, 3);

            expect(linkedList.getNode(3)).toBeUndefined();
        });

        it('should return undefined for the nth node if the list is empty', () => {
            const linkedList = new LinkedList();

            expect(linkedList.getNode(0)).toBeUndefined();
        });
    });

    describe('append', () => {
        it('should create a new node with the provided value and add it as the tail of the list', () => {
            const head = new Node(1);
            const linkedList = new LinkedList(head);
            const expectedTail = new Node(2);
            linkedList.append(2);

            expect(linkedList.getNode(1)).toBeInstanceOf(Node);
            expect(linkedList.getNode(1)).toEqual(expectedTail);
        });

        it('should create a new node with the provided value and add it as the head of the list if it is empty', () => {
            const linkedList = new LinkedList();
            const expectedHead = new Node(1);
            linkedList.append(1);

            expect(linkedList.getNode(0)).toBeInstanceOf(Node);
            expect(linkedList.getNode(0)).toEqual(expectedHead);
        });

        it('should add the provided node as the tail of the list', () => {
            const head = new Node(1);
            const linkedList = new LinkedList(head);
            const expectedTail = new Node(2);
            linkedList.append(expectedTail);

            expect(linkedList.getNode(1)).toEqual(expectedTail);
        });

        it('should add the provided node as the head of the list if it is empty', () => {
            const linkedList = new LinkedList();
            const expectedHead = new Node(1);
            linkedList.append(expectedHead);

            expect(linkedList.getNode(0)).toEqual(expectedHead);
        });
    });

    describe('remove', () => {
        it('should return undefined if the list is empty', () => {
            const linkedList = new LinkedList();

            expect(linkedList.remove(3)).toBeUndefined();
        });

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
            expect(linkedList.getNode(1)).toEqual(expectedTail);
        });

        it('should remove all nodes with the matching data value from the list', () => {
            const linkedList = LinkedList.fromValues(1, 2, 2, 3, 2);
            const expectedHead = Node.fromValues(1, 3);
            const expectedTail = new Node(3);
            linkedList.remove(2);

            expect(linkedList.head).toEqual(expectedHead);
            expect(linkedList.getNode(1)).toEqual(expectedTail);
        });

        it('should change the head of the list if it removes the head as it matches the provided value', () => {
            const linkedList = LinkedList.fromValues(1, 1, 1, 3);
            const expectedHead = new Node(3);
            linkedList.remove(1);

            expect(linkedList.head).toEqual(expectedHead);
        });
    });

    describe('toString', () => {
        it('should stringify an empty linked list', () => {
            const linkedList = new LinkedList();
            const expected = 'LinkedList [ ]';

            expect(linkedList.toString()).toEqual(expected);
        });

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
        it('should convert an empty linked list to an empty array', () => {
            const linkedList = new LinkedList();
            const expected: number[] = [];

            expect(linkedList.toArray()).toEqual(expected);
        });

        it('should convert the linked list to an array of numbers', () => {
            const linkedList = LinkedList.fromValues(1, 2, 3);
            const expected = [ 1, 2, 3];

            expect(linkedList.toArray()).toEqual(expected);
        });
    });
});
