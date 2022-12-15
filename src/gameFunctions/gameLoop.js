export function gameLoop(game) {
  let standby = false;
  let player1 = game.players[0];
  let player2 = game.players[1];
  let player1Gameboard = game.gameboards[0];
  let player2Gameboard = game.gameboards[1];
  let currentPlayer;
  const opponantBoard = document.getElementById('Computer-game-board');

  while (game.hasStarted == true && standby == false) {
    if (game.turn == player1) {
      console.log('PLayer turn');
      standby = true;
    } else if (game.turn == player2) {
      console.log('Computer turn');
      game.turn = player1;
    }
  }

  opponantBoard.addEventListener('click', function (e) {
    let thing = e.target.id;
    // console.log(thing.includes('cell'));
    if (thing.includes('cell') == true) {
      let cell = thing.slice(4);
      player2Gameboard.recieveAttack(cell);
    }
    game.turn = player2;
    gameLoop(game);
  });
}
