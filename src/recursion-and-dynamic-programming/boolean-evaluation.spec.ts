import { booleanEvaluation } from './boolean-evaluation';

describe('booleanEvaluation', () => {
  it('should list all parenthesized combination of the expression for a false value', () => {
    const expression = '1^0|0|1';
    const value = false;
    const expected = [
      '(1)^((0|0)|(1))',
      '(1)^((0)|(0|1))',
    ];

    const combinations = booleanEvaluation(expression, value);
    expect(combinations).toHaveLength(expected.length);
    expect(combinations).toEqual(expect.arrayContaining(expected));
  });

  it('should list all parenthesized combination of the expression for a true value', () => {
    const expression = '0&0&0&1^1|0';
    const value = true;
    const expected = [
      '((0)&((0)&(0&1)))^(1|0)',
      '((0)&((0&0)&(1)))^(1|0)',
      '((0&0)&(0&1))^(1|0)',
      '(((0)&(0&0))&(1))^(1|0)',
      '(((0&0)&(0))&(1))^(1|0)',
      '(((0)&((0)&(0&1)))^(1))|(0)',
      '(((0)&((0&0)&(1)))^(1))|(0)',
      '(((0&0)&(0&1))^(1))|(0)',
      '((((0)&(0&0))&(1))^(1))|(0)',
      '((((0&0)&(0))&(1))^(1))|(0)',
    ];

    const combinations = booleanEvaluation(expression, value);
    expect(combinations).toHaveLength(expected.length);
    expect(combinations).toEqual(expect.arrayContaining(expected));
  });
});
