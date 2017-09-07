import { Node } from './node';

export type VisitorFunction<T> = (node: Node<T>) => any;
