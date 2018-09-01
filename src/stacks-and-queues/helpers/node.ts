export interface INode<T> {
  value: T;
  next: INode<T> | undefined;
}

export class Node<T> implements INode<T> {
  public value: T;
  public next: INode<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}
