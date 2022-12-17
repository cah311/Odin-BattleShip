export function gameLoop(game) {
  let standby = false;
  let player1 = game.players[0];
  let player2 = game.players[1];
  let player1Gameboard = game.gameboards[0];
  let player2Gameboard = game.gameboards[1];
  let currentPlayer;
  let currentAttacks = 0;
  const opponantBoard = document.getElementById('Computer-game-board');

  while (game.hasStarted == true && standby == false) {
    if (player1Gameboard.boats == 0) {
      alert('player2 wins');
      return;
    } else if (player2Gameboard.boats == 0) {
      alert('player 1 wins');
      return;
    }
    if (game.turn == player1) {
      console.log('PLayer turn');
      standby = true;
    } else if (game.turn == player2) {
      console.log('Computer turn');
      player2.attack(player1Gameboard);
      game.turn = player1;
    }
  }

  opponantBoard.addEventListener('click', function (e) {
    if (e.target.innerHTML != '') {
      return;
    }
    if (currentAttacks === 0) {
      let thing = e.target.id;
      // console.log(thing.includes('cell'));

      if (thing.includes('cell') == true) {
        let cell = thing.slice(4);
        //player2Gameboard.recieveAttack(cell);
        player1.attack(player2Gameboard, cell);
        currentAttacks++;
      }
      game.turn = player2;
      gameLoop(game);
    }
  });
  currentAttacks = 0;
}
