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
___CSS_LOADER_EXPORT___.push([module.id, ".hello {\n  color: red;\n}\n\n#welcome-page.active {\n  opacity: 1;\n  scale: 1;\n}\n\n#welcome-page {\n  opacity: 0;\n  scale: 0;\n}\n\n#game-page {\n  display: inline-flex;\n  flex-direction: row;\n  width: 100wv;\n  height: 100hv;\n  border: 3px solid orange;\n}\n\n.game-cell {\n  height: 2rem;\n  width: 2rem;\n  border: 2.9px solid black;\n}\n\n.game-board-container {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid red;\n  height: 23.6rem;\n  width: 23.8rem;\n}\n\n#Computer-game-board {\n  opacity: 0;\n}\n\n#Computer-game-board.active {\n  opacity: 1;\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid blueviolet;\n  height: 23.6rem;\n  width: 23.8rem;\n}\n\n#ship-generator-container {\n  height: 20rem;\n  width: 20rem;\n  border: 2.9px solid lightgreen;\n}\n\n.ship-cell {\n  height: 2rem;\n  width: 2rem;\n  border: 2.9px solid skyblue;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,QAAQ;AACV;;AAEA;EACE,UAAU;EACV,QAAQ;AACV;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,aAAa;EACb,eAAe;EACf,4BAA4B;EAC5B,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,2BAA2B;AAC7B","sourcesContent":[".hello {\n  color: red;\n}\n\n#welcome-page.active {\n  opacity: 1;\n  scale: 1;\n}\n\n#welcome-page {\n  opacity: 0;\n  scale: 0;\n}\n\n#game-page {\n  display: inline-flex;\n  flex-direction: row;\n  width: 100wv;\n  height: 100hv;\n  border: 3px solid orange;\n}\n\n.game-cell {\n  height: 2rem;\n  width: 2rem;\n  border: 2.9px solid black;\n}\n\n.game-board-container {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid red;\n  height: 23.6rem;\n  width: 23.8rem;\n}\n\n#Computer-game-board {\n  opacity: 0;\n}\n\n#Computer-game-board.active {\n  opacity: 1;\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid blueviolet;\n  height: 23.6rem;\n  width: 23.8rem;\n}\n\n#ship-generator-container {\n  height: 20rem;\n  width: 20rem;\n  border: 2.9px solid lightgreen;\n}\n\n.ship-cell {\n  height: 2rem;\n  width: 2rem;\n  border: 2.9px solid skyblue;\n}\n"],"sourceRoot":""}]);
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
        randomNumber = Math.floor(Math.random() * 100);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
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
  let standby = false;
  let player1 = game.players[0];
  let player2 = game.players[1];
  let player1Gameboard = game.gameboards[0];
  let player2Gameboard = game.gameboards[1];
  let currentPlayer;
  let currentAttacks = 0;
  const opponantBoard = document.getElementById('Computer-game-board');

  while (game.hasStarted == true && standby == false) {
    if (player1Gameboard.boats == 0) {
      alert('player2 wins');
      return;
    } else if (player2Gameboard.boats == 0) {
      alert('player 1 wins');
      return;
    }
    if (game.turn == player1) {
      console.log('PLayer turn');
      standby = true;
    } else if (game.turn == player2) {
      console.log('Computer turn');
      player2.attack(player1Gameboard);
      game.turn = player1;
    }
  }

  opponantBoard.addEventListener('click', function (e) {
    if (e.target.innerHTML != '') {
      return;
    }
    if (currentAttacks === 0) {
      let thing = e.target.id;
      // console.log(thing.includes('cell'));

      if (thing.includes('cell') == true) {
        let cell = thing.slice(4);
        //player2Gameboard.recieveAttack(cell);
        player1.attack(player2Gameboard, cell);
        currentAttacks++;
      }
      game.turn = player2;
      gameLoop(game);
    }
  });
  currentAttacks = 0;
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
/* harmony export */   "generateGameboards": () => (/* binding */ generateGameboards),
/* harmony export */   "showOpponantBoard": () => (/* binding */ showOpponantBoard)
/* harmony export */ });
/* harmony import */ var _factoryFunctions_playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factoryFunctions/playerFactory */ "./src/factoryFunctions/playerFactory.js");
/* harmony import */ var _factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factoryFunctions/gameboardFactory */ "./src/factoryFunctions/gameboardFactory.js");
/* harmony import */ var _factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shipPlacement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipPlacement */ "./src/gameFunctions/shipPlacement.js");
/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameObject */ "./src/gameFunctions/gameObject.js");





function gameScreen() {
  const gamePage = document.createElement('div');
  gamePage.setAttribute('id', 'game-page');

  const logo = document.createElement('h1');
  logo.setAttribute('class', 'welcome-logo');
  logo.innerHTML = 'BATTLESHIP';

  document.body.append(gamePage);
  gamePage.append(logo);
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

function showOpponantBoard() {
  const opponantBoard = document.getElementById('Computer-game-board');
  opponantBoard.setAttribute('class', 'active');
}


/***/ }),

/***/ "./src/gameFunctions/shipPlacement.js":
/*!********************************************!*\
  !*** ./src/gameFunctions/shipPlacement.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipPlacement": () => (/* binding */ shipPlacement),
/* harmony export */   "shipPlacementPhase": () => (/* binding */ shipPlacementPhase)
/* harmony export */ });
/* harmony import */ var _factoryFunctions_shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factoryFunctions/shipFactory */ "./src/factoryFunctions/shipFactory.js");


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

function shipPlacementPhase(player1Gameboard) {
  generateShipContainer();
  generateShips(player1Gameboard);
}

