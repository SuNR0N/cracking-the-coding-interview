import { englishInt } from './english-int';

describe('englishInt', () => {
  it('should print out a negative number', () => {
    const result = englishInt(-7);

    expect(result).toBe('Minus Seven');
  });

  it('should print out 0', () => {
    const result = englishInt(0);

    expect(result).toBe('Zero');
  });

  it('should print out a number with a single digit', () => {
    const result = englishInt(3);

    expect(result).toBe('Three');
  });

  it('should print out a number with 2 digits between 10 and 20', () => {
    const result = englishInt(13);

    expect(result).toBe('Thirteen');
  });

  it('should print out a number with 2 digits between 20 and 100', () => {
    const result = englishInt(85);

    expect(result).toBe('Eighty Five');
  });

  it('should print out a number with 3 digits', () => {
    const result = englishInt(123);

    expect(result).toBe('One Hundred Twenty Three');
  });

  it('should print out a number with 4 digits', () => {
    const result = englishInt(1985);

    expect(result).toBe('One Thousand Nine Hundred Eighty Five');
  });

  it('should print out a number which is larger then a million', () => {
    const result = englishInt(3234567);

    expect(result).toBe('Three Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven');
  });

  it('should print out a number which is larger then a billion', () => {
    const result = englishInt(12972893124);

    expect(result).toBe('Twelve Billion Nine Hundred Seventy Two Million Eight Hundred Ninety Three Thousand One Hundred Twenty Four');
  });
});
