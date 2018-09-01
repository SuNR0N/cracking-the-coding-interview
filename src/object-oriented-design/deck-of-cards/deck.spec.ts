import { Deck } from './deck';
import {
  FrenchCard,
  Suit,
  Value,
} from './french-card';

describe('Deck', () => {
  describe('constructor', () => {
    it('should create and empty deck', () => {
      const deck = new Deck<FrenchCard>();
      const expected = 0;

      expect(deck.cards).toHaveLength(expected);
    });
  });

  describe('drawCard', () => {
    it('should remove the top card from the deck', () => {
      const deck = new Deck<FrenchCard>();
      const cards: FrenchCard[] = [
        new FrenchCard(Value.Ace, Suit.Spades),
      ];
      deck.cards = cards;
      const expectedCard: FrenchCard = deck.cards[deck.cards.length - 1];
      const expectedDeckSize = 0;

      expect(deck.drawCard()).toBe(expectedCard);
      expect(deck.size()).toBe(expectedDeckSize);
    });

    it('should throw an exception if the deck is empty', () => {
      const deck = new Deck<FrenchCard>();

      expect(() => {
        deck.drawCard();
      }).toThrow('The deck is empty');
    });
  });

  describe('shuffle', () => {
    it('should shuffle the cards in the deck', () => {
      const deck = new Deck<FrenchCard>();
      const cards: FrenchCard[] = [
        new FrenchCard(Value.Jack, Suit.Clubs),
        new FrenchCard(Value.Queen, Suit.Clubs),
        new FrenchCard(Value.King, Suit.Clubs),
        new FrenchCard(Value.Jack, Suit.Diamonds),
        new FrenchCard(Value.Queen, Suit.Diamonds),
        new FrenchCard(Value.King, Suit.Diamonds),
        new FrenchCard(Value.Jack, Suit.Hearts),
        new FrenchCard(Value.Queen, Suit.Hearts),
        new FrenchCard(Value.King, Suit.Hearts),
        new FrenchCard(Value.Jack, Suit.Spades),
        new FrenchCard(Value.Queen, Suit.Spades),
        new FrenchCard(Value.King, Suit.Spades),
      ];
      deck.cards = cards;
      deck.shuffle();
      let map: Map<number, number[]>;
      map = deck.cards.reduce((previous, current) => {
        const values = previous.get(current.suit);
        if (!values) {
          previous.set(current.suit, [current.value]);
        } else {
          values.push(current.value);
        }
        return previous;
      }, new Map<number, number[]>());
      const expectedSuits = [0, 1, 2, 3];
      const expectedValues = [11, 12, 13];

      expect(Array.from(map.keys())).toEqual(expect.arrayContaining(expectedSuits));
      for (const values of map.values()) {
        expect(values).toEqual(expect.arrayContaining(expectedValues));
      }
    });
  });

  describe('size', () => {
    it('should return the number of cards in the deck', () => {
      const deck = new Deck<FrenchCard>();
      const cards: FrenchCard[] = [
        new FrenchCard(Value.Ten, Suit.Hearts),
        new FrenchCard(Value.Jack, Suit.Hearts),
        new FrenchCard(Value.Queen, Suit.Hearts),
        new FrenchCard(Value.King, Suit.Hearts),
        new FrenchCard(Value.Ace, Suit.Hearts),
      ];
      deck.cards = cards;
      const expected = 5;

      expect(deck.size()).toBe(expected);
    });
  });
});
