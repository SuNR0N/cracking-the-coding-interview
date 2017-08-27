export class Node {
    public static fromValues(...values: number[]): Node {
        if (values.length === 0) {
            throw new Error('List of arguments should contain at least one number');
        }
        const node = new Node(values[0]);
        let current = node;
        for (let i = 1; i < values.length; i++) {
            current.next = new Node(values[i]);
            current = current.next;
        }
        return node;
    }

    public next: Node;
    public data: number;

    constructor(data: number) {
        this.data = data;
    }

    public toString() {
        return `${Node.name} [ data: ${this.data}, next: ${this.next} ]`;
    }
}
