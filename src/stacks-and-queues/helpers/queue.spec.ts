import { Queue } from './queue';

describe('Queue', () => {
    describe('add', () => {
        it('should add an element to the end of the queue', () => {
            const queue: Queue<number> = new Queue();
            const expected = 2;
            queue.add(1);
            queue.add(2);

            expect(queue.peek()).not.toBe(expected);
            expect(queue.size()).toBe(2);
        });

        it('should add an element to the start of the queue if it is empty', () => {
            const queue: Queue<number> = new Queue();
            const expected = 1;
            queue.add(expected);

            expect(queue.peek()).toBe(expected);
            expect(queue.size()).toBe(1);
        });
    });

    describe('remove', () => {
        it('should throw an error if the queue is empty', () => {
            const queue: Queue<number> = new Queue();

            expect(() => {
                queue.remove();
            }).toThrow('The queue is empty');
        });

        it('should remove and return the first element in the queue if it is not empty', () => {
            const queue: Queue<number> = new Queue();
            const expected = 1;
            queue.add(expected);
            queue.add(2);

            expect(queue.remove()).toBe(expected);
            expect(queue.size()).toBe(1);
        });
    });

    describe('peek', () => {
        it('should throw an error if the queue is empty', () => {
            const queue: Queue<number> = new Queue();

            expect(() => {
                queue.peek();
            }).toThrow('The queue is empty');
        });

        it('should return the first element in the queue if it is not empty', () => {
            const queue: Queue<number> = new Queue();
            const expected = 1;
            queue.add(expected);
            queue.add(2);

            expect(queue.peek()).toBe(expected);
            expect(queue.size()).toBe(2);
        });
    });

    describe('isEmpty', () => {
        it('should return true if the queue is empty', () => {
            const queue: Queue<number> = new Queue();
            const expected = true;

            expect(queue.isEmpty()).toBe(expected);
        });

        it('should return false if the queue is not empty', () => {
            const queue: Queue<number> = new Queue();
            const expected = false;
            queue.add(1);

            expect(queue.isEmpty()).toBe(expected);
        });
    });

    describe('size', () => {
        it('should return 0 if the queue is empty', () => {
            const queue: Queue<number> = new Queue();
            const expected = 0;

            expect(queue.size()).toBe(expected);
        });

        it('should return the number of elements in the queue if it is not empty', () => {
            const queue: Queue<number> = new Queue();
            const expected = 3;
            queue.add(1);
            queue.add(11);
            queue.add(111);

            expect(queue.size()).toBe(expected);
        });
    });
});
