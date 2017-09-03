import { Dog } from './dog';

describe('Dog', () => {
    describe('toString', () => {
        it('should return "A dog"', () => {
            const dog = new Dog();
            const expectedValue = 'A dog';

            expect(dog.toString()).toEqual(expectedValue);
        });
    });
});
