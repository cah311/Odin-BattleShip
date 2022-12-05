// carrier = 5
// battleship = 4
// destroyer = 3
// submarine = 3
// patrol boat = 2

function Ship(player, type, coordinates) {
  let hits = 0;

  const getPlayer = () => player;

  const getType = () => type;

  const setCoordinates = () => coordinates;

  const shipName = `${player}'s ${type}`;

  const getLength = () => {
    if (type == 'carrier') return 5;
    if (type == 'battleship') return 4;
    if (type == 'destroyer' || type == 'submarine') return 3;
    if (type == 'patrol boat') return 2;
  };

  const hit = () => {
    hits++;
    if (hits == getLength()) {
      isSunk();
    }
    return hits;
  };

  const isSunk = () => {
    // if (hits == getLength()) {
    return true;
    // } else {
    //   return false;
    // }
  };

  return {
    getPlayer,
    getType,
    getLength,
    shipName,
    setCoordinates,
    hit,
    isSunk,
  };
}

module.exports = Ship;
