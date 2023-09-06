const { Game } = require('../src/Game');
const {
  empty9x9Board,
  empty16x16Board,
  empty30x16Board,
} = require('./fixtures/emptyBoards');
const {
  scenario1For9x9Board,
  SCENARIO_2_16_X_16_BOARD,
} = require('./fixtures/minesBoards');

describe('Initialise the Game', () => {
  test('should set up a beginner user board', () => {
    const game = new Game('beginner');
    expect(game.userBoard.squares).toEqual(empty9x9Board);
  });

  test('should set up an intermediate user board', () => {
    const game = new Game('intermediate');
    expect(game.userBoard.squares).toEqual(empty16x16Board);
  });

  test('should set up an expert user board', () => {
    const game = new Game('expert');
    expect(game.userBoard.squares).toEqual(empty30x16Board);
  });

  test('should setup a mine beginner board with 10 mines', () => {
    const game = new Game('beginner');
    game.setMines([
      [0, 0],
      [1, 1],
      [2, 1],
      [3, 2],
      [4, 5],
      [5, 6],
      [6, 5],
      [7, 7],
      [8, 1],
      [8, 8],
    ]);
    expect(game.minesBoard.squares).toEqual(scenario1For9x9Board);
  });

  test('should setup a mine intermediate board with 40 mines', () => {
    const game = new Game('intermediate');
    game.setMines([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [0, 7],
      [0, 8],
      [0, 9],
      [0, 10],
      [0, 11],
      [0, 12],
      [0, 13],
      [0, 14],
      [0, 15],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7],
      [1, 8],
      [1, 9],
      [1, 10],
      [1, 11],
      [1, 12],
      [1, 13],
      [1, 14],
      [1, 15],
      [2, 1],
      [3, 2],
      [4, 5],
      [5, 6],
      [6, 5],
      [7, 7],
      [8, 1],
      [8, 8],
    ]);
    expect(game.minesBoard.squares).toEqual(SCENARIO_2_16_X_16_BOARD);
  });
});
