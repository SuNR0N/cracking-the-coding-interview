import { Graph, Node } from './helpers';

/** Checks whether a route exists between two graph nodes */
export function routeBetweenNodes<T>(first?: Node<T>, second?: Node<T>): boolean {
    if (!first || !second) {
        return false;
    } else {
        const visitedNodes: Set<Node<T>> = new Set();
        let hasRoute = false;
        Graph.breadthFirstSearch((visited) => {
            visitedNodes.add(visited);
            if (visited === second) {
                hasRoute = true;
                return;
            }
        }, first);
        for (const visited of visitedNodes.values()) {
            visited.marked = false;
        }
        visitedNodes.clear();
        if (!hasRoute) {
            Graph.breadthFirstSearch((visited) => {
                visitedNodes.add(visited);
                if (visited === first) {
                    hasRoute = true;
                    return;
                }
            }, second);
            for (const visited of visitedNodes.values()) {
                visited.marked = false;
            }
        }
        return hasRoute;
    }
}
