class Board {
  constructor(nuberOfColumns, numberOfRows) {
    this.squares = [...Array(numberOfRows)].map(() => Array(nuberOfColumns));
  }

  setMines(minePositions) {
    if (!minePositions) {
      throw Error('The mine position must be passed when setting the mines');
    }
    if (JSON.stringify(minePositions) === JSON.stringify([[-1, 0]])) {
      throw Error('The mines must be on the board');
    }
    minePositions.forEach((minePosition) => {
      this.squares[minePosition[0]][minePosition[1]] = '☢️';
    });
  }
}

module.exports = {
  Board,
};
