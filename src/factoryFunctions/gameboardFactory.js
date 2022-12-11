const Ship = require('./shipFactory');

class Gameboard {
  constructor(owner) {
    this.owner = owner;
    this.cells = [];
    this.boats = 0;
    this.missedCells = 0;
    this.missedCellArray = [];
    this.takenAttacks = 0;
  }

  buildGameboard() {
    const gameContainer = document.getElementById('game-page');
    const gameboardContainer = document.createElement('div');
    gameboardContainer.setAttribute('class', 'game-board-container');

    gameContainer.append(gameboardContainer);

    const xAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    for (let i = 0; i <= yAxis.length - 1; i++) {
      for (let j = 0; j <= xAxis.length - 1; j++) {
        this.cells.push(new GameboardCell(xAxis[j], yAxis[i]));
        // eval("const " + 'cell' + i + j) = document.createElement('div')
        // eval("cell" + i + j).setAttribute('class', 'game-cell')
        // eval("cell" + i + j).setAttribute('id', `cell${i}${j}`)
        const cell = document.createElement('div');
        cell.setAttribute('class', 'game-cell');
        cell.setAttribute('id', `cell${xAxis[i]}${yAxis[j]}`);

        gameboardContainer.append(cell);
      }
    }
  }

  getRemainingBoats = (remainingBoats) => {
    return remainingBoats;
  };

  shipPlacement = (playerName, shipType, coordinates) => {
    let ship = new Ship(playerName, shipType);
    let shipCoord = coordinates;
    for (let i = 0; i <= shipCoord.length - 1; i++) {
      let j = 0;
      let k = 0;
      let currentCoord = shipCoord[i];
      while (currentCoord != this.cells[j].coordinate) {
        j++;
        k++;
      }
      this.cells[j].cellSpace = ship;
      this.cells[j].hasShip = true;
    }
    this.boats++;
    this.gameOver(this.boats);
  };

  recieveAttack = (attackCoordinates) => {
    this.takenAttacks++;
    let cellTest = this.cells.find(
      (cell) => cell.coordinate === attackCoordinates
    );
    cellTest.beenAttacked = true;
    if (cellTest.cellSpace == 'is empty') {
      this.missedCellArray.push(attackCoordinates);
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
  constructor(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.hasShip = false;
    this.coordinate = `${xCoordinate}${yCoordinate}`;
    this.cellSpace = 'is empty';
    this.beenAttacked = false;
  }
}

module.exports = { Gameboard, GameboardCell };
