import { nearestPoints } from './nearest-points';

describe('nearestPoint', () => {
  it('should throw an error if n is negative', () => {
    const points: Array<[number, number]> = [
      [0, 1],
      [1, 0],
    ];
    expect(() => {
      nearestPoints(points, -3);
    }).toThrow('n must be a non negative integer');
  });

  it('should throw an error if the points array has invalid coordinates', () => {
    const points: Array<[number, number]> = [
      [0, 1],
      [NaN, 0],
    ];
    expect(() => {
      nearestPoints(points, 1);
    }).toThrow('Points should contain valid coordinate pairs only');
  });

  it('should return an empty array if n is 0', () => {
    const points: Array<[number, number]> = [
      [0, 1],
      [1, 0],
    ];
    const result = nearestPoints(points, 0);

    expect(result).toHaveLength(0);
  });

  it('should return all the points ordered by distance if n is greater or equal than the number of points', () => {
    const points: Array<[number, number]> = [
      [0, 3],
      [0, 1],
      [1, 0],
    ];
    const result = nearestPoints(points, 3);
    const expected = [
      [0, 1],
      [1, 0],
      [0, 3],
    ];

    expect(result).toEqual(expected);
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
      [1, -1],
      [2, 1],
    ];

    expect(result).toEqual(expected);
  });
});
