export interface IStack<T> {
    pop(): T;
    push(item: T): void;
    peek(): T;
    isEmpty(): boolean;
    size(): number;
}

export class Stack<T> implements IStack<T> {
    protected stack: T[] = [];

    /** Removes the top item from the stack and returns it */
    public pop(): T {
        if (this.stack.length === 0) {
            throw new Error('The stack is empty');
        } else {
            return this.stack.pop() as T;
        }
    }

    /** Adds an item to the top of the stack */
    public push(item: T): void {
        this.stack.push(item);
    }

    /** Returns the top item of the stack */
    public peek(): T {
        if (this.stack.length === 0) {
            throw new Error('The stack is empty');
        } else {
            const lastIndex = this.stack.length - 1;
            return this.stack[lastIndex];
        }
    }

    /** Returns true if and only if the stack is empty */
    public isEmpty(): boolean {
        return this.stack.length === 0;
    }

    /** Returns the number of elements in the stack */
    public size(): number {
        return this.stack.length;
    }

    /** Converts the stack to a human-readable string */
    public toString(): string {
        if (this.isEmpty()) {
            return '[ ]';
        } else {
            return `[ ${this.stack.toString().replace(/,/g, ' -> ')} ]`;
        }
    }
}
