import './styles/style.css';
import { gameLoop } from './gameFunctions/gameLoop';
import { Player } from './factoryFunctions/playerFactory';
import { Gameboard } from './factoryFunctions/gameboardFactory';
import { shipPlacement } from './gameFunctions/shipPlacement';
import { gameScreen, generateGameboards } from './gameFunctions/gameScreen';
import { Game } from './gameFunctions/gameObject';
import { welcomeScreen } from './gameFunctions/welcomeScreen';

let game;
welcomeScreen();
const startButton = document.getElementById('submit-button');
let playerName;

startButton.addEventListener('click', (e) => {
  playerName = document.getElementById('player-name-input').value;

  if (playerName == '') {
    alert('You must add your name!');
    return;
  }

  console.log(playerName);

  let player1 = new Player(playerName);
  let player2 = new Player();
  console.log(player1);
  console.log(player2);

  gameScreen();

  let player1Gameboard = new Gameboard(player1.name);
  let player2Gameboard = new Gameboard(player2.name);
  generateGameboards(player1Gameboard, player2Gameboard);
  shipPlacement(player1Gameboard, player2Gameboard);

  game = new Game(player1, player2, player1Gameboard, player2Gameboard);
  console.log(player1Gameboard);
  console.log(player2Gameboard);

  game.startGame();
  game.chooseWhoStarts();
  console.log(game);

  gameLoop(game);
});
