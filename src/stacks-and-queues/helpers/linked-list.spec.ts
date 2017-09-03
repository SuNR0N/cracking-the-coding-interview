import { LinkedList, Node } from './';

describe('LinkedList', () => {
    describe('constructor', () => {
        it('should create a linked list with a head if a value is provided as an argument', () => {
            const list = new LinkedList<number>(1);
            const expectedHeadValue = 1;

            expect(list.head).toBeInstanceOf(Node);
            expect(list.get(0)).toBe(expectedHeadValue);
        });

        it('should create a linked list with an undefined head without an argument', () => {
            const list = new LinkedList<number>();

            expect(list.head).toBeUndefined();
        });
    });

    describe('add', () => {
        it('should add a new element as the head of the list if it is empty', () => {
            const list = new LinkedList<number>();
            const expectedHeadValue = 1;
            list.add(1);

            expect(list.get(0)).toBe(expectedHeadValue);
        });

        it('should add the new element as the tail of the list if it is not empty', () => {
            const list = new LinkedList<number>(1);
            const expectedTailValue = 3;
            const expectedNumberOfElements = 3;
            list.add(2);
            list.add(3);

            expect(list.get(2)).toBe(expectedTailValue);
            expect(list.size()).toBe(expectedNumberOfElements);
        });
    });

    describe('remove', () => {
        it('should throw an exception if the list is empty', () => {
            const list = new LinkedList<number>();

            expect(() => {
                list.remove(1);
            }).toThrow('The list is empty');
        });

        it('should throw an exception if the list does not contain the element', () => {
            const list = new LinkedList<number>();
            list.add(1);
            list.add(2);
            list.add(3);

            expect(() => {
                list.remove(4);
            }).toThrow('Element not found');
        });

        it('should remove the first occurrence of the element from the list if it exists', () => {
            const list = new LinkedList<number>();
            const expectedValueToBeRemoved = 2;
            const expectedNumberOfElements = 2;
            list.add(1);
            list.add(2);
            list.add(3);

            expect(list.remove(2)).toBe(expectedValueToBeRemoved);
            expect(list.size()).toBe(expectedNumberOfElements);
        });

        it('should remove only the first occurrence of the element from the list given multiple exist', () => {
            const list = new LinkedList<number>();
            const expectedValueToBeRemoved = 1;
            const expectedNumberOfElements = 3;
            const expectedArray = [2, 3, 1];
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(1);

            expect(list.remove(1)).toBe(expectedValueToBeRemoved);
            expect(list.size()).toBe(expectedNumberOfElements);
            expect(list.toArray()).toEqual(expectedArray);
        });
    });

    describe('get', () => {
        it('should throw an exception of the list is empty', () => {
            const list = new LinkedList<number>();

            expect(() => {
                list.get(0);
            }).toThrow('Element does not exist at index 0');
        });

        it('should throw an exception if the given index is out of range', () => {
            const list = new LinkedList<number>();
            list.add(1);
            list.add(2);
            list.add(3);

            expect(() => {
                list.get(-1);
            }).toThrow('Element does not exist at index -1');

            expect(() => {
                list.get(3);
            }).toThrow('Element does not exist at index 3');
        });

        it('should return the element at the given index if it exists', () => {
            const list = new LinkedList<number>();
            const expectedValueToBeReturned = 2;
            list.add(1);
            list.add(2);
            list.add(3);

            expect(list.get(1)).toBe(expectedValueToBeReturned);
        });
    });

    describe('size', () => {
        it('should return 0 if the list is empty', () => {
            const list = new LinkedList<number>();

            expect(list.size()).toBe(0);
        });

        it('should return the number of elements in the list if it is not empty', () => {
            const list = new LinkedList<number>();
            const expectedNumberOfElements = 3;
            list.add(1);
            list.add(2);
            list.add(3);

            expect(list.size()).toBe(expectedNumberOfElements);
        });
    });

    describe('toArray', () => {
        it('should return an empty array if the list is empty', () => {
            const list = new LinkedList<number>();
            const expectedArray: number[] = [];

            expect(list.toArray()).toEqual(expectedArray);
        });

        it('should return the elements of the list in order as an array if it is not empty', () => {
            const list = new LinkedList<number>();
            const expectedArray: number[] = [1, 2, 3];
            list.add(1);
            list.add(2);
            list.add(3);

            expect(list.toArray()).toEqual(expectedArray);
        });
    });
});
