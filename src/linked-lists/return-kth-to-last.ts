import { LinkedList, Node } from './helpers';

export function returnKthToLast(input: LinkedList, k: number): Node {
    const nodes: Node[] = [];
    let current = input.head;
    nodes.push(current);
    while (current.next) {
        current = current.next;
        nodes.push(current);
    }
    return nodes[nodes.length - 1 - k];
}
