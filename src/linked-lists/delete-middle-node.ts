import { Node } from './helpers/node';

/** Deletes a middle node from a singly linked list */
export function deleteMiddleNode(node: Node | undefined): void {
  if (node && node.next) {
    node.data = node.next.data;
    node.next = node.next.next;
  }
}
