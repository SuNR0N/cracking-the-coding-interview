import { Node } from './node';

describe('Node', () => {
  describe('fromValues', () => {
    it('should throw an error if it is called without any arguments', () => {
      expect(() => {
        Node.fromValues();
      }).toThrow('List of arguments should contain at least one number');
    });

    it('should create a linked list with the provided values and return its head', () => {
      const node = Node.fromValues(1, 2, 3);
      const expectedHead = new Node(1);
      const expectedMiddle = new Node(2);
      const expectedTail = new Node(3);
      expectedHead.next = expectedMiddle;
      expectedMiddle.next = expectedTail;

      expect(node).toEqual(expectedHead);
      expect(node.next).toEqual(expectedMiddle);
      expect(node.next && node.next.next).toEqual(expectedTail);
    });
  });

  describe('constructor', () => {
    it('should create a node with the value of the provided argument', () => {
      const node = new Node(3);
      expect(node.data).toBe(3);
    });

    it('should not set the next node when it is being created', () => {
      const node = new Node(3);
      expect(node.next).toBeUndefined();
    });
  });

  describe('getNode', () => {
    it('should return the nth node if it exists', () => {
      const node = Node.fromValues(1, 2, 3);
      const expected = Node.fromValues(2, 3);

      expect(node.getNode(1)).toEqual(expected);
    });

    it('should return undefined if the nth node does not exist', () => {
      const node = Node.fromValues(1, 2, 3);

      expect(node.getNode(3)).toBeUndefined();
    });

    it('should return the node itself if the argument is 0', () => {
      const node = new Node(1);

      expect(node.getNode(0)).toBe(node);
    });
  });

  describe('toString', () => {
    it('should stringify the data and its next node', () => {
      const node = Node.fromValues(1, 2);
      expect(node.toString())
        .toEqual('Node [ data: 1, next: Node [ data: 2, next: undefined ] ]');
    });
  });
});
