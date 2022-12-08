class Ship {
  constructor(player, type, coordinates) {
    this.player = player;
    this.type = type;
    this.shipName = `${player}'s ${type}`;
    this.coordinates = coordinates;
    this.hits = 0;
    this.isSunk = false;
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
}

module.exports = Ship;
