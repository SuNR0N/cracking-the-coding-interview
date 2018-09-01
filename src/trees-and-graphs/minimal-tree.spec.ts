import {
  BinaryTree,
  VisitorFunction,
} from './helpers';
import { minimalTree } from './minimal-tree';

describe('minimalTree', () => {
  it('should return a 0 height tree with 0 element', () => {
    const tree = minimalTree([]);
    const expectedHeight = 0;

    expect(BinaryTree.findHeight(tree.root)).toBe(expectedHeight);
  });

  it('should return a 1 height tree with 1 element', () => {
    const input = [1];
    const tree = minimalTree(input);
    const expectedHeight = 1;
    const expectedNodesInOrder = input;
    const nodes: number[] = [];
    const visitorFn: VisitorFunction<number> = (node) => nodes.push(node.value);

    BinaryTree.traverseInOrder(visitorFn, tree.root);

    expect(nodes).toEqual(expectedNodesInOrder);
    expect(BinaryTree.findHeight(tree.root)).toBe(expectedHeight);
  });

  it('should return a 2 height tree with 2 elements', () => {
    const input = [1, 2];
    const tree = minimalTree(input);
    const expectedHeight = 2;
    const expectedNodesInOrder = input;
    const nodes: number[] = [];
    const visitorFn: VisitorFunction<number> = (node) => nodes.push(node.value);

    BinaryTree.traverseInOrder(visitorFn, tree.root);

    expect(nodes).toEqual(expectedNodesInOrder);
    expect(BinaryTree.findHeight(tree.root)).toBe(expectedHeight);
  });

  it('should return a 2 height tree with 3 elements', () => {
    const input = [1, 2, 3];
    const tree = minimalTree(input);
    const expectedHeight = 2;
    const expectedNodesInOrder = input;
    const nodes: number[] = [];
    const visitorFn: VisitorFunction<number> = (node) => nodes.push(node.value);

    BinaryTree.traverseInOrder(visitorFn, tree.root);

    expect(nodes).toEqual(expectedNodesInOrder);
    expect(BinaryTree.findHeight(tree.root)).toBe(expectedHeight);
  });

  it('should return a 3 height tree with 4 elements', () => {
    const input = [1, 2, 3, 4];
    const tree = minimalTree(input);
    const expectedHeight = 3;
    const expectedNodesInOrder = input;
    const nodes: number[] = [];
    const visitorFn: VisitorFunction<number> = (node) => nodes.push(node.value);

    BinaryTree.traverseInOrder(visitorFn, tree.root);

    expect(nodes).toEqual(expectedNodesInOrder);
    expect(BinaryTree.findHeight(tree.root)).toBe(expectedHeight);
  });

  it('should return a 3 height tree with 6 elements', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const tree = minimalTree(input);
    const expectedHeight = 3;
    const expectedNodesInOrder = input;
    const nodes: number[] = [];
    const visitorFn: VisitorFunction<number> = (node) => nodes.push(node.value);

    BinaryTree.traverseInOrder(visitorFn, tree.root);

    expect(nodes).toEqual(expectedNodesInOrder);
    expect(BinaryTree.findHeight(tree.root)).toBe(expectedHeight);
  });

  it('should return a 4 height tree with 7 elements', () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const tree = minimalTree(input);
    const expectedHeight = 4;
    const expectedNodesInOrder = input;
    const nodes: number[] = [];
    const visitorFn: VisitorFunction<number> = (node) => nodes.push(node.value);

    BinaryTree.traverseInOrder(visitorFn, tree.root);

    expect(nodes).toEqual(expectedNodesInOrder);
    expect(BinaryTree.findHeight(tree.root)).toBe(expectedHeight);
  });
});
