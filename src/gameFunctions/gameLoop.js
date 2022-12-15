export function gameLoop(game) {
  game.chooseWhoStarts();
  let standby = true;
  let player1 = game.players[0];
  let player2 = game.players[1];
  let player1Gameboard = game.gameboards[0];
  let player2Gameboard = game.gameboards[1];
  let currentPlayer;
  const opponantBoard = document.getElementById('Computer-game-board');

  while (game.hasStarted == true && standby == false) {
    if (game.turn == player1) {
    } else if (game.turn == player2) {
    }
  }

  opponantBoard.addEventListener('click', function (e) {
    let thing = e.target.id;
    // console.log(thing.includes('cell'));
    if (thing.includes('cell') == true) {
      let cell = thing.slice(4);
      player2Gameboard.recieveAttack(cell);
    }
  });
}
