import { nearestPoints } from './nearest-points';

describe('nearestPoint', () => {
  it('should return an empty array if n is 0', () => {
    const points: Array<[number, number]> = [
      [0, 1],
      [1, 0],
    ];
    const result = nearestPoints(points, 0);

    expect(result).toHaveLength(0);
  });

  it('should return all the points if n is greater or equal than the number of points', () => {
    const points: Array<[number, number]> = [
      [0, 1],
      [1, 0],
    ];
    const result = nearestPoints(points, 2);

    expect(result).toBe(points);
  });

  it('should return a single point if n is 1 and the given distance to the point is the shortest', () => {
    const points: Array<[number, number]> = [
      [2, 1],
      [1, -1],
      [-1, -2],
      [-4, -2],
      [-3, 3],
    ];
    const result = nearestPoints(points, 1);
    const expected = [
      [1, -1],
    ];

    expect(result).toEqual(expected);
  });

  it('should return 2 points if n is 2 and the given distances those points are the shortest', () => {
    const points: Array<[number, number]> = [
      [3, 1],
      [1, -1],
      [-1, -2],
      [-4, -2],
      [-3, 3],
    ];
    const result = nearestPoints(points, 2);
    const expected = [
      [1, -1],
      [-1, -2],
    ];

    expect(result).toEqual(expected);
  });

  it('should return a point with the smaller index if other points have the same distance', () => {
    const points: Array<[number, number]> = [
      [2, 1],
      [1, -1],
      [-1, -2],
      [-4, -2],
      [-3, 3],
    ];
    const result = nearestPoints(points, 2);
    const expected = [
      [2, 1],
      [1, -1],
    ];

    expect(result).toEqual(expected);
  });
});
