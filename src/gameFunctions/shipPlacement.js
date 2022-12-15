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
