import _ from 'lodash';
import './style.css';
import printMe from './print.js';

const sum = require('./sum.js');

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let num = sum(2, 13);
console.log('Num =' + num);

document.body.appendChild(component());
