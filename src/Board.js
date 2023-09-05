class Board {
  constructor(nuberOfColumns, numberOfRows) {
    this.squares = [...Array(numberOfRows)].map(() => Array(nuberOfColumns));
  }

  setMines(minePositions) {
    if (!minePositions) {
      throw Error('The mine position must be passed when setting the mines');
    }
    minePositions.forEach((minePosition) => {
      this.squares[minePosition[0]][minePosition[1]] = '☢️';
    });
  }
}

module.exports = {
  Board,
};
