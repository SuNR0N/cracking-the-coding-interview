import { LinkedList } from '../stacks-and-queues/helpers/linked-list';
import { BinaryTree, Graph } from './helpers';

/** Returns a linked list of node values for each level of the provided binary tree */
export function listOfDepths<T>(tree: BinaryTree<T>): Array<LinkedList<T>> {
    const map: Map<number, LinkedList<T>> = new Map();
    Graph.breadthFirstSearch((node) => {
        const levelOfNode = BinaryTree.getLevel(node, 1, tree.root);
        let list: LinkedList<T> | undefined;
        list = map.get(levelOfNode);
        if (!list) {
            map.set(levelOfNode, new LinkedList(node.value));
        } else {
            list.add(node.value);
        }
    }, tree.root);
    return Array.from(map.values());
}
