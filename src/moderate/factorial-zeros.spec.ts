import { factorialZeros } from './factorial-zeros';

describe('factorialZeros', () => {
  it('should throw an error for a non negative input', () => {
    expect(() => {
      factorialZeros(-1);
    }).toThrow('Argument should be a non negative integer');
  });

  it('should return 0 for zero', () => {
    const zeros = factorialZeros(0);

    expect(zeros).toBe(0);
  });

  it('should return 0 for a factorial which does not end with zeros', () => {
    const zeros = factorialZeros(4);

    expect(zeros).toBe(0);
  });

  it('should return 1 for a factorial which ends with a single zero', () => {
    const zeros = factorialZeros(5);

    expect(zeros).toBe(1);
  });

  it('should return 2 for a factorial which ends with double zeros', () => {
    const zeros = factorialZeros(10);

    expect(zeros).toBe(2);
  });

  it('should return 3 for a factorial which ends with triple zeros', () => {
    const zeros = factorialZeros(15);

    expect(zeros).toBe(3);
  });
});
