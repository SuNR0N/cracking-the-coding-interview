import {
  LinkedList,
  Node,
} from './helpers';

/**
 * Partitions a singly linked list around a value X, such that
 * all nodes less than X come before all nodes greater than or equal to X
 */
export function partition(input: LinkedList, x: number): void {
  const partitionedList = new LinkedList();
  let nextToLast: Node | undefined;
  if (input.head) {
    let current = input.head;
    while (current.next) {
      if (current.data >= x) {
        partitionedList.append(current.data);
        current.data = current.next.data;
        current.next = current.next.next;
      } else {
        nextToLast = current;
        current = current.next;
      }
    }
    if (current.data >= x) {
      partitionedList.append(current.data);
      if (nextToLast) {
        nextToLast.next = partitionedList.head;
      } else {
        input = partitionedList;
      }
    } else {
      current.next = partitionedList.head;
    }
  }
}
