const Ship = require('./shipFactory');

class Gameboard {
  constructor() {
    this.cells = [];
    this.boats = 0;
    this.missedCells = 0;
    this.missedCellArray = [];
  }

  getRemainingBoats = (remainingBoats) => {
    return remainingBoats;
  };

  buildGameboard() {
    const xAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    for (let i = 0; i <= yAxis.length - 1; i++) {
      for (let j = 0; j <= xAxis.length - 1; j++) {
        this.cells.push(new GameboardCell(xAxis[j], yAxis[i]));
      }
    }
  }

  shipPlacement = (playerName, shipType, coordinates) => {
    let ship = new Ship(playerName, shipType);
    let shipCoord = coordinates;
    for (let i = 0; i <= shipCoord.length - 1; i++) {
      let j = 0;
      let k = 0;
      let currentCoord = shipCoord[i];
      //   console.log(this.cells[j].coordinate);
      while (currentCoord != this.cells[j].coordinate) {
        j++;
        k++;
      }
      this.cells[j].cellSpace = ship;
    }
    this.boats++;
  };

  recieveAttack = (cellCoordinates) => {
    let cellTest = this.cells.find(
      (cell) => cell.coordinate === cellCoordinates
    );
    if (cellTest.cellSpace == 'is empty') {
      this.missedCellArray.push(cellCoordinates);
      this.missedCells++;
      return;
    } else {
      let shipIdentifier = cellTest.cellSpace;
      shipIdentifier.hit();
      if (shipIdentifier.isSunk == true) {
        this.boats--;
        if (this.boats == 0) {
          this.gameOver(this.boats);
        }
      }
    }
  };

  gameOver = (remainingBoats) => {
    if (remainingBoats == 0) {
      return true;
    } else {
      return false;
    }
  };
}

class GameboardCell {
  constructor(xCoordinate, yCoordinate, hasShip) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.hasShip = hasShip;
    this.coordinate = `${xCoordinate}${yCoordinate}`;

    this.cellSpace = 'is empty';
    if (this.hasShip != undefined) this.cellSpace = this.hasShip;
  }
}

module.exports = { Gameboard, GameboardCell };
