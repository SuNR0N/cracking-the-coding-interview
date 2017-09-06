export interface INode<T> {
    value: T;
    children: Array<Node<T> | undefined>;
    isLeaf(): boolean;
    addChild(node: Node<T> | undefined): Node<T>;
    getChild(index: number): Node<T> | undefined;
    numberOfRealChildren(): number;
}

export class Node<T> implements INode<T> {
    public value: T;
    private _children: Array<Node<T> | undefined>;
    private maxNumberOfChildren: number | undefined;

    constructor(value: T, maxNumberOfChildren?: number) {
        this.value = value;
        this.maxNumberOfChildren = maxNumberOfChildren;
        this._children = [];
    }

    public get children(): Array<Node<T> | undefined> {
        return this._children;
    }

    public isLeaf(): boolean {
        return this._children.length === 0 || this._children.every((child) => child === undefined);
    }

    public addChild(node?: Node<T>): Node<T> {
        if (this.maxNumberOfChildren && this._children.length >= this.maxNumberOfChildren) {
            throw new Error(`Maximum child count reached (${this.maxNumberOfChildren})`);
        }
        this._children.push(node);
        return this;
    }

    public getChild(index: number): Node<T> | undefined {
        return this._children[index];
    }

    public numberOfRealChildren(): number {
        return this._children.filter((child) => child !== undefined).length;
    }

    public toString(): string {
        return `{ value: ${this.value}, children: [${this._children}] }`;
    }
}
