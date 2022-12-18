export class Ship {
  constructor(player, type, coordinates) {
    this.player = player;
    this.type = type;
    this.shipName = `${player}'s ${type}`;
    this.coordinates = coordinates;
    this.hits = 0;
    this.isSunk = false;
    this.axis;
  }

  getPlayer = () => this.player;

  getType = () => this.type;

  setCoordinates = () => this.coordinates;

  getLength = () => {
    if (this.type == 'carrier') return 5;
    if (this.type == 'battleship') return 4;
    if (this.type == 'destroyer' || this.type == 'submarine') return 3;
    if (this.type == 'patrol boat') return 2;
  };

  hit = () => {
    this.hits++;
    if (this.hits == this.getLength()) {
      this.sinkShip(true);
      return this.isSunk;
    }
    return this.hits;
  };

  sunkStatus = () => {
    return this.isSunk;
  };
  sinkShip = (value) => {
    this.isSunk = value;
  };

  createShip = () => {
    const shipGenElement = document.getElementById('ship-generator-container');
    const shipContainer = document.createElement('div');
    shipContainer.setAttribute('class', 'ship-element');
    shipContainer.setAttribute('id', `${this.type}-element`);
    shipGenElement.append(shipContainer);
    let length;
    if (this.type == 'carrier') length = 5;
    if (this.type == 'battleship') length = 4;
    if (this.type == 'destroyer' || this.type == 'submarine') length = 3;
    if (this.type == 'patrol boat') length = 2;

    for (let i = length; i != 0; i--) {
      const shipCell = document.createElement('div');
      shipCell.setAttribute('class', 'ship-cell');
      shipContainer.append(shipCell);
    }
  };
}

//module.exports = Ship;
