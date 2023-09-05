const { Game } = require('../src/Game');
const {
  empty9x9Board,
  empty16x16Board,
  empty30x16Board,
} = require('./fixtures/emptyBoards');

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
});
