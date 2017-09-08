import { BinaryTree, Node } from './helpers';
import { validateBST } from './validate-bst';

describe('validateBST', () => {
    it('should return false if the root node of the tree is undefined', () => {
        const tree = new BinaryTree<number>();
        const expected = false;

        expect(validateBST(tree)).toBe(expected);
    });

    it('should return true if the tree has a single node', () => {
        const tree = new BinaryTree<number>(new Node(0));
        const expected = true;

        expect(validateBST(tree)).toBe(expected);
    });

    it('should return true if the tree is a binary search tree', () => {
        const rootNode = new Node(8)
            .addChild(new Node(4)
                .addChild(new Node(2))
                .addChild(new Node(6)))
            .addChild(new Node(10)
                .addChild()
                .addChild(new Node(20)));
        const tree = new BinaryTree<number>(rootNode);
        const expected = true;

        expect(validateBST(tree)).toBe(expected);
    });

    it('should return true if the tree is a binary search which contains the same value multiple times', () => {
        const rootNode = new Node(1)
            .addChild(new Node(1)
                .addChild(new Node(1)
                    .addChild(new Node(1)
                        .addChild(new Node(1)
                            .addChild(new Node(1))))));
        const tree = new BinaryTree<number>(rootNode);
        const expected = true;

        expect(validateBST(tree)).toBe(expected);
    });

    it('should return false if the tree is not a binary search tree', () => {
        const rootNode = new Node(8)
            .addChild(new Node(4)
                .addChild(new Node(2))
                .addChild(new Node(12)))
            .addChild(new Node(10)
                .addChild()
                .addChild(new Node(20)));
        const tree = new BinaryTree<number>(rootNode);
        const expected = false;

        expect(validateBST(tree)).toBe(expected);
    });
});
