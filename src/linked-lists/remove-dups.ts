import { LinkedList } from './helpers/linked-list';

/** Removes duplicates from an unsorted linked list */
export function removeDups(input: LinkedList): void {
  const uniqueValues = [];
  if (input.head) {
    let current = input.head;
    uniqueValues.push(current.data);
    while (current.next) {
      if (uniqueValues.includes(current.next.data)) {
        current.next = current.next.next;
      } else {
        uniqueValues.push(current.next.data);
        current = current.next;
      }
    }
  }
}
