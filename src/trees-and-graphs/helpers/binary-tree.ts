import { Node } from './node';
import { Tree, VisitorFunction } from './tree';

export interface IBinaryTree<T> {
    isComplete(): boolean;
    isFull(): boolean;
    isPerfect(): boolean;
    traverseInOrder(visitorFn: VisitorFunction<T>, node?: Node<T>): void;
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

    /** Checks whether every level of the tree is fully filled */
    public isComplete(): boolean {
        const heightOfTree = this.findHeight(this.root);
        let val = true;
        try {
            this.traverseInOrder((node) => {
                const level = this.getLevel(node, 0, this.root);
                if ((level < (heightOfTree - 1) && node.numberOfRealChildren() !== 2) ||
                    (level === (heightOfTree - 1) && !node.getChild(0) && node.getChild(1))) {
                        throw new Error('Not a complete binary tree');
                    }
            }, this.root);
        } catch (err) {
            val = false;
        }
        return val;
    }

    /** Checks whether every node of the tree has either zero or 2 children */
    public isFull(): boolean {
        let val = true;
        try {
            this.traverseInOrder(this.hasZeroOrTwoChildrenNodes, this.root);
        } catch (err) {
            val = false;
        }
        return val;
    }

    /** Checks whether the tree is perfect (both full and complete) */
    public isPerfect(): boolean {
        return this.isComplete() && this.isFull();
    }

    /**
     * Traverses the given node and its children in an in-order fashion
     * calling the visitor function on each and every visited node
     */
    public traverseInOrder(visitorFn: VisitorFunction<T>, node?: Node<T>): void {
        if (node) {
            this.traverseInOrder(visitorFn, node.getChild(0));
            visitorFn(node);
            this.traverseInOrder(visitorFn, node.getChild(1));
        }
    }

    private checkBinary(value: Node<T> | undefined): void {
        this.traversePreOrder(this.hasMaxTwoChildrenNodes, value);
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
