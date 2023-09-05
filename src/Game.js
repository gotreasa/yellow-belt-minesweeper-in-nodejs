const { Board } = require('./Board');

const SIZE = {
  beginner: [9, 9],
  intermediate: [16, 16],
  expert: [16, 30],
};

class Game {
  constructor(size) {
    this.userBoard = new Board(SIZE[size][0], SIZE[size][1]);
  }
}

module.exports = {
  Game,
};
