import { FrenchDeck } from './french-deck';

describe('FrenchDeck', () => {
  describe('constructor', () => {
    it('should contain every value from each suits', () => {
      const deck = new FrenchDeck();
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
      const expectedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

      expect(Array.from(map.keys())).toEqual(expectedSuits);
      for (const values of map.values()) {
        expect(values).toEqual(expectedValues);
      }
    });
  });
});