function generateShipContainer() {
  const gameContainer = document.getElementById('game-page');
  const shipGenerator = document.createElement('div');
  //shipGenerator.setAttribute('id', 'ship-generator');
  shipGenerator.setAttribute('id', 'ship-generator-container');

  gameContainer.append(shipGenerator);
}

function generateShips(player1Gameboard) {
  const shipGenerator = document.getElementById('ship-generator-container');

  let shipsRemaining = 5;
  let standby = false;
  let shipType;

  while (shipsRemaining != 0 && standby == false) {
    if (shipsRemaining == 5) shipType = 'carrier';
    if (shipsRemaining == 4) shipType = 'battleship';
    if (shipsRemaining == 3) shipType = 'destroyer';
    if (shipsRemaining == 2) shipType = 'submarine';
    if (shipsRemaining == 1) shipType = 'patrol boat';

    let newShip = new _factoryFunctions_shipFactory__WEBPACK_IMPORTED_MODULE_0__.Ship(player1Gameboard.owner, shipType);
    newShip.createShip();
    standby = true;
  }

  while (standby == true) {
    let shipElement = document.getElementById(`${shipType}-element`);
    return;
  }
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
/* harmony export */   "closeWelcomeScreen": () => (/* binding */ closeWelcomeScreen),
/* harmony export */   "welcomeScreen": () => (/* binding */ welcomeScreen)
/* harmony export */ });
/* harmony import */ var _gameScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameScreen */ "./src/gameFunctions/gameScreen.js");


