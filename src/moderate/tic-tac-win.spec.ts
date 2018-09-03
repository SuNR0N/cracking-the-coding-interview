import { ticTacWin } from './tic-tac-win';

describe('ticTacWin', () => {
  it('should throw an error if the game has multiple winners', () => {
    const board: string[][] = [
      ['O', 'X', 'O'],
      ['O', 'O', 'O'],
      ['X', 'X', 'X'],
    ];

    expect(() => {
      ticTacWin(board);
    }).toThrow('Invalid board - mulitple winners');
  });

  it('should throw an error if the number of symbols do not match up', () => {
    const board: string[][] = [
      ['X', 'X', 'O'],
      ['O', '', 'X'],
      ['X', 'O', 'X'],
    ];

    expect(() => {
      ticTacWin(board);
    }).toThrow('Invalid board - wrong symbol count');
  });

  it('should throw an error if the board has an invalid number of rows', () => {
    const board: string[][] = [
      ['', '', ''],
    ];

    expect(() => {
      ticTacWin(board);
    }).toThrow('Invalid board - dimension');
  });

  it('should throw an error if the board has an invalid number of columns', () => {
    const board: string[][] = [
      ['', '', ''],
      ['', ''],
      ['', '', ''],
    ];

    expect(() => {
      ticTacWin(board);
    }).toThrow('Invalid board - dimension');
  });

  it('should throw an error if the board has an unknown symbol', () => {
    const board: string[][] = [
      ['O', 'X', 'O'],
      ['X', '?', 'X'],
      ['O', 'X', 'O'],
    ];

    expect(() => {
      ticTacWin(board);
    }).toThrow('Invalid board - unknown symbol');
  });

  it('should return undefined if the board is empty', () => {
    const board: string[][] = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];

    expect(ticTacWin(board)).toBeUndefined();
  });

  it('should return undefined if the game is in progress', () => {
    const board: string[][] = [
      ['X', '', 'X'],
      ['O', 'O', ''],
      ['O', '', 'X'],
    ];

    expect(ticTacWin(board)).toBeUndefined();
  });

  it('should return "X" if the player with that symbol has won the game with 3 symbols in a row', () => {
    const board: string[][] = [
      ['X', '', 'X'],
      ['O', 'O', 'O'],
      ['O', '', 'X'],
    ];

    expect(ticTacWin(board)).toBe('O');
  });

  it('should return "X" if the player with that symbol has won the game with 3 symbols in a column', () => {
    const board: string[][] = [
      ['O', 'X', 'X'],
      ['O', 'O', ''],
      ['O', '', 'X'],
    ];

    expect(ticTacWin(board)).toBe('O');
  });

  it('should return "X" if the player with that symbol has won the game with 3 symbols in a diagonal', () => {
    const board: string[][] = [
      ['', 'X', 'O'],
      ['O', 'O', 'X'],
      ['O', '', 'X'],
    ];

    expect(ticTacWin(board)).toBe('O');
  });

  it('should return "O" if the player with that symbol has won the game with 3 symbols in a row', () => {
    const board: string[][] = [
      ['O', '', 'O'],
      ['X', 'X', 'X'],
      ['X', '', 'O'],
    ];

    expect(ticTacWin(board)).toBe('X');
  });

  it('should return "O" if the player with that symbol has won the game with 3 symbols in a column', () => {
    const board: string[][] = [
      ['X', 'O', 'O'],
      ['X', 'X', ''],
      ['X', '', 'O'],
    ];

    expect(ticTacWin(board)).toBe('X');
  });

  it('should return "O" if the player with that symbol has won the game with 3 symbols in a diagonal', () => {
    const board: string[][] = [
      ['', 'O', 'X'],
      ['X', 'X', 'O'],
      ['X', '', 'O'],
    ];

    expect(ticTacWin(board)).toBe('X');
  });
});
