import { ThreeInOne } from './three-in-one';

describe('ThreeInOne', () => {
    describe('pop', () => {
        it('should throw an error if the given stack is empty', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);
            const stackNumber = 2;

            expect(() => {
                stack.pop(stackNumber);
            }).toThrow('The stack is empty');
        });

        it('should throw an error if no stack exists with the given number', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);

            expect(() => {
                stack.pop(0);
            }).toThrow('Invalid stack index');

            expect(() => {
                stack.pop(4);
            }).toThrow('Invalid stack index');
        });

        it('should remove and return the element at the top of the given stack if it is not empty', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);
            const stackNumber = 2;
            const expected = 2;
            stack.push(stackNumber, 1);
            stack.push(stackNumber, expected);

            expect(stack.pop(stackNumber)).toBe(expected);
            expect(stack.size(stackNumber)).toBe(1);
        });
    });

    describe('push', () => {
        it('should add an element at the top of the given stack if it is not full', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);
            const stackNumber = 2;
            const expected = 2;
            stack.push(stackNumber, 1);
            stack.push(stackNumber, expected);

            expect(stack.peek(stackNumber)).toBe(expected);
            expect(stack.size(stackNumber)).toBe(2);
        });

        it('should throw an error if the given stack is full', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);
            const stackNumber = 2;
            stack.push(stackNumber, 1);
            stack.push(stackNumber, 2);
            stack.push(stackNumber, 3);

            expect(() => {
                stack.push(stackNumber, 4);
            }).toThrow('The stack is full');
        });

        it('should throw an error if no stack exists with the given number', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);

            expect(() => {
                stack.pop(0);
            }).toThrow('Invalid stack index');

            expect(() => {
                stack.pop(4);
            }).toThrow('Invalid stack index');
        });
    });

    describe('peek', () => {
        it('should throw an error if the given stack is empty', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);
            const stackNumber = 2;

            expect(() => {
                stack.peek(stackNumber);
            }).toThrow('The stack is empty');
        });

        it('should return the element at the top of the given stack if it is not empty', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);
            const stackNumber = 2;
            const expected = 2;
            stack.push(stackNumber, 1);
            stack.push(stackNumber, expected);

            expect(stack.peek(stackNumber)).toBe(expected);
            expect(stack.size(stackNumber)).toBe(2);
        });

        it('should throw an error if no stack exists with the given number', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);

            expect(() => {
                stack.peek(0);
            }).toThrow('Invalid stack index');

            expect(() => {
                stack.peek(4);
            }).toThrow('Invalid stack index');
        });
    });

    describe('isEmpty', () => {
        it('should return true if the given stack is empty', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);
            const stackNumber = 2;
            const expected = true;

            expect(stack.isEmpty(stackNumber)).toBe(expected);
        });

        it('should return false if the given stack is not empty', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);
            const stackNumber = 2;
            const expected = false;
            stack.push(stackNumber, 1);

            expect(stack.isEmpty(stackNumber)).toBe(expected);
        });

        it('should throw an error if no stack exists with the given number', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);

            expect(() => {
                stack.isEmpty(0);
            }).toThrow('Invalid stack index');

            expect(() => {
                stack.isEmpty(4);
            }).toThrow('Invalid stack index');
        });
    });

    describe('size', () => {
        it('should return 0 if the given stack is empty', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);
            const stackNumber = 2;
            const expected = 0;

            expect(stack.size(stackNumber)).toBe(expected);
        });

        it('should return the number of elements in the given stack if it is not empty', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);
            const stackNumber = 2;
            const expected = 2;
            stack.push(stackNumber, 1);
            stack.push(stackNumber, 11);

            expect(stack.size(stackNumber)).toBe(expected);
        });

        it('should throw an error if no stack exists with the given number', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);

            expect(() => {
                stack.size(0);
            }).toThrow('Invalid stack index');

            expect(() => {
                stack.size(4);
            }).toThrow('Invalid stack index');
        });
    });

    describe('toString', () => {
        it('should stringify the stacks and their elements', () => {
            const stack: ThreeInOne<number> = new ThreeInOne(3);
            stack.push(1, 1);
            stack.push(2, 2);
            stack.push(2, 22);
            stack.push(3, 3);
            stack.push(3, 33);
            stack.push(3, 333);
            const expected = 'Stack #1: 1,,\nStack #2: 2,22,\nStack #3: 3,33,333\n';

            expect(stack.toString()).toBe(expected);
        });
    });
});
