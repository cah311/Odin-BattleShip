import _ from 'lodash';
import './style.css';
import printMe from './print.js';

const Ship = require('./shipFactory.js');

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me for new ship';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
