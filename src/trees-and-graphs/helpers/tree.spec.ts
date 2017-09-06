import { Node, Tree } from './';

describe('Tree', () => {
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
});
