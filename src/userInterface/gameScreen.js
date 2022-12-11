import { Player } from '../factoryFunctions/playerFactory';
import { Gameboard } from '../factoryFunctions/gameboardFactory';

export function gameScreen() {
  const gamePage = document.createElement('div');
  gamePage.setAttribute('id', 'game-page');

  document.body.append(gamePage);
}

export function generateGameboards() {
  gameScreen();
  const gameContainer = document.getElementById('game-page');
  let playerName = document.getElementById('player-name-input').value;
  console.log(playerName);
  let player1 = new Player(playerName);
  let player2 = new Player();
  console.log(player1);
  console.log(player2);

  let player1Gameboard = new Gameboard(player1.name);
  let player2Gameboard = new Gameboard(player2.name);
  gameContainer.append(player1Gameboard.buildGameboard());
  gameContainer.append(player2Gameboard.buildGameboard());

  console.log(player1Gameboard);
  console.log(player2Gameboard);
}
