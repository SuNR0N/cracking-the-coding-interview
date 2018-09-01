import {
  LinkedList,
  Node,
} from './helpers';
import { loopDetection } from './loop-detection';

describe('loopDetection', () => {
  it('should return undefined if the provided list is empty', () => {
    const input = new LinkedList();

    expect(loopDetection(input)).toBeUndefined();
  });

  it('should return undefined if the provided list does not contain a loop', () => {
    const input = LinkedList.fromValues(1, 2, 3);

    expect(loopDetection(input)).toBeUndefined();
  });

  it('should return the node at the beginning of the loop if the provided list is circular', () => {
    const input = LinkedList.fromValues(1, 2);
    const expected = Node.fromValues(3, 4, 5);
    const tailOfExpected = expected.getNode(2) as Node;
    tailOfExpected.next = expected;
    input.append(expected);

    expect(loopDetection(input)).toBe(expected);
  });
});
