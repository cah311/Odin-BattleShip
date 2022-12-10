const gameboard = require('./gameboardFactory');

export class Player {
  constructor(name) {
    this.name = name;
    this.isComputer = false;
    this.isTurn = false;
    if (this.name == null) {
      this.name = 'Computer';
      this.isComputer = true;
    }
  }

  attack(opponantBoard, attackCoordinates) {
    if (this.isComputer == true) {
      let randomNumber = Math.floor(Math.random() * 101);
      let randomCell = opponantBoard.cells[randomNumber];
      while (randomCell.beenAttacked == true) {
        randomNumber = Math.random() * 100;
        randomCell = opponantBoard.cells[randomNumber];
      }
      return opponantBoard.recieveAttack(randomCell.coordinate);
    } else {
      return opponantBoard.recieveAttack(attackCoordinates);
    }
  }
}

//module.exports = { Player };
