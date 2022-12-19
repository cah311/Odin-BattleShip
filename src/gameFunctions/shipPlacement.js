import { Ship } from '../factoryFunctions/shipFactory';
import { moveShip } from './shipMovement';

let shipsRemaining = 5;
let standby = false;
let currentShipType;

export function shipPlacement(player1Gameboard, player2Gameboard) {
  player1Gameboard.shipPlacement(player1Gameboard.owner, 'carrier', [
    '4C',
    '5C',
    '6C',
    '7C',
    '8C',
  ]);
  player1Gameboard.shipPlacement(player1Gameboard.owner, 'battleship', [
    '8E',
    '8F',
    '8G',
    '8H',
  ]);
  player1Gameboard.shipPlacement(player1Gameboard.owner, 'destroyer', [
    '2G',
    '2H',
    '2I',
  ]);
  player1Gameboard.shipPlacement(player1Gameboard.owner, 'patrol boat', [
    '5J',
    '6J',
  ]);
  player1Gameboard.shipPlacement(player1Gameboard.owner, 'submarine', [
    '1A',
    '1B',
    '1C',
  ]);

  player2Gameboard.shipPlacement(player2Gameboard.owner, 'carrier', [
    '4D',
    '5D',
    '6D',
    '7D',
    '8D',
  ]);
  player2Gameboard.shipPlacement(player2Gameboard.owner, 'battleship', [
    '9E',
    '9F',
    '9G',
    '9H',
  ]);
  player2Gameboard.shipPlacement(player2Gameboard.owner, 'destroyer', [
    '1G',
    '1H',
    '1I',
  ]);
  player2Gameboard.shipPlacement(player2Gameboard.owner, 'patrol boat', [
    '5H',
    '6H',
  ]);
  player2Gameboard.shipPlacement(player2Gameboard.owner, 'submarine', [
    '10A',
    '10B',
    '10C',
  ]);
}

export function shipPlacementPhase(player1Gameboard) {
  generateShipContainer();
  shipAxisButton();
  generateShips(player1Gameboard);
}

function generateShipContainer() {
  const gameContainer = document.getElementById('game-page');
  const shipGenerator = document.createElement('div');
  //shipGenerator.setAttribute('id', 'ship-generator');
  shipGenerator.setAttribute('id', 'ship-generator-container');

  gameContainer.append(shipGenerator);
}

function shipAxisButton() {
  const shipGenerator = document.getElementById('ship-generator-container');

  const axisButton = document.createElement('button');
  axisButton.innerHTML = 'Change Axis';
  axisButton.setAttribute('id', 'ship-axis-button');
  shipGenerator.append(axisButton);

  axisButton.addEventListener('click', (e) => {
    let shipElement = document.getElementById(`${currentShipType}-element`);

    if (shipElement.classList.contains('vertical')) {
      shipElement.classList.remove('vertical');
      shipElement.classList.add('horizontal');
    } else if (shipElement.classList.contains('horizontal')) {
      shipElement.classList.remove('horizontal');
      shipElement.classList.add('vertical');
    }
    console.log(shipElement);
  });
}

function generateShips(player1Gameboard) {
  const shipGenerator = document.getElementById('ship-generator-container');
  const gameBoard = player1Gameboard;

  while (shipsRemaining != 0 && standby == false) {
    if (shipsRemaining == 5) currentShipType = 'carrier';
    if (shipsRemaining == 4) currentShipType = 'battleship';
    if (shipsRemaining == 3) currentShipType = 'destroyer';
    if (shipsRemaining == 2) currentShipType = 'submarine';
    if (shipsRemaining == 1) currentShipType = 'patrol boat';

    let newShip = new Ship(player1Gameboard.owner, currentShipType);
    newShip.createShip();
    standby = true;
  }

  while (standby == true) {
    let shipElement = document.getElementById(`${currentShipType}-element`);
    shipElement.classList.add('moveable');
    shipElement.classList.add('vertical');
    moveShip(shipElement);
    setShip(gameBoard);
    return;
  }
}

export function setShip(board) {
  const playerBoard = document.getElementById(`${board.owner}-game-board`);
  console.log(playerBoard);

  playerBoard.addEventListener('mouseup', function (e) {
    // if (e.target.innerHTML != '') {
    //   return;
    // }

    let thing = e.target.id;
    // console.log(thing.includes('cell'));

    if (thing.includes('cell') == true) {
      let cell = thing.slice(4);
      console.log(cell);
    }
  });
}
