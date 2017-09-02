export interface IThreeOne<T> {
    pop(stackNumber: number): T;
    push(stackNumber: number, item: T): void;
    peek(stackNumber: number): T;
    isEmpty(stackNumber: number): boolean;
    size(stackNumber: number): number;
}

/** Implements three stacks with a single array */
export class ThreeInOne<T> implements IThreeOne<T> {
    private numberOfStacks = 3;
    private stackSize: number;
    private stack: T[];

    constructor(stackSize: number) {
        this.stackSize = stackSize;
        this.stack = new Array(stackSize * this.numberOfStacks);
    }

    public pop(stackNumber: number): T {
        return this.getTopItem(stackNumber, true);
    }

    public push(stackNumber: number, item: T): void {
        this.validateIndex(stackNumber);
        const afterLastIndexOfStack = stackNumber * this.numberOfStacks;
        const firstIndexOfStack = afterLastIndexOfStack - this.stackSize;
        for (let i = firstIndexOfStack; i < afterLastIndexOfStack; i++) {
            if (this.stack[i] === undefined) {
                this.stack[i] = item;
                return;
            }
        }
        throw new Error('The stack is full');
    }

    public peek(stackNumber: number): T {
        return this.getTopItem(stackNumber);
    }

    public isEmpty(stackNumber: number): boolean {
        return this.getStack(stackNumber)
            .every((item: T) => item === undefined);
    }

    public size(stackNumber: number): number {
        return this.getStack(stackNumber)
            .filter((item: T) => item !== undefined).length;
    }

    public toString(): string {
        let ret: string = '';
        for (let i = 1; i <= this.numberOfStacks; i++) {
            ret += `Stack #${i}: ${this.getStack(i)}\n`;
        }
        return ret;
    }

    private validateIndex(stackNumber: number): void {
        if (stackNumber < 1 || stackNumber > this.numberOfStacks) {
            throw new Error('Invalid stack index');
        }
    }

    private getStack(stackNumber: number): T[] {
        this.validateIndex(stackNumber);
        const afterLastIndexOfStack = stackNumber * this.numberOfStacks;
        const firstIndexOfStack = afterLastIndexOfStack - this.stackSize;
        return this.stack.slice(firstIndexOfStack, afterLastIndexOfStack);
    }

    private getTopItem(stackNumber: number, withRemove: boolean = false): T {
        this.validateIndex(stackNumber);
        const lastIndexOfStack = stackNumber * this.numberOfStacks - 1;
        const firstIndexOfStack = lastIndexOfStack - this.stackSize;
        let topItemOfStack: T | undefined;
        for (let i = lastIndexOfStack; i > firstIndexOfStack; i--) {
            if (this.stack[i] !== undefined) {
                topItemOfStack = this.stack[i];
                if (withRemove) {
                    delete this.stack[i];
                }
                break;
            }
        }
        if (topItemOfStack) {
            return topItemOfStack;
        } else {
            throw new Error('The stack is empty');
        }
    }
}
