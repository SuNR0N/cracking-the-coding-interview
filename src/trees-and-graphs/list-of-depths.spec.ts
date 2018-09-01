import {
  BinaryTree,
  Node,
} from './helpers';
import { listOfDepths } from './list-of-depths';

describe('listOfDepths', () => {
  it('should not return any linked list if the root of the tree is undefined', () => {
    const tree = new BinaryTree<number>();
    const expectedNumberOfLists = 0;
    const expectedLists: number[][] = [
      [],
    ];

    expect(listOfDepths(tree)).toHaveLength(expectedNumberOfLists);
    listOfDepths(tree).forEach((list, index) => {
      expect(list.toArray()).toEqual(expectedLists[index]);
    });
  });

  it('should return a single linked list if the tree has a root node only', () => {
    const tree = new BinaryTree<number>(new Node(0));
    const expectedNumberOfLists = 1;
    const expectedLists = [
      [0],
    ];

    expect(listOfDepths(tree)).toHaveLength(expectedNumberOfLists);
    listOfDepths(tree).forEach((list, index) => {
      expect(list.toArray()).toEqual(expectedLists[index]);
    });
  });

  it('should return as many linked lists as the height of the tree', () => {
    const rootNode = new Node(10)
      .addChild(new Node(5)
        .addChild(new Node(9))
        .addChild(new Node(18)))
      .addChild(new Node(20)
        .addChild(new Node(3))
        .addChild(new Node(7)));
    const tree = new BinaryTree<number>(rootNode);
    const expectedNumberOfLists = 3;
    const expectedLists = [
      [10],
      [5, 20],
      [9, 18, 3, 7],
    ];

    expect(listOfDepths(tree)).toHaveLength(expectedNumberOfLists);
    listOfDepths(tree).forEach((list, index) => {
      expect(list.toArray()).toEqual(expectedLists[index]);
    });
  });
});
