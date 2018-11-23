import { romanNumeral } from './roman-numeral';

describe('romanNumeral', () => {
  it('should throw an error for a negative integer', () => {
    expect(() => {
      romanNumeral(-5);
    }).toThrow('Invalid number');
  });

  it('should throw an error for zero', () => {
    expect(() => {
      romanNumeral(0);
    }).toThrow('Invalid number');
  });

  it('should throw an error for a positive float', () => {
    expect(() => {
      romanNumeral(1.23);
    }).toThrow('Invalid number');
  });

  it('should throw an error for NaN', () => {
    expect(() => {
      romanNumeral(NaN);
    }).toThrow('Invalid number');
  });

  it('should convert 1 to I', () => {
    const n = romanNumeral(1);

    expect(n).toBe('I');
  });

  it('should convert 3 to III', () => {
    const n = romanNumeral(3);

    expect(n).toBe('III');
  });

  it('should convert 4 to IV', () => {
    const n = romanNumeral(4);

    expect(n).toBe('IV');
  });

  it('should convert 5 to V', () => {
    const n = romanNumeral(5);

    expect(n).toBe('V');
  });

  it('should convert 7 to VII', () => {
    const n = romanNumeral(7);

    expect(n).toBe('VII');
  });

  it('should convert 9 to IX', () => {
    const n = romanNumeral(9);

    expect(n).toBe('IX');
  });

  it('should convert 10 to X', () => {
    const n = romanNumeral(10);

    expect(n).toBe('X');
  });

  it('should convert 23 to XXIII', () => {
    const n = romanNumeral(23);

    expect(n).toBe('XXIII');
  });

  it('should convert 45 to XLV', () => {
    const n = romanNumeral(45);

    expect(n).toBe('XLV');
  });

  it('should convert 58 to LVIII', () => {
    const n = romanNumeral(58);

    expect(n).toBe('LVIII');
  });

  it('should convert 72 to LXXII', () => {
    const n = romanNumeral(72);

    expect(n).toBe('LXXII');
  });

  it('should convert 96 to XCVI', () => {
    const n = romanNumeral(96);

    expect(n).toBe('XCVI');
  });

  it('should convert 101 to CI', () => {
    const n = romanNumeral(101);

    expect(n).toBe('CI');
  });

  it('should convert 321 to CCCXXI', () => {
    const n = romanNumeral(321);

    expect(n).toBe('CCCXXI');
  });

  it('should convert 428 to CDXXVIII', () => {
    const n = romanNumeral(428);

    expect(n).toBe('CDXXVIII');
  });

  it('should convert 512 to DXII', () => {
    const n = romanNumeral(512);

    expect(n).toBe('DXII');
  });

  it('should convert 674 to DCLXXIV', () => {
    const n = romanNumeral(674);

    expect(n).toBe('DCLXXIV');
  });

  it('should convert 999 to CMXCIX', () => {
    const n = romanNumeral(999);

    expect(n).toBe('CMXCIX');
  });

  it('should convert 1985 to MCMLXXXV', () => {
    const n = romanNumeral(1985);

    expect(n).toBe('MCMLXXXV');
  });
});
