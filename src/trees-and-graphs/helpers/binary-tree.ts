import { Node } from './node';
import { Tree } from './tree';

export type VisitorFunction<T> = (node: Node<T>) => any;

export interface IBinaryTree<T> {
    isComplete(): boolean;
    isFull(): boolean;
    isPerfect(): boolean;
    traverseInOrder(node: Node<T> | undefined, visitorFn: VisitorFunction<T>): void;
    traversePreOrder(node: Node<T> | undefined, visitorFn: VisitorFunction<T>): void;
    traversePostOrder(node: Node<T> | undefined, visitorFn: VisitorFunction<T>): void;
}

export class BinaryTree<T> extends Tree<T> implements IBinaryTree<T> {
    constructor(root?: Node<T>) {
        super(root);
    }

    public set root(value: Node<T> | undefined) {
        this.checkBinary(value);
        this._root = value;
    }

    public get root(): Node<T> | undefined {
        return this._root;
    }

    public isComplete(): boolean {
        throw new Error("Method not implemented.");
    }

    public isFull(): boolean {
        let val = true;
        try {
            this.traverseInOrder(this.root, this.hasZeroOrTwoChildrenNodes);
        } catch (err) {
            val = false;
        }
        return val;
    }

    public isPerfect(): boolean {
        return this.isComplete() && this.isFull();
    }

    public traverseInOrder(node: Node<T> | undefined, visitorFn: VisitorFunction<T>): void {
        if (node) {
            this.traverseInOrder(node.getChild(0), visitorFn);
            visitorFn(node);
            this.traverseInOrder(node.getChild(1), visitorFn);
        }
    }

    public traversePreOrder(node: Node<T> | undefined, visitorFn: VisitorFunction<T>): void {
        if (node) {
            visitorFn(node);
            const childrenCount = node.children.length;
            for (let i = 0; i < childrenCount; i++) {
                this.traversePreOrder(node.getChild(i), visitorFn);
            }
        }
    }

    public traversePostOrder(node: Node<T> | undefined, visitorFn: VisitorFunction<T>): void {
        if (node) {
            const childrenCount = node.children.length;
            for (let i = 0; i < childrenCount; i++) {
                this.traversePostOrder(node.getChild(i), visitorFn);
            }
            visitorFn(node);
        }
    }

    private checkBinary(value: Node<T> | undefined): void {
        this.traversePreOrder(value, this.hasMaxTwoChildrenNodes);
    }

    private hasMaxTwoChildrenNodes(node: Node<T>): boolean {
        if (node.numberOfRealChildren() > 2) {
            throw new Error('Invalid binary tree');
        }
        return true;
    }

    private hasZeroOrTwoChildrenNodes(node: Node<T>): boolean {
        if (node.numberOfRealChildren() === 1) {
            throw new Error('Not a full binary tree');
        }
        return true;
    }
}
