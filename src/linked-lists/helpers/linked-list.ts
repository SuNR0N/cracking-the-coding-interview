import { Node } from './node';

export class LinkedList {
  /** Creates a new linked list from the provided values */
  public static fromValues(...values: number[]): LinkedList {
    const linkedList: LinkedList = new LinkedList();
    for (const value of values) {
      linkedList.append(value);
    }
    return linkedList;
  }

  public head: Node | undefined;

  constructor(head?: Node) {
    this.head = head;
  }

  /** Returns the nth node from the head of the linked list if it exists (zero-based) */
  public getNode(index: number): Node | undefined {
    if (this.head) {
      let count = 0;
      let current = this.head;
      if (count === index) {
        return current;
      }
      while (current.next) {
        current = current.next;
        count++;
        if (count === index) {
          return current;
        }
      }
      return;
    } else {
      return this.head;
    }
  }

  /**
   * Appends a new node with the given value at the tail of the linked list.
   * Creates a new node instance if the value is a number, otherwise uses it as is.
   */
  public append(value: number | Node): Node {
    if (this.head) {
      let current: Node = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = (value instanceof Node) ? value : new Node(value);
      return current.next;
    } else {
      this.head = (value instanceof Node) ? value : new Node(value);
      return this.head;
    }
  }

  /** Removes all nodes with the given number from the linked list and returns the head */
  public remove(data: number): Node | undefined {
    if (this.head) {
      let current: Node = this.head;
      if (current.data === data) {
        this.head = current.next;
      }
      while (current.next) {
        if (current.data === data) {
          this.head = current.next;
          current = current.next;
        } else if (current.next.data === data) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }
    return this.head;
  }

  /** Converts the linked list to a human-readable string */
  public toString() {
    let result = `${LinkedList.name} [`;
    if (this.head) {
      result += ` ${this.head.data}`;
      let current: Node = this.head;
      while (current.next) {
        result += ` -> ${current.next.data}`;
        current = current.next;
      }
    }
    result += ' ]';
    return result;
  }

  /** Converts the nodes of the linked list to an array */
  public toArray(): number[] {
    const arr: number[] = [];
    if (this.head) {
      let current: Node = this.head;
      arr.push(current.data);
      while (current.next) {
        arr.push(current.next.data);
        current = current.next;
      }
    }
    return arr;
  }
}
