import {
  LinkedList,
  Node,
} from './helpers';

/** Returns the intersecting node of the provided linked lists by reference if it exists */
export function intersection(first: LinkedList, second: LinkedList): Node | undefined {
  if (!first.head || !second.head) {
    return;
  } else {
    let currentFirst = first.head;
    let currentSecond = second.head;
    if (currentFirst === currentSecond) {
      return currentFirst;
    } else if (currentFirst.next && !currentSecond.next) {
      while (currentFirst.next) {
        currentFirst = currentFirst.next;
        if (currentFirst === currentSecond) {
          return currentFirst;
        }
      }
    } else if (!currentFirst.next && currentSecond.next) {
      while (currentSecond.next) {
        currentSecond = currentSecond.next;
        if (currentFirst === currentSecond) {
          return currentFirst;
        }
      }
    } else {
      while (currentFirst.next) {
        while (currentSecond.next) {
          if (currentFirst === currentSecond) {
            return currentFirst;
          }
          currentSecond = currentSecond.next;
        }
        currentSecond = second.head;
        currentFirst = currentFirst.next;
      }
    }

    return;
  }
}
