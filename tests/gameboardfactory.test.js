const gameBoardFactory = require('../src/factoryFunctions/gameboardFactory');
const gameboard = gameBoardFactory.Gameboard;
const cell = gameBoardFactory.GameboardCell;
//const Ship = require('../src/shipFactory');

describe('Gameboard functions', () => {
  let playerTestBoard;
  let opponantTestBoard;

  beforeAll(() => {
    playerTestBoard = new gameboard();
    playerTestBoard.buildGameboard();

    opponantTestBoard = new gameboard();
    opponantTestBoard.buildGameboard();
  });

  it('creates a gameboard', () => {
    expect(playerTestBoard.cells.length).toBe(100);
  });

  it('places ship at specified coordinates', () => {
    let chosenCoordinate = ['1A', '1B', '1C'];
    playerTestBoard.shipPlacement('Greg', 'submarine', chosenCoordinate);

    let sampleCell1 = playerTestBoard.cells.find(
      (cell) => cell.coordinate === chosenCoordinate[0]
    );

    let sampleCell2 = playerTestBoard.cells[2];

    expect(sampleCell1.coordinate).toEqual('1A');

    expect(sampleCell1.cellSpace).not.toEqual('is empty');

    expect(sampleCell2.cellSpace).toEqual('is empty');
  });

  it('recieves attack', () => {
    playerTestBoard.recieveAttack('2B');
    let sampleCell = playerTestBoard.cells.find(
      (cell) => cell.coordinate === '2B'
    );
    expect(playerTestBoard.missedCells).toBe(1);
    expect(playerTestBoard.missedCellArray).toEqual(['2B']);
    expect(sampleCell.beenAttacked).toEqual(true);
  });

  it('records hits on ship & sinks ship', () => {
    playerTestBoard.recieveAttack('1A');
    playerTestBoard.recieveAttack('1B');
    playerTestBoard.recieveAttack('1C');

    const lastAttack = '1C';

    let cellTest = playerTestBoard.cells.find(
      (cell) => cell.coordinate === lastAttack
    );
    let boat = cellTest.cellSpace;
    expect(boat.isSunk).toBe(true);
  });

  it('keeps track of misses and displays them', () => {
    playerTestBoard.recieveAttack('10D');

    expect(playerTestBoard.missedCellArray).toEqual(['2B', '10D']);
    expect(playerTestBoard.missedCells).toBe(2);
  });

  it('shows if all boats are sunk', () => {
    playerTestBoard.shipPlacement('Sam', 'carrier', [
      '4C',
      '5C',
      '6C',
      '7C',
      '8C',
    ]);
    playerTestBoard.shipPlacement('Sally', 'battleship', [
      '8E',
      '8F',
      '8G',
      '8H',
    ]);
    playerTestBoard.shipPlacement('Luis', 'destroyer', ['2G', '2H', '2I']);
    playerTestBoard.shipPlacement('Preston', 'patrol boat', ['5J', '6J']);

    playerTestBoard.recieveAttack('4C');
    playerTestBoard.recieveAttack('5C');
    playerTestBoard.recieveAttack('6C');
    playerTestBoard.recieveAttack('7C');
    playerTestBoard.recieveAttack('8C');

    playerTestBoard.recieveAttack('8E');
    playerTestBoard.recieveAttack('8F');
    playerTestBoard.recieveAttack('8G');
    playerTestBoard.recieveAttack('8H');

    playerTestBoard.recieveAttack('2G');
    playerTestBoard.recieveAttack('2H');
    playerTestBoard.recieveAttack('2I');

    playerTestBoard.recieveAttack('5J');
    playerTestBoard.recieveAttack('6J');

    expect(playerTestBoard.boats).toBe(0);
    expect(playerTestBoard.gameOver(playerTestBoard.boats)).toBe(true);
  });
});
