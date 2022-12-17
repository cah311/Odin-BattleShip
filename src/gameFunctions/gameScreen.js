import { Player } from '../factoryFunctions/playerFactory';
import { Gameboard } from '../factoryFunctions/gameboardFactory';
import { shipPlacement } from './shipPlacement';
import { Game } from './gameObject';

export function gameScreen() {
  const gamePage = document.createElement('div');
  gamePage.setAttribute('id', 'game-page');

  const logo = document.createElement('h1');
  logo.setAttribute('class', 'welcome-logo');
  logo.innerHTML = 'BATTLESHIP';

  document.body.append(gamePage);
  gamePage.append(logo);
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

export function showOpponantBoard() {
  const opponantBoard = document.getElementById('Computer-game-board');
  opponantBoard.setAttribute('class', 'active');
}
