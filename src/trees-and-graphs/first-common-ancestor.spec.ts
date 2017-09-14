import { firstCommonAncestor } from './first-common-ancestor';
import { Node } from './helpers/node';

describe('firstCommonAncestor', () => {
    const n13 = new Node(13);
    const n6 = new Node(6);
    const n7 = new Node(7);
    const n2 = new Node(2);
    const n4 = new Node(4);
    const n3 = new Node(3);
    const n9 = new Node(9);
    const n1 = new Node(1);
    n3.addChild(n1);
    n2.addChild(n3);
    n4.addChild(n9);
    n7.addChild(n2).addChild(n4);
    n6.addChild(n7);

    it('should return undefined if no common ancestor can be found as the first node is isolated', () => {
        const first = n13;
        const second = n3;

        expect(firstCommonAncestor(first, second)).toBeUndefined();
    });

    it('should return undefined if no common ancestor can be found as the second node is isolated', () => {
        const first = n3;
        const second = n13;

        expect(firstCommonAncestor(first, second)).toBeUndefined();
    });

    it('should return the first node if the first is ancestor of the second', () => {
        const first = n6;
        const second = n7;
        const expected = first;

        expect(firstCommonAncestor(first, second)).toBe(expected);
    });

    it('should return the second node if the second is ancestor of the first', () => {
        const first = n7;
        const second = n6;
        const expected = second;

        expect(firstCommonAncestor(first, second)).toBe(expected);
    });

    it('should return undefined if the nodes are the same and it has no parent', () => {
        const first = n6;
        const second = first;

        expect(firstCommonAncestor(first, second)).toBeUndefined();
    });

    it('should return the parent of the node if it exists and both arguments are that given node', () => {
        const first = n7;
        const second = first;
        const expected = n6;

        expect(firstCommonAncestor(first, second)).toBe(expected);
    });

    it('should return the common ancestor if the first node has more jumps to it than the second', () => {
        const first = n1;
        const second = n4;
        const expected = n7;

        expect(firstCommonAncestor(first, second)).toBe(expected);
    });

    it('should return the common ancestor if the second node has more jumps to it than the first', () => {
        const first = n4;
        const second = n1;
        const expected = n7;

        expect(firstCommonAncestor(first, second)).toBe(expected);
    });

    it('should return the common ancestor if both node have the same number of jumps to their common ancestor', () => {
        const first = n3;
        const second = n9;
        const expected = n7;

        expect(firstCommonAncestor(first, second)).toBe(expected);
    });
});
