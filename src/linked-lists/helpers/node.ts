export class Node {
    public next: Node;
    public data: number;

    constructor(data: number) {
        this.data = data;
    }

    public toString() {
        return `${Node.name} [ data: ${this.data}, next: ${this.next} ]`;
    }
}
