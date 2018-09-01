import {
  LinkedList,
  Node,
} from './helpers';
import { intersection } from './intersection';

describe('intersection', () => {
  it('should return undefined if both linked lists are empty', () => {
    const first = new LinkedList();
    const second = new LinkedList();

    expect(intersection(first, second)).toBeUndefined();
  });

  it('should return undefined if the first linked list is empty', () => {
    const first = new LinkedList();
    const second = LinkedList.fromValues(1, 2, 3);

    expect(intersection(first, second)).toBeUndefined();
  });

  it('should return undefined if the second linked list is empty', () => {
    const first = LinkedList.fromValues(1, 2, 3);
    const second = new LinkedList();

    expect(intersection(first, second)).toBeUndefined();
  });

  it('should return undefined if the linked lists do not have an intersection', () => {
    const first = LinkedList.fromValues(1, 2, 3);
    const second = LinkedList.fromValues(4, 5, 6);

    expect(intersection(first, second)).toBeUndefined();
  });

  it('should return undefined if the linked lists have an intersection by value', () => {
    const first = LinkedList.fromValues(1, 2, 3);
    const second = LinkedList.fromValues(2, 3, 4);

    expect(intersection(first, second)).toBeUndefined();
  });

  it('should return the intersecting head node if the linked lists have only that element', () => {
    const expected = new Node(1);
    const first = new LinkedList(expected);
    const second = new LinkedList(expected);

    expect(intersection(first, second)).toBe(expected);
  });

  it('should return the intersecting head node if the linked lists have the same head', () => {
    const expected = Node.fromValues(1, 2, 3);
    const first = new LinkedList(expected);
    const second = new LinkedList(expected);

    expect(intersection(first, second)).toBe(expected);
  });

  it('should return the intersecting node if the second list starts with the given node', () => {
    const expected = Node.fromValues(4, 5, 6);
    const first = LinkedList.fromValues(1, 2, 3);
    first.append(expected); // 1 -> 2 -> 3 -> 4 -> 5 -> 6
    const second = new LinkedList(expected); // 4 -> 5 -> 6

    expect(intersection(first, second)).toBe(expected);
  });

  it('should return the intersecting node if the first list starts with the given node', () => {
    const expected = Node.fromValues(4, 5, 6);
    const first = new LinkedList(expected); // 4 -> 5 -> 6
    const second = LinkedList.fromValues(1, 2, 3);
    second.append(expected); // 1 -> 2 -> 3 -> 4 -> 5 -> 6

    expect(intersection(first, second)).toBe(expected);
  });

  it('should return the intersecting node if both lists end with the given node', () => {
    const expected = Node.fromValues(4, 5, 6);
    const first = LinkedList.fromValues(7, 8, 9);
    first.append(expected); // 7 -> 8 -> 9 -> 4 -> 5 -> 6
    const second = LinkedList.fromValues(1, 2, 3);
    second.append(expected); // 1 -> 2 -> 3 -> 4 -> 5 -> 6

    expect(intersection(first, second)).toBe(expected);
  });

  it('should return the intersecting node if the last node of the first list is the head of the second', () => {
    const expected = new Node(7);
    const first = LinkedList.fromValues(1, 2, 3);
    first.append(expected); // 1 -> 2 -> 3 -> 7
    const second = new LinkedList(expected); // 7

    expect(intersection(first, second)).toBe(expected);
  });

  it('should return the intersecting node if the last node of the second list is the head of the first', () => {
    const expected = new Node(7);
    const first = new LinkedList(expected); // 7
    const second = LinkedList.fromValues(1, 2, 3);
    second.append(expected); // 1 -> 2 -> 3 -> 7

    expect(intersection(first, second)).toBe(expected);
  });
});
