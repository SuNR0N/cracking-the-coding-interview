import { Node } from './node';

describe('Node', () => {
    describe('constructor', () => {
        it('should create a node with the value of the provided argument', () => {
            const node = new Node(3);
            expect(node.data).toBe(3);
        });

        it('should not set the next node when it is being created', () => {
            const node = new Node(3);
            expect(node.next).toBeUndefined();
        });
    });

    describe('toString', () => {
        it('should stringify the data and its next node', () => {
            const node = new Node(1);
            node.next = new Node(2);
            expect(node.toString())
                .toEqual('Node [ data: 1, next: Node [ data: 2, next: undefined ] ]');
        });
    });
});
