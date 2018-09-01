import { Stack } from './stack';

describe('Stack', () => {
  describe('pop', () => {
    it('should throw an error if the stack is empty', () => {
      const stack: Stack<number> = new Stack();

      expect(() => {
        stack.pop();
      }).toThrow('The stack is empty');
    });

    it('should remove and return the element at the top if the stack is not empty', () => {
      const stack: Stack<number> = new Stack();
      const expected = 2;
      stack.push(1);
      stack.push(expected);

      expect(stack.pop()).toBe(expected);
      expect(stack.size()).toBe(1);
    });
  });

  describe('push', () => {
    it('should add an element at the top of the stack', () => {
      const stack: Stack<number> = new Stack();
      const expected = 1;
      stack.push(expected);

      expect(stack.peek()).toBe(expected);
      expect(stack.size()).toBe(1);
    });
  });

  describe('peek', () => {
    it('should throw an error if the stack is empty', () => {
      const stack: Stack<number> = new Stack();

      expect(() => {
        stack.peek();
      }).toThrow('The stack is empty');
    });

    it('should return the element at the top if the stack is not empty', () => {
      const stack: Stack<number> = new Stack();
      const expected = 2;
      stack.push(1);
      stack.push(expected);

      expect(stack.peek()).toBe(expected);
      expect(stack.size()).toBe(2);
    });
  });

  describe('isEmpty', () => {
    it('should return true if the stack is empty', () => {
      const stack: Stack<number> = new Stack();
      const expected = true;

      expect(stack.isEmpty()).toBe(expected);
    });

    it('should return false if the stack is not empty', () => {
      const stack: Stack<number> = new Stack();
      const expected = false;
      stack.push(1);

      expect(stack.isEmpty()).toBe(expected);
    });
  });

  describe('size', () => {
    it('should return 0 if the stack is empty', () => {
      const stack: Stack<number> = new Stack();
      const expected = 0;

      expect(stack.size()).toBe(expected);
    });

    it('should return the number of elements in the stack if it is not empty', () => {
      const stack: Stack<number> = new Stack();
      const expected = 3;
      stack.push(1);
      stack.push(11);
      stack.push(111);

      expect(stack.size()).toBe(expected);
    });
  });

  describe('toString', () => {
    it('should stringify the stack if it is empty', () => {
      const stack: Stack<number> = new Stack();

      expect(stack.toString()).toEqual('[ ]');
    });

    it('should stringify the stack if it is not empty', () => {
      const stack: Stack<number> = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.toString()).toEqual('[ 1 -> 2 -> 3 ]');
    });
  });
});
