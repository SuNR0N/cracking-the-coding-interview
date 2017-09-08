import { BinaryTree } from './helpers';

/** Checks whether a binary tree is a binary search tree */
export function validateBST(tree: BinaryTree<number>): boolean {
    const nodeValueInOrder: number[] = [];
    BinaryTree.traverseInOrder((node) => {
        nodeValueInOrder.push(node.value);
    }, tree.root);
    let isBST = tree.root !== undefined;
    const nodeCount = nodeValueInOrder.length;
    for (let i = 1; i < nodeCount; i++) {
        if (nodeValueInOrder[i] < nodeValueInOrder[i - 1]) {
            isBST = false;
            break;
        }
    }
    return isBST;
}
