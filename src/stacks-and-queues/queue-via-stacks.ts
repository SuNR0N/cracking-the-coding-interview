import { IQueue, Stack } from './helpers';

export class QueueViaStacks<T> implements IQueue<T> {
    private stacks: Array<Stack<T>>;
    private headIndex: number;
    private tailIndex: number;
    private head: T | undefined;

    constructor() {
        this.stacks = [ new Stack(), new Stack() ];
        Object.seal(this.stacks);
        this.headIndex = 1;
        this.tailIndex = 0;
    }

    public add(item: T): void {
        if (this.isEmpty()) {
            this.head = item;
        }
        this.stacks[this.tailIndex].push(item);
        const poppedTail = this.stacks[this.tailIndex].pop();
        this.stacks[this.headIndex].push(poppedTail);
    }

    public remove(): T {
        if (this.isEmpty()) {
            throw new Error('The queue is empty');
        } else {
            while (this.stackSize(this.headIndex) > 1) {
                this.stacks[this.tailIndex].push(this.stacks[this.headIndex].pop());
            }
            const previousHead = this.stacks[this.headIndex].pop();
            this.head = undefined;
            while (this.stackSize(this.tailIndex) > 0) {
                if (this.head === undefined) {
                    this.head = this.stacks[this.tailIndex].peek();
                }
                this.stacks[this.headIndex].push(this.stacks[this.tailIndex].pop());
            }
            return previousHead;
        }
    }

    public peek(): T {
        if (this.stackSize(this.headIndex) === 0) {
            throw new Error('The queue is empty');
        } else {
            return this.head as T;
        }
    }

    public isEmpty(): boolean {
        return this.stacks.every((stack) => stack.isEmpty());
    }

    public size(): number {
        return this.stacks.reduce((previous, current) => {
            previous += current.size();
            return previous;
        }, 0);
    }

    private stackSize(index: number): number {
        return this.stacks[index].size();
    }

}
