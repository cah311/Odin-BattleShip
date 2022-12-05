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

  it('recieves attack', () => {
    testBoard.recieveAttack('2B');
    expect(testBoard.missedCellArray.length).toBe(1);
  });

  it('records hits on ship & sinks ship', () => {
    testBoard.recieveAttack('1A');
    testBoard.recieveAttack('1B');
    testBoard.recieveAttack('1C');

    const lastAttack = '1C';

    let cellTest = testBoard.cells.find(
      (cell) => cell.coordinate === lastAttack
    );
    let boat = cellTest.cellSpace;
    expect(boat.isSunk()).toBe(true);
  });
});
