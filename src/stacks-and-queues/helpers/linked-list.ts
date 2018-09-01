import { Node } from './node';

export interface ILinkedList<T> {
  add(item: T): void;
  remove(item: T): T;
  get(index: number): T;
  size(): number;
  toArray(): T[];
}

export class LinkedList<T> implements ILinkedList<T> {
  public head: Node<T> | undefined;

  constructor(headValue?: T) {
    if (headValue !== undefined) {
      this.head = new Node<T>(headValue);
    }
  }

  /** Appends the specified element to the end of this list */
  public add(item: T): void {
    if (this.head) {
      let current: Node<T> = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node<T>(item);
    } else {
      this.head = new Node<T>(item);
    }
  }

  /** Removes and returns the first occurrence of the specified element from this list, if it is present */
  public remove(item: T): T {
    if (!this.head) {
      throw new Error('The list is empty');
    } else {
      let current: Node<T> = this.head;
      let found: T | undefined;
      if (current.value === item) {
        this.head = current.next;
        found = current.value;
      }
      while (current.next) {
        if (current.value === item) {
          this.head = current.next;
          found = current.value;
          current = current.next;
          break;
        } else if (current.next.value === item) {
          found = current.next.value;
          current.next = current.next.next;
          break;
        } else {
          current = current.next;
        }
      }
      if (!found) {
        throw new Error('Element not found');
      } else {
        return found;
      }
    }
  }

  /** Returns the element at the specified position in this list */
  public get(index: number): T {
    if (!this.head) {
      throw new Error(`Element does not exist at index ${index}`);
    } else {
      let current: Node<T> = this.head;
      let currentIndex = 0;
      let found: T | undefined;
      if (currentIndex === index) {
        found = current.value;
      }
      while (current.next) {
        current = current.next;
        if (++currentIndex === index) {
          found = current.value;
        }
      }
      if (!found) {
        throw new Error(`Element does not exist at index ${index}`);
      } else {
        return found;
      }
    }
  }

  /** Returns the number of elements in this list */
  public size(): number {
    return this.toArray().length;
  }

  /** Returns an array containing all of the elements in this list in proper sequence (from first to last element) */
  public toArray(): T[] {
    const arr: T[] = [];
    if (this.head) {
      let current: Node<T> = this.head;
      arr.push(current.value);
      while (current.next) {
        arr.push(current.next.value);
        current = current.next;
      }
    }
    return arr;
  }
}
