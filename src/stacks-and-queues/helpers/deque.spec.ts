import { Deque } from './deque';

describe('Deque', () => {
    describe('addFirst', () => {
        it('should add an element to the beginning of the deque', () => {
            const deque: Deque<number> = new Deque();
            const expected = 2;
            deque.addFirst(1);
            deque.addFirst(expected);

            expect(deque.peekFirst()).toBe(expected);
            expect(deque.size()).toBe(2);
        });
    });

    describe('addLast', () => {
        it('should add an element to the end of the deque', () => {
            const deque: Deque<number> = new Deque();
            const expected = 2;
            deque.addLast(1);
            deque.addLast(expected);

            expect(deque.peekLast()).toBe(expected);
            expect(deque.size()).toBe(2);
        });
    });

    describe('removeFirst', () => {
        it('should throw an error if the deque is empty', () => {
            const deque: Deque<number> = new Deque();

            expect(() => {
                deque.removeFirst();
            }).toThrow('The deque is empty');
        });

        it('should remove and return the first element in the deque if it is not empty', () => {
            const deque: Deque<number> = new Deque();
            const expected = 2;
            deque.addFirst(1);
            deque.addFirst(expected);

            expect(deque.removeFirst()).toBe(expected);
            expect(deque.size()).toBe(1);
        });
    });

    describe('removeLast', () => {
        it('should throw an error if the deque is empty', () => {
            const deque: Deque<number> = new Deque();

            expect(() => {
                deque.removeLast();
            }).toThrow('The deque is empty');
        });

        it('should remove and return the last element in the deque if it is not empty', () => {
            const deque: Deque<number> = new Deque();
            const expected = 2;
            deque.addLast(1);
            deque.addLast(expected);

            expect(deque.removeLast()).toBe(expected);
            expect(deque.size()).toBe(1);
        });
    });

    describe('peekFirst', () => {
        it('should throw an error if the deque is empty', () => {
            const deque: Deque<number> = new Deque();

            expect(() => {
                deque.peekFirst();
            }).toThrow('The deque is empty');
        });

        it('should return the first element in the deque if it is not empty', () => {
            const deque: Deque<number> = new Deque();
            const expected = 2;
            deque.addFirst(1);
            deque.addFirst(expected);

            expect(deque.peekFirst()).toBe(expected);
            expect(deque.size()).toBe(2);
        });
    });

    describe('peekLast', () => {
        it('should throw an error if the deque is empty', () => {
            const deque: Deque<number> = new Deque();

            expect(() => {
                deque.peekLast();
            }).toThrow('The deque is empty');
        });

        it('should return the last element in the deque if it is not empty', () => {
            const deque: Deque<number> = new Deque();
            const expected = 2;
            deque.addLast(1);
            deque.addLast(expected);

            expect(deque.peekLast()).toBe(expected);
            expect(deque.size()).toBe(2);
        });
    });

    describe('isEmpty', () => {
        it('should return true if the deque is empty', () => {
            const deque: Deque<number> = new Deque();
            const expected = true;

            expect(deque.isEmpty()).toBe(expected);
        });

        it('should return false if the deque is not empty', () => {
            const deque: Deque<number> = new Deque();
            const expected = false;
            deque.addFirst(1);

            expect(deque.isEmpty()).toBe(expected);
        });
    });

    describe('size', () => {
        it('should return 0 if the deque is empty', () => {
            const deque: Deque<number> = new Deque();
            const expected = 0;

            expect(deque.size()).toBe(expected);
        });

        it('should return the number of elements in the deque if it is not empty', () => {
            const deque: Deque<number> = new Deque();
            const expected = 3;
            deque.addLast(1);
            deque.addLast(11);
            deque.addLast(111);

            expect(deque.size()).toBe(expected);
        });
    });
});
