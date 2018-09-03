import { numberSwapper } from './number-swapper';

describe('numberSwapper', () => {
  it('should swap the provided numbers', () => {
    const [a, b] = numberSwapper(3, 7);

    expect(a).toBe(7);
    expect(b).toBe(3);
  });
});
