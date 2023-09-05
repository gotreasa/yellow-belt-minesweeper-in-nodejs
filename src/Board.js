class Board {
  constructor(nuberOfColumns, numberOfRows) {
    this.squares = [...Array(numberOfRows)].map(() => Array(nuberOfColumns));
  }

  setMines(minePositions) {
    minePositions.forEach((minePosition) => {
      this.squares[minePosition[0]][minePosition[1]] = '☢️';
    });
  }
}

module.exports = {
  Board,
};
