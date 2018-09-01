import { Card } from './card';

export enum Suit {
  Clubs = 0,
  Diamonds,
  Hearts,
  Spades,
}

export enum Value {
  Ace = 1,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
}

export class FrenchCard extends Card {
  public suit: Suit;

  constructor(value: Value, suit: Suit) {
    super(value);
    this.suit = suit;
  }

  public toString(): string {
    return `${Value[this.value]} of ${Suit[this.suit]}`;
  }
}
