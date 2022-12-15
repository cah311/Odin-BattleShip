import { Player } from '../factoryFunctions/playerFactory';
import { Gameboard } from '../factoryFunctions/gameboardFactory';
import { shipPlacement } from './shipPlacement';
import { Game } from './gameObject';

export function gameScreen() {
  const gamePage = document.createElement('div');
  gamePage.setAttribute('id', 'game-page');

  document.body.append(gamePage);
}

export function generateGameboards(player1Gameboard, player2Gameboard) {
  //gameScreen();
  const gameContainer = document.getElementById('game-page');
  // let playerName = document.getElementById('player-name-input').value;
  // console.log(playerName);
  // let player1 = new Player(playerName);
  // let player2 = new Player();
  // console.log(player1);
  // console.log(player2);

  // let player1Gameboard = new Gameboard(player1.name);
  // let player2Gameboard = new Gameboard(player2.name);
  gameContainer.append(player1Gameboard.buildGameboard());
  gameContainer.append(player2Gameboard.buildGameboard());
  //shipPlacement(player1Gameboard, player2Gameboard);
  // initiateGame(player1, player2);
  // console.log(player1Gameboard);
  // console.log(player2Gameboard);
}

// export function initiateGame(player1, player2) {
//   let game = new Game(player1, player2);
// }
