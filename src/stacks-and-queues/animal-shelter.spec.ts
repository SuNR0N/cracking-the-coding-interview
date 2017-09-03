import { AnimalShelter } from './animal-shelter';
import { Animal, Cat, Dog } from './helpers';

describe('AnimalShelter', () => {
    describe('enqueue', () => {
        it('should be able to add a dog to the shelter', () => {
            const shelter = new AnimalShelter<Animal>();
            const expectedNumberOfAnimals = 1;
            shelter.enqueue(new Dog());

            expect(shelter.get(0)).toBeInstanceOf(Dog);
            expect(shelter.size()).toBe(expectedNumberOfAnimals);
        });

        it('should be able to add a cat to the shelter', () => {
            const shelter = new AnimalShelter<Animal>();
            const expectedNumberOfAnimals = 1;
            shelter.enqueue(new Cat());

            expect(shelter.get(0)).toBeInstanceOf(Cat);
            expect(shelter.size()).toBe(expectedNumberOfAnimals);
        });

        it('should be able to add multiple cats and dogs to the shelter', () => {
            const shelter = new AnimalShelter<Animal>();
            const expectedNumberOfAnimals = 4;
            shelter.enqueue(new Cat());
            shelter.enqueue(new Dog());
            shelter.enqueue(new Cat());
            shelter.enqueue(new Dog());

            expect(shelter.get(0)).toBeInstanceOf(Cat);
            expect(shelter.get(1)).toBeInstanceOf(Dog);
            expect(shelter.get(2)).toBeInstanceOf(Cat);
            expect(shelter.get(3)).toBeInstanceOf(Dog);
            expect(shelter.size()).toBe(expectedNumberOfAnimals);
        });
    });

    describe('dequeueAny', () => {
        it('should throw an error if the shelter is empty', () => {
            const shelter = new AnimalShelter<Animal>();

            expect(() => {
                shelter.dequeueAny();
            }).toThrow('The shelter is empty');
        });

        it('should return the oldest animal from the shelter if it is not empty', () => {
            const shelter = new AnimalShelter<Animal>();
            const expectedNumberOfAnimals = 1;
            shelter.enqueue(new Cat());
            shelter.enqueue(new Dog());

            expect(shelter.dequeueAny()).toBeInstanceOf(Cat);
            expect(shelter.size()).toBe(expectedNumberOfAnimals);
        });
    });

    describe('dequeueDog', () => {
        it('should throw an error if the shelter is empty', () => {
            const shelter = new AnimalShelter<Animal>();

            expect(() => {
                shelter.dequeueDog();
            }).toThrow('The shelter is empty');
        });

        it('should throw an error if the shelter does not contain dogs', () => {
            const shelter = new AnimalShelter<Animal>();
            shelter.enqueue(new Cat());
            shelter.enqueue(new Cat());

            expect(() => {
                shelter.dequeueDog();
            }).toThrow('Dog not found');
        });

        it('should return the only dog from the shelter if it has only one dog', () => {
            const shelter = new AnimalShelter<Animal>();
            const expectedNumberOfAnimals = 0;
            shelter.enqueue(new Dog());

            expect(shelter.dequeueDog()).toBeInstanceOf(Dog);
            expect(shelter.size()).toBe(expectedNumberOfAnimals);
        });

        it('should return the oldest dog from the shelter if it is not empty', () => {
            const shelter = new AnimalShelter<Animal>();
            const expectedNumberOfAnimals = 1;
            shelter.enqueue(new Cat());
            shelter.enqueue(new Dog());

            expect(shelter.dequeueDog()).toBeInstanceOf(Dog);
            expect(shelter.size()).toBe(expectedNumberOfAnimals);
        });
    });

    describe('dequeueCat', () => {
        it('should throw an error if the shelter is empty', () => {
            const shelter = new AnimalShelter<Animal>();

            expect(() => {
                shelter.dequeueCat();
            }).toThrow('The shelter is empty');
        });

        it('should throw an error if the shelter does not contain cats', () => {
            const shelter = new AnimalShelter<Animal>();
            shelter.enqueue(new Dog());
            shelter.enqueue(new Dog());

            expect(() => {
                shelter.dequeueCat();
            }).toThrow('Cat not found');
        });

        it('should return the only cat from the shelter if it has only one cat', () => {
            const shelter = new AnimalShelter<Animal>();
            const expectedNumberOfAnimals = 0;
            shelter.enqueue(new Cat());

            expect(shelter.dequeueCat()).toBeInstanceOf(Cat);
            expect(shelter.size()).toBe(expectedNumberOfAnimals);
        });

        it('should return the oldest cat from the shelter if it is not empty', () => {
            const shelter = new AnimalShelter<Animal>();
            const expectedNumberOfAnimals = 1;
            shelter.enqueue(new Dog());
            shelter.enqueue(new Cat());

            expect(shelter.dequeueCat()).toBeInstanceOf(Cat);
            expect(shelter.size()).toBe(expectedNumberOfAnimals);
        });
    });
});
