const Game = require('../src/Game');

describe('Initialise the Game', () => {
    test('should set up a beginner user board with the mines', () => {
        const game = new Game('beginner');
        expect(game.userBoard.squares).toEqual([
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
        ])
    });
});