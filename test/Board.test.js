const { Board } = require("../src/Board");

describe("Initialise the Board", () => {
  test("should have an 10 rows", () => {
    const board = new Board(10, 11);
    expect(board.squares.length).toBe(10);
  });
});
