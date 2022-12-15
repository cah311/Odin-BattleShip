export class Game {
  constructor(player1, player2, player1Gameboard, player2Gameboard) {
    this.hasStarted = false;
    this.players = [player1, player2];
    this.gameboards = [player1Gameboard, player2Gameboard];
    this.turn;
  }

  startGame() {
    this.hasStarted = true;
  }

  chooseWhoStarts() {
    let randomNum = Math.floor(Math.random() * this.players.length);
    this.turn = this.players[randomNum];
  }

  changeTurns() {
    if (this.turn === this.players[0]) {
      this.turn = this.players[1];
    } else {
      this.turn = this.players[0];
    }
  }
}
