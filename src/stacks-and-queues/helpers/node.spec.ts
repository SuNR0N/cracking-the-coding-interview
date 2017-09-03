import { Node } from './node';

describe('Node', () => {
    describe('constructor', () => {
        it('should set the value based on the provided argument', () => {
            const node = new Node<number>(1);
            const expectedNodeValue = 1;

            expect(node.value).toBe(expectedNodeValue);
        });

        it('should create a new node with its next element as undefined', () => {
            const node = new Node<number>(1);

            expect(node.next).toBeUndefined();
        });
    });
});
