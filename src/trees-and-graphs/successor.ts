import { BinaryTree, Node } from './helpers';

/** Returns the in-order successor of a given node in a binary search tree */
export function successor(node?: Node<number>): Node<number> | undefined {
    if (!node) {
        return;
    }
    let next: Node<number> | undefined;
    if (node.getChild(0)) {
        BinaryTree.traverseInOrder((n) => {
            if (!next && n.value > node.value) {
                next = n;
            }
        }, node);
        if (!next) {
            next = node.parent;
        }
    } else {
        if (node.parent && node.parent.value >= node.value) {
            next = node.parent;
        } else if (node.parent && node.parent.parent && node.parent.parent.value >= node.value) {
            next = node.parent.parent;
        }
    }
    return next;
}
