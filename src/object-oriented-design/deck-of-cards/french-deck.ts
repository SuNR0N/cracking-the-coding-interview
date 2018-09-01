import { Deck } from './deck';
import {
  FrenchCard,
  Suit,
  Value,
} from './french-card';

export class FrenchDeck extends Deck<FrenchCard> {
  constructor() {
    super();
    const suites: number[] = Object.keys(Suit).reduce((previous, current) => {
      const suit = parseInt(current, 10);
      if (!isNaN(suit)) {
        previous.push(suit);
      }
      return previous;
    }, new Array<number>());
    const values: number[] = Object.keys(Value).reduce((previous, current) => {
      const value = parseInt(current, 10);
      if (!isNaN(value)) {
        previous.push(value);
      }
      return previous;
    }, new Array<number>());
    for (const suit of suites) {
      for (const value of values) {
        const card = new FrenchCard(value, suit);
        this._cards.push(card);
      }
    }
  }
}
