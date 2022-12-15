/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hello {\n  color: red;\n}\n\n.game-page {\n  width: 100wv;\n  height: 100hv;\n}\n\n.game-cell {\n  height: 2rem;\n  width: 2rem;\n  border: 2.9px solid black;\n}\n\n.game-board-container {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid red;\n  height: 23.6rem;\n  width: 23.8rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,cAAc;AAChB","sourcesContent":[".hello {\n  color: red;\n}\n\n.game-page {\n  width: 100wv;\n  height: 100hv;\n}\n\n.game-cell {\n  height: 2rem;\n  width: 2rem;\n  border: 2.9px solid black;\n}\n\n.game-board-container {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid red;\n  height: 23.6rem;\n  width: 23.8rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factoryFunctions/gameboardFactory.js":
/*!**************************************************!*\
  !*** ./src/factoryFunctions/gameboardFactory.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./shipFactory */ "./src/factoryFunctions/shipFactory.js");

class Gameboard {
  constructor(owner) {
    this.owner = owner;
    this.cells = [];
    this.boats = 0;
    this.missedCells = 0;
    this.missedCellArray = [];
    this.takenAttacks = 0;
  }

  buildGameboard() {
    const gameContainer = document.getElementById('game-page');
    const gameboardContainer = document.createElement('div');
    gameboardContainer.setAttribute('class', 'game-board-container');
    gameboardContainer.setAttribute('id', `${this.owner}-game-board`);

    gameContainer.append(gameboardContainer);

    const xAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    for (let i = 0; i <= yAxis.length - 1; i++) {
      for (let j = 0; j <= xAxis.length - 1; j++) {
        this.cells.push(new GameboardCell(xAxis[j], yAxis[i]));
        // eval("const " + 'cell' + i + j) = document.createElement('div')
        // eval("cell" + i + j).setAttribute('class', 'game-cell')
        // eval("cell" + i + j).setAttribute('id', `cell${i}${j}`)
        const cell = document.createElement('div');
        cell.setAttribute('class', 'game-cell');
        cell.setAttribute('id', `cell${xAxis[j]}${yAxis[i]}`);

        gameboardContainer.append(cell);
      }
    }
  }

  getRemainingBoats = (remainingBoats) => {
    return remainingBoats;
  };

  shipPlacement = (playerName, shipType, coordinates) => {
    let ship = new Ship(playerName, shipType);
    let shipCoord = coordinates;
    for (let i = 0; i <= shipCoord.length - 1; i++) {
      let j = 0;
      let k = 0;
      let currentCoord = shipCoord[i];
      while (currentCoord != this.cells[j].coordinate) {
        j++;
        k++;
      }
      this.cells[j].cellSpace = ship;
      this.cells[j].hasShip = true;
    }
    this.boats++;
    this.gameOver(this.boats);
  };

  recieveAttack = (attackCoordinates) => {
    const attackedCell = document
      .getElementById(`${this.owner}-game-board`)
      .querySelector(`#cell${attackCoordinates}`);
    const attackMarker = document.createElement('div');
    this.takenAttacks++;
    let cellTest = this.cells.find(
      (cell) => cell.coordinate === attackCoordinates
    );
    if (cellTest.beenAttacked == false) {
      if (cellTest.cellSpace == 'is empty') {
        cellTest.beenAttacked = true;
        this.missedCellArray.push(attackCoordinates);
        this.missedCells++;
        attackMarker.innerHTML = 'X';
        attackedCell.append(attackMarker);
        return;
      } else {
        cellTest.beenAttacked = true;
        let shipIdentifier = cellTest.cellSpace;
        shipIdentifier.hit();
        attackMarker.innerHTML = 'O';
        attackedCell.append(attackMarker);
        if (shipIdentifier.isSunk == true) {
          this.boats--;
          if (this.boats == 0) {
            this.gameOver(this.boats);
          }
        }
      }
    }
  };

  gameOver = (remainingBoats) => {
    if (remainingBoats == 0) {
      return true;
    } else {
      return false;
    }
  };
}

class GameboardCell {
  constructor(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.hasShip = false;
    this.coordinate = `${xCoordinate}${yCoordinate}`;
    this.cellSpace = 'is empty';
    this.beenAttacked = false;
  }
}

module.exports = { Gameboard, GameboardCell };


/***/ }),

/***/ "./src/factoryFunctions/playerFactory.js":
/*!***********************************************!*\
  !*** ./src/factoryFunctions/playerFactory.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
const gameboard = __webpack_require__(/*! ./gameboardFactory */ "./src/factoryFunctions/gameboardFactory.js");

class Player {
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


/***/ }),

/***/ "./src/factoryFunctions/shipFactory.js":
/*!*********************************************!*\
  !*** ./src/factoryFunctions/shipFactory.js ***!
  \*********************************************/
/***/ ((module) => {

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


/***/ }),

