import { Stack } from './helpers/stack';

export class SortStack<T extends number> extends Stack<T> {
  private tempStack: Stack<T> = new Stack();

  /** Adds an item to the top of the stack maintaining a descending order */
  public push(item: T): void {
    if (this.isEmpty()) {
      this.stack.push(item);
    } else {
      if (this.peek() < item) {
        while (!this.isEmpty()) {
          this.tempStack.push(this.pop());
        }
        this.stack.push(item);
        while (!this.tempStack.isEmpty()) {
          this.stack.push(this.tempStack.pop());
        }
      } else {
        this.stack.push(item);
      }
    }
  }
}
