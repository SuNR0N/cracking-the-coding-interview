interface ISolution {
  count: number;
  years: number[];
}

/**
 * Computes the year with the most number of people alive
 * @param people Array of people with their birth and death years as tuples
 */
export function livingPeople(people: Array<[number, number]>): ISolution {
  const stats: Map<number, number> = new Map();
  people.forEach(([birthYear, deathYear]) => {
    if (isNaN(birthYear) || isNaN(deathYear)) {
      throw new Error('Incomplete descriptor');
    } else if (deathYear < birthYear) {
      throw new Error('Invalid descriptor');
    }
    for (let i = birthYear; i <= deathYear; i++) {
      const year = stats.get(i) || 0;
      stats.set(i, year + 1);
    }
  });

  const solution: ISolution = Array.from(stats.entries())
    .reduce((previous, [year, count]) => {
      if (count > previous.count) {
        previous.count = count;
        previous.years = [year];
      } else if (count === previous.count) {
        previous.years.push(year);
      }
      return previous;
    }, {
        count: 0,
        years: new Array<number>(),
      },
    );

  return solution;
}
