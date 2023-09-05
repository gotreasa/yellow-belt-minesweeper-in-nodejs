class Board {
  constructor(_, rows) {
    this.squares = [...Array(rows)].map(() => Array(10));
  }
}

module.exports = {
  Board,
};
