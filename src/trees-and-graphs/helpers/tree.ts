import { Node } from './node';

export interface ITree<T> {
    root: Node<T> | undefined;
}

export class Tree<T> implements ITree<T> {
    protected _root: Node<T> | undefined;

    constructor(root?: Node<T>) {
        if (root) {
            this.root = root;
        }
    }

    public get root(): Node<T> | undefined {
        return this._root;
    }

    public set root(value: Node<T> | undefined) {
        this._root = value;
    }
}
