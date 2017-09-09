import { Node } from './helpers/node';
import { successor } from './successor';

describe('successor', () => {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const n4 = new Node(4);
    const n5 = new Node(5);
    const n6 = new Node(6);
    const n7 = new Node(7);
    const n8 = new Node(8);
    n5.addChild(n4).addChild(n7);
    n4.addChild(n2);
    n2.addChild(n1).addChild(n3);
    n7.addChild(n6).addChild(n8);

    it('should return undefined if the node is undefined', () => {
        const next = successor();
        const expected = undefined;

        expect(next).toBe(expected);
    });

    it('should return the leftmost node in the right subtree if a node has children', () => {
        const next = successor(n5);
        const expected = n6;

        expect(next).toBe(expected);
    });

    it('should return the parent for the leftmost node', () => {
        const next = successor(n1);
        const expected = n2;

        expect(next).toBe(expected);
    });

    it('should return the grandparent for a right child in the left subtree', () => {
        const next = successor(n3);
        const expected = n4;

        expect(next).toBe(expected);
    });

    it('should return undefined for the rightmost node', () => {
        const next = successor(n8);
        const expected = undefined;

        expect(next).toBe(expected);
    });

    it('should return the parent for a node in the left subtree which has only a left child', () => {
        const next = successor(n4);
        const expected = n5;

        expect(next).toBe(expected);
    });
});
