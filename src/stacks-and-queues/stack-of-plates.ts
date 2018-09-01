import {
  IStack,
  Stack,
} from './helpers/stack';

export interface IStackOfPlates<T> extends IStack<T> {
  popAt(index: number): T;
}

export class StackOfPlates<T> implements IStackOfPlates<T> {
  private capacity: number;
  private currentStack!: Stack<T>;
  private stacks: Array<Stack<T>> = [];

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  /** Performs a pop operation on a given sub stack (1 based) */
  public popAt(index: number): T {
    if (this.stacks.length === 0 || index < 1 || index > this.stacks.length) {
      throw new Error('Invalid stack index');
    } else {
      const indexOfStack = index - 1;
      const stack = this.stacks[indexOfStack];
      if (stack.size() === 1) {
        const lastItemOfPoppedStack = stack.pop();
        this.stacks.splice(indexOfStack, 1);
        const lastStackIndex = this.stacks.length - 1;
        this.currentStack = this.stacks[lastStackIndex];
        return lastItemOfPoppedStack;
      } else {
        return stack.pop();
      }
    }
  }

  /** Removes the top item from the last stack and returns it */
  public pop(): T {
    if (this.stacks.length === 0) {
      throw new Error('The stacks are empty');
    } else {
      if (this.currentStack.size() === 1) {
        const lastItemOfPoppedStack = this.currentStack.pop();
        this.stacks.pop();
        const lastStackIndex = this.stacks.length - 1;
        this.currentStack = this.stacks[lastStackIndex];
        return lastItemOfPoppedStack;
      } else {
        return this.currentStack.pop();
      }
    }
  }

  /**
   * Adds an item to the current stack if it does not exceed the capacity,
   * otherwise creates a new stack and adds it to it
   */
  public push(item: T): void {
    if (this.currentStack === undefined || this.currentStack.size() === this.capacity) {
      this.currentStack = new Stack();
      this.stacks.push(this.currentStack);
    }
    this.currentStack.push(item);
  }

  /** Returns the top item from the last stack */
  public peek(): T {
    if (this.stacks.length === 0) {
      throw new Error('The stacks are empty');
    } else {
      return this.currentStack.peek();
    }
  }

  /** Returns true if and only if the stacks are empty */
  public isEmpty(): boolean {
    return this.stacks.length === 0;
  }

  /** Returns the number of elements in the stacks */
  public size(): number {
    return this.stacks.reduce((previous, current) => {
      previous += current.size();
      return previous;
    }, 0);
  }
}
