import { Card } from './card';

export class Deck<T extends Card> {
    protected _cards: T[];

    constructor() {
        this._cards = [];
    }

    public get cards(): T[] {
        return this._cards;
    }

    public set cards(value: T[]) {
        this._cards = value;
    }

    public drawCard(): Card {
        const topCard = this._cards.pop();
        if (!topCard) {
            throw new Error('The deck is empty');
        }
        return topCard;
    }

    public shuffle(): void {
        const newDeck: T[] = [];
        while (this._cards.length !== 0) {
            const randomCardIndex = Math.floor(Math.random() * this._cards.length);
            const randomCard = this._cards.splice(randomCardIndex, 1);
            newDeck.push(...randomCard);
        }
        this._cards = newDeck;
    }

    public size(): number {
        return this._cards.length;
    }
}
