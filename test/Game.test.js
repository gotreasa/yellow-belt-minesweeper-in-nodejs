const { Game } = require('../src/Game');
const {
  EMPTY_9_X_9_BOARD,
  EMPTY_16_X_16_BOARD,
  EMPTY_30_X_16_BOARD,
} = require('./fixtures/emptyBoards');
const {
  SCENARIO_1_FOR_9_X_9_BOARD,
  SCENARIO_2_16_X_16_BOARD,
  SCENARIO_3_FOR_9_X_9_BOARD,
  SCENARIO_4_FOR_9_X_9_BOARD,
} = require('./fixtures/minesBoards');

describe('Initialise the Game', () => {
  test('should set up a beginner user board', () => {
    const game = new Game('beginner');
    expect(game.userBoard.squares).toEqual(EMPTY_9_X_9_BOARD);
  });

  test('should set up an intermediate user board', () => {
    const game = new Game('intermediate');
    expect(game.userBoard.squares).toEqual(EMPTY_16_X_16_BOARD);
  });

  test('should set up an expert user board', () => {
    const game = new Game('expert');
    expect(game.userBoard.squares).toEqual(EMPTY_30_X_16_BOARD);
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
    expect(game.minesBoard.squares).toEqual(SCENARIO_1_FOR_9_X_9_BOARD);
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

describe('Play the game', () => {
  test('should reveal an explosion when a mine is uncovered in position 1,1', () => {
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
    game.open(1, 1);
    expect(game.userBoard.squares).toEqual(SCENARIO_3_FOR_9_X_9_BOARD);
  });

  test('should reveal an explosion when a mine is uncovered in position 2,1', () => {
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
    game.open(2, 1);
    expect(game.userBoard.squares).toEqual(SCENARIO_4_FOR_9_X_9_BOARD);
  });

  test('should reveal there are two mines surrounding position 0,1', () => {
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
    game.open(0, 1);
    expect(game.userBoard.squares[0][1]).toBe(2);
  });

  test('should reveal there is one mine surrounding position 0,2', () => {
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
    game.open(0, 2);
    expect(game.userBoard.squares[0][2]).toBe(1);
  });

  test('should reveal there are three mines surrounding position 2,2', () => {
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
    game.open(2, 2);
    expect(game.userBoard.squares[2][2]).toBe(3);
  });
});
