import { StackMin } from './stack-min';

describe('StackMin', () => {
  describe('pop', () => {
    it('should throw an error if the stack is empty', () => {
      const stack: StackMin<number> = new StackMin();

      expect(() => {
        stack.pop();
      }).toThrow('The stack is empty');
    });

    it('should remove and return the element at the top if the stack is not empty', () => {
      const stack: StackMin<number> = new StackMin();
      const expected = 2;
      stack.push(1);
      stack.push(expected);

      expect(stack.pop()).toBe(expected);
      expect(stack.size()).toBe(1);
    });
  });

  describe('push', () => {
    it('should add an element at the top of the stack', () => {
      const stack: StackMin<number> = new StackMin();
      const expected = 1;
      stack.push(expected);

      expect(stack.peek()).toBe(expected);
      expect(stack.size()).toBe(1);
    });
  });

  describe('min', () => {
    it('should return undefined if the stack is empty', () => {
      const stack: StackMin<number> = new StackMin();

      expect(stack.min()).toBeUndefined();
    });

    it('should return the one and only element if the stack has only one element', () => {
      const stack: StackMin<number> = new StackMin();
      const expected = 99;
      stack.push(expected);

      expect(stack.min()).toBe(expected);
    });

    it('should return the minimum element of the stack', () => {
      const stack: StackMin<number> = new StackMin();
      const expected = -82;
      stack.push(-5);
      stack.push(0);
      stack.push(76);
      stack.push(expected);
      stack.push(123);
      stack.push(37);

      expect(stack.min()).toBe(expected);
    });

    it('should return the second minimum element of the stack after the current minimum is popped', () => {
      const stack: StackMin<number> = new StackMin();
      const expected = -5;
      stack.push(3);
      stack.push(expected);
      stack.push(0);
      stack.push(76);
      stack.push(-57);
      stack.pop();

      expect(stack.min()).toBe(expected);
    });

    it('should return the new minimum element of the stack after a new minimum is pushed', () => {
      const stack: StackMin<number> = new StackMin();
      const expected = -57;
      stack.push(3);
      stack.push(0);
      stack.push(76);
      stack.push(-13);
      stack.push(expected);

      expect(stack.min()).toBe(expected);
    });
  });
});
