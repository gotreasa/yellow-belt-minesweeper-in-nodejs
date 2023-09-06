const { Board } = require('./Board');

const SIZE = {
  beginner: [9, 9],
  intermediate: [16, 16],
  expert: [16, 30],
};

class Game {
  constructor(size) {
    this.userBoard = new Board(SIZE[size][0], SIZE[size][1]);
    this.minesBoard = new Board(SIZE[size][0], SIZE[size][1]);
  }

  setMines() {
    this.minesBoard.setMines([
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
  }
}

module.exports = {
  Game,
};
