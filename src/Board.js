const isOutsideBoard = (minePositions, squares) => {
  return minePositions.some(
    (minePosition) =>
      minePosition[0] < 0 ||
      minePosition[1] < 0 ||
      minePosition[0] > squares.length ||
      minePosition[1] > squares[0].length,
  );
};

class Board {
  constructor(nuberOfColumns, numberOfRows) {
    this.squares = [...Array(numberOfRows)].map(() => Array(nuberOfColumns));
  }

  setMines(minePositions) {
    if (!minePositions) {
      throw Error('The mine position must be passed when setting the mines');
    }
    if (isOutsideBoard(minePositions, this.squares)) {
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
