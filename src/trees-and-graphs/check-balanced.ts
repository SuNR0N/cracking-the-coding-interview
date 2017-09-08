import { BinaryTree } from './helpers/binary-tree';

/** Checks whether the provided binary tree is balanced */
export function checkBalanced<T>(tree: BinaryTree<T>): boolean {
    let isBalanced = tree.root !== undefined;
    BinaryTree.traversePreOrder((node) => {
        const leftTreeHeight = BinaryTree.findHeight(node.getChild(0));
        const rightTreeHeight = BinaryTree.findHeight(node.getChild(1));
        const difference = Math.abs(leftTreeHeight - rightTreeHeight);
        if (difference > 1) {
            isBalanced = false;
            return;
        }
    }, tree.root);
    return isBalanced;
}
