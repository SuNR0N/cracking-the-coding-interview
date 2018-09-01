export interface IDeque<T> {
  addFirst(item: T): void;
  addLast(item: T): void;
  removeFirst(): T;
  removeLast(): T;
  peekFirst(): T;
  peekLast(): T;
  isEmpty(): boolean;
  size(): number;
}

export class Deque<T> implements IDeque<T> {
  private deque: T[] = [];

  /** Adds an item to the beginning of the deque */
  public addFirst(item: T): void {
    this.deque = [item].concat(this.deque);
  }

  /** Adds an item to the end of the deque */
  public addLast(item: T): void {
    this.deque.push(item);
  }

  /** Removes the first item in the deque and returns it */
  public removeFirst(): T {
    if (this.deque.length === 0) {
      throw new Error('The deque is empty');
    } else {
      const firstItem = this.deque[0];
      this.deque = this.deque.slice(1);
      return firstItem;
    }
  }

  /** Removes the last item in the deque and returns it */
  public removeLast(): T {
    if (this.deque.length === 0) {
      throw new Error('The deque is empty');
    } else {
      return this.deque.pop() as T;
    }
  }

  /** Returns the first item in the deque */
  public peekFirst(): T {
    if (this.deque.length === 0) {
      throw new Error('The deque is empty');
    } else {
      const firstItem = this.deque[0];
      return firstItem;
    }
  }

  /** Returns the last item in the deque */
  public peekLast(): T {
    if (this.deque.length === 0) {
      throw new Error('The deque is empty');
    } else {
      const lastIndex = this.deque.length - 1;
      return this.deque[lastIndex];
    }
  }

  /** Returns true if and only if the deque is empty */
  public isEmpty(): boolean {
    return this.deque.length === 0;
  }

  /** Returns the number of elements in the deque */
  public size(): number {
    return this.deque.length;
  }
}
