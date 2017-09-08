import { BinaryTree, Node } from './helpers';

/** Creates a minimal height binary tree from the sorted array of unique numbers */
export function minimalTree(elements: number[]): BinaryTree<number> {
    let root: Node<number> | undefined;
    let currentHeight = 0;
    let levelsToFill = 0;
    while (elements.length !== 0) {
        const lastIndex = elements.length - 1;
        const largestNode = new Node(elements[lastIndex]);
        elements = elements.slice(0, lastIndex);
        if (!root) {
            root = largestNode;
            currentHeight++;
        } else {
            if (levelsToFill > 0) {
                let current = root;
                let leftChild = current.getChild(0);
                while (leftChild) {
                    current = leftChild;
                    leftChild = current.getChild(0);
                }
                current.setChild(0, largestNode);
                levelsToFill--;
            } else {
                const newRoot = largestNode
                    .addChild()
                    .addChild(root);
                root = newRoot;
                levelsToFill = currentHeight++;
            }
        }
    }
    return new BinaryTree<number>(root);
}
