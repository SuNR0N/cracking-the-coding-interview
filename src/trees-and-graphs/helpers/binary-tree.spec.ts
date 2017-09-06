import { BinaryTree, Node, VisitorFunction } from './';

describe('BinaryTree', () => {
    const nonBinaryTreeRoot = new Node(0)
        .addChild(new Node(1)
            .addChild(new Node(3))
            .addChild(new Node(4))
            .addChild(new Node(4)))
        .addChild(new Node(2)
            .addChild(new Node(6))
            .addChild(new Node(7)));

    const nonCompleteBinaryTreeRoot = new Node(10)
        .addChild(new Node(5)
            .addChild(new Node(3))
            .addChild(new Node(7)))
        .addChild(new Node(20)
            .addChild()
            .addChild(new Node(30)));

    const completeBinaryTreeRoot = new Node(10)
        .addChild(new Node(5)
            .addChild(new Node(3))
            .addChild(new Node(7)))
        .addChild(new Node(20)
            .addChild(new Node(15)));

    const nonFullBinaryTreeRoot = new Node(10)
        .addChild(new Node(5)
            .addChild()
            .addChild(new Node(12)))
        .addChild(new Node(20)
            .addChild(new Node(3)
                .addChild(new Node(9))
                .addChild(new Node(18)))
            .addChild(new Node(7)));

    const fullBinaryTreeRoot = new Node(10)
        .addChild(new Node(5))
        .addChild(new Node(20)
            .addChild(new Node(3)
                .addChild(new Node(9))
                .addChild(new Node(18)))
            .addChild(new Node(7)));

    const perfectBinaryTreeRoot = new Node(10)
        .addChild(new Node(5)
            .addChild(new Node(9))
            .addChild(new Node(18)))
        .addChild(new Node(20)
            .addChild(new Node(3))
            .addChild(new Node(7)));

    describe('constructor', () => {
        it('should throw an error if the root node does not represent a binary tree', () => {
            expect(() => {
                // tslint:disable-next-line:no-unused-expression
                new BinaryTree<number>(nonBinaryTreeRoot);
            }).toThrow('Invalid binary tree');

        });

        it('should not throw an error if the root node represents a binary tree', () => {
            expect(() => {
                // tslint:disable-next-line:no-unused-expression
                new BinaryTree<number>(nonCompleteBinaryTreeRoot);
            }).not.toThrow('Invalid binary tree');
        });
    });

    describe('isComplete', () => {
        it('should return false for a not complete binary tree', () => {
            const tree = new BinaryTree<number>(nonCompleteBinaryTreeRoot);

            expect(tree.isComplete()).toBe(false);
        });

        it('should return true for a complete binary tree', () => {
            const tree = new BinaryTree<number>(completeBinaryTreeRoot);

            expect(tree.isComplete()).toBe(true);
        });
    });

    describe('isFull', () => {
        it('should return false for a not full binary tree', () => {
            const tree = new BinaryTree<number>(nonFullBinaryTreeRoot);

            expect(tree.isFull()).toBe(false);
        });

        it('should return true for a full binary tree', () => {
            const tree = new BinaryTree<number>(fullBinaryTreeRoot);

            expect(tree.isFull()).toBe(true);
        });
    });

    describe('isPerfect', () => {
        it('should return false for a complete binary tree', () => {
            const tree = new BinaryTree<number>(completeBinaryTreeRoot);

            expect(tree.isPerfect()).toBe(false);
        });

        it('should return false for a full binary tree', () => {
            const tree = new BinaryTree<number>(fullBinaryTreeRoot);

            expect(tree.isPerfect()).toBe(false);
        });

        it('should return true for a complete and full binary tree', () => {
            const tree = new BinaryTree<number>(perfectBinaryTreeRoot);

            expect(tree.isPerfect()).toBe(true);
        });
    });

    describe('traverseInOrder', () => {
        it('should not call the visitor function if the node is undefined', () => {
            const tree = new BinaryTree<number>();
            const visitorFn = jest.fn((node) => true);

            tree.traverseInOrder(visitorFn, tree.root);

            expect(visitorFn).not.toHaveBeenCalled();
        });

        it('should visit the nodes in an in-order fashion', () => {
            const tree = new BinaryTree<number>(perfectBinaryTreeRoot);
            const nodes: number[] = [];
            const visitorFn: VisitorFunction<number> = (node) => nodes.push(node.value);
            const expected = [9, 5, 18, 10, 3, 20, 7];

            tree.traverseInOrder(visitorFn, tree.root);

            expect(nodes).toEqual(expected);
        });
    });
});
