export interface INode<T> {
    value: T;
    marked?: boolean;
    children: Array<Node<T> | undefined>;
    isLeaf(): boolean;
    addChild(node: Node<T> | undefined): Node<T>;
    getChild(index: number): Node<T> | undefined;
    numberOfRealChildren(): number;
}

export class Node<T> implements INode<T> {
    public value: T;
    public marked?: boolean;
    private _children: Array<Node<T> | undefined>;
    private maxNumberOfChildren: number | undefined;

    constructor(value: T, maxNumberOfChildren?: number) {
        this.value = value;
        this.maxNumberOfChildren = maxNumberOfChildren;
        this._children = [];
    }

    /** Returns the number of children nodes of the current node */
    public get children(): Array<Node<T> | undefined> {
        return this._children;
    }

    /** Returns true if and only if the node has no children */
    public isLeaf(): boolean {
        return this._children.length === 0 || this._children.every((child) => child === undefined);
    }

    /** Adds a new child node to the current node from left to right */
    public addChild(node?: Node<T>): Node<T> {
        if (this.maxNumberOfChildren && this._children.length >= this.maxNumberOfChildren) {
            throw new Error(`Maximum child count reached (${this.maxNumberOfChildren})`);
        }
        this._children.push(node);
        return this;
    }

    /** Returns the child node of the current node with the given index */
    public getChild(index: number): Node<T> | undefined {
        return this._children[index];
    }

    /** Sets the child node with the given index for the current node */
    public setChild(index: number, value?: Node<T>): void {
        this._children[index] = value;
    }

    /** Returns the number children nodes of the current node which are defined */
    public numberOfRealChildren(): number {
        return this._children.filter((child) => child !== undefined).length;
    }

    /** Converts the node to a human-readable string */
    public toString(): string {
        return `{ value: ${this.value}, children: [${this._children}] }`;
    }
}
