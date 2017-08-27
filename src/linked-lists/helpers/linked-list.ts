import { Node } from './node';

export class LinkedList {
    public static fromValues(...values: number[]): LinkedList {
        if (values.length === 0) {
            throw new Error('List of arguments should contain at least one number');
        }
        const head = new Node(values[0]);
        const linkedList: LinkedList = new LinkedList(head);
        for (let i = 1; i < values.length; i++) {
            linkedList.append(values[i]);
        }
        return linkedList;
    }

    public head: Node;

    constructor(head: Node) {
        this.head = head;
    }

    public append(data: number): Node {
        let current: Node = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(data);
        return current.next;
    }

    public remove(data: number): Node {
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
        return this.head;
    }

    public toString() {
        let current: Node = this.head;
        let result = `${LinkedList.name} [ ${this.head.data}`;
        while (current.next) {
            result += ` -> ${current.next.data}`;
            current = current.next;
        }
        result += ' ]';
        return result;
    }

    public toArray(): number[] {
        let current: Node = this.head;
        const arr: number[] = [];
        arr.push(current.data);
        while (current.next) {
            arr.push(current.next.data);
            current = current.next;
        }
        return arr;
    }
}
