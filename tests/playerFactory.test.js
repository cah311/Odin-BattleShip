import { Player } from '../src/factoryFunctions/playerFactory';

const gameBoardFactory = require('../src/factoryFunctions/gameboardFactory');
//const player = playerFactory.Player;
const gameboard = gameBoardFactory.Gameboard;

describe('Player functions...', () => {
  let player1;
  let p1Gameboard;

  let player2;
  let p2Gameboard;

  beforeAll(() => {
    player1 = new Player('Carson');
    p1Gameboard = new gameboard(player1.name);
    p1Gameboard.buildGameboard();

    player2 = new Player('Comp');
    player2.isComputer = true;
    p2Gameboard = new gameboard(player2.name);
    p2Gameboard.buildGameboard();
  });

  afterAll(() => {
    player1 = null;
    p1Gameboard = null;

    player2 = null;
    p2Gameboard = null;
  });

  it('shows that a player has been created', () => {
    expect(player1.name).toEqual('Carson');
    expect(player1.isComputer).toEqual(false);
  });

  it('creates a gameboard for the player', () => {
    expect(p1Gameboard.owner).toEqual('Carson');
  });

  // game player object for computer. Make computer gameboard. Simulate each player attacking eachother
  it('attacks opponants gameboard', () => {
    player1.attack(p2Gameboard, '1A');

    let opponantCellTest = p2Gameboard.cells.find(
      (cell) => cell.coordinate === '1A'
    );

    expect(opponantCellTest.beenAttacked).toEqual(true);
  });

  it('makes computer perform a random valid attack', () => {
    player2.attack(p1Gameboard);

    expect(p1Gameboard.takenAttacks).toBe(1);
  });
});
