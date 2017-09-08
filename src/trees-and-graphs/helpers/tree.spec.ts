import { Node, Tree, VisitorFunction } from './';

describe('Tree', () => {
    const root = new Node(10)
        .addChild(new Node(5)
            .addChild(new Node(9))
            .addChild(new Node(18)))
        .addChild(new Node(20)
            .addChild(new Node(3))
            .addChild(new Node(7)));

    describe('constructor', () => {
        it('should create a tree with a root node if an argument is provided', () => {
            const tree = new Tree<number>();

            expect(tree.root).toBeUndefined();
        });

        it('should create a tree without root node if no argument is provided', () => {
            const rootNode = new Node(0);
            const tree = new Tree<number>(rootNode);

            expect(tree.root).toBe(rootNode);
        });
    });

    describe('findHeight', () => {
        it('should return 0 for a tree without a root', () => {
            const tree = new Tree<number>();
            const expectedHeight = 0;

            expect(tree.findHeight(tree.root)).toBe(expectedHeight);
        });

        it('should return 1 for a tree with a single root node', () => {
            const tree = new Tree<number>(new Node(0));
            const expectedHeight = 1;

            expect(tree.findHeight(tree.root)).toBe(expectedHeight);
        });

        it('should return the max height of the tree', () => {
            const rootNode = new Node(10)
                .addChild(new Node(5)
                    .addChild()
                    .addChild(new Node(12)))
                .addChild(new Node(20)
                    .addChild(new Node(3)
                        .addChild(new Node(9))
                        .addChild())
                    .addChild(new Node(7)));
            const tree = new Tree<number>(rootNode);
            const expectedHeight = 4;

            expect(tree.findHeight(tree.root)).toBe(expectedHeight);
        });
    });

    describe('getLevel', () => {
        it('should return -1 if the root of the tree is undefined', () => {
            const tree = new Tree<number>();
            const expectedLevel = -1;

            expect(tree.getLevel(new Node(1), 0, tree.root)).toBe(expectedLevel);
        });

        it('should return -1 if the node cannot be found within the tree', () => {
            const tree = new Tree<number>(root);
            const expectedLevel = -1;

            expect(tree.getLevel(new Node(13), 0, tree.root)).toBe(expectedLevel);
        });

        it('should return the level at which the node can be found within the tree if it exists', () => {
            const targetNode = new Node(5)
                .addChild()
                .addChild(new Node(6));
            const rootNode = new Node(1)
                .addChild()
                .addChild(new Node(2)
                    .addChild()
                    .addChild(new Node(3)
                        .addChild()
                        .addChild(new Node(4)
                            .addChild(targetNode))));
            const tree = new Tree<number>(rootNode);
            const expectedLevel = 4;

            expect(tree.getLevel(targetNode, 0, tree.root)).toBe(expectedLevel);
        });
    });

    describe('traversePreOrder', () => {
        it('should not call the visitor function if the node is undefined', () => {
            const tree = new Tree<number>();
            const visitorFn = jest.fn((node) => true);

            tree.traversePreOrder(visitorFn, tree.root);

            expect(visitorFn).not.toHaveBeenCalled();
        });

        it('should visit the nodes in a pre-order fashion', () => {
            const tree = new Tree<number>(root);
            const nodes: number[] = [];
            const visitorFn: VisitorFunction<number> = (node) => nodes.push(node.value);
            const expected = [10, 5, 9, 18, 20, 3, 7];

            tree.traversePreOrder(visitorFn, tree.root);

            expect(nodes).toEqual(expected);
        });
    });

    describe('traversePostOrder', () => {
        it('should not call the visitor function if the node is undefined', () => {
            const tree = new Tree<number>();
            const visitorFn = jest.fn((node) => true);

            tree.traversePostOrder(visitorFn, tree.root);

            expect(visitorFn).not.toHaveBeenCalled();
        });

        it('should visit the nodes in a post-order fashion', () => {
            const tree = new Tree<number>(root);
            const nodes: number[] = [];
            const visitorFn: VisitorFunction<number> = (node) => nodes.push(node.value);
            const expected = [9, 18, 5, 3, 7, 20, 10];

            tree.traversePostOrder(visitorFn, tree.root);

            expect(nodes).toEqual(expected);
        });
    });
});
