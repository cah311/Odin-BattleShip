const gameBoardFactory = require('../src/gameboardFactory');
const gameboard = gameBoardFactory.Gameboard;
const cell = gameBoardFactory.GameboardCell;
const Ship = require('../src/shipFactory');

describe('Gameboard functions', () => {
  let testBoard;

  beforeAll(() => {
    testBoard = gameboard();
  });

  it('creates a gameboard', () => {
    expect(testBoard.cells).toContainEqual({
      cellSpace: 'is empty',
      coordinate: '1A',
    });
  });

  it('places ship at specified coordinates', () => {
    let chosenCoordinate = ['1A', '1B', '1C'];
    testBoard.shipPlacement('Greg', 'submarine', chosenCoordinate);

    expect(testBoard.cells).not.toContainEqual({
      cellSpace: 'is empty',
      coordinate: '1A',
    });

    expect(testBoard.cells).not.toContainEqual({
      cellSpace: 'is empty',
      coordinate: '1B',
    });

    expect(testBoard.cells).not.toContainEqual({
      cellSpace: 'is empty',
      coordinate: '1C',
    });
  });
});
