import { Graph } from './graph';
import { Node } from './node';
import { VisitorFunction } from './visitor-function';

describe('Graph', () => {
  let nodeOne: Node<number>;
  let nodeFour: Node<number>;
  let root: Node<number>;

  beforeEach(() => {
    nodeOne = new Node(1);
    nodeFour = new Node(4);
    root = new Node(0)
      .addChild(nodeOne
        .addChild(new Node(3)
          .addChild(new Node(2)
            .addChild(nodeOne))
          .addChild(nodeFour))
        .addChild(nodeFour))
      .addChild(nodeFour)
      .addChild(new Node(5));
  });

  describe('isConnected', () => {
    it('it should return false if the graph is not connected', () => {
      const nOne = new Node(1)
        .addChild(new Node(2)
          .addChild(new Node(3)));
      const nFour = new Node(4)
        .addChild(new Node(5))
        .addChild(new Node(6));
      const graph = new Graph<number>(nOne, nFour);

      expect(graph.isConnected()).toBe(false);
    });

    it('it should return true if the graph is connected', () => {
      const nOne = new Node(1)
        .addChild(new Node(2)
          .addChild(new Node(3)));
      const nFour = new Node(4)
        .addChild(new Node(5)
          .addChild(nOne))
        .addChild(new Node(6));
      const graph = new Graph<number>(nOne, nFour);

      expect(graph.isConnected()).toBe(true);
    });
  });

  describe('isAcyclic', () => {
    it('should return true for an acyclic graph', () => {
      const nZero = new Node(0)
        .addChild(new Node(1))
        .addChild(new Node(2)
          .addChild(new Node(3)
            .addChild(new Node(5))
            .addChild(new Node(6)))
          .addChild(new Node(4)));
      const graph = new Graph<number>(nZero);

      expect(graph.isAcyclic()).toBe(true);
    });

    it('should return false for a cyclic graph', () => {
      const nZero = new Node(0);
      const nOne = new Node(1);
      const nTwo = new Node(2);
      const nThree = new Node(3);
      nThree.addChild(nTwo);
      nTwo.addChild(nZero);
      nZero.addChild(nOne);
      nOne.addChild(nTwo);
      const graph = new Graph<number>(nThree);

      expect(graph.isAcyclic()).toBe(false);
    });
  });

  describe('size', () => {
    it('should return 0 for an empty graph', () => {
      const expectedNodeCount = 0;

      expect(Graph.size()).toBe(expectedNodeCount);
    });

    it('should return the number of nodes in a connected graph', () => {
      const nOne = new Node(1)
        .addChild(new Node(2)
          .addChild(new Node(3)));
      const nFour = new Node(4)
        .addChild(new Node(5)
          .addChild(nOne))
        .addChild(new Node(6));
      const graph = new Graph<number>(nOne, nFour);
      const expectedNodeCount = 6;

      expect(Graph.size(...graph.nodes)).toBe(expectedNodeCount);
    });

    it('should return the number of nodes in a disconnected graph', () => {
      const nOne = new Node(1)
        .addChild(new Node(2)
          .addChild(new Node(3)));
      const nFour = new Node(4)
        .addChild(new Node(5))
        .addChild(new Node(6));
      const graph = new Graph<number>(nOne, nFour);
      const expectedNodeCount = 6;

      expect(Graph.size(...graph.nodes)).toBe(expectedNodeCount);
    });
  });

  describe('depthFirstSearch', () => {
    it('should not call the visitor function if the node is undefined', () => {
      const visitorFn = jest.fn(() => true);

      Graph.depthFirstSearch(visitorFn);

      expect(visitorFn).not.toHaveBeenCalled();
    });

    it('should visit the nodes in a pre-order fashion visiting each node once', () => {
      const nodes: number[] = [];
      const visitorFn: VisitorFunction<number> = (node) => nodes.push(node.value);
      const expected = [0, 1, 3, 2, 4, 5];

      Graph.depthFirstSearch(visitorFn, root);

      expect(nodes).toEqual(expected);
    });
  });

  describe('breadthFirstSearch', () => {
    it('should not call the visitor function if the node is undefined', () => {
      const visitorFn = jest.fn(() => true);

      Graph.breadthFirstSearch(visitorFn);

      expect(visitorFn).not.toHaveBeenCalled();
    });

    it('should visit the neighbors of each node before visiting any of their neighbors', () => {
      const nodes: number[] = [];
      const visitorFn: VisitorFunction<number> = (node) => nodes.push(node.value);
      const expected = [0, 1, 4, 5, 3, 2];

      Graph.breadthFirstSearch(visitorFn, root);

      expect(nodes).toEqual(expected);
    });
  });
});
