import { LinkedList } from './helpers';
import {
  sumListsForward,
  sumListsReverse,
} from './sum-lists';

describe('sumListsForward', () => {
  it('should return the first linked list if the second is empty', () => {
    const first = LinkedList.fromValues(6, 1, 7);
    const second = new LinkedList();
    const expected = first;

    expect(sumListsForward(first, second)).toEqual(expected);
  });

  it('should return the second linked list if the first is empty', () => {
    const first = new LinkedList();
    const second = LinkedList.fromValues(2, 9, 5);
    const expected = second;

    expect(sumListsForward(first, second)).toEqual(expected);
  });

  it('should return the sum of the two linked lists in forward order as a linked list if they are not empty', () => {
    const first = LinkedList.fromValues(6, 1, 7);
    const second = LinkedList.fromValues(2, 9, 5);
    const expected = LinkedList.fromValues(9, 1, 2);

    expect(sumListsForward(first, second)).toEqual(expected);
  });
});

describe('sumListsReverse', () => {
  it('should return the first linked list if the second is empty', () => {
    const first = LinkedList.fromValues(7, 1, 6);
    const second = new LinkedList();
    const expected = first;

    expect(sumListsReverse(first, second)).toEqual(expected);
  });

  it('should return the second linked list if the first is empty', () => {
    const first = new LinkedList();
    const second = LinkedList.fromValues(7, 1, 6);
    const expected = second;

    expect(sumListsReverse(first, second)).toEqual(expected);
  });

  it('should return the sum of the two linked lists in reverse order as a linked list if they are not empty', () => {
    const first = LinkedList.fromValues(7, 1, 6);
    const second = LinkedList.fromValues(5, 9, 2);
    const expected = LinkedList.fromValues(2, 1, 9);

    expect(sumListsReverse(first, second)).toEqual(expected);
  });
});