/***/ "./src/gameFunctions/gameLoop.js":
/*!***************************************!*\
  !*** ./src/gameFunctions/gameLoop.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop)
/* harmony export */ });
function gameLoop(game) {
  game.chooseWhoStarts();
  let standby = true;
  let player1 = game.players[0];
  let player2 = game.players[1];
  let player1Gameboard = game.gameboards[0];
  let player2Gameboard = game.gameboards[1];
  let currentPlayer;
  const opponantBoard = document.getElementById('Computer-game-board');

  while (game.hasStarted == true && standby == false) {
    if (game.turn == player1) {
    } else if (game.turn == player2) {
    }
  }

  opponantBoard.addEventListener('click', function (e) {
    let thing = e.target.id;
    // console.log(thing.includes('cell'));
    if (thing.includes('cell') == true) {
      let cell = thing.slice(4);
      player2Gameboard.recieveAttack(cell);
    }
  });
}


/***/ }),

/***/ "./src/gameFunctions/gameObject.js":
/*!*****************************************!*\
  !*** ./src/gameFunctions/gameObject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
class Game {
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


/***/ }),

/***/ "./src/gameFunctions/gameScreen.js":
/*!*****************************************!*\
  !*** ./src/gameFunctions/gameScreen.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameScreen": () => (/* binding */ gameScreen),
/* harmony export */   "generateGameboards": () => (/* binding */ generateGameboards)
/* harmony export */ });
/* harmony import */ var _factoryFunctions_playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factoryFunctions/playerFactory */ "./src/factoryFunctions/playerFactory.js");
/* harmony import */ var _factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factoryFunctions/gameboardFactory */ "./src/factoryFunctions/gameboardFactory.js");
/* harmony import */ var _factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shipPlacement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipPlacement */ "./src/gameFunctions/shipPlacement.js");
/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameObject */ "./src/gameFunctions/gameObject.js");





function gameScreen() {
  const gamePage = document.createElement('div');
  gamePage.setAttribute('id', 'game-page');

  document.body.append(gamePage);
}

function generateGameboards(player1Gameboard, player2Gameboard) {
  //gameScreen();
  const gameContainer = document.getElementById('game-page');
  // let playerName = document.getElementById('player-name-input').value;
  // console.log(playerName);
  // let player1 = new Player(playerName);
  // let player2 = new Player();
  // console.log(player1);
  // console.log(player2);

  // let player1Gameboard = new Gameboard(player1.name);
  // let player2Gameboard = new Gameboard(player2.name);
  gameContainer.append(player1Gameboard.buildGameboard());
  gameContainer.append(player2Gameboard.buildGameboard());
  //shipPlacement(player1Gameboard, player2Gameboard);
  // initiateGame(player1, player2);
  // console.log(player1Gameboard);
  // console.log(player2Gameboard);
}

// export function initiateGame(player1, player2) {
//   let game = new Game(player1, player2);
// }


/***/ }),

/***/ "./src/gameFunctions/shipPlacement.js":
/*!********************************************!*\
  !*** ./src/gameFunctions/shipPlacement.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipPlacement": () => (/* binding */ shipPlacement)
/* harmony export */ });
function shipPlacement(player1Gameboard, player2Gameboard) {
  player1Gameboard.shipPlacement(player1Gameboard.owner, 'carrier', [
    '4C',
    '5C',
    '6C',
    '7C',
    '8C',
  ]);
  player1Gameboard.shipPlacement(player1Gameboard.owner, 'battleship', [
    '8E',
    '8F',
    '8G',
    '8H',
  ]);
  player1Gameboard.shipPlacement(player1Gameboard.owner, 'destroyer', [
    '2G',
    '2H',
    '2I',
  ]);
  player1Gameboard.shipPlacement(player1Gameboard.owner, 'patrol boat', [
    '5J',
    '6J',
  ]);
  player1Gameboard.shipPlacement(player1Gameboard.owner, 'submarine', [
    '1A',
    '1B',
    '1C',
  ]);

  player2Gameboard.shipPlacement(player2Gameboard.owner, 'carrier', [
    '4D',
    '5D',
    '6D',
    '7D',
    '8D',
  ]);
  player2Gameboard.shipPlacement(player2Gameboard.owner, 'battleship', [
    '9E',
    '9F',
    '9G',
    '9H',
  ]);
  player2Gameboard.shipPlacement(player2Gameboard.owner, 'destroyer', [
    '1G',
    '1H',
    '1I',
  ]);
  player2Gameboard.shipPlacement(player2Gameboard.owner, 'patrol boat', [
    '5H',
    '6H',
  ]);
  player2Gameboard.shipPlacement(player2Gameboard.owner, 'submarine', [
    '10A',
    '10B',
    '10C',
  ]);
}


/***/ }),

/***/ "./src/gameFunctions/welcomeScreen.js":
/*!********************************************!*\
  !*** ./src/gameFunctions/welcomeScreen.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "welcomeScreen": () => (/* binding */ welcomeScreen)
/* harmony export */ });
/* harmony import */ var _gameScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameScreen */ "./src/gameFunctions/gameScreen.js");


