import { intersection } from './intersection';

describe('intersection', () => {
  it('should return the intersection if it exists', () => {
    const [x0, y0] = intersection([[1, 1], [3, 2]], [[1, 4], [2, -1]])!;

    expect(x0.numerator).toBe(17);
    expect(x0.denominator).toBe(11);
    expect(y0.numerator).toBe(14);
    expect(y0.denominator).toBe(11);
  });

  it('should return undefined if the segments do not intersect each other', () => {
    const point = intersection([[1, 1], [3, 2]], [[-5, 0], [2, -1]]);

    expect(point).toBeUndefined();
  });
});
