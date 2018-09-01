import {
  LinkedList,
  Node,
} from './helpers';

/** Finds the kth to last element of a singly linked list */
export function returnKthToLast(input: LinkedList, k: number): Node {
  const nodes: Node[] = [];
  if (input.head) {
    let current = input.head;
    nodes.push(current);
    while (current.next) {
      current = current.next;
      nodes.push(current);
    }
  }
  return nodes[nodes.length - 1 - k];
}
