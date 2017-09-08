import { Node } from './node';
import { VisitorFunction } from './visitor-function';

export interface ITree<T> {
    root: Node<T> | undefined;
    findHeight(node?: Node<T>): number;
    getLevel(targetNode: Node<T>, level: number, rootNode?: Node<T>): number;
    traversePreOrder(visitorFn: VisitorFunction<T>, node?: Node<T>): void;
    traversePostOrder(visitorFn: VisitorFunction<T>, node?: Node<T>): void;
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

    /** Returns the height of the given node (one-based) */
    public findHeight(node?: Node<T>): number {
        if (!node) {
            return 0;
        } else {
            const heights: number[] = node.children
                .map((n) => this.findHeight(n));
            const maxHeight = Math.max(...heights);
            return (Number.isFinite(maxHeight) ? maxHeight : 0) + 1;
        }
    }

    /** Returns the distance in terms of levels of the target node from the root node (zero-based) */
    public getLevel(targetNode: Node<T>, level: number, rootNode?: Node<T>): number {
        if (!rootNode) {
            return -1;
        }
        if (rootNode === targetNode) {
            return level;
        }
        let result: number = -1;
        const childrenCount = rootNode.children.length;
        for (let i = 0; i < childrenCount; i++) {
            result = this.getLevel(targetNode, level + 1, rootNode.getChild(i));
            if (result !== -1) {
                break;
            }
        }
        return result;
    }

    /**
     * Traverses the given node and its children in a pre-order fashion
     * calling the visitor function on each and every visited node
     */
    public traversePreOrder(visitorFn: VisitorFunction<T>, node?: Node<T>): void {
        if (node) {
            visitorFn(node);
            const childrenCount = node.children.length;
            for (let i = 0; i < childrenCount; i++) {
                this.traversePreOrder(visitorFn, node.getChild(i));
            }
        }
    }

    /**
     * Traverses the given node and its children in a post-order fashion
     * calling the visitor function on each and every visited node
     */
    public traversePostOrder(visitorFn: VisitorFunction<T>, node?: Node<T>): void {
        if (node) {
            const childrenCount = node.children.length;
            for (let i = 0; i < childrenCount; i++) {
                this.traversePostOrder(visitorFn, node.getChild(i));
            }
            visitorFn(node);
        }
    }
}
