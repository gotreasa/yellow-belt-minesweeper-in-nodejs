class Board {
  constructor() {
    this.squares = [...Array(11)].map(() => Array(10));
  }
}

module.exports = {
  Board,
};
