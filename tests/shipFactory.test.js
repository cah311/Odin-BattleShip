const Ship = require('../src/shipFactory');

const myBattleship = Ship('Carson', 'battleship');

it('returns player name', () => {
  expect(myBattleship.getPlayer()).toEqual('Carson');
});
it('returns type of ship', () => {
  expect(myBattleship.getType()).toEqual('battleship');
});

it('returns length of ship', () => {
  expect(myBattleship.getLength()).toEqual(4);
});

it('returns length of ship', () => {
  const myBattleship2 = Ship('Carson', 'carrier');

  expect(myBattleship2.getLength()).toEqual(5);
});

it('should sink the battleship', () => {
  myBattleship.hit();
  myBattleship.hit();
  myBattleship.hit();
  myBattleship.hit();

  expect(myBattleship.isSunk()).toBe(true);
});
it('shows ship coordinates', () => {
  const placement = [
    { x: 1, y: 'A' },
    { x: 1, y: 'B' },
    { x: 1, y: 'C' },
  ];
  const myShip = Ship('Greg', 'destroyer', placement);

  expect(myShip.setCoordinates()).toStrictEqual([
    { x: 1, y: 'A' },
    { x: 1, y: 'B' },
    { x: 1, y: 'C' },
  ]);
});
