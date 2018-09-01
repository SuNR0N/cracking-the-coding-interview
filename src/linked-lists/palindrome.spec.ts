import { LinkedList } from './helpers';
import { palindrome } from './palindrome';

describe('palindrome', () => {
  it('should return true for an empty linked list', () => {
    const input = new LinkedList();
    const expected = true;

    expect(palindrome(input)).toBe(expected);
  });

  it('should return true for a linked list containing a single node', () => {
    const input = LinkedList.fromValues(1);
    const expected = true;

    expect(palindrome(input)).toBe(expected);
  });

  it('should return true for a linked list with even number of nodes in it which is a palindrome', () => {
    const input = LinkedList.fromValues(1, 2, 2, 1);
    const expected = true;

    expect(palindrome(input)).toBe(expected);
  });

  it('should return true for a linked list with odd number of nodes in it which is a palindrome', () => {
    const input = LinkedList.fromValues(1, 2, 3, 2, 1);
    const expected = true;

    expect(palindrome(input)).toBe(expected);
  });

  it('should return false for a linked list which is not a palindrome', () => {
    const input = LinkedList.fromValues(1, 2, 3, 2, 4);
    const expected = false;

    expect(palindrome(input)).toBe(expected);
  });
});
