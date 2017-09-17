import { FrenchCard, Suit, Value } from './french-card';

describe('FrenchCard', () => {
    describe('toString', () => {
        it('should return the human readable value of the card', () => {
            const card = new FrenchCard(Value.Queen, Suit.Hearts);

            expect(card.toString()).toEqual('Queen of Hearts');
        });
    });
});
