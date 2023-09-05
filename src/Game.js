const { Board } = require('./Board');

class Game {
  constructor() {
    this.userBoard = new Board(9, 9);
  }
}

module.exports = {
  Game,
};
