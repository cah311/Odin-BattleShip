import _ from 'lodash';
import './style.css';
import printMe from './print.js';

const sum = require('./sum.js');
const Ship = require('./shipFactory.js');

function newShip() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = 'Create a ship:';
  element.classList.add('create-ship-button');

  btn.innerHTML = 'Click me for new ship';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let num = sum(2, 13);
console.log('Num =' + num);

const myNewShip = Ship('beezlebob', 'submarine');
console.log(myNewShip);
console.log(myNewShip.getPlayer());
console.log(myNewShip.getType());
console.log(myNewShip.getLength());

document.body.appendChild(newShip());
