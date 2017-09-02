import { IStack, Stack } from './helpers/stack';

export interface IStackMin<T extends number> extends IStack<T> {
    min(): number | undefined;
}

export class StackMin<T extends number> extends Stack<T> implements IStackMin<T> {
    private minimum: Map<number, number> = new Map();

    /** Removes the top item from the stack and returns it */
    public pop(): T {
        if (this.stack.length === 0) {
            throw new Error('The stack is empty');
        } else {
            this.minimum.delete(this.size() - 1);
            return this.stack.pop() as T;
        }
    }

    /** Adds an item to the top of the stack */
    public push(item: T): void {
        this.minimum.set(
            this.size(),
            this.size() === 0 ? item : Math.min(this.min() as number, item),
        );
        this.stack.push(item);
    }

    /** Returns the minimum number of the stack */
    public min(): number | undefined {
        return this.minimum.get(this.size() - 1);
    }
}