function welcomeScreen() {
  const welcomePage = document.createElement('div');
  welcomePage.setAttribute('class', 'welcome-welcomePage');

  // logo
  const welcomeGameLogo = document.createElement('h1');
  welcomeGameLogo.setAttribute('class', 'welcome-logo');
  welcomeGameLogo.innerHTML = 'BATTLESHIP';

  //player name input
  const nameInputForm = document.createElement('div');
  //nameInputForm.setAttribute('method', 'post');

  const formwelcomePage = document.createElement('div');
  formwelcomePage.setAttribute('class', 'form-welcomePage');

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'player-name-input');
  nameLabel.innerHTML = 'ENTER PLAYER NAME:';

  const nameInput = document.createElement('input');
  nameInput.setAttribute('id', 'player-name-input');
  nameInput.setAttribute('name', 'player-name');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('placeholder', 'Enter Name');

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'submit-button');
  submitButton.innerHTML = 'Start Game';
  //submitButton.onclick = generateGameboards;

  //appends
  document.body.append(welcomePage);
  welcomePage.append(welcomeGameLogo);
  welcomePage.append(nameInputForm);
  nameInputForm.append(formwelcomePage);
  formwelcomePage.append(nameLabel);
  formwelcomePage.append(nameInput);
  formwelcomePage.append(submitButton);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _gameFunctions_gameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameFunctions/gameLoop */ "./src/gameFunctions/gameLoop.js");
/* harmony import */ var _factoryFunctions_playerFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factoryFunctions/playerFactory */ "./src/factoryFunctions/playerFactory.js");
/* harmony import */ var _factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factoryFunctions/gameboardFactory */ "./src/factoryFunctions/gameboardFactory.js");
/* harmony import */ var _factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _gameFunctions_shipPlacement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameFunctions/shipPlacement */ "./src/gameFunctions/shipPlacement.js");
/* harmony import */ var _gameFunctions_gameScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameFunctions/gameScreen */ "./src/gameFunctions/gameScreen.js");
/* harmony import */ var _gameFunctions_gameObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gameFunctions/gameObject */ "./src/gameFunctions/gameObject.js");
/* harmony import */ var _gameFunctions_welcomeScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gameFunctions/welcomeScreen */ "./src/gameFunctions/welcomeScreen.js");









let game;
(0,_gameFunctions_welcomeScreen__WEBPACK_IMPORTED_MODULE_7__.welcomeScreen)();
const startButton = document.getElementById('submit-button');
let playerName;

