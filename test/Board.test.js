const { Board } = require('../src/Board');

describe('Initialise the Board', () => {
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
