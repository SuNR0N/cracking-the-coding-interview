import { Cat } from './cat';

describe('Cat', () => {
  describe('toString', () => {
    it('should return "A cat"', () => {
      const cat = new Cat();
      const expectedValue = 'A cat';

      expect(cat.toString()).toEqual(expectedValue);
    });
  });
});
