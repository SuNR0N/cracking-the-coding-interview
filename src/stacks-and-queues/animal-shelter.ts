import { Animal, Cat, Dog, LinkedList, Node } from './helpers';

export interface IAnimalShelter<T extends Animal> {
    enqueue(animal: T): void;
    dequeueAny(): T;
    dequeueDog(): Dog;
    dequeueCat(): Cat;
}

export class AnimalShelter<T extends Animal> extends LinkedList<T> implements IAnimalShelter<T> {
    /** Add a new animal to the end of the queue in the shelter */
    public enqueue(animal: T): void {
        this.add(animal);
    }

    /** Removes the oldest animal from the shelter */
    public dequeueAny(): T {
        if (!this.head) {
            throw new Error('The shelter is empty');
        } else {
            const current: Node<T> = this.head;
            this.head = current.next;
            return current.value;
        }
    }

    /** Removes the oldest dog from the shelter */
    public dequeueDog(): Dog {
        return this.dequeueType(Dog);
    }

    /** Removes the oldest cat from the shelter */
    public dequeueCat(): Cat {
        return this.dequeueType(Cat);
    }

    /** Removes the oldest animal with the given type from the shelter */
    // tslint:disable-next-line:ban-types
    private dequeueType(ctr: Function): T {
        if (!this.head) {
            throw new Error('The shelter is empty');
        } else {
            let current: Node<T> = this.head;
            let found: T | undefined;
            if (ctr.prototype.isPrototypeOf(current.value)) {
                this.head = current.next;
                found = current.value;
            }
            while (current.next) {
                if (ctr.prototype.isPrototypeOf(current.next.value)) {
                    found = current.next.value;
                    current.next = current.next.next;
                    break;
                } else {
                    current = current.next;
                }
            }
            if (!found) {
                throw new Error(`${ctr.name} not found`);
            } else {
                return found;
            }
        }
    }
}
