import { checkBalanced } from './check-balanced';
import { BinaryTree, Node } from './helpers';

describe('checkBalanced', () => {
    it('should return false for a tree with an undefined root', () => {
        const tree = new BinaryTree<number>();
        const expected = false;

        expect(checkBalanced(tree)).toBe(expected);
    });

    it('should return true for a tree with a single node', () => {
        const tree = new BinaryTree<number>(new Node(1));
        const expected = true;

        expect(checkBalanced(tree)).toBe(expected);
    });

    it('should return true for a balanced binary tree', () => {
        const rootNode = new Node(4)
            .addChild(new Node(2)
                .addChild(new Node(1))
                .addChild(new Node(3)))
            .addChild(new Node(5)
                .addChild()
                .addChild(new Node(6)));
        const tree = new BinaryTree<number>(rootNode);
        const expected = true;

        expect(checkBalanced(tree)).toBe(expected);
    });

    it('should return false for an unbalanced binary tree', () => {
        const rootNode = new Node(1)
            .addChild()
            .addChild(new Node(2)
                .addChild()
                .addChild(new Node(3)
                    .addChild()
                    .addChild(new Node(4)
                        .addChild()
                        .addChild(new Node(5)
                            .addChild()
                            .addChild(new Node(6))))));
        const tree = new BinaryTree<number>(rootNode);
        const expected = false;

        expect(checkBalanced(tree)).toBe(expected);
    });
});
