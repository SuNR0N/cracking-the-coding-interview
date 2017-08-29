import { LinkedList, Node } from './helpers';

/** Returns the node at the beginning of the loop if the provided linked list is circular */
export function loopDetection(input: LinkedList): Node | undefined {
    if (input.head) {
        const nodes: Set<Node> = new Set<Node>();
        let current = input.head;
        nodes.add(current);
        while (current.next) {
            if (nodes.has(current.next)) {
                return current.next;
            } else {
                current = current.next;
                nodes.add(current);
            }
        }
    }
}
