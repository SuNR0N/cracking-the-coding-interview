import {
  IFraction,
  simplifyFraction,
} from './helpers/simplify-fraction';

/**
 * Finds the intersection of two path segments if it exists
 * @param a First path segment represented as a pair of coordinate tuples
 * @param b Second path segment represented as a pair of coordinate tuples
 */
export function intersection(a: Array<[number, number]>, b: Array<[number, number]>): [IFraction, IFraction] | undefined {
  const [
    [x1, y1],
    [x2, y2],
  ] = a;
  const [
    [x3, y3],
    [x4, y4],
  ] = b;
  let s: IFraction = {
    denominator: (y2 - y1) * (x4 - x3) - (x2 * y4 - x1 * y4 - x2 * y3 + x1 * y3),
    numerator: (y3 - y1) * (x4 - x3) + x1 * y4 - x3 * y4 - x1 * y3 + x3 * y3,
  };
  if (s.numerator / s.denominator < 0) {
    return;
  }
  s = simplifyFraction(s);
  let t: IFraction = {
    denominator: s.denominator * (x4 - x3),
    numerator: x1 * (s.denominator - s.numerator) + x2 * s.numerator - x3 * s.denominator,
  };
  if (t.numerator / t.denominator > 1) {
    return;
  }
  t = simplifyFraction(t);
  let x0: IFraction = {
    denominator: s.denominator,
    numerator: x1 * (s.denominator - s.numerator) + x2 * s.numerator,
  };
  x0 = simplifyFraction(x0);
  let y0: IFraction = {
    denominator: s.denominator,
    numerator: y1 * (s.denominator - s.numerator) + y2 * s.numerator,
  };
  y0 = simplifyFraction(y0);
  return [x0, y0];
}
