import { Node } from './node';
import { VisitorFunction } from './visitor-function';

export interface IGraph<T> {
    nodes: Array<Node<T>>;
    isConnected(): boolean;
    isAcyclic(): boolean;
}

export class Graph<T> implements IGraph<T> {
    /**
     * Traverses the given node and its children in a DFS fashion
     * calling the visitor function on each and every visited node
     */
    public static depthFirstSearch<T>(visitorFn: VisitorFunction<T>, node?: Node<T>): void {
        if (!node) {
            return;
        }
        visitorFn(node);
        node.marked = true;
        const childrenCount = node.children.length;
        for (let i = 0; i < childrenCount; i++) {
            const child = node.getChild(i);
            if (child && child.marked !== true) {
                this.depthFirstSearch(visitorFn, child);
            }
        }
    }

    /**
     * Traverses the given node and its children in a BFS fashion
     * calling the visitor function on each and every visited node
     */
    public static breadthFirstSearch<T>(visitorFn: VisitorFunction<T>, node?: Node<T>): void {
        if (!node) {
            return;
        }
        const queue: Array<Node<T>> = [];
        node.marked = true;
        queue.push(node);

        while (queue.length !== 0) {
            const n = queue.splice(0, 1)[0];
            visitorFn(n);
            for (const child of n.children) {
                if (child && child.marked !== true) {
                    child.marked = true;
                    queue.push(child);
                }
            }
        }
    }

    /** Returns the number of unique nodes in the provided list */
    public static size<T>(...nodes: Array<Node<T>>): number {
        const visitedNodes: Set<Node<T>> = new Set();
        for (const node of nodes) {
            Graph.depthFirstSearch((visited) => {
                visitedNodes.add(visited);
            }, node);
        }
        const numberOfNodes = visitedNodes.size;
        for (const visited of visitedNodes.values()) {
            visited.marked = false;
        }
        return numberOfNodes;
    }

    public nodes: Array<Node<T>>;

    constructor(...nodes: Array<Node<T>>) {
        this.nodes = nodes;
    }

    /** Checks whether the graph is connected */
    public isConnected(): boolean {
        const numberOfNodes = Graph.size(...this.nodes);
        for (const node of this.nodes) {
            const size = Graph.size(node);
            if (size === numberOfNodes) {
                return true;
            }
        }
        return false;
    }

    /** Checks whether the graph is acyclic */
    public isAcyclic(): boolean {
        const visitedNodes: Set<Node<T>> = new Set();
        let ret = true;
        for (const node of this.nodes) {
            try {
                Graph.depthFirstSearch((visited) => {
                    visitedNodes.add(visited);
                    if (visited.children.some((child) => child !== undefined && visitedNodes.has(child))) {
                        throw new Error('The graph is cyclic');
                    }
                }, node);
            } catch (err) {
                ret = false;
                break;
            }
        }
        return ret;
    }
}
