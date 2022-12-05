const Ship = require('./shipFactory');

function Gameboard() {
  const cells = [];
  const xAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  for (let i = 0; i <= yAxis.length - 1; i++) {
    for (let j = 0; j <= xAxis.length - 1; j++) {
      cells.push(new GameboardCell(xAxis[j], yAxis[i]));
    }
  }

  const shipPlacement = (playerName, shipType, coordinates) => {
    let ship = Ship(playerName, shipType);
    let shipCoord = coordinates;
    for (let i = 0; i <= shipCoord.length - 1; i++) {
      let j = 0;
      let k = 0;
      let currentCoord = shipCoord[i];

      while (currentCoord != cells[j].coordinate) {
        console.log(currentCoord);
        console.log(cells[j].coordinate);
        j++;
        k++;
      }
      cells[j].cellSpace = ship;
    }
  };

  const recieveAttack = () => {};

  return { cells, shipPlacement, recieveAttack };
}

function GameboardCell(xCoordinate, yCoordinate, hasShip) {
  const x = xCoordinate;
  const y = yCoordinate;

  //   const cellName = `${x}${y}`;
  const coordinate = `${x}${y}`;

  const cellSpace = 'is empty';
  if (hasShip != undefined) cellSpace = hasShip;

  return { coordinate, cellSpace };
}

module.exports = { Gameboard, GameboardCell };
