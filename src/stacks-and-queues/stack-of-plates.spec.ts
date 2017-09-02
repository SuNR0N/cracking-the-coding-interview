import { StackOfPlates } from './stack-of-plates';

describe('StackOfPlates', () => {
    describe('popAt', () => {
        it('should throw an error if the stacks are empty', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);

            expect(() => {
                stacks.popAt(1);
            }).toThrow('Invalid stack index');
        });

        it('should throw an error if the stack with the given index does not exist', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);
            stacks.push(1);

            expect(() => {
                stacks.popAt(0);
            }).toThrow('Invalid stack index');

            expect(() => {
                stacks.popAt(2);
            }).toThrow('Invalid stack index');
        });

        it('should remove and return the element at the top of the given stack if it exists', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);
            const expectedPoppedElement = 111;
            const expectedNumberOfElements = 4;
            const expectedElementAtTop = 22;
            stacks.push(1);
            stacks.push(11);
            stacks.push(111);
            stacks.push(2);
            stacks.push(22);

            expect(stacks.popAt(1)).toBe(expectedPoppedElement);
            expect(stacks.peek()).toBe(expectedElementAtTop);
            expect(stacks.size()).toBe(expectedNumberOfElements);
        });

        it('should remove and return the last element of the given stack and decrease the size of stacks', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);
            const expectedPoppedElement = 2;
            const expectedNumberOfElements = 4;
            const expectedElementAtTop = 3;
            stacks.push(1);
            stacks.push(11);
            stacks.push(111);
            stacks.push(2);
            stacks.push(22);
            stacks.push(222);
            stacks.push(3);
            stacks.popAt(2);
            stacks.popAt(2);

            expect(stacks.popAt(2)).toBe(expectedPoppedElement);
            expect(stacks.peek()).toBe(expectedElementAtTop);
            expect(stacks.size()).toBe(expectedNumberOfElements);
        });
    });

    describe('pop', () => {
        it('should throw an error if the stacks are empty', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);

            expect(() => {
                stacks.pop();
            }).toThrow('The stacks are empty');
        });

        it('should remove and return the element at the top of the last stack if is not empty', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);
            const expectedPoppedElement = 22;
            const expectedNumberOfElements = 4;
            const expectedElementAtTop = 2;
            stacks.push(1);
            stacks.push(11);
            stacks.push(111);
            stacks.push(2);
            stacks.push(22);

            expect(stacks.pop()).toBe(expectedPoppedElement);
            expect(stacks.peek()).toBe(expectedElementAtTop);
            expect(stacks.size()).toBe(expectedNumberOfElements);
        });

        it('should remove and return the last element of the last stack and decrease the size of stacks', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);
            const expectedPoppedElement = 2;
            const expectedNumberOfElements = 3;
            const expectedElementAtTop = 111;
            stacks.push(1);
            stacks.push(11);
            stacks.push(111);
            stacks.push(2);

            expect(stacks.pop()).toBe(expectedPoppedElement);
            expect(stacks.peek()).toBe(expectedElementAtTop);
            expect(stacks.size()).toBe(expectedNumberOfElements);
        });
    });

    describe('push', () => {
        it('should create a new stack and add an element to it if none exists', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);
            const expectedNumberOfElements = 1;
            const expectedElementAtTop = 1;
            stacks.push(1);

            expect(stacks.peek()).toBe(expectedElementAtTop);
            expect(stacks.size()).toBe(expectedNumberOfElements);
        });

        // tslint:disable-next-line:max-line-length
        it('should create a new stack and add an element to it if the capacity of the current stack would be exceeded', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);
            const expectedNumberOfElements = 4;
            const expectedElementAtTop = 2;
            stacks.push(1);
            stacks.push(11);
            stacks.push(111);
            stacks.push(2);

            expect(stacks.peek()).toBe(expectedElementAtTop);
            expect(stacks.size()).toBe(expectedNumberOfElements);
        });

        it('should add an element to the top of the current stack', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);
            const expectedNumberOfElements = 3;
            const expectedElementAtTop = 111;
            stacks.push(1);
            stacks.push(11);
            stacks.push(111);

            expect(stacks.peek()).toBe(expectedElementAtTop);
            expect(stacks.size()).toBe(expectedNumberOfElements);
        });
    });

    describe('peek', () => {
        it('should throw an error if the stacks are empty', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);

            expect(() => {
                stacks.peek();
            }).toThrow('The stacks are empty');
        });

        it('should return the element at the top of the last stack if the stacks are not empty', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);
            const expectedNumberOfElements = 4;
            const expectedElementAtTop = 2;
            stacks.push(1);
            stacks.push(11);
            stacks.push(111);
            stacks.push(2);

            expect(stacks.peek()).toBe(expectedElementAtTop);
            expect(stacks.size()).toBe(expectedNumberOfElements);
        });
    });

    describe('isEmpty', () => {
        it('should return true if the stacks are empty', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);
            const expected = true;

            expect(stacks.isEmpty()).toBe(expected);
        });

        it('should return false if the stacks are not empty', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);
            const expected = false;
            stacks.push(1);

            expect(stacks.isEmpty()).toBe(expected);
        });
    });

    describe('size', () => {
        it('should return 0 if the stacks are empty', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);
            const expectedNumberOfElements = 0;

            expect(stacks.size()).toBe(expectedNumberOfElements);
        });

        it('should return the number of elements in the stacks if the stacks are not empty', () => {
            const stacks: StackOfPlates<number> = new StackOfPlates(3);
            const expectedNumberOfElements = 6;
            stacks.push(1);
            stacks.push(11);
            stacks.push(111);
            stacks.push(2);
            stacks.push(22);
            stacks.push(222);
            stacks.push(3);
            stacks.popAt(2);

            expect(stacks.size()).toBe(expectedNumberOfElements);
        });
    });
});
