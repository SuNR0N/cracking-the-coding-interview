import { Node } from './helpers';
import { routeBetweenNodes } from './route-between-nodes';

describe('routeBetweenNodes', () => {
  it('should return false if both nodes are undefined', () => {
    const expected = false;

    expect(routeBetweenNodes()).toBe(expected);
  });

  it('should return false if the first node is undefined', () => {
    const expected = false;

    expect(routeBetweenNodes(undefined, new Node(1))).toBe(expected);
  });

  it('should return false if the second node is undefined', () => {
    const expected = false;

    expect(routeBetweenNodes(new Node(1))).toBe(expected);
  });

  it('should return false if no route exists between the two nodes', () => {
    const first = new Node(1)
      .addChild(new Node(5)
        .addChild(new Node(55)
          .addChild(new Node(555)))
        .addChild(new Node(6)));
    const second = new Node(2)
      .addChild(new Node(3)
        .addChild(new Node(33))
        .addChild(new Node(4)));

    const expected = false;

    expect(routeBetweenNodes(first, second)).toBe(expected);
  });

  it('should return true if a route exists from the first node to the second', () => {
    const second = new Node(2)
      .addChild(new Node(3)
        .addChild(new Node(33))
        .addChild(new Node(4)));
    const first = new Node(1)
      .addChild(new Node(5)
        .addChild(new Node(55)
          .addChild(new Node(555)
            .addChild(second)))
        .addChild(new Node(6)));

    const expected = true;

    expect(routeBetweenNodes(first, second)).toBe(expected);
  });

  it('should return true if a route exists from the second node to the first', () => {
    const first = new Node(1)
      .addChild(new Node(5)
        .addChild(new Node(55)
          .addChild(new Node(555)))
        .addChild(new Node(6)));
    const second = new Node(2)
      .addChild(new Node(3)
        .addChild(new Node(33))
        .addChild(new Node(4)
          .addChild(first)));

    const expected = true;

    expect(routeBetweenNodes(first, second)).toBe(expected);
  });

  it('should return true if routes exist in both directions between the nodes', () => {
    const first = new Node(1);
    const second = new Node(2);
    first
      .addChild(new Node(11)
        .addChild(new Node(111))
        .addChild(new Node(12)
          .addChild(new Node(121)
            .addChild(new Node(1211))
            .addChild(second))));
    second
      .addChild(new Node(21))
      .addChild(new Node(22)
        .addChild(new Node(221))
        .addChild(new Node(222)
          .addChild(first)))
      .addChild(new Node(23)
        .addChild(new Node(231)));

    const expected = true;

    expect(routeBetweenNodes(first, second)).toBe(expected);
  });
});
