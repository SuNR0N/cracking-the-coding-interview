import { LinkedList } from './helpers';
import { removeDups } from './remove-dups';

describe('removeDups', () => {
  it('should not modify the linked list if it is empty', () => {
    const input = new LinkedList();
    const expected = input;
    removeDups(input);
    expect(input).toEqual(expected);
  });

  it('should not remove any elements from the list if it does not contain duplicates', () => {
    const input = LinkedList.fromValues(1, 2, 3, 4, 5);
    const expected = input;
    removeDups(input);
    expect(input).toEqual(expected);
  });

  it('should remove all duplicates of a given node', () => {
    const input = LinkedList.fromValues(1, 2, 3, 2, 4, 5, 2);
    const expected = LinkedList.fromValues(1, 2, 3, 4, 5);
    removeDups(input);
    expect(input).toEqual(expected);
  });

  it('should remove all duplicates for every node', () => {
    const input = LinkedList.fromValues(1, 2, 3, 4, 5, 5, 4, 3, 2, 1);
    const expected = LinkedList.fromValues(1, 2, 3, 4, 5);
    removeDups(input);
    expect(input).toEqual(expected);
  });
});