function welcomeScreen() {
  const welcomePage = document.createElement('div');
  welcomePage.setAttribute('id', 'welcome-page');
  welcomePage.setAttribute('class', 'active');

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

function closeWelcomeScreen(welcomeScreen) {
  if (welcomeScreen == null) return;
  welcomeScreen.classList.remove('active');
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
const welcomeScreenContainer = document.getElementById('welcome-page');
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
  (0,_gameFunctions_welcomeScreen__WEBPACK_IMPORTED_MODULE_7__.closeWelcomeScreen)(welcomeScreenContainer);
  let player1Gameboard = new _factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_3__.Gameboard(player1.name);

  let player2Gameboard = new _factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_3__.Gameboard(player2.name);
  (0,_gameFunctions_gameScreen__WEBPACK_IMPORTED_MODULE_5__.gameScreen)();
  (0,_gameFunctions_gameScreen__WEBPACK_IMPORTED_MODULE_5__.generateGameboards)(player1Gameboard, player2Gameboard);
  //shipPlacement(player1Gameboard, player2Gameboard);

  game = new _gameFunctions_gameObject__WEBPACK_IMPORTED_MODULE_6__.Game(player1, player2, player1Gameboard, player2Gameboard);
  console.log(player1Gameboard);
  console.log(player2Gameboard);

  (0,_gameFunctions_shipPlacement__WEBPACK_IMPORTED_MODULE_4__.shipPlacementPhase)(player1Gameboard);
  //showOpponantBoard(player2Gameboard);

  game.startGame();
  game.chooseWhoStarts();
  console.log(game);

  (0,_gameFunctions_gameLoop__WEBPACK_IMPORTED_MODULE_1__.gameLoop)(game);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJFQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLG1FQUFNO0FBQzFCLG9CQUFvQixtRUFBTTtBQUMxQjtBQUNBO0FBQ0EsRUFBRSxnRkFBa0I7QUFDcEIsNkJBQTZCLHlFQUFTOztBQUV0Qyw2QkFBNkIseUVBQVM7QUFDdEMsRUFBRSxxRUFBVTtBQUNaLEVBQUUsNkVBQWtCO0FBQ3BCOztBQUVBLGFBQWEsMkRBQUk7QUFDakI7QUFDQTs7QUFFQSxFQUFFLGdGQUFrQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxpRUFBUTtBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZmFjdG9yeUZ1bmN0aW9ucy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3J5RnVuY3Rpb25zL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2ZhY3RvcnlGdW5jdGlvbnMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvZ2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUZ1bmN0aW9ucy9nYW1lU2NyZWVuLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lRnVuY3Rpb25zL3NoaXBQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVGdW5jdGlvbnMvd2VsY29tZVNjcmVlbi5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVsbG8ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuI3dlbGNvbWUtcGFnZS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4jd2VsY29tZS1wYWdlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBzY2FsZTogMDtcXG59XFxuXFxuI2dhbWUtcGFnZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogMTAwd3Y7XFxuICBoZWlnaHQ6IDEwMGh2O1xcbiAgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4uZ2FtZS1jZWxsIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyOiAyLjlweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmdhbWUtYm9hcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBoZWlnaHQ6IDIzLjZyZW07XFxuICB3aWR0aDogMjMuOHJlbTtcXG59XFxuXFxuI0NvbXB1dGVyLWdhbWUtYm9hcmQge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuI0NvbXB1dGVyLWdhbWUtYm9hcmQuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDtcXG4gIGhlaWdodDogMjMuNnJlbTtcXG4gIHdpZHRoOiAyMy44cmVtO1xcbn1cXG5cXG4jc2hpcC1nZW5lcmF0b3ItY29udGFpbmVyIHtcXG4gIGhlaWdodDogMjByZW07XFxuICB3aWR0aDogMjByZW07XFxuICBib3JkZXI6IDIuOXB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxufVxcblxcbi5zaGlwLWNlbGwge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXI6IDIuOXB4IHNvbGlkIHNreWJsdWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlbGxvIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbiN3ZWxjb21lLXBhZ2UuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuI3dlbGNvbWUtcGFnZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgc2NhbGU6IDA7XFxufVxcblxcbiNnYW1lLXBhZ2Uge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMHd2O1xcbiAgaGVpZ2h0OiAxMDBodjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcXG59XFxuXFxuLmdhbWUtY2VsbCB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlcjogMi45cHggc29saWQgYmxhY2s7XFxufVxcblxcbi5nYW1lLWJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgaGVpZ2h0OiAyMy42cmVtO1xcbiAgd2lkdGg6IDIzLjhyZW07XFxufVxcblxcbiNDb21wdXRlci1nYW1lLWJvYXJkIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbiNDb21wdXRlci1nYW1lLWJvYXJkLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWV2aW9sZXQ7XFxuICBoZWlnaHQ6IDIzLjZyZW07XFxuICB3aWR0aDogMjMuOHJlbTtcXG59XFxuXFxuI3NoaXAtZ2VuZXJhdG9yLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgYm9yZGVyOiAyLjlweCBzb2xpZCBsaWdodGdyZWVuO1xcbn1cXG5cXG4uc2hpcC1jZWxsIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyOiAyLjlweCBzb2xpZCBza3libHVlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwRmFjdG9yeScpO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihvd25lcikge1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLmNlbGxzID0gW107XG4gICAgdGhpcy5ib2F0cyA9IDA7XG4gICAgdGhpcy5taXNzZWRDZWxscyA9IDA7XG4gICAgdGhpcy5taXNzZWRDZWxsQXJyYXkgPSBbXTtcbiAgICB0aGlzLnRha2VuQXR0YWNrcyA9IDA7XG4gIH1cblxuICBidWlsZEdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtcGFnZScpO1xuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVib2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWUtYm9hcmQtY29udGFpbmVyJyk7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm93bmVyfS1nYW1lLWJvYXJkYCk7XG5cbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZChnYW1lYm9hcmRDb250YWluZXIpO1xuXG4gICAgY29uc3QgeEF4aXMgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xuICAgIGNvbnN0IHlBeGlzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0geUF4aXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSB4QXhpcy5sZW5ndGggLSAxOyBqKyspIHtcbiAgICAgICAgdGhpcy5jZWxscy5wdXNoKG5ldyBHYW1lYm9hcmRDZWxsKHhBeGlzW2pdLCB5QXhpc1tpXSkpO1xuICAgICAgICAvLyBldmFsKFwiY29uc3QgXCIgKyAnY2VsbCcgKyBpICsgaikgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyBldmFsKFwiY2VsbFwiICsgaSArIGopLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1jZWxsJylcbiAgICAgICAgLy8gZXZhbChcImNlbGxcIiArIGkgKyBqKS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNlbGwke2l9JHtqfWApXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWUtY2VsbCcpO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgY2VsbCR7eEF4aXNbal19JHt5QXhpc1tpXX1gKTtcblxuICAgICAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFJlbWFpbmluZ0JvYXRzID0gKHJlbWFpbmluZ0JvYXRzKSA9PiB7XG4gICAgcmV0dXJuIHJlbWFpbmluZ0JvYXRzO1xuICB9O1xuXG4gIHNoaXBQbGFjZW1lbnQgPSAocGxheWVyTmFtZSwgc2hpcFR5cGUsIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IHNoaXAgPSBuZXcgU2hpcChwbGF5ZXJOYW1lLCBzaGlwVHlwZSk7XG4gICAgbGV0IHNoaXBDb29yZCA9IGNvb3JkaW5hdGVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHNoaXBDb29yZC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGxldCBqID0gMDtcbiAgICAgIGxldCBrID0gMDtcbiAgICAgIGxldCBjdXJyZW50Q29vcmQgPSBzaGlwQ29vcmRbaV07XG4gICAgICB3aGlsZSAoY3VycmVudENvb3JkICE9IHRoaXMuY2VsbHNbal0uY29vcmRpbmF0ZSkge1xuICAgICAgICBqKys7XG4gICAgICAgIGsrKztcbiAgICAgIH1cbiAgICAgIHRoaXMuY2VsbHNbal0uY2VsbFNwYWNlID0gc2hpcDtcbiAgICAgIHRoaXMuY2VsbHNbal0uaGFzU2hpcCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuYm9hdHMrKztcbiAgICB0aGlzLmdhbWVPdmVyKHRoaXMuYm9hdHMpO1xuICB9O1xuXG4gIHJlY2lldmVBdHRhY2sgPSAoYXR0YWNrQ29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCBhdHRhY2tlZENlbGwgPSBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKGAke3RoaXMub3duZXJ9LWdhbWUtYm9hcmRgKVxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCNjZWxsJHthdHRhY2tDb29yZGluYXRlc31gKTtcbiAgICBjb25zdCBhdHRhY2tNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnRha2VuQXR0YWNrcysrO1xuICAgIGxldCBjZWxsVGVzdCA9IHRoaXMuY2VsbHMuZmluZChcbiAgICAgIChjZWxsKSA9PiBjZWxsLmNvb3JkaW5hdGUgPT09IGF0dGFja0Nvb3JkaW5hdGVzXG4gICAgKTtcbiAgICBpZiAoY2VsbFRlc3QuYmVlbkF0dGFja2VkID09IGZhbHNlKSB7XG4gICAgICBpZiAoY2VsbFRlc3QuY2VsbFNwYWNlID09ICdpcyBlbXB0eScpIHtcbiAgICAgICAgY2VsbFRlc3QuYmVlbkF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5taXNzZWRDZWxsQXJyYXkucHVzaChhdHRhY2tDb29yZGluYXRlcyk7XG4gICAgICAgIHRoaXMubWlzc2VkQ2VsbHMrKztcbiAgICAgICAgYXR0YWNrTWFya2VyLmlubmVySFRNTCA9ICdYJztcbiAgICAgICAgYXR0YWNrZWRDZWxsLmFwcGVuZChhdHRhY2tNYXJrZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsVGVzdC5iZWVuQXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICBsZXQgc2hpcElkZW50aWZpZXIgPSBjZWxsVGVzdC5jZWxsU3BhY2U7XG4gICAgICAgIHNoaXBJZGVudGlmaWVyLmhpdCgpO1xuICAgICAgICBhdHRhY2tNYXJrZXIuaW5uZXJIVE1MID0gJ08nO1xuICAgICAgICBhdHRhY2tlZENlbGwuYXBwZW5kKGF0dGFja01hcmtlcik7XG4gICAgICAgIGlmIChzaGlwSWRlbnRpZmllci5pc1N1bmsgPT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuYm9hdHMtLTtcbiAgICAgICAgICBpZiAodGhpcy5ib2F0cyA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKHRoaXMuYm9hdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBnYW1lT3ZlciA9IChyZW1haW5pbmdCb2F0cykgPT4ge1xuICAgIGlmIChyZW1haW5pbmdCb2F0cyA9PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgR2FtZWJvYXJkQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKHhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSkge1xuICAgIHRoaXMueENvb3JkaW5hdGUgPSB4Q29vcmRpbmF0ZTtcbiAgICB0aGlzLnlDb29yZGluYXRlID0geUNvb3JkaW5hdGU7XG4gICAgdGhpcy5oYXNTaGlwID0gZmFsc2U7XG4gICAgdGhpcy5jb29yZGluYXRlID0gYCR7eENvb3JkaW5hdGV9JHt5Q29vcmRpbmF0ZX1gO1xuICAgIHRoaXMuY2VsbFNwYWNlID0gJ2lzIGVtcHR5JztcbiAgICB0aGlzLmJlZW5BdHRhY2tlZCA9IGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBHYW1lYm9hcmQsIEdhbWVib2FyZENlbGwgfTtcbiIsImNvbnN0IGdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkRmFjdG9yeScpO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pc0NvbXB1dGVyID0gZmFsc2U7XG4gICAgdGhpcy5pc1R1cm4gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5uYW1lID09IG51bGwpIHtcbiAgICAgIHRoaXMubmFtZSA9ICdDb21wdXRlcic7XG4gICAgICB0aGlzLmlzQ29tcHV0ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFjayhvcHBvbmFudEJvYXJkLCBhdHRhY2tDb29yZGluYXRlcykge1xuICAgIGlmICh0aGlzLmlzQ29tcHV0ZXIgPT0gdHJ1ZSkge1xuICAgICAgbGV0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMSk7XG4gICAgICBsZXQgcmFuZG9tQ2VsbCA9IG9wcG9uYW50Qm9hcmQuY2VsbHNbcmFuZG9tTnVtYmVyXTtcbiAgICAgIHdoaWxlIChyYW5kb21DZWxsLmJlZW5BdHRhY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgIHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIHJhbmRvbUNlbGwgPSBvcHBvbmFudEJvYXJkLmNlbGxzW3JhbmRvbU51bWJlcl07XG4gICAgICB9XG4gICAgICByZXR1cm4gb3Bwb25hbnRCb2FyZC5yZWNpZXZlQXR0YWNrKHJhbmRvbUNlbGwuY29vcmRpbmF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHBvbmFudEJvYXJkLnJlY2lldmVBdHRhY2soYXR0YWNrQ29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIHR5cGUsIGNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnNoaXBOYW1lID0gYCR7cGxheWVyfSdzICR7dHlwZX1gO1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuaXNTdW5rID0gZmFsc2U7XG4gIH1cblxuICBnZXRQbGF5ZXIgPSAoKSA9PiB0aGlzLnBsYXllcjtcblxuICBnZXRUeXBlID0gKCkgPT4gdGhpcy50eXBlO1xuXG4gIHNldENvb3JkaW5hdGVzID0gKCkgPT4gdGhpcy5jb29yZGluYXRlcztcblxuICBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudHlwZSA9PSAnY2FycmllcicpIHJldHVybiA1O1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ2JhdHRsZXNoaXAnKSByZXR1cm4gNDtcbiAgICBpZiAodGhpcy50eXBlID09ICdkZXN0cm95ZXInIHx8IHRoaXMudHlwZSA9PSAnc3VibWFyaW5lJykgcmV0dXJuIDM7XG4gICAgaWYgKHRoaXMudHlwZSA9PSAncGF0cm9sIGJvYXQnKSByZXR1cm4gMjtcbiAgfTtcblxuICBoaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5oaXRzKys7XG4gICAgaWYgKHRoaXMuaGl0cyA9PSB0aGlzLmdldExlbmd0aCgpKSB7XG4gICAgICB0aGlzLnNpbmtTaGlwKHRydWUpO1xuICAgICAgcmV0dXJuIHRoaXMuaXNTdW5rO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5oaXRzO1xuICB9O1xuXG4gIHN1bmtTdGF0dXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTdW5rO1xuICB9O1xuICBzaW5rU2hpcCA9ICh2YWx1ZSkgPT4ge1xuICAgIHRoaXMuaXNTdW5rID0gdmFsdWU7XG4gIH07XG5cbiAgY3JlYXRlU2hpcCA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwR2VuRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLWdlbmVyYXRvci1jb250YWluZXInKTtcbiAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NoaXAtZWxlbWVudCcpO1xuICAgIHNoaXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMudHlwZX0tZWxlbWVudGApO1xuICAgIHNoaXBHZW5FbGVtZW50LmFwcGVuZChzaGlwQ29udGFpbmVyKTtcbiAgICBsZXQgbGVuZ3RoO1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ2NhcnJpZXInKSBsZW5ndGggPSA1O1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ2JhdHRsZXNoaXAnKSBsZW5ndGggPSA0O1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ2Rlc3Ryb3llcicgfHwgdGhpcy50eXBlID09ICdzdWJtYXJpbmUnKSBsZW5ndGggPSAzO1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ3BhdHJvbCBib2F0JykgbGVuZ3RoID0gMjtcblxuICAgIGZvciAobGV0IGkgPSBsZW5ndGg7IGkgIT0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBzaGlwQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2hpcENlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzaGlwLWNlbGwnKTtcbiAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kKHNoaXBDZWxsKTtcbiAgICB9XG4gIH07XG59XG5cbi8vbW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdhbWVMb29wKGdhbWUpIHtcbiAgbGV0IHN0YW5kYnkgPSBmYWxzZTtcbiAgbGV0IHBsYXllcjEgPSBnYW1lLnBsYXllcnNbMF07XG4gIGxldCBwbGF5ZXIyID0gZ2FtZS5wbGF5ZXJzWzFdO1xuICBsZXQgcGxheWVyMUdhbWVib2FyZCA9IGdhbWUuZ2FtZWJvYXJkc1swXTtcbiAgbGV0IHBsYXllcjJHYW1lYm9hcmQgPSBnYW1lLmdhbWVib2FyZHNbMV07XG4gIGxldCBjdXJyZW50UGxheWVyO1xuICBsZXQgY3VycmVudEF0dGFja3MgPSAwO1xuICBjb25zdCBvcHBvbmFudEJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NvbXB1dGVyLWdhbWUtYm9hcmQnKTtcblxuICB3aGlsZSAoZ2FtZS5oYXNTdGFydGVkID09IHRydWUgJiYgc3RhbmRieSA9PSBmYWxzZSkge1xuICAgIGlmIChwbGF5ZXIxR2FtZWJvYXJkLmJvYXRzID09IDApIHtcbiAgICAgIGFsZXJ0KCdwbGF5ZXIyIHdpbnMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHBsYXllcjJHYW1lYm9hcmQuYm9hdHMgPT0gMCkge1xuICAgICAgYWxlcnQoJ3BsYXllciAxIHdpbnMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGdhbWUudHVybiA9PSBwbGF5ZXIxKSB7XG4gICAgICBjb25zb2xlLmxvZygnUExheWVyIHR1cm4nKTtcbiAgICAgIHN0YW5kYnkgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZ2FtZS50dXJuID09IHBsYXllcjIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb21wdXRlciB0dXJuJyk7XG4gICAgICBwbGF5ZXIyLmF0dGFjayhwbGF5ZXIxR2FtZWJvYXJkKTtcbiAgICAgIGdhbWUudHVybiA9IHBsYXllcjE7XG4gICAgfVxuICB9XG5cbiAgb3Bwb25hbnRCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmlubmVySFRNTCAhPSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY3VycmVudEF0dGFja3MgPT09IDApIHtcbiAgICAgIGxldCB0aGluZyA9IGUudGFyZ2V0LmlkO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpbmcuaW5jbHVkZXMoJ2NlbGwnKSk7XG5cbiAgICAgIGlmICh0aGluZy5pbmNsdWRlcygnY2VsbCcpID09IHRydWUpIHtcbiAgICAgICAgbGV0IGNlbGwgPSB0aGluZy5zbGljZSg0KTtcbiAgICAgICAgLy9wbGF5ZXIyR2FtZWJvYXJkLnJlY2lldmVBdHRhY2soY2VsbCk7XG4gICAgICAgIHBsYXllcjEuYXR0YWNrKHBsYXllcjJHYW1lYm9hcmQsIGNlbGwpO1xuICAgICAgICBjdXJyZW50QXR0YWNrcysrO1xuICAgICAgfVxuICAgICAgZ2FtZS50dXJuID0gcGxheWVyMjtcbiAgICAgIGdhbWVMb29wKGdhbWUpO1xuICAgIH1cbiAgfSk7XG4gIGN1cnJlbnRBdHRhY2tzID0gMDtcbn1cbiIsImV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IocGxheWVyMSwgcGxheWVyMiwgcGxheWVyMUdhbWVib2FyZCwgcGxheWVyMkdhbWVib2FyZCkge1xuICAgIHRoaXMuaGFzU3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMucGxheWVycyA9IFtwbGF5ZXIxLCBwbGF5ZXIyXTtcbiAgICB0aGlzLmdhbWVib2FyZHMgPSBbcGxheWVyMUdhbWVib2FyZCwgcGxheWVyMkdhbWVib2FyZF07XG4gICAgdGhpcy50dXJuO1xuICB9XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIHRoaXMuaGFzU3RhcnRlZCA9IHRydWU7XG4gIH1cblxuICBjaG9vc2VXaG9TdGFydHMoKSB7XG4gICAgbGV0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVycy5sZW5ndGgpO1xuICAgIHRoaXMudHVybiA9IHRoaXMucGxheWVyc1tyYW5kb21OdW1dO1xuICB9XG5cbiAgY2hhbmdlVHVybnMoKSB7XG4gICAgaWYgKHRoaXMudHVybiA9PT0gdGhpcy5wbGF5ZXJzWzBdKSB7XG4gICAgICB0aGlzLnR1cm4gPSB0aGlzLnBsYXllcnNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHVybiA9IHRoaXMucGxheWVyc1swXTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL2ZhY3RvcnlGdW5jdGlvbnMvcGxheWVyRmFjdG9yeSc7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuLi9mYWN0b3J5RnVuY3Rpb25zL2dhbWVib2FyZEZhY3RvcnknO1xuaW1wb3J0IHsgc2hpcFBsYWNlbWVudCB9IGZyb20gJy4vc2hpcFBsYWNlbWVudCc7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lT2JqZWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVTY3JlZW4oKSB7XG4gIGNvbnN0IGdhbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdhbWVQYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FtZS1wYWdlJyk7XG5cbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3ZWxjb21lLWxvZ28nKTtcbiAgbG9nby5pbm5lckhUTUwgPSAnQkFUVExFU0hJUCc7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZ2FtZVBhZ2UpO1xuICBnYW1lUGFnZS5hcHBlbmQobG9nbyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdhbWVib2FyZHMocGxheWVyMUdhbWVib2FyZCwgcGxheWVyMkdhbWVib2FyZCkge1xuICAvL2dhbWVTY3JlZW4oKTtcbiAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXBhZ2UnKTtcbiAgLy8gbGV0IHBsYXllck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLW5hbWUtaW5wdXQnKS52YWx1ZTtcbiAgLy8gY29uc29sZS5sb2cocGxheWVyTmFtZSk7XG4gIC8vIGxldCBwbGF5ZXIxID0gbmV3IFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgLy8gbGV0IHBsYXllcjIgPSBuZXcgUGxheWVyKCk7XG4gIC8vIGNvbnNvbGUubG9nKHBsYXllcjEpO1xuICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIyKTtcblxuICAvLyBsZXQgcGxheWVyMUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQocGxheWVyMS5uYW1lKTtcbiAgLy8gbGV0IHBsYXllcjJHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHBsYXllcjIubmFtZSk7XG4gIGdhbWVDb250YWluZXIuYXBwZW5kKHBsYXllcjFHYW1lYm9hcmQuYnVpbGRHYW1lYm9hcmQoKSk7XG4gIGdhbWVDb250YWluZXIuYXBwZW5kKHBsYXllcjJHYW1lYm9hcmQuYnVpbGRHYW1lYm9hcmQoKSk7XG4gIC8vc2hpcFBsYWNlbWVudChwbGF5ZXIxR2FtZWJvYXJkLCBwbGF5ZXIyR2FtZWJvYXJkKTtcbiAgLy8gaW5pdGlhdGVHYW1lKHBsYXllcjEsIHBsYXllcjIpO1xuICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIxR2FtZWJvYXJkKTtcbiAgLy8gY29uc29sZS5sb2cocGxheWVyMkdhbWVib2FyZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93T3Bwb25hbnRCb2FyZCgpIHtcbiAgY29uc3Qgb3Bwb25hbnRCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDb21wdXRlci1nYW1lLWJvYXJkJyk7XG4gIG9wcG9uYW50Qm9hcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKTtcbn1cbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuLi9mYWN0b3J5RnVuY3Rpb25zL3NoaXBGYWN0b3J5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBQbGFjZW1lbnQocGxheWVyMUdhbWVib2FyZCwgcGxheWVyMkdhbWVib2FyZCkge1xuICBwbGF5ZXIxR2FtZWJvYXJkLnNoaXBQbGFjZW1lbnQocGxheWVyMUdhbWVib2FyZC5vd25lciwgJ2NhcnJpZXInLCBbXG4gICAgJzRDJyxcbiAgICAnNUMnLFxuICAgICc2QycsXG4gICAgJzdDJyxcbiAgICAnOEMnLFxuICBdKTtcbiAgcGxheWVyMUdhbWVib2FyZC5zaGlwUGxhY2VtZW50KHBsYXllcjFHYW1lYm9hcmQub3duZXIsICdiYXR0bGVzaGlwJywgW1xuICAgICc4RScsXG4gICAgJzhGJyxcbiAgICAnOEcnLFxuICAgICc4SCcsXG4gIF0pO1xuICBwbGF5ZXIxR2FtZWJvYXJkLnNoaXBQbGFjZW1lbnQocGxheWVyMUdhbWVib2FyZC5vd25lciwgJ2Rlc3Ryb3llcicsIFtcbiAgICAnMkcnLFxuICAgICcySCcsXG4gICAgJzJJJyxcbiAgXSk7XG4gIHBsYXllcjFHYW1lYm9hcmQuc2hpcFBsYWNlbWVudChwbGF5ZXIxR2FtZWJvYXJkLm93bmVyLCAncGF0cm9sIGJvYXQnLCBbXG4gICAgJzVKJyxcbiAgICAnNkonLFxuICBdKTtcbiAgcGxheWVyMUdhbWVib2FyZC5zaGlwUGxhY2VtZW50KHBsYXllcjFHYW1lYm9hcmQub3duZXIsICdzdWJtYXJpbmUnLCBbXG4gICAgJzFBJyxcbiAgICAnMUInLFxuICAgICcxQycsXG4gIF0pO1xuXG4gIHBsYXllcjJHYW1lYm9hcmQuc2hpcFBsYWNlbWVudChwbGF5ZXIyR2FtZWJvYXJkLm93bmVyLCAnY2FycmllcicsIFtcbiAgICAnNEQnLFxuICAgICc1RCcsXG4gICAgJzZEJyxcbiAgICAnN0QnLFxuICAgICc4RCcsXG4gIF0pO1xuICBwbGF5ZXIyR2FtZWJvYXJkLnNoaXBQbGFjZW1lbnQocGxheWVyMkdhbWVib2FyZC5vd25lciwgJ2JhdHRsZXNoaXAnLCBbXG4gICAgJzlFJyxcbiAgICAnOUYnLFxuICAgICc5RycsXG4gICAgJzlIJyxcbiAgXSk7XG4gIHBsYXllcjJHYW1lYm9hcmQuc2hpcFBsYWNlbWVudChwbGF5ZXIyR2FtZWJvYXJkLm93bmVyLCAnZGVzdHJveWVyJywgW1xuICAgICcxRycsXG4gICAgJzFIJyxcbiAgICAnMUknLFxuICBdKTtcbiAgcGxheWVyMkdhbWVib2FyZC5zaGlwUGxhY2VtZW50KHBsYXllcjJHYW1lYm9hcmQub3duZXIsICdwYXRyb2wgYm9hdCcsIFtcbiAgICAnNUgnLFxuICAgICc2SCcsXG4gIF0pO1xuICBwbGF5ZXIyR2FtZWJvYXJkLnNoaXBQbGFjZW1lbnQocGxheWVyMkdhbWVib2FyZC5vd25lciwgJ3N1Ym1hcmluZScsIFtcbiAgICAnMTBBJyxcbiAgICAnMTBCJyxcbiAgICAnMTBDJyxcbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwUGxhY2VtZW50UGhhc2UocGxheWVyMUdhbWVib2FyZCkge1xuICBnZW5lcmF0ZVNoaXBDb250YWluZXIoKTtcbiAgZ2VuZXJhdGVTaGlwcyhwbGF5ZXIxR2FtZWJvYXJkKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTaGlwQ29udGFpbmVyKCkge1xuICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtcGFnZScpO1xuICBjb25zdCBzaGlwR2VuZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vc2hpcEdlbmVyYXRvci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXAtZ2VuZXJhdG9yJyk7XG4gIHNoaXBHZW5lcmF0b3Iuc2V0QXR0cmlidXRlKCdpZCcsICdzaGlwLWdlbmVyYXRvci1jb250YWluZXInKTtcblxuICBnYW1lQ29udGFpbmVyLmFwcGVuZChzaGlwR2VuZXJhdG9yKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTaGlwcyhwbGF5ZXIxR2FtZWJvYXJkKSB7XG4gIGNvbnN0IHNoaXBHZW5lcmF0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1nZW5lcmF0b3ItY29udGFpbmVyJyk7XG5cbiAgbGV0IHNoaXBzUmVtYWluaW5nID0gNTtcbiAgbGV0IHN0YW5kYnkgPSBmYWxzZTtcbiAgbGV0IHNoaXBUeXBlO1xuXG4gIHdoaWxlIChzaGlwc1JlbWFpbmluZyAhPSAwICYmIHN0YW5kYnkgPT0gZmFsc2UpIHtcbiAgICBpZiAoc2hpcHNSZW1haW5pbmcgPT0gNSkgc2hpcFR5cGUgPSAnY2Fycmllcic7XG4gICAgaWYgKHNoaXBzUmVtYWluaW5nID09IDQpIHNoaXBUeXBlID0gJ2JhdHRsZXNoaXAnO1xuICAgIGlmIChzaGlwc1JlbWFpbmluZyA9PSAzKSBzaGlwVHlwZSA9ICdkZXN0cm95ZXInO1xuICAgIGlmIChzaGlwc1JlbWFpbmluZyA9PSAyKSBzaGlwVHlwZSA9ICdzdWJtYXJpbmUnO1xuICAgIGlmIChzaGlwc1JlbWFpbmluZyA9PSAxKSBzaGlwVHlwZSA9ICdwYXRyb2wgYm9hdCc7XG5cbiAgICBsZXQgbmV3U2hpcCA9IG5ldyBTaGlwKHBsYXllcjFHYW1lYm9hcmQub3duZXIsIHNoaXBUeXBlKTtcbiAgICBuZXdTaGlwLmNyZWF0ZVNoaXAoKTtcbiAgICBzdGFuZGJ5ID0gdHJ1ZTtcbiAgfVxuXG4gIHdoaWxlIChzdGFuZGJ5ID09IHRydWUpIHtcbiAgICBsZXQgc2hpcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzaGlwVHlwZX0tZWxlbWVudGApO1xuICAgIHJldHVybjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVHYW1lYm9hcmRzIH0gZnJvbSAnLi9nYW1lU2NyZWVuJztcblxuZXhwb3J0IGZ1bmN0aW9uIHdlbGNvbWVTY3JlZW4oKSB7XG4gIGNvbnN0IHdlbGNvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlbGNvbWVQYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VsY29tZS1wYWdlJyk7XG4gIHdlbGNvbWVQYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJyk7XG5cbiAgLy8gbG9nb1xuICBjb25zdCB3ZWxjb21lR2FtZUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB3ZWxjb21lR2FtZUxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3ZWxjb21lLWxvZ28nKTtcbiAgd2VsY29tZUdhbWVMb2dvLmlubmVySFRNTCA9ICdCQVRUTEVTSElQJztcblxuICAvL3BsYXllciBuYW1lIGlucHV0XG4gIGNvbnN0IG5hbWVJbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy9uYW1lSW5wdXRGb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcblxuICBjb25zdCBmb3Jtd2VsY29tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybXdlbGNvbWVQYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS13ZWxjb21lUGFnZScpO1xuXG4gIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwbGF5ZXItbmFtZS1pbnB1dCcpO1xuICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gJ0VOVEVSIFBMQVlFUiBOQU1FOic7XG5cbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyLW5hbWUtaW5wdXQnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwbGF5ZXItbmFtZScpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgTmFtZScpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnV0dG9uJyk7XG4gIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQgR2FtZSc7XG4gIC8vc3VibWl0QnV0dG9uLm9uY2xpY2sgPSBnZW5lcmF0ZUdhbWVib2FyZHM7XG5cbiAgLy9hcHBlbmRzXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKHdlbGNvbWVQYWdlKTtcbiAgd2VsY29tZVBhZ2UuYXBwZW5kKHdlbGNvbWVHYW1lTG9nbyk7XG4gIHdlbGNvbWVQYWdlLmFwcGVuZChuYW1lSW5wdXRGb3JtKTtcbiAgbmFtZUlucHV0Rm9ybS5hcHBlbmQoZm9ybXdlbGNvbWVQYWdlKTtcbiAgZm9ybXdlbGNvbWVQYWdlLmFwcGVuZChuYW1lTGFiZWwpO1xuICBmb3Jtd2VsY29tZVBhZ2UuYXBwZW5kKG5hbWVJbnB1dCk7XG4gIGZvcm13ZWxjb21lUGFnZS5hcHBlbmQoc3VibWl0QnV0dG9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlV2VsY29tZVNjcmVlbih3ZWxjb21lU2NyZWVuKSB7XG4gIGlmICh3ZWxjb21lU2NyZWVuID09IG51bGwpIHJldHVybjtcbiAgd2VsY29tZVNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCB7IGdhbWVMb29wIH0gZnJvbSAnLi9nYW1lRnVuY3Rpb25zL2dhbWVMb29wJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vZmFjdG9yeUZ1bmN0aW9ucy9wbGF5ZXJGYWN0b3J5JztcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZmFjdG9yeUZ1bmN0aW9ucy9nYW1lYm9hcmRGYWN0b3J5JztcbmltcG9ydCB7XG4gIHNoaXBQbGFjZW1lbnQsXG4gIHNoaXBQbGFjZW1lbnRQaGFzZSxcbn0gZnJvbSAnLi9nYW1lRnVuY3Rpb25zL3NoaXBQbGFjZW1lbnQnO1xuaW1wb3J0IHtcbiAgZ2FtZVNjcmVlbixcbiAgZ2VuZXJhdGVHYW1lYm9hcmRzLFxuICBzaG93T3Bwb25hbnRCb2FyZCxcbn0gZnJvbSAnLi9nYW1lRnVuY3Rpb25zL2dhbWVTY3JlZW4nO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZUZ1bmN0aW9ucy9nYW1lT2JqZWN0JztcbmltcG9ydCB7XG4gIHdlbGNvbWVTY3JlZW4sXG4gIGNsb3NlV2VsY29tZVNjcmVlbixcbn0gZnJvbSAnLi9nYW1lRnVuY3Rpb25zL3dlbGNvbWVTY3JlZW4nO1xuXG5sZXQgZ2FtZTtcbndlbGNvbWVTY3JlZW4oKTtcbmNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idXR0b24nKTtcbmNvbnN0IHdlbGNvbWVTY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZS1wYWdlJyk7XG5sZXQgcGxheWVyTmFtZTtcblxuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1uYW1lLWlucHV0JykudmFsdWU7XG5cbiAgaWYgKHBsYXllck5hbWUgPT0gJycpIHtcbiAgICBhbGVydCgnWW91IG11c3QgYWRkIHlvdXIgbmFtZSEnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zb2xlLmxvZyhwbGF5ZXJOYW1lKTtcblxuICBsZXQgcGxheWVyMSA9IG5ldyBQbGF5ZXIocGxheWVyTmFtZSk7XG4gIGxldCBwbGF5ZXIyID0gbmV3IFBsYXllcigpO1xuICBjb25zb2xlLmxvZyhwbGF5ZXIxKTtcbiAgY29uc29sZS5sb2cocGxheWVyMik7XG4gIGNsb3NlV2VsY29tZVNjcmVlbih3ZWxjb21lU2NyZWVuQ29udGFpbmVyKTtcbiAgbGV0IHBsYXllcjFHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHBsYXllcjEubmFtZSk7XG5cbiAgbGV0IHBsYXllcjJHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHBsYXllcjIubmFtZSk7XG4gIGdhbWVTY3JlZW4oKTtcbiAgZ2VuZXJhdGVHYW1lYm9hcmRzKHBsYXllcjFHYW1lYm9hcmQsIHBsYXllcjJHYW1lYm9hcmQpO1xuICAvL3NoaXBQbGFjZW1lbnQocGxheWVyMUdhbWVib2FyZCwgcGxheWVyMkdhbWVib2FyZCk7XG5cbiAgZ2FtZSA9IG5ldyBHYW1lKHBsYXllcjEsIHBsYXllcjIsIHBsYXllcjFHYW1lYm9hcmQsIHBsYXllcjJHYW1lYm9hcmQpO1xuICBjb25zb2xlLmxvZyhwbGF5ZXIxR2FtZWJvYXJkKTtcbiAgY29uc29sZS5sb2cocGxheWVyMkdhbWVib2FyZCk7XG5cbiAgc2hpcFBsYWNlbWVudFBoYXNlKHBsYXllcjFHYW1lYm9hcmQpO1xuICAvL3Nob3dPcHBvbmFudEJvYXJkKHBsYXllcjJHYW1lYm9hcmQpO1xuXG4gIGdhbWUuc3RhcnRHYW1lKCk7XG4gIGdhbWUuY2hvb3NlV2hvU3RhcnRzKCk7XG4gIGNvbnNvbGUubG9nKGdhbWUpO1xuXG4gIGdhbWVMb29wKGdhbWUpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=