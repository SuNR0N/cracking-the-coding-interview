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
        it('should return 0 for an undefined node', () => {
            const expectedHeight = 0;

            expect(Tree.findHeight()).toBe(expectedHeight);
        });

        it('should return 1 for a single node', () => {
            const expectedHeight = 1;

            expect(Tree.findHeight(new Node(0))).toBe(expectedHeight);
        });

        it('should return the max height of the provided node', () => {
            const rootNode = new Node(10)
                .addChild(new Node(5)
                    .addChild()
                    .addChild(new Node(12)))
                .addChild(new Node(20)
                    .addChild(new Node(3)
                        .addChild(new Node(9))
                        .addChild())
                    .addChild(new Node(7)));
            const expectedHeight = 4;

            expect(Tree.findHeight(rootNode)).toBe(expectedHeight);
        });
    });

    describe('getLevel', () => {
        it('should return 0 if the source node is undefined', () => {
            const expectedLevel = 0;

            expect(Tree.getLevel(new Node(1), 1)).toBe(expectedLevel);
        });

        it('should return 0 if the node cannot be found within the tree which root is the source node', () => {
            const expectedLevel = 0;

            expect(Tree.getLevel(new Node(13), 1, root)).toBe(expectedLevel);
        });

        it('should return the level at which the node can be found within the tree which root is the source node', () => {
            const targetNode = new Node(5)
                .addChild()
                .addChild(new Node(6));
            const sourceNode = new Node(1)
                .addChild()
                .addChild(new Node(2)
                    .addChild()
                    .addChild(new Node(3)
                        .addChild()
                        .addChild(new Node(4)
                            .addChild(targetNode))));
            const expectedLevel = 5;

            expect(Tree.getLevel(targetNode, 1, sourceNode)).toBe(expectedLevel);
        });
    });

    describe('traversePreOrder', () => {
        it('should not call the visitor function if the node is undefined', () => {
            const visitorFn = jest.fn((node) => true);

            Tree.traversePreOrder(visitorFn);

            expect(visitorFn).not.toHaveBeenCalled();
        });

        it('should visit the nodes in a pre-order fashion', () => {
            const nodes: number[] = [];
            const visitorFn: VisitorFunction<number> = (node) => nodes.push(node.value);
            const expected = [10, 5, 9, 18, 20, 3, 7];

            Tree.traversePreOrder(visitorFn, root);

            expect(nodes).toEqual(expected);
        });
    });

    describe('traversePostOrder', () => {
        it('should not call the visitor function if the node is undefined', () => {
            const visitorFn = jest.fn((node) => true);

            Tree.traversePostOrder(visitorFn);

            expect(visitorFn).not.toHaveBeenCalled();
        });

        it('should visit the nodes in a post-order fashion', () => {
            const nodes: number[] = [];
            const visitorFn: VisitorFunction<number> = (node) => nodes.push(node.value);
            const expected = [9, 18, 5, 3, 7, 20, 10];

            Tree.traversePostOrder(visitorFn, root);

            expect(nodes).toEqual(expected);
        });
    });
});
