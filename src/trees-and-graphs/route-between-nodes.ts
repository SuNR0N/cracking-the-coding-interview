import { Graph, Node } from './helpers';

/** Checks whether a route exists between two graph nodes */
export function routeBetweenNodes<T>(first?: Node<T>, second?: Node<T>): boolean {
    if (!first || !second) {
        return false;
    } else {
        let hasRoute = false;
        Graph.breadthFirstSearch((visited) => {
            if (visited === second) {
                hasRoute = true;
                return;
            }
        }, first);
        if (!hasRoute) {
            Graph.breadthFirstSearch((visited) => {
                if (visited === first) {
                    hasRoute = true;
                    return;
                }
            }, second);
        }
        return hasRoute;
    }
}
