const gameBoardFactory = require('../src/gameboardFactory');
const gameboard = gameBoardFactory.Gameboard;
const cell = gameBoardFactory.GameboardCell;
const Ship = require('../src/shipFactory');

describe('Gameboard functions', () => {
  let testBoard;

  beforeAll(() => {
    testBoard = new gameboard();
    testBoard.buildGameboard();
  });

  it('creates a gameboard', () => {
    expect(testBoard.cells.length).toBe(100);
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

    expect(testBoard.cells).toContainEqual({
      cellSpace: 'is empty',
      coordinate: '1C',
    });
  });

  //   it('recieves attack', () => {
  //     testBoard.recieveAttack('2B');
  //     expect(testBoard.missedCellArray.length).toBe(1);
  //   });

  //   it('records hits on ship & sinks ship', () => {
  //     testBoard.recieveAttack('1A');
  //     testBoard.recieveAttack('1B');
  //     testBoard.recieveAttack('1C');

  //     const lastAttack = '1C';

  //     let cellTest = testBoard.cells.find(
  //       (cell) => cell.coordinate === lastAttack
  //     );
  //     let boat = cellTest.cellSpace;
  //     expect(boat.isSunk).toBe(true);
  //   });

  //   it('keeps track of misses and displays them', () => {
  //     testBoard.recieveAttack('10D');

  //     expect(testBoard.missedCellArray).toEqual(['2B', '10D']);
  //     expect(testBoard.missedCellArray.length).toBe(2);
  //   });

  //   it('shows if all boats are sunk', () => {
  //     testBoard.shipPlacement('Sam', 'carrier', ['4C', '5C', '6C', '7C', '8C']);
  //     testBoard.shipPlacement('Sally', 'battleship', ['8E', '8F', '8G', '8H']);
  //     testBoard.shipPlacement('Luis', 'destroyer', ['2G', '2H', '2I']);
  //     testBoard.shipPlacement('Preston', 'patrol boat', ['5J', '6J']);

  //     testBoard.recieveAttack('4C');
  //     testBoard.recieveAttack('5C');
  //     testBoard.recieveAttack('6C');
  //     testBoard.recieveAttack('7C');
  //     testBoard.recieveAttack('8C');

  //     testBoard.recieveAttack('8E');
  //     testBoard.recieveAttack('8F');
  //     testBoard.recieveAttack('8G');
  //     testBoard.recieveAttack('8H');

  //     testBoard.recieveAttack('2G');
  //     testBoard.recieveAttack('2H');
  //     testBoard.recieveAttack('2I');

  //     testBoard.recieveAttack('5J');
  //     testBoard.recieveAttack('6J');

  //     expect(testBoard.boats).toBe(0);
  //     expect(testBoard.gameOver(testBoard.boats)).toBe(true);
  //   });
});
