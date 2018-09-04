import { livingPeople } from './living-people';

describe('livingPeople', () => {
  it('should throw an error if the descriptor of a person is incomplete', () => {
    const people: Array<[number, number]> = [
      [1985, 2016],
      [1, NaN],
      [1876, 1942],
    ];

    expect(() => {
      livingPeople(people);
    }).toThrow('Incomplete descriptor');
  });

  it('should throw an error if the descriptor of a person is invalid', () => {
    const people: Array<[number, number]> = [
      [1991, 2052],
      [2000, 1985],
      [2011, 2018],
    ];

    expect(() => {
      livingPeople(people);
    }).toThrow('Invalid descriptor');
  });

  it('it should return all years if the lifespan of people are not overlapping', () => {
    const people: Array<[number, number]> = [
      [2000, 2010],
      [2011, 2023],
      [2024, 2032],
    ];

    const solution = livingPeople(people);

    expect(solution.years).toHaveLength(33);
    expect(solution.count).toBe(1);
  });

  it('it should return multiple years if they have the same count', () => {
    const people: Array<[number, number]> = [
      [2000, 2010],
      [2009, 2023],
      [2024, 2032],
    ];

    const solution = livingPeople(people);

    expect(solution.years).toEqual([2009, 2010]);
    expect(solution.count).toBe(2);
  });

  it('it should return a single year if in all other years the number of people who were alive were less', () => {
    const people: Array<[number, number]> = [
      [2000, 2024],
      [2009, 2023],
      [2023, 2032],
    ];

    const solution = livingPeople(people);

    expect(solution.years).toEqual([2023]);
    expect(solution.count).toBe(3);
  });
});
