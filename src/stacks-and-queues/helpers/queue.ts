export interface IQueue<T> {
  add(item: T): void;
  remove(): T;
  peek(): T;
  isEmpty(): boolean;
  size(): number;
}

export class Queue<T> implements IQueue<T> {
  private queue: T[] = [];

  /** Adds an item to the end of the queue */
  public add(item: T): void {
    this.queue.push(item);
  }

  /** Removes the first item in the queue and returns it */
  public remove(): T {
    if (this.queue.length === 0) {
      throw new Error('The queue is empty');
    } else {
      const firstItem = this.queue[0];
      this.queue = this.queue.slice(1);
      return firstItem;
    }
  }

  /** Returns the first item in the queue */
  public peek(): T {
    if (this.queue.length === 0) {
      throw new Error('The queue is empty');
    } else {
      const firstItem = this.queue[0];
      return firstItem;
    }
  }

  /** Returns true if and only if the queue is empty */
  public isEmpty(): boolean {
    return this.queue.length === 0;
  }

  /** Returns the number of elements in the queue */
  public size(): number {
    return this.queue.length;
  }

  /** Converts the queue to a human-readable string */
  public toString(): string {
    if (this.isEmpty()) {
      return '[ ]';
    } else {
      return `[ ${this.queue.toString().replace(/,/g, ' <- ')} ]`;
    }
  }
}
