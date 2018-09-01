import { SortStack } from './sort-stack';

describe('SortStack', () => {
  describe('push', () => {
    it('should add elements to the top of the stack as is if their original order is descending', () => {
      const stack: SortStack<number> = new SortStack();
      const expectedTop = 1;
      const expectedNumberOfElements = 5;
      stack.push(5);
      stack.push(4);
      stack.push(3);
      stack.push(2);
      stack.push(1);

      expect(stack.peek()).toBe(expectedTop);
      expect(stack.size()).toBe(expectedNumberOfElements);
    });

    it('should add elements to the top of the stack in reverse order if their original order is ascending', () => {
      const stack: SortStack<number> = new SortStack();
      const expectedTop = 1;
      const expectedNumberOfElements = 5;
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.push(5);

      expect(stack.peek()).toBe(expectedTop);
      expect(stack.size()).toBe(expectedNumberOfElements);
    });

    it('should add elements to the top of the stack in descending order if their original order is mixed', () => {
      const stack: SortStack<number> = new SortStack();
      const expectedTop = 1;
      const expectedNumberOfElements = 5;
      stack.push(1);
      stack.push(5);
      stack.push(2);
      stack.push(4);
      stack.push(3);

      expect(stack.peek()).toBe(expectedTop);
      expect(stack.size()).toBe(expectedNumberOfElements);
    });
  });
});
