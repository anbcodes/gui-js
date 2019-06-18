/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ButtonGroup.js":
/*!****************************!*\
  !*** ./src/ButtonGroup.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ButtonGroup; });\nclass ButtonGroup {\n    constructor (name, rows, columns, buttonText, buttonCallBackFunction, element) {\n        this.element = element || document.body\n        this.numRows = rows\n        this.numColumns = columns\n        this.name = name\n        this.buttonCallBackFunction = buttonCallBackFunction\n        this.buttonText = buttonText\n        this.createButtonsElement()\n    }\n    show(display) {\n        this.buttons.style.display = display || \"block\"\n    }\n    hide() {\n        this.buttons.style.display = \"none\"\n    }\n    showButton(row, column, display) {\n        document.getElementById(`${this.name}-row-${row}-column-${column}`).style.display = display || \"block\"\n    }\n    hideButton(row, column) {\n        document.getElementById(`${this.name}-row-${row}-column-${column}`).style.display = \"none\"\n    }\n    showRow(row, display) {\n        document.getElementById(`${this.name}-row-${row}`).style.display = display || \"block\"\n    }\n    hideRow(row) {\n        document.getElementById(`${this.name}-row-${row}`).style.display = \"none\"\n    }\n    createRows() {\n        this.buttonRows = []\n        for (let row = 0; row < this.numRows; row += 1) {\n            let buttonRow = document.createElement(\"div\")\n            buttonRow.id = this.name + \"-row-\" + row\n            buttonRow.className = this.name + \"-row\"\n            this.buttons.appendChild(buttonRow)\n            this.buttonRows.push(buttonRow)\n        }\n    }\n    addButtonsToRows() {\n        for (let row = 0; row < this.numRows; row += 1) {\n            for (let column = 0; column < this.numColumns; column += 1) {\n                let button = document.createElement(\"button\")\n                button.id = this.name + \"-row-\" + row + \"column-\" + column\n                button.className = this.name + \" \" + \"resize\"\n                button.addEventListener(\"click\", this.buttonCallBackFunction)\n                button.appendChild(document.createTextNode(this.buttonText[row][column]))\n                this.buttonRows[row].appendChild(button)\n            }\n        }\n    }\n    createButtonsElement() {\n        this.buttons = document.createElement(\"div\")\n        this.buttons.id = this.name\n        this.createRows()\n        this.addButtonsToRows()    \n        this.element.appendChild(this.buttons)    \n    }\n    setNewButtonText(buttonText) {\n        this.buttonText = buttonText\n        for (let row = 0; row < this.numRows; row += 1) {\n            for (let column = 0; column < this.numColumns; column += 1) {\n                let button = document.getElementById(this.name + \"-row-\" + row + \"column-\" + column)\n                button.innerText = this.buttonText[row][column]\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/ButtonGroup.js?");

/***/ }),

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SettingsBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsBar */ \"./src/SettingsBar.js\");\n\n// import editor from \"./Editor\"\nclass Main {\n    constructor() {\n        this.settingsBar = new _SettingsBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n        // this.editor = new Editor(this.settingsBar)\n    }\n}\nlet main = new Main()\n\n//# sourceURL=webpack:///./src/Main.js?");

/***/ }),

/***/ "./src/SettingsBar.js":
/*!****************************!*\
  !*** ./src/SettingsBar.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SettingsBar; });\n/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonGroup */ \"./src/ButtonGroup.js\");\n\n\nclass SettingsBar {\n    constructor() {\n        this.div = this.createDiv()\n        this.pressed = {}\n        this.buttonText = [\n            [\"Top\", \"Middle\", \"Bottom\", \"Left\", \"Center\", \"Right\"]\n        ]\n        this.buttons = new _ButtonGroup__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"alignmentButtons\", 1, 6, this.buttonText, (e) => this.buttonClicked(e), this.div)\n    }\n\n    buttonClicked(e) {\n        this.pressed[e.target.innerText] = true\n        if (e.target.innerText === (\"Top\" || false || false)) {\n            for (let x = 0; x < 3; x++) {\n                if (Object.keys(this.pressed)[x] != e.target.innerText) {\n                    this.pressed[Object.keys(this.pressed)[x]] = false\n                }\n            }\n        } else {\n            for (let x = 3; x < 6; x++) {\n                if (Object.keys(this.pressed)[x] != e.target.innerText) {\n                    this.pressed[Object.keys(this.pressed)[x]] = false\n                }\n            }\n        }\n        this.updateButtonColors()\n        \n    }\n\n    updateButtonColors() {\n        for (let x = 0; x < 6; x++) {\n            let button = document.getElementById(`alignmentButtons-${this.pressed[Object.keys(this.pressed)[x]]}-row-0-column-${x}`)\n            if (this.pressed[Object.keys(this.pressed)[x]]) {\n                button.style.backgroundColor = \"#444444\"\n            } else {\n                button.style.backgroundColor = \"\"\n            }\n        }\n    }\n\n    createDiv() {\n        let div = document.createElement(\"div\")\n        div.className = \"div-SettingsBar\"\n        document.body.appendChild(div)\n        return div\n    }\n}\n\n//# sourceURL=webpack:///./src/SettingsBar.js?");

/***/ })

/******/ });