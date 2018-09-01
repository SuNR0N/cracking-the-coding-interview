import { INode } from './helpers/node';

/** Returns the first common ancestor of 2 nodes in a graph if it exists */
export function firstCommonAncestor<T>(first: INode<T>, second: INode<T>): INode<T> | undefined {
  let ancestorFirst: INode<T> | undefined = first;
  let ancestorSecond: INode<T> | undefined = second;
  while (ancestorFirst) {
    while (ancestorSecond) {
      if (ancestorFirst === ancestorSecond) {
        if (ancestorFirst === first && ancestorSecond === second) {
          return ancestorFirst.parent;
        } else {
          return ancestorFirst;
        }
      }
      ancestorSecond = ancestorSecond.parent;
    }
    ancestorSecond = second;
    ancestorFirst = ancestorFirst.parent;
  }
  return;
}
