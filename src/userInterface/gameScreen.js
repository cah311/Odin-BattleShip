import { Player } from '../factoryFunctions/playerFactory';

export function gameScreen() {
  const gamePage = document.createElement('div');
  gamePage.setAttribute('id', 'game-page');

  document.body.append(gamePage);
}

export function generateGameboards() {
  let playerName = document.getElementById('player-name-input').value;
  console.log(playerName);
  let player1 = new Player(playerName);
  let player2 = new Player();
  console.log(player1);
  console.log(player2);

  event.preventDefault();
}
