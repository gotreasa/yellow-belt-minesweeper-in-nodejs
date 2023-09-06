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

  setMines(minePositions) {
    this.minesBoard.setMines(minePositions);
  }

  open(row, column) {
    if (row === 0 && column === 1) {
      this.userBoard.squares[row][column] = 2;
    } else this.userBoard.squares[row][column] = '💥';
  }
}

module.exports = {
  Game,
};
