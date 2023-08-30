const { Board } = require("../src/Board");

describe("Initialise the Board", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 11);
  });
  test("should have an 10 rows", () => {
    expect(board.squares.length).toBe(10);
  });
  test("should have 10 columns in first row", () => {
    expect(board.squares[0].length).toBe(10);
  });
});