startButton.addEventListener('click', (e) => {
  playerName = document.getElementById('player-name-input').value;

  if (playerName == '') {
    alert('You must add your name!');
    return;
  }

  console.log(playerName);

  let player1 = new _factoryFunctions_playerFactory__WEBPACK_IMPORTED_MODULE_2__.Player(playerName);
  let player2 = new _factoryFunctions_playerFactory__WEBPACK_IMPORTED_MODULE_2__.Player();
  console.log(player1);
  console.log(player2);

  (0,_gameFunctions_gameScreen__WEBPACK_IMPORTED_MODULE_5__.gameScreen)();

  let player1Gameboard = new _factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_3__.Gameboard(player1.name);
  let player2Gameboard = new _factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_3__.Gameboard(player2.name);
  (0,_gameFunctions_gameScreen__WEBPACK_IMPORTED_MODULE_5__.generateGameboards)(player1Gameboard, player2Gameboard);
  (0,_gameFunctions_shipPlacement__WEBPACK_IMPORTED_MODULE_4__.shipPlacement)(player1Gameboard, player2Gameboard);

  game = new _gameFunctions_gameObject__WEBPACK_IMPORTED_MODULE_6__.Game(player1, player2, player1Gameboard, player2Gameboard);
  console.log(player1Gameboard);
  console.log(player2Gameboard);

  game.startGame();
  console.log(game);

  (0,_gameFunctions_gameLoop__WEBPACK_IMPORTED_MODULE_1__.gameLoop)(game);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE2Qix5RUFBUztBQUN0QyxFQUFFLDZFQUFrQjtBQUNwQixFQUFFLDJFQUFhOztBQUVmLGFBQWEsMkRBQUk7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEVBQUUsaUVBQVE7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2ZhY3RvcnlGdW5jdGlvbnMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZmFjdG9yeUZ1bmN0aW9ucy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3J5RnVuY3Rpb25zL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lRnVuY3Rpb25zL2dhbWVMb29wLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lRnVuY3Rpb25zL2dhbWVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvZ2FtZVNjcmVlbi5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUZ1bmN0aW9ucy9zaGlwUGxhY2VtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lRnVuY3Rpb25zL3dlbGNvbWVTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlbGxvIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5nYW1lLXBhZ2Uge1xcbiAgd2lkdGg6IDEwMHd2O1xcbiAgaGVpZ2h0OiAxMDBodjtcXG59XFxuXFxuLmdhbWUtY2VsbCB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlcjogMi45cHggc29saWQgYmxhY2s7XFxufVxcblxcbi5nYW1lLWJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgaGVpZ2h0OiAyMy42cmVtO1xcbiAgd2lkdGg6IDIzLjhyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlbGxvIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5nYW1lLXBhZ2Uge1xcbiAgd2lkdGg6IDEwMHd2O1xcbiAgaGVpZ2h0OiAxMDBodjtcXG59XFxuXFxuLmdhbWUtY2VsbCB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlcjogMi45cHggc29saWQgYmxhY2s7XFxufVxcblxcbi5nYW1lLWJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgaGVpZ2h0OiAyMy42cmVtO1xcbiAgd2lkdGg6IDIzLjhyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXBGYWN0b3J5Jyk7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKG93bmVyKSB7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMuY2VsbHMgPSBbXTtcbiAgICB0aGlzLmJvYXRzID0gMDtcbiAgICB0aGlzLm1pc3NlZENlbGxzID0gMDtcbiAgICB0aGlzLm1pc3NlZENlbGxBcnJheSA9IFtdO1xuICAgIHRoaXMudGFrZW5BdHRhY2tzID0gMDtcbiAgfVxuXG4gIGJ1aWxkR2FtZWJvYXJkKCkge1xuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1wYWdlJyk7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1ib2FyZC1jb250YWluZXInKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMub3duZXJ9LWdhbWUtYm9hcmRgKTtcblxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kKGdhbWVib2FyZENvbnRhaW5lcik7XG5cbiAgICBjb25zdCB4QXhpcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG4gICAgY29uc3QgeUF4aXMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB5QXhpcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHhBeGlzLmxlbmd0aCAtIDE7IGorKykge1xuICAgICAgICB0aGlzLmNlbGxzLnB1c2gobmV3IEdhbWVib2FyZENlbGwoeEF4aXNbal0sIHlBeGlzW2ldKSk7XG4gICAgICAgIC8vIGV2YWwoXCJjb25zdCBcIiArICdjZWxsJyArIGkgKyBqKSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vIGV2YWwoXCJjZWxsXCIgKyBpICsgaikuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lLWNlbGwnKVxuICAgICAgICAvLyBldmFsKFwiY2VsbFwiICsgaSArIGopLnNldEF0dHJpYnV0ZSgnaWQnLCBgY2VsbCR7aX0ke2p9YClcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1jZWxsJyk7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGBjZWxsJHt4QXhpc1tqXX0ke3lBeGlzW2ldfWApO1xuXG4gICAgICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0UmVtYWluaW5nQm9hdHMgPSAocmVtYWluaW5nQm9hdHMpID0+IHtcbiAgICByZXR1cm4gcmVtYWluaW5nQm9hdHM7XG4gIH07XG5cbiAgc2hpcFBsYWNlbWVudCA9IChwbGF5ZXJOYW1lLCBzaGlwVHlwZSwgY29vcmRpbmF0ZXMpID0+IHtcbiAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKHBsYXllck5hbWUsIHNoaXBUeXBlKTtcbiAgICBsZXQgc2hpcENvb3JkID0gY29vcmRpbmF0ZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc2hpcENvb3JkLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgbGV0IGogPSAwO1xuICAgICAgbGV0IGsgPSAwO1xuICAgICAgbGV0IGN1cnJlbnRDb29yZCA9IHNoaXBDb29yZFtpXTtcbiAgICAgIHdoaWxlIChjdXJyZW50Q29vcmQgIT0gdGhpcy5jZWxsc1tqXS5jb29yZGluYXRlKSB7XG4gICAgICAgIGorKztcbiAgICAgICAgaysrO1xuICAgICAgfVxuICAgICAgdGhpcy5jZWxsc1tqXS5jZWxsU3BhY2UgPSBzaGlwO1xuICAgICAgdGhpcy5jZWxsc1tqXS5oYXNTaGlwID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5ib2F0cysrO1xuICAgIHRoaXMuZ2FtZU92ZXIodGhpcy5ib2F0cyk7XG4gIH07XG5cbiAgcmVjaWV2ZUF0dGFjayA9IChhdHRhY2tDb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IGF0dGFja2VkQ2VsbCA9IGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5vd25lcn0tZ2FtZS1ib2FyZGApXG4gICAgICAucXVlcnlTZWxlY3RvcihgI2NlbGwke2F0dGFja0Nvb3JkaW5hdGVzfWApO1xuICAgIGNvbnN0IGF0dGFja01hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMudGFrZW5BdHRhY2tzKys7XG4gICAgbGV0IGNlbGxUZXN0ID0gdGhpcy5jZWxscy5maW5kKFxuICAgICAgKGNlbGwpID0+IGNlbGwuY29vcmRpbmF0ZSA9PT0gYXR0YWNrQ29vcmRpbmF0ZXNcbiAgICApO1xuICAgIGlmIChjZWxsVGVzdC5iZWVuQXR0YWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgIGlmIChjZWxsVGVzdC5jZWxsU3BhY2UgPT0gJ2lzIGVtcHR5Jykge1xuICAgICAgICBjZWxsVGVzdC5iZWVuQXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1pc3NlZENlbGxBcnJheS5wdXNoKGF0dGFja0Nvb3JkaW5hdGVzKTtcbiAgICAgICAgdGhpcy5taXNzZWRDZWxscysrO1xuICAgICAgICBhdHRhY2tNYXJrZXIuaW5uZXJIVE1MID0gJ1gnO1xuICAgICAgICBhdHRhY2tlZENlbGwuYXBwZW5kKGF0dGFja01hcmtlcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGxUZXN0LmJlZW5BdHRhY2tlZCA9IHRydWU7XG4gICAgICAgIGxldCBzaGlwSWRlbnRpZmllciA9IGNlbGxUZXN0LmNlbGxTcGFjZTtcbiAgICAgICAgc2hpcElkZW50aWZpZXIuaGl0KCk7XG4gICAgICAgIGF0dGFja01hcmtlci5pbm5lckhUTUwgPSAnTyc7XG4gICAgICAgIGF0dGFja2VkQ2VsbC5hcHBlbmQoYXR0YWNrTWFya2VyKTtcbiAgICAgICAgaWYgKHNoaXBJZGVudGlmaWVyLmlzU3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5ib2F0cy0tO1xuICAgICAgICAgIGlmICh0aGlzLmJvYXRzID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIodGhpcy5ib2F0cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGdhbWVPdmVyID0gKHJlbWFpbmluZ0JvYXRzKSA9PiB7XG4gICAgaWYgKHJlbWFpbmluZ0JvYXRzID09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG5jbGFzcyBHYW1lYm9hcmRDZWxsIHtcbiAgY29uc3RydWN0b3IoeENvb3JkaW5hdGUsIHlDb29yZGluYXRlKSB7XG4gICAgdGhpcy54Q29vcmRpbmF0ZSA9IHhDb29yZGluYXRlO1xuICAgIHRoaXMueUNvb3JkaW5hdGUgPSB5Q29vcmRpbmF0ZTtcbiAgICB0aGlzLmhhc1NoaXAgPSBmYWxzZTtcbiAgICB0aGlzLmNvb3JkaW5hdGUgPSBgJHt4Q29vcmRpbmF0ZX0ke3lDb29yZGluYXRlfWA7XG4gICAgdGhpcy5jZWxsU3BhY2UgPSAnaXMgZW1wdHknO1xuICAgIHRoaXMuYmVlbkF0dGFja2VkID0gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IEdhbWVib2FyZCwgR2FtZWJvYXJkQ2VsbCB9O1xuIiwiY29uc3QgZ2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmRGYWN0b3J5Jyk7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlzQ29tcHV0ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmlzVHVybiA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm5hbWUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5uYW1lID0gJ0NvbXB1dGVyJztcbiAgICAgIHRoaXMuaXNDb21wdXRlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNrKG9wcG9uYW50Qm9hcmQsIGF0dGFja0Nvb3JkaW5hdGVzKSB7XG4gICAgaWYgKHRoaXMuaXNDb21wdXRlciA9PSB0cnVlKSB7XG4gICAgICBsZXQgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAxKTtcbiAgICAgIGxldCByYW5kb21DZWxsID0gb3Bwb25hbnRCb2FyZC5jZWxsc1tyYW5kb21OdW1iZXJdO1xuICAgICAgd2hpbGUgKHJhbmRvbUNlbGwuYmVlbkF0dGFja2VkID09IHRydWUpIHtcbiAgICAgICAgcmFuZG9tTnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIDEwMDtcbiAgICAgICAgcmFuZG9tQ2VsbCA9IG9wcG9uYW50Qm9hcmQuY2VsbHNbcmFuZG9tTnVtYmVyXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHBvbmFudEJvYXJkLnJlY2lldmVBdHRhY2socmFuZG9tQ2VsbC5jb29yZGluYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wcG9uYW50Qm9hcmQucmVjaWV2ZUF0dGFjayhhdHRhY2tDb29yZGluYXRlcyk7XG4gICAgfVxuICB9XG59XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IocGxheWVyLCB0eXBlLCBjb29yZGluYXRlcykge1xuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zaGlwTmFtZSA9IGAke3BsYXllcn0ncyAke3R5cGV9YDtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLmlzU3VuayA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0UGxheWVyID0gKCkgPT4gdGhpcy5wbGF5ZXI7XG5cbiAgZ2V0VHlwZSA9ICgpID0+IHRoaXMudHlwZTtcblxuICBzZXRDb29yZGluYXRlcyA9ICgpID0+IHRoaXMuY29vcmRpbmF0ZXM7XG5cbiAgZ2V0TGVuZ3RoID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ2NhcnJpZXInKSByZXR1cm4gNTtcbiAgICBpZiAodGhpcy50eXBlID09ICdiYXR0bGVzaGlwJykgcmV0dXJuIDQ7XG4gICAgaWYgKHRoaXMudHlwZSA9PSAnZGVzdHJveWVyJyB8fCB0aGlzLnR5cGUgPT0gJ3N1Ym1hcmluZScpIHJldHVybiAzO1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ3BhdHJvbCBib2F0JykgcmV0dXJuIDI7XG4gIH07XG5cbiAgaGl0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGl0cysrO1xuICAgIGlmICh0aGlzLmhpdHMgPT0gdGhpcy5nZXRMZW5ndGgoKSkge1xuICAgICAgdGhpcy5zaW5rU2hpcCh0cnVlKTtcbiAgICAgIHJldHVybiB0aGlzLmlzU3VuaztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaGl0cztcbiAgfTtcblxuICBzdW5rU3RhdHVzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmlzU3VuaztcbiAgfTtcbiAgc2lua1NoaXAgPSAodmFsdWUpID0+IHtcbiAgICB0aGlzLmlzU3VuayA9IHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2FtZUxvb3AoZ2FtZSkge1xuICBnYW1lLmNob29zZVdob1N0YXJ0cygpO1xuICBsZXQgc3RhbmRieSA9IHRydWU7XG4gIGxldCBwbGF5ZXIxID0gZ2FtZS5wbGF5ZXJzWzBdO1xuICBsZXQgcGxheWVyMiA9IGdhbWUucGxheWVyc1sxXTtcbiAgbGV0IHBsYXllcjFHYW1lYm9hcmQgPSBnYW1lLmdhbWVib2FyZHNbMF07XG4gIGxldCBwbGF5ZXIyR2FtZWJvYXJkID0gZ2FtZS5nYW1lYm9hcmRzWzFdO1xuICBsZXQgY3VycmVudFBsYXllcjtcbiAgY29uc3Qgb3Bwb25hbnRCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDb21wdXRlci1nYW1lLWJvYXJkJyk7XG5cbiAgd2hpbGUgKGdhbWUuaGFzU3RhcnRlZCA9PSB0cnVlICYmIHN0YW5kYnkgPT0gZmFsc2UpIHtcbiAgICBpZiAoZ2FtZS50dXJuID09IHBsYXllcjEpIHtcbiAgICB9IGVsc2UgaWYgKGdhbWUudHVybiA9PSBwbGF5ZXIyKSB7XG4gICAgfVxuICB9XG5cbiAgb3Bwb25hbnRCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgbGV0IHRoaW5nID0gZS50YXJnZXQuaWQ7XG4gICAgLy8gY29uc29sZS5sb2codGhpbmcuaW5jbHVkZXMoJ2NlbGwnKSk7XG4gICAgaWYgKHRoaW5nLmluY2x1ZGVzKCdjZWxsJykgPT0gdHJ1ZSkge1xuICAgICAgbGV0IGNlbGwgPSB0aGluZy5zbGljZSg0KTtcbiAgICAgIHBsYXllcjJHYW1lYm9hcmQucmVjaWV2ZUF0dGFjayhjZWxsKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIxR2FtZWJvYXJkLCBwbGF5ZXIyR2FtZWJvYXJkKSB7XG4gICAgdGhpcy5oYXNTdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5wbGF5ZXJzID0gW3BsYXllcjEsIHBsYXllcjJdO1xuICAgIHRoaXMuZ2FtZWJvYXJkcyA9IFtwbGF5ZXIxR2FtZWJvYXJkLCBwbGF5ZXIyR2FtZWJvYXJkXTtcbiAgICB0aGlzLnR1cm47XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5oYXNTdGFydGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNob29zZVdob1N0YXJ0cygpIHtcbiAgICBsZXQgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wbGF5ZXJzLmxlbmd0aCk7XG4gICAgdGhpcy50dXJuID0gdGhpcy5wbGF5ZXJzW3JhbmRvbU51bV07XG4gIH1cblxuICBjaGFuZ2VUdXJucygpIHtcbiAgICBpZiAodGhpcy50dXJuID09PSB0aGlzLnBsYXllcnNbMF0pIHtcbiAgICAgIHRoaXMudHVybiA9IHRoaXMucGxheWVyc1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50dXJuID0gdGhpcy5wbGF5ZXJzWzBdO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vZmFjdG9yeUZ1bmN0aW9ucy9wbGF5ZXJGYWN0b3J5JztcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4uL2ZhY3RvcnlGdW5jdGlvbnMvZ2FtZWJvYXJkRmFjdG9yeSc7XG5pbXBvcnQgeyBzaGlwUGxhY2VtZW50IH0gZnJvbSAnLi9zaGlwUGxhY2VtZW50JztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWVPYmplY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZVNjcmVlbigpIHtcbiAgY29uc3QgZ2FtZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ2FtZVBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdnYW1lLXBhZ2UnKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChnYW1lUGFnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdhbWVib2FyZHMocGxheWVyMUdhbWVib2FyZCwgcGxheWVyMkdhbWVib2FyZCkge1xuICAvL2dhbWVTY3JlZW4oKTtcbiAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXBhZ2UnKTtcbiAgLy8gbGV0IHBsYXllck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLW5hbWUtaW5wdXQnKS52YWx1ZTtcbiAgLy8gY29uc29sZS5sb2cocGxheWVyTmFtZSk7XG4gIC8vIGxldCBwbGF5ZXIxID0gbmV3IFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgLy8gbGV0IHBsYXllcjIgPSBuZXcgUGxheWVyKCk7XG4gIC8vIGNvbnNvbGUubG9nKHBsYXllcjEpO1xuICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIyKTtcblxuICAvLyBsZXQgcGxheWVyMUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQocGxheWVyMS5uYW1lKTtcbiAgLy8gbGV0IHBsYXllcjJHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHBsYXllcjIubmFtZSk7XG4gIGdhbWVDb250YWluZXIuYXBwZW5kKHBsYXllcjFHYW1lYm9hcmQuYnVpbGRHYW1lYm9hcmQoKSk7XG4gIGdhbWVDb250YWluZXIuYXBwZW5kKHBsYXllcjJHYW1lYm9hcmQuYnVpbGRHYW1lYm9hcmQoKSk7XG4gIC8vc2hpcFBsYWNlbWVudChwbGF5ZXIxR2FtZWJvYXJkLCBwbGF5ZXIyR2FtZWJvYXJkKTtcbiAgLy8gaW5pdGlhdGVHYW1lKHBsYXllcjEsIHBsYXllcjIpO1xuICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIxR2FtZWJvYXJkKTtcbiAgLy8gY29uc29sZS5sb2cocGxheWVyMkdhbWVib2FyZCk7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBpbml0aWF0ZUdhbWUocGxheWVyMSwgcGxheWVyMikge1xuLy8gICBsZXQgZ2FtZSA9IG5ldyBHYW1lKHBsYXllcjEsIHBsYXllcjIpO1xuLy8gfVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNoaXBQbGFjZW1lbnQocGxheWVyMUdhbWVib2FyZCwgcGxheWVyMkdhbWVib2FyZCkge1xuICBwbGF5ZXIxR2FtZWJvYXJkLnNoaXBQbGFjZW1lbnQocGxheWVyMUdhbWVib2FyZC5vd25lciwgJ2NhcnJpZXInLCBbXG4gICAgJzRDJyxcbiAgICAnNUMnLFxuICAgICc2QycsXG4gICAgJzdDJyxcbiAgICAnOEMnLFxuICBdKTtcbiAgcGxheWVyMUdhbWVib2FyZC5zaGlwUGxhY2VtZW50KHBsYXllcjFHYW1lYm9hcmQub3duZXIsICdiYXR0bGVzaGlwJywgW1xuICAgICc4RScsXG4gICAgJzhGJyxcbiAgICAnOEcnLFxuICAgICc4SCcsXG4gIF0pO1xuICBwbGF5ZXIxR2FtZWJvYXJkLnNoaXBQbGFjZW1lbnQocGxheWVyMUdhbWVib2FyZC5vd25lciwgJ2Rlc3Ryb3llcicsIFtcbiAgICAnMkcnLFxuICAgICcySCcsXG4gICAgJzJJJyxcbiAgXSk7XG4gIHBsYXllcjFHYW1lYm9hcmQuc2hpcFBsYWNlbWVudChwbGF5ZXIxR2FtZWJvYXJkLm93bmVyLCAncGF0cm9sIGJvYXQnLCBbXG4gICAgJzVKJyxcbiAgICAnNkonLFxuICBdKTtcbiAgcGxheWVyMUdhbWVib2FyZC5zaGlwUGxhY2VtZW50KHBsYXllcjFHYW1lYm9hcmQub3duZXIsICdzdWJtYXJpbmUnLCBbXG4gICAgJzFBJyxcbiAgICAnMUInLFxuICAgICcxQycsXG4gIF0pO1xuXG4gIHBsYXllcjJHYW1lYm9hcmQuc2hpcFBsYWNlbWVudChwbGF5ZXIyR2FtZWJvYXJkLm93bmVyLCAnY2FycmllcicsIFtcbiAgICAnNEQnLFxuICAgICc1RCcsXG4gICAgJzZEJyxcbiAgICAnN0QnLFxuICAgICc4RCcsXG4gIF0pO1xuICBwbGF5ZXIyR2FtZWJvYXJkLnNoaXBQbGFjZW1lbnQocGxheWVyMkdhbWVib2FyZC5vd25lciwgJ2JhdHRsZXNoaXAnLCBbXG4gICAgJzlFJyxcbiAgICAnOUYnLFxuICAgICc5RycsXG4gICAgJzlIJyxcbiAgXSk7XG4gIHBsYXllcjJHYW1lYm9hcmQuc2hpcFBsYWNlbWVudChwbGF5ZXIyR2FtZWJvYXJkLm93bmVyLCAnZGVzdHJveWVyJywgW1xuICAgICcxRycsXG4gICAgJzFIJyxcbiAgICAnMUknLFxuICBdKTtcbiAgcGxheWVyMkdhbWVib2FyZC5zaGlwUGxhY2VtZW50KHBsYXllcjJHYW1lYm9hcmQub3duZXIsICdwYXRyb2wgYm9hdCcsIFtcbiAgICAnNUgnLFxuICAgICc2SCcsXG4gIF0pO1xuICBwbGF5ZXIyR2FtZWJvYXJkLnNoaXBQbGFjZW1lbnQocGxheWVyMkdhbWVib2FyZC5vd25lciwgJ3N1Ym1hcmluZScsIFtcbiAgICAnMTBBJyxcbiAgICAnMTBCJyxcbiAgICAnMTBDJyxcbiAgXSk7XG59XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUdhbWVib2FyZHMgfSBmcm9tICcuL2dhbWVTY3JlZW4nO1xuXG5leHBvcnQgZnVuY3Rpb24gd2VsY29tZVNjcmVlbigpIHtcbiAgY29uc3Qgd2VsY29tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VsY29tZVBhZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3ZWxjb21lLXdlbGNvbWVQYWdlJyk7XG5cbiAgLy8gbG9nb1xuICBjb25zdCB3ZWxjb21lR2FtZUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB3ZWxjb21lR2FtZUxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3ZWxjb21lLWxvZ28nKTtcbiAgd2VsY29tZUdhbWVMb2dvLmlubmVySFRNTCA9ICdCQVRUTEVTSElQJztcblxuICAvL3BsYXllciBuYW1lIGlucHV0XG4gIGNvbnN0IG5hbWVJbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy9uYW1lSW5wdXRGb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcblxuICBjb25zdCBmb3Jtd2VsY29tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybXdlbGNvbWVQYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS13ZWxjb21lUGFnZScpO1xuXG4gIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwbGF5ZXItbmFtZS1pbnB1dCcpO1xuICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gJ0VOVEVSIFBMQVlFUiBOQU1FOic7XG5cbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyLW5hbWUtaW5wdXQnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwbGF5ZXItbmFtZScpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgTmFtZScpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnV0dG9uJyk7XG4gIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQgR2FtZSc7XG4gIC8vc3VibWl0QnV0dG9uLm9uY2xpY2sgPSBnZW5lcmF0ZUdhbWVib2FyZHM7XG5cbiAgLy9hcHBlbmRzXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKHdlbGNvbWVQYWdlKTtcbiAgd2VsY29tZVBhZ2UuYXBwZW5kKHdlbGNvbWVHYW1lTG9nbyk7XG4gIHdlbGNvbWVQYWdlLmFwcGVuZChuYW1lSW5wdXRGb3JtKTtcbiAgbmFtZUlucHV0Rm9ybS5hcHBlbmQoZm9ybXdlbGNvbWVQYWdlKTtcbiAgZm9ybXdlbGNvbWVQYWdlLmFwcGVuZChuYW1lTGFiZWwpO1xuICBmb3Jtd2VsY29tZVBhZ2UuYXBwZW5kKG5hbWVJbnB1dCk7XG4gIGZvcm13ZWxjb21lUGFnZS5hcHBlbmQoc3VibWl0QnV0dG9uKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCB7IGdhbWVMb29wIH0gZnJvbSAnLi9nYW1lRnVuY3Rpb25zL2dhbWVMb29wJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vZmFjdG9yeUZ1bmN0aW9ucy9wbGF5ZXJGYWN0b3J5JztcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZmFjdG9yeUZ1bmN0aW9ucy9nYW1lYm9hcmRGYWN0b3J5JztcbmltcG9ydCB7IHNoaXBQbGFjZW1lbnQgfSBmcm9tICcuL2dhbWVGdW5jdGlvbnMvc2hpcFBsYWNlbWVudCc7XG5pbXBvcnQgeyBnYW1lU2NyZWVuLCBnZW5lcmF0ZUdhbWVib2FyZHMgfSBmcm9tICcuL2dhbWVGdW5jdGlvbnMvZ2FtZVNjcmVlbic7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lRnVuY3Rpb25zL2dhbWVPYmplY3QnO1xuaW1wb3J0IHsgd2VsY29tZVNjcmVlbiB9IGZyb20gJy4vZ2FtZUZ1bmN0aW9ucy93ZWxjb21lU2NyZWVuJztcblxubGV0IGdhbWU7XG53ZWxjb21lU2NyZWVuKCk7XG5jb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtYnV0dG9uJyk7XG5sZXQgcGxheWVyTmFtZTtcblxuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1uYW1lLWlucHV0JykudmFsdWU7XG5cbiAgaWYgKHBsYXllck5hbWUgPT0gJycpIHtcbiAgICBhbGVydCgnWW91IG11c3QgYWRkIHlvdXIgbmFtZSEnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zb2xlLmxvZyhwbGF5ZXJOYW1lKTtcblxuICBsZXQgcGxheWVyMSA9IG5ldyBQbGF5ZXIocGxheWVyTmFtZSk7XG4gIGxldCBwbGF5ZXIyID0gbmV3IFBsYXllcigpO1xuICBjb25zb2xlLmxvZyhwbGF5ZXIxKTtcbiAgY29uc29sZS5sb2cocGxheWVyMik7XG5cbiAgZ2FtZVNjcmVlbigpO1xuXG4gIGxldCBwbGF5ZXIxR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZChwbGF5ZXIxLm5hbWUpO1xuICBsZXQgcGxheWVyMkdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQocGxheWVyMi5uYW1lKTtcbiAgZ2VuZXJhdGVHYW1lYm9hcmRzKHBsYXllcjFHYW1lYm9hcmQsIHBsYXllcjJHYW1lYm9hcmQpO1xuICBzaGlwUGxhY2VtZW50KHBsYXllcjFHYW1lYm9hcmQsIHBsYXllcjJHYW1lYm9hcmQpO1xuXG4gIGdhbWUgPSBuZXcgR2FtZShwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIxR2FtZWJvYXJkLCBwbGF5ZXIyR2FtZWJvYXJkKTtcbiAgY29uc29sZS5sb2cocGxheWVyMUdhbWVib2FyZCk7XG4gIGNvbnNvbGUubG9nKHBsYXllcjJHYW1lYm9hcmQpO1xuXG4gIGdhbWUuc3RhcnRHYW1lKCk7XG4gIGNvbnNvbGUubG9nKGdhbWUpO1xuXG4gIGdhbWVMb29wKGdhbWUpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=