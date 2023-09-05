const { Board } = require('../src/Board');

describe('Initialise the Board for 11 rows and 10 columns', () => {
  let board;

  beforeEach(() => {
    board = new Board(10, 11);
  });

  test('should have an 11 rows', () => {
    expect(board.squares).toHaveLength(11);
  });

  test('should have 10 columns in first row', () => {
    expect(board.squares[0]).toHaveLength(10);
  });

  test('should have 10 columns in 11th row', () => {
    expect(board.squares[0]).toHaveLength(10);
  });
});

describe('Initialise the Board for 32 rows and 40 columns', () => {
  let board;

  beforeEach(() => {
    board = new Board(40, 32);
  });

  test('should have an 32 rows', () => {
    expect(board.squares).toHaveLength(32);
  });

  test('should have 40 columns in first row', () => {
    expect(board.squares[0]).toHaveLength(40);
  });
});

describe('Setup the mines on the board', () => {
  test('should set the mines in position 0,0 and 4,4', () => {
    const board = new Board(10, 10);
    board.setMines([
      [0, 0],
      [4, 4],
    ]);
    expect(board.squares).toEqual([
      [
        '☢️',
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        '☢️',
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    ]);
  });

  test('should set the mines in position 0,0 and 1,0', () => {
    const board = new Board(2, 2);
    board.setMines([
      [0, 0],
      [1, 0],
    ]);
    expect(board.squares).toEqual([
      ['☢️', undefined],
      ['☢️', undefined],
    ]);
  });

  test('should set the mines in position 3,2 and 7,7, 9,0', () => {
    const board = new Board(10, 10);
    board.setMines([
      [3, 2],
      [7, 7],
      [9, 0],
    ]);
    expect(board.squares).toEqual([
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        '☢️',
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        '☢️',
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        '☢️',
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    ]);
  });
});
