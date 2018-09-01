import { QueueViaStacks } from './queue-via-stacks';

describe('QueueViaStacks', () => {
  describe('add', () => {
    it('should add an element to the end of the queue', () => {
      const queue: QueueViaStacks<number> = new QueueViaStacks();
      const expectedHead = 1;
      const expectedNumberOfElements = 2;
      queue.add(1);
      queue.add(2);

      expect(queue.peek()).toBe(expectedHead);
      expect(queue.size()).toBe(expectedNumberOfElements);
    });

    it('should add an element to the start of the queue if it is empty', () => {
      const queue: QueueViaStacks<number> = new QueueViaStacks();
      const expectedHead = 1;
      const expectedNumberOfElements = 1;
      queue.add(1);

      expect(queue.peek()).toBe(expectedHead);
      expect(queue.size()).toBe(expectedNumberOfElements);
    });
  });

  describe('remove', () => {
    it('should throw an error if the queue is empty', () => {
      const queue: QueueViaStacks<number> = new QueueViaStacks();

      expect(() => {
        queue.remove();
      }).toThrow('The queue is empty');
    });

    it('should remove and return the first element in the queue if it is not empty', () => {
      const queue: QueueViaStacks<number> = new QueueViaStacks();
      const expectedHead = 1;
      const expectedNumberOfElements = 4;
      queue.add(1);
      queue.add(2);
      queue.add(3);
      queue.add(4);
      queue.add(5);

      expect(queue.remove()).toBe(expectedHead);
      expect(queue.size()).toBe(expectedNumberOfElements);
    });

    it('should remove and return the first element in the queue after various operations', () => {
      const queue: QueueViaStacks<number> = new QueueViaStacks();
      const expectedHead = 3;
      const expectedNumberOfElements = 3;
      queue.add(1);
      queue.add(2);
      queue.remove();
      queue.add(3);
      queue.add(4);
      queue.add(5);
      queue.remove();
      queue.add(6);

      expect(queue.remove()).toBe(expectedHead);
      expect(queue.size()).toBe(expectedNumberOfElements);
    });
  });

  describe('peek', () => {
    it('should throw an error if the queue is empty', () => {
      const queue: QueueViaStacks<number> = new QueueViaStacks();

      expect(() => {
        queue.peek();
      }).toThrow('The queue is empty');
    });

    it('should return the first element in the queue if it is not empty', () => {
      const queue: QueueViaStacks<number> = new QueueViaStacks();
      const expectedHead = 1;
      const expectedNumberOfElements = 2;
      queue.add(1);
      queue.add(2);

      expect(queue.peek()).toBe(expectedHead);
      expect(queue.size()).toBe(expectedNumberOfElements);
    });
  });

  describe('isEmpty', () => {
    it('should return true if the queue is empty', () => {
      const queue: QueueViaStacks<number> = new QueueViaStacks();
      const expected = true;

      expect(queue.isEmpty()).toBe(expected);
    });

    it('should return false if the queue is not empty', () => {
      const queue: QueueViaStacks<number> = new QueueViaStacks();
      const expected = false;
      queue.add(1);

      expect(queue.isEmpty()).toBe(expected);
    });
  });

  describe('size', () => {
    it('should return 0 if the queue is empty', () => {
      const queue: QueueViaStacks<number> = new QueueViaStacks();
      const expectedNumberOfElements = 0;

      expect(queue.size()).toBe(expectedNumberOfElements);
    });

    it('should return the number of elements in the queue if it is not empty', () => {
      const queue: QueueViaStacks<number> = new QueueViaStacks();
      const expectedNumberOfElements = 3;
      queue.add(1);
      queue.add(11);
      queue.add(111);

      expect(queue.size()).toBe(expectedNumberOfElements);
    });
  });
});
