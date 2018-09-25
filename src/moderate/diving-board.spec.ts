import { divingBoard } from './diving-board';

describe('divingBoard', () => {
  it('should return an empty array if k is 0', () => {
    const solutions = divingBoard(0, 1, 2);

    expect(solutions).toHaveLength(0);
  });

  it('should return an array with the plank sizes if k is 1', () => {
    const solutions = divingBoard(1, 1, 2);

    expect(solutions).toEqual([1, 2]);
  });

  it('should return an array with 3 different lengths if k is 2', () => {
    const solutions = divingBoard(2, 1, 2);

    expect(solutions).toEqual([2, 3, 4]);
  });

  it('should return an array with 4 different lengths if k is 3', () => {
    const solutions = divingBoard(3, 1, 2);

    expect(solutions).toEqual([3, 4, 5, 6]);
  });

  it('should return an array with 5 different lengths if k is 4', () => {
    const solutions = divingBoard(4, 1, 2);

    expect(solutions).toEqual([4, 5, 6, 7, 8]);
  });
});
