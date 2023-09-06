const { Game } = require('../src/Game');
const {
  empty9x9Board,
  empty16x16Board,
  empty30x16Board,
} = require('./fixtures/emptyBoards');
const { scenario1For9x9Board } = require('./fixtures/minesBoards');

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
    // Mines in 0,0, 1,1, 2,1, 3,2, 4,5 5,6 6,5 7,7 8,1, 8,8
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
});
