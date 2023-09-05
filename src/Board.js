const outsideBoard = (minePositions) => {
  return minePositions.some(
    (minePosition) => minePosition[0] < 0 || minePosition[1] < 0,
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
    if (outsideBoard(minePositions)) {
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
