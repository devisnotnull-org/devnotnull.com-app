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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/jsx");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("typesafe-actions");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(19);
    var insertCss = __webpack_require__(10);
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */



var inserted = {};

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode("0x" + p1);
  }));
}

function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(id);

      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

function insertCss(styles, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === void 0 ? false : _ref$prepend,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;

  var ids = [];

  for (var i = 0; i < styles.length; i++) {
    var _styles$i = styles[i],
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];
    var id = "" + prefix + moduleId + "-" + i;
    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;
    var elem = document.getElementById(id);
    var create = false;

    if (!elem) {
      create = true;
      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;

    if (sourceMap && typeof btoa === 'function') {
      cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode(JSON.stringify(sourceMap)) + "*/";
      cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/";
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;
//# sourceMappingURL=insertCss.js.map


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(39);
    var insertCss = __webpack_require__(10);
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(40);
    var insertCss = __webpack_require__(10);
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(46);
    var insertCss = __webpack_require__(10);
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900);"]);
// Module
exports.push([module.i, "@charset \"utf-8\";\n@-webkit-viewport   { width: device-width; }\n@-moz-viewport      { width: device-width; }\n@-ms-viewport       { width: device-width; }\n@-o-viewport        { width: device-width; }\n@viewport           { width: device-width; }\n\n:root {\n    --base-font-famiy: 'Roboto', sans-serif;\n    --base-font-weight: 400;\n    --base-background-colour: #ededed;\n    --base-font-size: 10px;\n\n    --default-font-size: 1.4rem;\n    --default-line-heigh: 2rem;\n    \n    --base-pad: 1rem;\n \n    --header-1: 2rem;\n    --header-2: 1.7rem;\n    --header-3: 1.5rem;\n    --header-4: 1.3rem;\n\n    --font-colour: #363636;\n    --base-colour: #ec7263;\n\n    --tablet-breakpoint: 1024px;\n    --mobile-breakpoint: 800px;\n\n    --max-size: 110rem;\n}\n\nbody {\n    margin: 0 auto;\n    padding: 0;\n    max-width: var(--max-size);\n\n    font-weight: 100;\n}\n\nhtml {\n    font-size: var(--base-font-size);\n    color: var(--font-colour);\n    font-weight: var(--base-font-weight);\n    font-size: var(--base-font-size);\n    font-family: var(--base-font-famiy);\n    background-color: var(--base-background-colour);\n\n    font-weight: 100;\n}\n\n.Container--Large3zPaz {\n    max-width: 115rrem;\n}\n\n.Container--Standard3ECso {\n    max-width: 100rrem;\n}\n\n.Container--Small1ZAEI {\n    max-width: 90rrem;\n}\n\n.Align--Center2E_7U {\n    margin: 0 auto;\n}\n\n.Container3AC4w {\n    background: #ffffff;\n    margin: 0 auto;\n}\n\n.Block2xQDQ {\n    border-bottom: 2px solid var(--base-background-colour);\n    margin-bottom: 2rem;\n}\n\n.Block2xQDQ:after {\n    width: 100%;\n    height: 0.3rrem;\n    background: #ddd;\n    opacity: 0.5;\n    margin-top: 1.5rrem;\n    content: '';\n    display: block;\n}\n\n.Clearfix2je1f {\n    clear: both;\n}\n\n/** **/\n\nh1 {\n    font-size: var(--header-1);\n}\n\nh2 {\n    color: #EC7263;\n    font-size: var(--header-2);\n    font-weight: 700;\n    text-transform: uppercase;\n}\n\nh2:before{\n    content: '';\n    margin-right: 5px;\n}\n\nh3 {\n    font-size: var(--header-3);\n}\n\nh4 {\n    font-size: var(--header-4);\n}\n\n/** **/\n\na {\n    text-decoration: none;\n}\n\np {\n    font-size: 1.4rem;\n    line-height: var(--default-line-heigh);\n}\n\n\n\n.Navigation2sBjA {\n    position: ;\n}", ""]);
// Exports
exports.locals = {
	"Container--Large": "Container--Large3zPaz",
	"Container--Standard": "Container--Standard3ECso",
	"Container--Small": "Container--Small1ZAEI",
	"Align--Center": "Align--Center2E_7U",
	"Container": "Container3AC4w Container--Large3zPaz",
	"Block": "Block2xQDQ",
	"Clearfix": "Clearfix2je1f",
	"Navigation": "Navigation2sBjA"
};
module.exports = exports;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(42);
    var insertCss = __webpack_require__(10);
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(43);
    var insertCss = __webpack_require__(10);
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(44);
    var insertCss = __webpack_require__(10);
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(45);
    var insertCss = __webpack_require__(10);
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(41);
    var insertCss = __webpack_require__(10);
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("history/createMemoryHistory");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(19);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ":root {\n    --header-inverse-top: -7.5rem;\n}\n\n.Header3lKsu {\n    text-align: left;\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n}\n\n.Header--Photoz4CTJ {\n    width: 10rem;\n    height: 10rem;\n    border-radius: 50%;\n    overflow: hidden;\n    padding: 5px;\n    background: #ededed;\n    display: inline-block;\n\n    -webkit-transition:  -webkit-transform .2s ease-out;\n    -moz-transition: -moz-transform .2s ease-out;\n    -o-transition: -o-transform .2s ease-out;\n    -ms-transition: -ms-transform .2s ease-out; \n    transition: transform .2s ease-out; \n}\n\n.Header--Photoz4CTJ:hover {\n   -webkit-transform:scale(1.1);\n   -moz-transform:scale(1.1);\n   -o-transform:scale(1.1);\n   transform:scale(1.1);\n}\n\n.Header--Photoz4CTJ img {\n    width: 10rem;\n    height: 10rem;\n    border-radius: 50%;\n}\n\n.Text--Header3Q8CQ h1 {\n    margin: 0;\n    padding: 0;\n    font-size: 2.4rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: -1px;\n}\n\n.Text-header2UiJT h1::first-line {\n    font-size: 1.5rem;\n    letter-spacing: -4px;\n    font-weight: 800;\n    line-height: 1.5rem;\n}\n\n.Header--Text16K4o h1 span {\n    color: #F0563D;\n}\n\n.Header--Text16K4o h1 sup {\n    opacity: 0.5;\n}\n\n.Header--Text16K4o:after {\n    width: 100%;\n    height: 0.3rem;\n    background: #ddd;\n    opacity: 0.5;\n    content: '';\n    display: block;\n}\n\n.Description3aaFq {\n  font-size: 1.6rem;\n}\n\n.Link4rVwC {\n    margin: 3rem 1rem;\n    padding: 1rem;\n    font-size: 2rem;\n    display: inline-block;\n    font-weight: 400;\n    color: black;\n}\n\n.Link--left3DwKD {\n    float: left;\n}\n\n.Link--right2OVH7 {\n    float: right;\n}\n\n.Link--active1kvCk {\n    background: orange;\n    border-radius: 1rem;\n}\n\n.Clear2huoN {\n    clear: both;\n}\n", ""]);
// Exports
exports.locals = {
	"Header": "Header3lKsu",
	"Header--Photo": "Header--Photoz4CTJ",
	"Text--Header": "Text--Header3Q8CQ",
	"Text-header": "Text-header2UiJT",
	"Header--Text": "Header--Text16K4o",
	"Description": "Description3aaFq",
	"Link": "Link4rVwC",
	"Link--left": "Link--left3DwKD",
	"Link--right": "Link--right2OVH7",
	"Link--active": "Link--active1kvCk",
	"Clear": "Clear2huoN"
};
module.exports = exports;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container3W8ZI {\n    width: 100%;\n    height: 0;\n    padding-top: 100%;\n    position: relative;\n}\n\n.container3W8ZI > svg  {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.deg902WDqT {\n    transform: rotate(90deg);\n}\n\n.deg1803B4YK {\n    transform: rotate(180deg);\n}\n\n.deg27016awR {\n    transform: rotate(270deg);\n}", ""]);
// Exports
exports.locals = {
	"container": "container3W8ZI",
	"deg90": "deg902WDqT",
	"deg180": "deg1803B4YK",
	"deg270": "deg27016awR"
};
module.exports = exports;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ContactItem4VOwr {\n    width: 100%;\n    display: flex;\n    border: 1px solid #e6e6e6;\n    border-bottom: none\n}\n\n.ContactItem4VOwr:last-child {\n    border: 1px solid #e6e6e6;\n}\n\n.ContactItem--Icon28B3J {\n    padding: 1rem;\n    border-right: 1px solid #aaa;\n    opacity: 0.3;\n    width: 2rem;\n}\n\n.ContactItem4VOwr .fa3j15s {\n    font-size: 2rem;\n}\n\n.ContactItem--Title2JyM6{\n    flex: 8;\n    padding: 1rem;\n    font-size: 1.5rem;\n    font-weight: 700;\n    opacity: 0.9;\n}\n\n.ContactItem--Title--OnlysKv_5{\n    margin-top: 10px;\n}\n\n.ContactItem--Description2lr2Y{\n    width: 80%;\n    width: calc(100% - 55px);\n    font-size: 1.2rem;\n    opacity: 0.7;\n}", ""]);
// Exports
exports.locals = {
	"ContactItem": "ContactItem4VOwr",
	"ContactItem--Icon": "ContactItem--Icon28B3J",
	"fa": "fa3j15s",
	"ContactItem--Title": "ContactItem--Title2JyM6",
	"ContactItem--Title--Only": "ContactItem--Title--OnlysKv_5",
	"ContactItem--Description": "ContactItem--Description2lr2Y"
};
module.exports = exports;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Item--SkillsEpqhC {\n    white-space: wrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: 600;\n    margin-bottom:10px;\n}\n  \n.SkillgAlBU {\n    background: #F0563D;\n    color: #fff;\n    padding: 0.5rem 1rem;\n    margin-bottom: 0.5rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1.2em;\n    font-weight: 600;\n}\n  \n.Skill-Items1ZxLF {\n    background: #ffffff;\n    color: #fff;\n    padding: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: 600;\n    font-size: 1.4em;\n    border:1px solid #e6e6e6;\n    border-top:none;\n}\n\n.Skill--Badge3IPgq {\n    display: inline-block;\n    background: #e6e6e6;\n    padding: 0.8rem;\n    font-size: 1.2rem;\n    margin-right: 0.5rem;\n    margin-bottom: 0.5rem;\n}", ""]);
// Exports
exports.locals = {
	"Item--Skills": "Item--SkillsEpqhC",
	"Skill": "SkillgAlBU",
	"Skill-Items": "Skill-Items1ZxLF",
	"Skill--Badge": "Skill--Badge3IPgq"
};
module.exports = exports;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(19);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ":root{\n    --section-top-margin: 2rem;\n}\n\n.Experiance3W3VS {\n    position: relative;\n    padding: 1em 0;\n    display: flex;  \n    flex-direction: row;\n}\n\n.Experiance3W3VS:before {\n    width: 0.5rem;\n    height: 40%;\n    top: 70px;\n    position: absolute;\n    left: 2.45rem;\n    content: ' ';\n    display: block;\n    /** background: var(--base-colour); **/\n    /** background: linear-gradient(to bottom, #ffffff 0px, var(--base-colour) 0%, var(--base-colour) 0%, #ffffff 100%); **/\n}\n\n.Experiance--Year1-68R {\n    background: #fff;\n    padding: 1rem;\n    font-size: 1.5em;\n    font-weight: 700;\n    order: 1;\n    flex: 1;\n}\n\n.Experiance--DescriptionLsjcp{\n    background: #eee;\n    margin-bottom: 1rem;\n    position: relative;\n    padding: 1rem 1rem 0 1rem;\n    border-bottom: 1px solid #ddd;\n    order: 2;\n    flex: 9;\n}\n\n.Experiance--DescriptionLsjcp:after {\n    content: '';\n    position: absolute;\n    top: 1.5rem;\n    right: 0;\n    left: -1.5rem;\n    height: 0;\n    width: 0;\n    border: solid transparent;\n    border-right-color: #eee;\n    border-width: 1rem;\n    pointer-events: none;\n}\n\n.Experiance--DescriptionLsjcp h3 {\n    font-size: 1.6em;\n    margin: 0;\n    padding: 0;\n    font-weight: 700;\n}\n\n.Experiance--DescriptionLsjcp p {\n    font-size: 1.3em;\n    margin-top: 0.5rem;\n    padding: 0;\n}\n\n@media (max-width: 850px) {\n\n    .Experiance3W3VS {  \n        flex-direction: column;\n    }\n\n    .Experiance--Year1-68R {\n        flex: 1;\n    }\n    \n    .Experiance--DescriptionLsjcp{\n        flex: 9;\n    }\n\n    \n}", ""]);
// Exports
exports.locals = {
	"Experiance": "Experiance3W3VS",
	"Experiance--Year": "Experiance--Year1-68R",
	"Experiance--Description": "Experiance--DescriptionLsjcp"
};
module.exports = exports;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(19);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ":root{\n    --section-top-margin: 2rem;\n}\n\n.Education2_vZi {\n    position: relative;\n    padding: 1em 0;\n    display: flex;  \n    flex-direction: row;\n}\n\n.Education2_vZi:before {\n    width: 0.5rem;\n    height: 40%;\n    top: 70px;\n    position: absolute;\n    left: 2.45rem;\n    content: ' ';\n    display: block;\n    /** background: var(--base-colour); **/\n    /** background: linear-gradient(to bottom, #ffffff 0px, var(--base-colour) 0%, var(--base-colour) 0%, #ffffff 100%); **/\n}\n\n.Education--Year2sdwq {\n    background: #fff;\n    padding: 1rem;\n    font-size: 1.5em;\n    font-weight: 700;\n    order: 1;\n    flex: 1;\n}\n\n.Education--Description2lJYN{\n    background: #eee;\n    margin-bottom: 1rem;\n    position: relative;\n    padding: 1rem 1rem 0 1rem;\n    border-bottom: 1px solid #ddd;\n    order: 2;\n    flex: 9;\n}\n\n.Education--Description2lJYN:after {\n    content: '';\n    position: absolute;\n    top: 1.5rem;\n    right: 0;\n    left: -1.5rem;\n    height: 0;\n    width: 0;\n    border: solid transparent;\n    border-right-color: #eee;\n    border-width: 1rem;\n    pointer-events: none;\n}\n\n.Education--Description2lJYN h3 {\n    font-size: 1.6em;\n    margin: 0;\n    padding: 0;\n    font-weight: 700;\n}\n\n.Education--Description2lJYN p {\n    font-size: 1.3em;\n    margin-top: 0.5rem;\n    padding: 0;\n}\n\n@media (max-width: 850px) {\n\n    .Education2_vZi {  \n        flex-direction: column;\n    }\n\n    .Education--Year2sdwq {\n        flex: 1;\n    }\n    \n    .Education--Description2lJYN{\n        flex: 9;\n    }\n\n    \n}", ""]);
// Exports
exports.locals = {
	"Education": "Education2_vZi",
	"Education--Year": "Education--Year2sdwq",
	"Education--Description": "Education--Description2lJYN"
};
module.exports = exports;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Image8Xc30 {\n    width: 33%;\n}\n\n.Content3gapi {\n    display: flex;  \n    flex-direction: row;\n}\n\n.Description2H1A1 {\n    order: 1;\n    flex: 2;\n    padding: 0 1rem 1rem 1.5rem;\n}\n\n.BreakdownG99xy {\n    order: 2;\n    flex: 1;\n    padding: 0 1rem 0 1rem;\n}\n  \n\n@media (max-width: 850px) {\n\n    .Content3gapi {  \n        flex-direction: column;\n    }\n\n    .Image8Xc30 {\n        width: 100%;\n    }\n\n}", ""]);
// Exports
exports.locals = {
	"Image": "Image8Xc30",
	"Content": "Content3gapi",
	"Description": "Description2H1A1",
	"Breakdown": "BreakdownG99xy"
};
module.exports = exports;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".InnerContainer2NZPI {\n    display: flex;\n    order: 1;\n    flex: 2;\n    padding: 0 1rem 1rem 1.5rem;\n}\n\n.Entry--Container37tIp {\n    padding-bottom: 5rem;\n    margin-bottom: 5rem;\n    border-bottom: 3px solid #ededed;\n}\n\n.Entry--HeaderA2rJV {\n    color: #EC7263;\n    margin-bottom: 4rem;\n}\n\n.Entry--Body29_CQ {\n\n}\n\n.Block--Code2zcDJ {\n    background: #eeeeee;\n    border: #dddddd 1px solid;\n    border-radius: 5px;\n    padding: 10px;\n}\n\n", ""]);
// Exports
exports.locals = {
	"InnerContainer": "InnerContainer2NZPI",
	"Entry--Container": "Entry--Container37tIp",
	"Entry--Header": "Entry--HeaderA2rJV",
	"Entry--Body": "Entry--Body29_CQ",
	"Block--Code": "Block--Code2zcDJ"
};
module.exports = exports;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "regenerator-runtime/runtime"
var runtime_ = __webpack_require__(38);

// EXTERNAL MODULE: external "webpack-dev-middleware"
var external_webpack_dev_middleware_ = __webpack_require__(29);
var external_webpack_dev_middleware_default = /*#__PURE__*/__webpack_require__.n(external_webpack_dev_middleware_);

// EXTERNAL MODULE: external "webpack-hot-middleware"
var external_webpack_hot_middleware_ = __webpack_require__(30);
var external_webpack_hot_middleware_default = /*#__PURE__*/__webpack_require__.n(external_webpack_hot_middleware_);

// EXTERNAL MODULE: external "webpack"
var external_webpack_ = __webpack_require__(31);
var external_webpack_default = /*#__PURE__*/__webpack_require__.n(external_webpack_);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(32);

// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(33);

// EXTERNAL MODULE: external "express"
var external_express_ = __webpack_require__(14);
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/jsx"
var jsx_ = __webpack_require__(0);
var jsx_default = /*#__PURE__*/__webpack_require__.n(jsx_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(4);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(15);

// EXTERNAL MODULE: external "history/createMemoryHistory"
var createMemoryHistory_ = __webpack_require__(34);
var createMemoryHistory_default = /*#__PURE__*/__webpack_require__.n(createMemoryHistory_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(8);

// EXTERNAL MODULE: external "react-router"
var external_react_router_ = __webpack_require__(35);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(26);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(20);
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// CONCATENATED MODULE: ./server/html.tsx
const Html=({initialState,rootComponent,assets,PROD,splitPoints})=>{const helmet=external_react_helmet_default.a.renderStatic();const htmlAttrs=helmet.htmlAttributes.toComponent();const bodyAttrs=helmet.bodyAttributes.toComponent();const keys=Object.keys(assets);console.log('------------------------------');console.log('assets');console.log(assets);console.log('------------------------------');console.log('keys');console.log(keys);const js=keys.filter(a=>a.includes('.js')&&!a.includes('.map')&&!a.includes('.json'));const css=keys.filter(a=>a.includes('.css')&&!a.includes('.map'));const srcJsFiles=js.map(key=>jsx_default()("script",{src:assets[key]}));const srcCssFiles=css.map(key=>jsx_default()("link",{rel:"stylesheet",href:assets[key],type:"text/css"}));return external_react_default.a.createElement("html",htmlAttrs,jsx_default()("head",{},void 0,jsx_default()("meta",{charSet:"utf-8"}),helmet.title.toComponent(),helmet.meta.toComponent(),helmet.link.toComponent(),srcCssFiles),external_react_default.a.createElement("body",bodyAttrs,jsx_default()("script",{dangerouslySetInnerHTML:{__html:initialState}}),jsx_default()("script",{dangerouslySetInnerHTML:{__html:splitPoints}}),PROD&&rootComponent?jsx_default()("div",{id:"root",dangerouslySetInnerHTML:{__html:Object(server_["renderToString"])(rootComponent)}}):jsx_default()("div",{id:"root"}),jsx_default()("div",{id:"modal-root"}),srcJsFiles,jsx_default()("script",{src:'/bundle.js'})));};/* harmony default export */ var html = (Html);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(16);

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(27);
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(36);

// EXTERNAL MODULE: external "connected-react-router"
var external_connected_react_router_ = __webpack_require__(21);

// EXTERNAL MODULE: external "typesafe-actions"
var external_typesafe_actions_ = __webpack_require__(3);

// CONCATENATED MODULE: ./core/blog/actions.ts
let BlogActionTypes;(function(BlogActionTypes){BlogActionTypes["FETCH_START"]="@blog/FETCH_START";BlogActionTypes["FETCH_SUCCESS"]="@blog/FETCH_SUCCESS";BlogActionTypes["FETCH_ERROR"]="@blog/FETCH_ERROR";})(BlogActionTypes||(BlogActionTypes={}));const fetchRequest=()=>Object(external_typesafe_actions_["action"])(BlogActionTypes.FETCH_START);const fetchSuccess=data=>Object(external_typesafe_actions_["action"])(BlogActionTypes.FETCH_SUCCESS,data);const fetchError=message=>Object(external_typesafe_actions_["action"])(BlogActionTypes.FETCH_ERROR,message);
// CONCATENATED MODULE: ./core/blog/reducer.ts
const reducer_initialState={total:0,skip:0,limit:0,items:[],errors:undefined,loading:false};const blog=(state=reducer_initialState,action)=>{switch(action.type){case BlogActionTypes.FETCH_START:{return{...state,loading:true,errors:undefined};}case BlogActionTypes.FETCH_SUCCESS:{return{...state,loading:false,errors:undefined,...action.payload};}case BlogActionTypes.FETCH_ERROR:{return{...state,loading:false,errors:action.payload};}default:{return state;}}};/* harmony default export */ var reducer = (blog);
// CONCATENATED MODULE: ./core/ability/actions.ts
let AbilitiesActionTypes;(function(AbilitiesActionTypes){AbilitiesActionTypes["FETCH_START"]="@abilities/FETCH_START";AbilitiesActionTypes["FETCH_SUCCESS"]="@abilities/FETCH_SUCCESS";AbilitiesActionTypes["FETCH_ERROR"]="@abilities/FETCH_ERROR";})(AbilitiesActionTypes||(AbilitiesActionTypes={}));const actions_fetchRequest=()=>Object(external_typesafe_actions_["action"])(AbilitiesActionTypes.FETCH_START);const actions_fetchSuccess=data=>Object(external_typesafe_actions_["action"])(AbilitiesActionTypes.FETCH_SUCCESS,data);const actions_fetchError=message=>Object(external_typesafe_actions_["action"])(AbilitiesActionTypes.FETCH_ERROR,message);
// CONCATENATED MODULE: ./core/ability/reducer.ts
const ability_reducer_initialState={total:0,skip:0,limit:0,items:[],errors:undefined,loading:false};const reducer_blog=(state=ability_reducer_initialState,action)=>{switch(action.type){case AbilitiesActionTypes.FETCH_START:{return{...state,loading:true,errors:undefined};}case AbilitiesActionTypes.FETCH_SUCCESS:{return{...state,loading:false,errors:undefined,...action.payload};}case AbilitiesActionTypes.FETCH_ERROR:{return{...state,loading:false,errors:action.payload};}default:{return state;}}};/* harmony default export */ var ability_reducer = (reducer_blog);
// CONCATENATED MODULE: ./core/education/actions.ts
let EducationActionTypes;(function(EducationActionTypes){EducationActionTypes["FETCH_START"]="@education/FETCH_START";EducationActionTypes["FETCH_SUCCESS"]="@education/FETCH_SUCCESS";EducationActionTypes["FETCH_ERROR"]="@education/FETCH_ERROR";})(EducationActionTypes||(EducationActionTypes={}));const education_actions_fetchRequest=()=>Object(external_typesafe_actions_["action"])(EducationActionTypes.FETCH_START);const education_actions_fetchSuccess=data=>Object(external_typesafe_actions_["action"])(EducationActionTypes.FETCH_SUCCESS,data);const education_actions_fetchError=message=>Object(external_typesafe_actions_["action"])(EducationActionTypes.FETCH_ERROR,message);
// CONCATENATED MODULE: ./core/education/reducer.ts
const education_reducer_initialState={total:0,skip:0,limit:0,items:[],errors:undefined,loading:false};const education_reducer_blog=(state=education_reducer_initialState,action)=>{switch(action.type){case EducationActionTypes.FETCH_START:{return{...state,loading:true,errors:undefined};}case EducationActionTypes.FETCH_SUCCESS:{return{...state,loading:false,errors:undefined,...action.payload};}case EducationActionTypes.FETCH_ERROR:{return{...state,loading:false,errors:action.payload};}default:{return state;}}};/* harmony default export */ var education_reducer = (education_reducer_blog);
// CONCATENATED MODULE: ./core/experiance/actions.ts
let ExperianceActionTypes;(function(ExperianceActionTypes){ExperianceActionTypes["FETCH_START"]="@experiance/FETCH_START";ExperianceActionTypes["FETCH_SUCCESS"]="@experiance/FETCH_SUCCESS";ExperianceActionTypes["FETCH_ERROR"]="@experiance/FETCH_ERROR";})(ExperianceActionTypes||(ExperianceActionTypes={}));const experiance_actions_fetchRequest=()=>Object(external_typesafe_actions_["action"])(ExperianceActionTypes.FETCH_START);const experiance_actions_fetchSuccess=data=>Object(external_typesafe_actions_["action"])(ExperianceActionTypes.FETCH_SUCCESS,data);const experiance_actions_fetchError=message=>Object(external_typesafe_actions_["action"])(ExperianceActionTypes.FETCH_ERROR,message);
// CONCATENATED MODULE: ./core/experiance/reducer.ts
const experiance_reducer_initialState={total:0,skip:0,limit:0,items:[],errors:undefined,loading:false};const experiance_reducer_blog=(state=experiance_reducer_initialState,action)=>{switch(action.type){case ExperianceActionTypes.FETCH_START:{return{...state,loading:true,errors:undefined};}case ExperianceActionTypes.FETCH_SUCCESS:{return{...state,loading:false,errors:undefined,...action.payload};}case ExperianceActionTypes.FETCH_ERROR:{return{...state,loading:false,errors:action.payload};}default:{return state;}}};/* harmony default export */ var experiance_reducer = (experiance_reducer_blog);
// CONCATENATED MODULE: ./core/folio/actions.ts
let FolioActionTypes;(function(FolioActionTypes){FolioActionTypes["FETCH_START"]="@folio/FETCH_START";FolioActionTypes["FETCH_SUCCESS"]="@folio/FETCH_SUCCESS";FolioActionTypes["FETCH_ERROR"]="@folio/FETCH_ERROR";})(FolioActionTypes||(FolioActionTypes={}));const folio_actions_fetchRequest=()=>Object(external_typesafe_actions_["action"])(FolioActionTypes.FETCH_START);const folio_actions_fetchSuccess=data=>Object(external_typesafe_actions_["action"])(FolioActionTypes.FETCH_SUCCESS,data);const folio_actions_fetchError=message=>Object(external_typesafe_actions_["action"])(FolioActionTypes.FETCH_ERROR,message);
// CONCATENATED MODULE: ./core/folio/reducer.ts
const folio_reducer_initialState={total:0,skip:0,limit:0,items:[],errors:undefined,loading:false};const folio_reducer_blog=(state=folio_reducer_initialState,action)=>{switch(action.type){case FolioActionTypes.FETCH_START:{return{...state,loading:true,errors:undefined};}case FolioActionTypes.FETCH_SUCCESS:{return{...state,loading:false,errors:undefined,...action.payload};}case FolioActionTypes.FETCH_ERROR:{return{...state,loading:false,errors:action.payload};}default:{return state;}}};/* harmony default export */ var folio_reducer = (folio_reducer_blog);
// CONCATENATED MODULE: ./core/metadata/actions.ts
let MetadataActionTypes;(function(MetadataActionTypes){MetadataActionTypes["FETCH_START"]="@metadata/FETCH_START";MetadataActionTypes["FETCH_SUCCESS"]="@metadata/FETCH_SUCCESS";MetadataActionTypes["FETCH_ERROR"]="@metadata/FETCH_ERROR";})(MetadataActionTypes||(MetadataActionTypes={}));const metadata_actions_fetchRequest=()=>Object(external_typesafe_actions_["action"])(MetadataActionTypes.FETCH_START);const metadata_actions_fetchSuccess=data=>Object(external_typesafe_actions_["action"])(MetadataActionTypes.FETCH_SUCCESS,data);const metadata_actions_fetchError=message=>Object(external_typesafe_actions_["action"])(MetadataActionTypes.FETCH_ERROR,message);
// CONCATENATED MODULE: ./core/metadata/reducer.ts
const metadata_reducer_initialState={errors:undefined,loading:false,title:'',blurb:'',summary:'',favicon:{},primaryImage:{},secondaryImage:{}};const metadata_reducer_blog=(state=metadata_reducer_initialState,action)=>{switch(action.type){case MetadataActionTypes.FETCH_START:{return{...state,loading:true,errors:undefined};}case MetadataActionTypes.FETCH_SUCCESS:{return{...state,loading:false,errors:undefined,...action.payload};}case MetadataActionTypes.FETCH_ERROR:{return{...state,loading:false,errors:action.payload};}default:{return state;}}};/* harmony default export */ var metadata_reducer = (metadata_reducer_blog);
// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__(1);

// CONCATENATED MODULE: ./core/assets/actions.ts
let AssetActionTypes;(function(AssetActionTypes){AssetActionTypes["FETCH_START"]="@asset/FETCH_START";AssetActionTypes["FETCH_SUCCESS"]="@asset/FETCH_SUCCESS";AssetActionTypes["FETCH_ERROR"]="@asset/FETCH_ERROR";})(AssetActionTypes||(AssetActionTypes={}));const assets_actions_fetchRequest=()=>Object(external_typesafe_actions_["action"])(AssetActionTypes.FETCH_START);const assets_actions_fetchSuccess=data=>Object(external_typesafe_actions_["action"])(AssetActionTypes.FETCH_SUCCESS,data);const assets_actions_fetchError=message=>Object(external_typesafe_actions_["action"])(AssetActionTypes.FETCH_ERROR,message);
// CONCATENATED MODULE: ./core/assets/reducer.ts
const assets_reducer_initialState={errors:undefined,loading:false,items:{}};const asset=(state=assets_reducer_initialState,action)=>{switch(action.type){case AssetActionTypes.FETCH_START:{return{...state,loading:true,errors:undefined};}case AssetActionTypes.FETCH_SUCCESS:{return{...state,loading:false,errors:undefined,items:Object(external_ramda_["clone"])(state.items)};}case AssetActionTypes.FETCH_ERROR:{return{...state,loading:false,errors:action.payload};}default:{return state;}}};/* harmony default export */ var assets_reducer = (asset);
// CONCATENATED MODULE: ./core/contact/actions.ts
let ContactActionTypes;(function(ContactActionTypes){ContactActionTypes["FETCH_START"]="@contact/FETCH_START";ContactActionTypes["FETCH_SUCCESS"]="@contact/FETCH_SUCCESS";ContactActionTypes["FETCH_ERROR"]="@contact/FETCH_ERROR";})(ContactActionTypes||(ContactActionTypes={}));const contact_actions_fetchRequest=()=>Object(external_typesafe_actions_["action"])(ContactActionTypes.FETCH_START);const contact_actions_fetchSuccess=data=>Object(external_typesafe_actions_["action"])(ContactActionTypes.FETCH_SUCCESS,data);const contact_actions_fetchError=message=>Object(external_typesafe_actions_["action"])(ContactActionTypes.FETCH_ERROR,message);
// CONCATENATED MODULE: ./core/contact/reducer.ts
const contact_reducer_initialState={total:0,skip:0,limit:0,items:[],errors:undefined,loading:false};const contact_reducer_blog=(state=contact_reducer_initialState,action)=>{switch(action.type){case ContactActionTypes.FETCH_START:{return{...state,loading:true,errors:undefined};}case ContactActionTypes.FETCH_SUCCESS:{return{...state,loading:false,errors:undefined,...action.payload};}case ContactActionTypes.FETCH_ERROR:{return{...state,loading:false,errors:action.payload};}default:{return state;}}};/* harmony default export */ var contact_reducer = (contact_reducer_blog);
// CONCATENATED MODULE: ./core/reducers.ts
const rootReducers=history=>Object(external_redux_["combineReducers"])({blog: reducer,ability: ability_reducer,education: education_reducer,experiance: experiance_reducer,folio: folio_reducer,metadata: metadata_reducer,assets: assets_reducer,contact: contact_reducer,router:Object(external_connected_react_router_["connectRouter"])(history)});/* harmony default export */ var reducers = (rootReducers);
// CONCATENATED MODULE: ./utils.ts
const isServerRender=typeof window==='undefined';const isProduction="production"==='production';
// CONCATENATED MODULE: ./core/store.ts
/* harmony default export */ var core_store = ((history,reduxState=undefined)=>{//
console.log('Is this a server side render');console.log(isServerRender);// Compose our middlewares
const saga=external_redux_saga_default()();const router=Object(external_connected_react_router_["routerMiddleware"])(history);// Compose with dev tools
const enhancer=Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(saga,router));// Create our store
const store=Object(external_redux_["createStore"])(reducers(history),reduxState,enhancer);// TODO: This needs to be properly types
store.runSaga=saga.run;store.closeSagas=()=>store.dispatch(external_redux_saga_["END"]);// TODO: Cleanup
if(false){}return store;});
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(2);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./core/constants.ts
let CONTENT_TYPE;(function(CONTENT_TYPE){CONTENT_TYPE["experienceItem"]="experienceItem";CONTENT_TYPE["contactItem"]="contactItem";CONTENT_TYPE["portfolioItem"]="portfolioItem";CONTENT_TYPE["abilitiesItem"]="abilities";CONTENT_TYPE["siteMetadata"]="siteMetadata";CONTENT_TYPE["educationItem"]="education";CONTENT_TYPE["metaItem"]="metaItem";CONTENT_TYPE["blogItem"]="blogItem";})(CONTENT_TYPE||(CONTENT_TYPE={}));const COMMON_ENTITY={default:""};const TOKEN="Bearer jxL60x3L_5Xi9t-pyThRTqoJ2XXytZaumaRJQvIwrGE";const ENDPOINT="https://cdn.contentful.com/spaces/a540ntfc59hv/entries/";const ITEM_ENDPOINT="https://cdn.contentful.com/spaces/a540ntfc59hv/";const metadataId='721DX3ujLmVAwmiguGLP8t';
// CONCATENATED MODULE: ./core/ability/fetch.ts
const fetch_select='fields';const order='-fields.level';const fetchAbilities=()=>external_axios_default.a.get(`${ENDPOINT}?content_type=${CONTENT_TYPE.abilitiesItem}&select=${fetch_select}&order=${order}`,{headers:{Authorization:TOKEN}});
// CONCATENATED MODULE: ./core/ability/sagas.ts
function*abilitiesSagas(){try{const payload=yield Object(effects_["call"])(fetchAbilities);yield Object(effects_["put"])({type:AbilitiesActionTypes.FETCH_SUCCESS,payload:payload.data});}catch(ex){yield Object(effects_["put"])({type:AbilitiesActionTypes.FETCH_ERROR,ex});}}
// CONCATENATED MODULE: ./core/blog/fetch.ts
const fetchBlog=()=>external_axios_default.a.get(`${ENDPOINT}?content_type=${CONTENT_TYPE.blogItem}&select=fields&`,{headers:{Authorization:TOKEN}});
// CONCATENATED MODULE: ./core/blog/sagas.ts
function*blogSaga(){try{const payload=yield Object(effects_["call"])(fetchBlog);//
yield Object(effects_["put"])({type:BlogActionTypes.FETCH_SUCCESS,payload:payload.data});}catch(ex){//
yield Object(effects_["put"])({type:BlogActionTypes.FETCH_ERROR,ex});}}
// CONCATENATED MODULE: ./core/folio/fetch.ts
const fetchFolio=()=>external_axios_default.a.get(`${ENDPOINT}?content_type=${CONTENT_TYPE.portfolioItem}&select=fields`,{headers:{Authorization:TOKEN}});
// CONCATENATED MODULE: ./core/folio/sagas.ts
function*folioSaga(){try{const payload=yield Object(effects_["call"])(fetchFolio);yield Object(effects_["put"])({type:FolioActionTypes.FETCH_SUCCESS,payload:payload.data});}catch(ex){yield Object(effects_["put"])({type:FolioActionTypes.FETCH_ERROR,ex});}}
// CONCATENATED MODULE: ./core/education/fetch.ts
const fetchEducation=()=>external_axios_default.a.get(`${ENDPOINT}?content_type=${CONTENT_TYPE.educationItem}&select=fields`,{headers:{Authorization:TOKEN}});
// CONCATENATED MODULE: ./core/education/sagas.ts
function*educationSaga(){try{const payload=yield Object(effects_["call"])(fetchEducation);yield Object(effects_["put"])({type:EducationActionTypes.FETCH_SUCCESS,payload:payload.data});}catch(ex){yield Object(effects_["put"])({type:EducationActionTypes.FETCH_ERROR,ex});}}
// CONCATENATED MODULE: ./core/experiance/fetch.ts
const experiance_fetch_select='fields';const fetch_order='-fields.startDate';const fetchExperiance=()=>external_axios_default.a.get(`${ENDPOINT}?content_type=${CONTENT_TYPE.experienceItem}&select=${experiance_fetch_select}&order=${fetch_order}`,{headers:{Authorization:TOKEN}});
// CONCATENATED MODULE: ./core/experiance/sagas.ts
function*experianceSaga(){try{const payload=yield Object(effects_["call"])(fetchExperiance);yield Object(effects_["put"])({type:ExperianceActionTypes.FETCH_SUCCESS,payload:payload.data});}catch(ex){yield Object(effects_["put"])({type:ExperianceActionTypes.FETCH_ERROR,ex});}}
// CONCATENATED MODULE: ./core/metadata/fetch.ts
const fetchMetadata=id=>external_axios_default.a.get(`${ENDPOINT}${id}`,{headers:{Authorization:TOKEN}});
// CONCATENATED MODULE: ./core/metadata/sagas.ts
function*metadataSagas(){try{const payload=yield Object(effects_["call"])(fetchMetadata,metadataId);yield Object(effects_["put"])({type:AssetActionTypes.FETCH_START,payload:Object(external_ramda_["path"])(['data','fields','primaryImage','sys','id'],payload)});yield Object(effects_["put"])({type:MetadataActionTypes.FETCH_SUCCESS,payload:payload.data.fields});}catch(ex){yield Object(effects_["put"])({type:MetadataActionTypes.FETCH_ERROR,ex});}}
// CONCATENATED MODULE: ./core/assets/fetch.ts
const assets_fetch_select='fields';const assets_fetch_order='-fields.level';const fetch_fetchAbilities=()=>external_axios_default.a.get(`${ENDPOINT}?content_type=${CONTENT_TYPE.abilitiesItem}&select=${assets_fetch_select}&order=${assets_fetch_order}`,{headers:{Authorization:TOKEN}});
// CONCATENATED MODULE: ./core/assets/sagas.ts
function*assetSaga(){try{const payload=yield Object(effects_["call"])(fetch_fetchAbilities);yield Object(effects_["put"])({type:AssetActionTypes.FETCH_SUCCESS,payload:payload.data});}catch(ex){yield Object(effects_["put"])({type:AssetActionTypes.FETCH_ERROR,ex});}}
// CONCATENATED MODULE: ./core/contact/fetch.ts
const fetchContact=()=>external_axios_default.a.get(`${ENDPOINT}?content_type=${CONTENT_TYPE.contactItem}&select=fields`,{headers:{Authorization:TOKEN}});
// CONCATENATED MODULE: ./core/contact/sagas.ts
function*contactSaga(){try{const payload=yield Object(effects_["call"])(fetchContact);yield Object(effects_["put"])({type:ContactActionTypes.FETCH_SUCCESS,payload:payload.data});}catch(ex){yield Object(effects_["put"])({type:ContactActionTypes.FETCH_ERROR,ex});}}
// CONCATENATED MODULE: ./core/actions.ts
let GlobalActionTypes;(function(GlobalActionTypes){GlobalActionTypes["FETCH_START"]="@global/FETCH_START";GlobalActionTypes["FETCH_SUCCESS"]="@global/FETCH_SUCCESS";GlobalActionTypes["FETCH_ERROR"]="@global/FETCH_ERROR";})(GlobalActionTypes||(GlobalActionTypes={}));const core_actions_fetchRequest=()=>Object(external_typesafe_actions_["action"])(GlobalActionTypes.FETCH_START);const core_actions_fetchSuccess=()=>Object(external_typesafe_actions_["action"])(GlobalActionTypes.FETCH_SUCCESS);const core_actions_fetchError=message=>Object(external_typesafe_actions_["action"])(GlobalActionTypes.FETCH_ERROR,message);
// CONCATENATED MODULE: ./core/sagas.ts
function*fetchAllSaga(){yield Object(effects_["all"])([abilitiesSagas(),blogSaga(),educationSaga(),experianceSaga(),folioSaga(),metadataSagas()]);}function*rootSaga(){yield Object(effects_["all"])([// Fetch our global parameters
fetchAllSaga(),// Bind our actions
Object(effects_["takeEvery"])(GlobalActionTypes.FETCH_START,metadataSagas),Object(effects_["takeEvery"])(AbilitiesActionTypes.FETCH_START,abilitiesSagas),Object(effects_["takeEvery"])(BlogActionTypes.FETCH_START,blogSaga),Object(effects_["takeEvery"])(EducationActionTypes.FETCH_START,educationSaga),Object(effects_["takeEvery"])(ExperianceActionTypes.FETCH_START,experianceSaga),Object(effects_["takeEvery"])(FolioActionTypes.FETCH_START,folioSaga),Object(effects_["takeEvery"])(AssetActionTypes.FETCH_START,assetSaga),Object(effects_["takeEvery"])(AssetActionTypes.FETCH_START,contactSaga)]);}
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(12);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(5);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./web/common/link/link.tsx
const isExternalLink=path=>{return path.includes('http');};const Link=({to,children})=>isExternalLink(to)?jsx_default()("a",{href:to},void 0,children):jsx_default()(external_react_router_dom_["Link"],{to:to},void 0,children);/* harmony default export */ var link_link = (Link);
// EXTERNAL MODULE: ./web/components/profile/profile.css
var profile = __webpack_require__(11);

// CONCATENATED MODULE: ./web/components/profile/profile.tsx
const Profile=({metadata})=>jsx_default()("div",{className:external_classnames_default()(profile["Header"])},void 0,jsx_default()("div",{className:external_classnames_default()(profile["Header--Photo"],profile["Link--left"])},void 0,jsx_default()(Link,{to:'/'},void 0,jsx_default()("img",{src:"//media.fandanzle.co.uk/avatar.png",alt:"avatar"}))),jsx_default()("span",{className:external_classnames_default()(profile["Link"],profile["Link--left"])},void 0,jsx_default()(Link,{to:'/'},void 0,"Home")),jsx_default()("span",{className:external_classnames_default()(profile["Link"],profile["Link--left"])},void 0,jsx_default()(Link,{to:'/blog'},void 0,"Blog")),jsx_default()("div",{className:profile["Clear"]}));/* harmony default export */ var profile_profile = (Profile);
// CONCATENATED MODULE: ./core/metadata/selectors.ts
const getMetadata=state=>Object(external_ramda_["prop"])('metadata',state);const getMetadataTitle=Object(external_ramda_["pipe"])(getMetadata,Object(external_ramda_["prop"])('title'));const getMetadataBlurb=Object(external_ramda_["pipe"])(getMetadata,Object(external_ramda_["prop"])('blurb'));const getMetadataSummary=Object(external_ramda_["pipe"])(getMetadata,Object(external_ramda_["prop"])('summary'));const getMetadataItemLoading=Object(external_ramda_["pipe"])(getMetadata,Object(external_ramda_["prop"])('loading'));const getMetadataItemErrors=Object(external_ramda_["pipe"])(getMetadata,Object(external_ramda_["propOr"])(undefined,'errors'));
// CONCATENATED MODULE: ./web/containers/header/header.state.tsx
const mapStateToProps=state=>({metadata:getMetadata(state)});const mapDispatchToProps=dispatch=>({onFetchAction:()=>dispatch(core_actions_fetchRequest())});
// CONCATENATED MODULE: ./web/containers/header/header.tsx
class header_HeaderView extends external_react_["Component"]{render(){const{metadata}=this.props;return jsx_default()(external_react_["Fragment"],{},void 0,jsx_default()(Profile,{metadata:metadata}));}}/* harmony default export */ var header = (Object(external_react_redux_["connect"])(mapStateToProps,mapDispatchToProps)(header_HeaderView));
// EXTERNAL MODULE: ./web/style/common.css
var common = __webpack_require__(7);

// CONCATENATED MODULE: ./web/components/about/about.tsx
const About=({metadata})=>jsx_default()("div",{className:external_classnames_default()(common["Block"])},void 0,jsx_default()("h2",{},void 0,"About me"),jsx_default()("p",{},void 0,metadata.summary));/* harmony default export */ var about = (About);
// EXTERNAL MODULE: ./web/common/favicon/favicon.css
var favicon = __webpack_require__(17);

// CONCATENATED MODULE: ./web/common/favicon/favicon.tsx
const iconSelector=name=>{switch(name){case'linked':return{path:`M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 
            15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 
            1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 
            1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z
            `,viewBox:'0 0 24 24',rotate:0};case'github':return{path:`M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.438c-.321-.073-.33-.68-.33-.894l.01-2.469c0-.84-.288-1.389-.61-1.666 
            2.004-.223 4.109-.984 4.109-4.441 0-.983-.348-1.786-.925-2.415.092-.228.401-1.143-.09-2.382 0 0-.754-.242-2.473.922A8.63 
            8.63 0 0 0 12 7.352a8.62 8.62 0 0 0-2.253.303c-1.72-1.164-2.474-.922-2.474-.922-.49 1.239-.182 2.154-.089 2.381a3.479 
            3.479 0 0 0-.926 2.415c0 3.45 2.1 4.222 4.1 4.449-.258.225-.49.621-.572 1.203-.513.23-1.817.627-2.62-.748 0 
            0-.475-.864-1.378-.928 0 0-.88-.01-.062.548 0 0 .59.276 1 1.316 0 0 .528 1.75 3.031 1.207l.012 
            1.53c0 .213-.015.825-.34.894H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z
            `,viewBox:'0 0 24 24',rotate:0};case'home':return{path:`M4 8l8 5l8-5l-8-5l-8 5m18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 
          1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71z
          `,viewBox:'0 0 24 24',rotate:0};case'email':return{path:`M4 8l8 5l8-5l-8-5l-8 5m18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 
            1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71z
            `,viewBox:'0 0 24 24',rotate:0};case'blog':return{path:`M14 13H9.95a1 1 0 0 0-1 1a1 1 0 0 0 1 1H14a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-4.05-3h2.6a1 1 0 0 0 
            1-1a1 1 0 0 0-1-1h-2.6a1 1 0 0 0-1 1a1 1 0 0 0 1 1M16 9v1a1 1 0 0 0 1 1a1 1 0 0 1 1 1v3a3 3 0 0 1-3 
            3H9a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3m4-6H4c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h16a2 2 0 
            0 0 2-2V4a2 2 0 0 0-2-2z
            `,viewBox:'0 0 24 24',rotate:0};case'folio':return{path:`M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5m3 
                1v12h4v-2H8V8h2V6H6m10 10h-2v2h4V6h-4v2h2v8z
                `,viewBox:'0 0 24 24',rotate:0};default:return{path:'',viewBox:'',rotate:''};}};const Favicon=({className,name,alt})=>{const iconMeta=iconSelector(name);return jsx_default()("span",{className:className},void 0,jsx_default()("div",{className:external_classnames_default()(favicon["container"],{[favicon["deg90"]]:iconMeta.rotate===1,[favicon["deg180"]]:iconMeta.rotate===2,[favicon["deg270"]]:iconMeta.rotate===3})},void 0,jsx_default()("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:iconMeta.viewBox},void 0,jsx_default()("path",{d:iconMeta.path}))));};/* harmony default export */ var favicon_favicon = (Favicon);
// EXTERNAL MODULE: ./web/components/contact/contact.css
var contact = __webpack_require__(28);

// CONCATENATED MODULE: ./web/components/contact/contact.tsx
const Contact=({contactList})=>jsx_default()("div",{className:external_classnames_default()(common["Block"])},void 0,jsx_default()("h2",{},void 0,"Contact"),contactList&&contactList.map((item,index)=>jsx_default()("div",{className:external_classnames_default()(contact["ContactItem"])},index,jsx_default()("div",{className:external_classnames_default()(contact["ContactItem--Title"])},void 0,jsx_default()(Favicon,{name:item.fields.icon}),jsx_default()(Link,{to:item.fields.link||''},void 0,item.fields.text)))));/* harmony default export */ var contact_contact = (Contact);
// EXTERNAL MODULE: ./web/components/skillz/skillz.css
var skillz = __webpack_require__(22);

// CONCATENATED MODULE: ./web/components/skillz/skillz.tsx
const SkillzValue=({values})=>jsx_default()("div",{},void 0,values.map((item,index)=>{return jsx_default()("span",{className:skillz["Skill--Badge"]},index,item);}));const Skillz=({abilitiesList})=>jsx_default()("div",{className:external_classnames_default()(common["Block"])},void 0,jsx_default()("h2",{},void 0,"Skills"),abilitiesList.map((item,index)=>{return jsx_default()("div",{className:skillz["Item--Skills"]},index,jsx_default()("div",{className:skillz["Skill"]},void 0,item.fields.subject),jsx_default()(SkillzValue,{values:item.fields.skills}));}));/* harmony default export */ var skillz_skillz = (Skillz);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(13);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./web/components/experiance/experiance.css
var experiance = __webpack_require__(23);

// CONCATENATED MODULE: ./web/components/experiance/experiance.tsx
const Experiance=({experianceList})=>jsx_default()("div",{className:external_classnames_default()(common["Block"])},void 0,jsx_default()("h2",{},void 0,"EXPERIENCE"),experianceList.map((item,index)=>jsx_default()("section",{className:experiance["Experiance"]},index,jsx_default()("aside",{className:experiance["Experiance--Year"]},void 0,jsx_default()("div",{},void 0,external_moment_default()(item.fields.startDate).format('YYYY')," - ",external_moment_default()(item.fields.endDate).format('YYYY'))),jsx_default()("div",{className:experiance["Experiance--Description"]},void 0,jsx_default()("h3",{},void 0,item.fields.company),jsx_default()("p",{},void 0,item.fields.description)))));/* harmony default export */ var experiance_experiance = (Experiance);
// EXTERNAL MODULE: ./web/components/education/education.css
var education = __webpack_require__(24);

// CONCATENATED MODULE: ./web/components/education/education.tsx
const Education=({educationList})=>jsx_default()("div",{className:external_classnames_default()(common["Block"])},void 0,jsx_default()("h2",{},void 0,"EXPERIENCE"),educationList.map((item,index)=>jsx_default()("section",{className:education["Education"]},index,jsx_default()("aside",{className:education["Education--Year"]},void 0,jsx_default()("div",{},void 0,external_moment_default()(item.fields.startDate).format('YYYY')," - ",external_moment_default()(item.fields.endDate).format('YYYY'))),jsx_default()("div",{className:education["Education--Description"]},void 0,jsx_default()("h3",{},void 0,item.fields.institute),jsx_default()("p",{},void 0,item.fields.subject)),jsx_default()("div",{},void 0,item.fields.qualifications.map(qualification=>{jsx_default()("p",{},void 0,qualification);})))));/* harmony default export */ var education_education = (Education);
// CONCATENATED MODULE: ./core/ability/selectors.ts
const getAbility=state=>Object(external_ramda_["prop"])('ability',state);const getAbilityItems=Object(external_ramda_["pipe"])(getAbility,Object(external_ramda_["prop"])('items'));const getAbilityItemsLoading=Object(external_ramda_["pipe"])(getAbility,Object(external_ramda_["prop"])('loading'));const getAbilityItemsErrors=Object(external_ramda_["pipe"])(getAbility,Object(external_ramda_["propOr"])(undefined,'errors'));
// CONCATENATED MODULE: ./core/experiance/selectors.ts
const getExperiance=state=>Object(external_ramda_["prop"])('experiance',state);const getExperianceItems=Object(external_ramda_["pipe"])(getExperiance,Object(external_ramda_["prop"])('items'));const getExperianceItemsLoading=Object(external_ramda_["pipe"])(getExperiance,Object(external_ramda_["prop"])('loading'));const getExperianceItemsErrors=Object(external_ramda_["pipe"])(getExperiance,Object(external_ramda_["propOr"])(undefined,'errors'));
// CONCATENATED MODULE: ./core/education/selectors.ts
const getEducation=state=>Object(external_ramda_["prop"])('education',state);const getEducationItems=Object(external_ramda_["pipe"])(getEducation,Object(external_ramda_["prop"])('items'));const getEducationItemsLoading=Object(external_ramda_["pipe"])(getEducation,Object(external_ramda_["prop"])('loading'));const getEducationItemsErrors=Object(external_ramda_["pipe"])(getEducation,Object(external_ramda_["propOr"])(undefined,'errors'));
// CONCATENATED MODULE: ./core/blog/selectors.ts
const getBlog=state=>Object(external_ramda_["prop"])('blog',state);const getBlogItems=Object(external_ramda_["pipe"])(getBlog,Object(external_ramda_["prop"])('items'));const getBlogItemsLoading=Object(external_ramda_["pipe"])(getBlog,Object(external_ramda_["prop"])('loading'));const getBlogItemsErrors=Object(external_ramda_["pipe"])(getBlog,Object(external_ramda_["propOr"])(undefined,'errors'));
// CONCATENATED MODULE: ./core/folio/selectors.ts
const getFolio=state=>Object(external_ramda_["prop"])('folio',state);const getFolioItems=state=>Object(external_ramda_["prop"])('items',state);const getFolioItemsErrors=state=>Object(external_ramda_["prop"])('errors',state);const getFolioItemsLoading=state=>Object(external_ramda_["prop"])('loading',state);
// CONCATENATED MODULE: ./core/contact/selectors.ts
const getContact=state=>Object(external_ramda_["prop"])('contact',state);const getContactItems=Object(external_ramda_["pipe"])(getContact,Object(external_ramda_["prop"])('items'));const getContactItemsLoading=Object(external_ramda_["pipe"])(getContact,Object(external_ramda_["prop"])('loading'));const getContactItemsErrors=Object(external_ramda_["pipe"])(getContact,Object(external_ramda_["propOr"])(undefined,'errors'));
// CONCATENATED MODULE: ./web/pages/home/home.state.tsx
const home_state_mapStateToProps=state=>({title:"This is a title",blogItems:getBlogItems(state),abilityItems:getAbilityItems(state),experianceItems:getExperianceItems(state),educationItems:getEducationItems(state),folioList:getFolioItems(state),metadata:getMetadata(state),contactItems:getContactItems(state)});const home_state_mapDispatchToProps=dispatch=>({onFetchAction:()=>dispatch(core_actions_fetchRequest())});
// EXTERNAL MODULE: ./web/pages/home/home.css
var home = __webpack_require__(25);

// CONCATENATED MODULE: ./web/pages/home/home.tsx
class home_HomeView extends external_react_["Component"]{render(){const{abilityItems,educationItems,experianceItems,metadata,contactItems}=this.props;return jsx_default()("div",{className:home["Content"]},void 0,jsx_default()("aside",{className:home["Description"]},void 0,jsx_default()(about,{metadata:metadata}),jsx_default()(experiance_experiance,{experianceList:experianceItems}),jsx_default()(education_education,{educationList:educationItems})),jsx_default()("aside",{className:home["Breakdown"]},void 0,jsx_default()(skillz_skillz,{abilitiesList:abilityItems}),jsx_default()(contact_contact,{contactList:contactItems})));}}/* harmony default export */ var home_home = (Object(external_react_redux_["connect"])(home_state_mapStateToProps,home_state_mapDispatchToProps)(home_HomeView));
// CONCATENATED MODULE: ./web/pages/blog/blog.state.tsx
const blog_state_mapStateToProps=state=>({blogItems:getBlogItems(state),metadata:getMetadata(state)});const blog_state_mapDispatchToProps=dispatch=>({onFetchAction:()=>dispatch(fetchRequest())});
// EXTERNAL MODULE: ./web/pages/blog/blog.css
var blog_blog = __webpack_require__(18);

// CONCATENATED MODULE: ./web/pages/blog/blog.tsx
const blockType=(content,marks)=>{const codeMark=marks&&marks.find(dd=>(dd===null||dd===void 0?void 0:dd.type)==='code');const codeBold=marks&&marks.find(dd=>(dd===null||dd===void 0?void 0:dd.type)==='bold');if(!content)return jsx_default()(external_react_["Fragment"],{});if(codeMark)return jsx_default()("pre",{className:blog_blog["Block--Code"]},void 0,content);if(codeBold)return jsx_default()("b",{},void 0,content);return jsx_default()("span",{},void 0,content);};class blog_BlogView extends external_react_["Component"]{componentWillMount(){const{onFetchAction}=this.props;onFetchAction();}render(){const{blogItems}=this.props;return jsx_default()("div",{className:blog_blog["InnerContainer"]},void 0,jsx_default()("div",{},void 0,blogItems.map(item=>{var _ref,_item$fields,_item$fields2,_item$fields2$blogCon,_item$fields3,_item$fields3$blogCon,_item$fields3$blogCon2;return jsx_default()("div",{className:blog_blog["Entry--Container"]},void 0,jsx_default()("h1",{className:blog_blog["Entry--Header"]},void 0,(_ref=item===null||item===void 0?void 0:(_item$fields=item.fields)===null||_item$fields===void 0?void 0:_item$fields.title)!=null?_ref:""),jsx_default()("div",{},void 0,(item===null||item===void 0?void 0:(_item$fields2=item.fields)===null||_item$fields2===void 0?void 0:(_item$fields2$blogCon=_item$fields2.blogContent)===null||_item$fields2$blogCon===void 0?void 0:_item$fields2$blogCon.content)&&(item===null||item===void 0?void 0:(_item$fields3=item.fields)===null||_item$fields3===void 0?void 0:(_item$fields3$blogCon=_item$fields3.blogContent)===null||_item$fields3$blogCon===void 0?void 0:(_item$fields3$blogCon2=_item$fields3$blogCon.content)===null||_item$fields3$blogCon2===void 0?void 0:_item$fields3$blogCon2.map(payload=>jsx_default()("p",{},void 0,(payload===null||payload===void 0?void 0:payload.content)&&(payload===null||payload===void 0?void 0:payload.content.map(subItem=>blockType(subItem===null||subItem===void 0?void 0:subItem.value,subItem===null||subItem===void 0?void 0:subItem.marks))))))));})));}}/* harmony default export */ var pages_blog_blog = (Object(external_react_redux_["connect"])(blog_state_mapStateToProps,blog_state_mapDispatchToProps)(blog_BlogView));
// CONCATENATED MODULE: ./web/pages/notFound/notFound.state.tsx
const notFound_state_mapStateToProps=state=>({metadata:getMetadata(state)});const notFound_state_mapDispatchToProps=dispatch=>({onFetchAction:()=>dispatch(core_actions_fetchRequest())});
// CONCATENATED MODULE: ./web/pages/notFound/notFound.tsx
class notFound_NotFoundView extends external_react_["Component"]{render(){const{metadata}=this.props;return jsx_default()("div",{},void 0,jsx_default()("h2",{},void 0,":( Page not found"));}}/* harmony default export */ var notFound = (Object(external_react_redux_["connect"])(notFound_state_mapStateToProps,notFound_state_mapDispatchToProps)(notFound_NotFoundView));
// CONCATENATED MODULE: ./web/app.tsx
class app_AppRouter extends external_react_default.a.Component{render(){return external_react_default.a.createElement(external_react_default.a.Fragment,null,jsx_default()(external_react_helmet_["Helmet"],{},void 0,jsx_default()("title",{},void 0,"Devnotnull.com - Alex Brown Blog and Folio"),jsx_default()("meta",{name:"description",content:"Devnotnull - The personal website of Alex Brown @stump201 @devisnotnull"}),jsx_default()("meta",{name:"og:title",property:"og:title",content:"Devnotnull - The personal website of Alex Brown @stump201 @devisnotnull"}),jsx_default()("meta",{property:"og:type",content:"website"}),jsx_default()("meta",{name:"robots",content:"index, follow"})),jsx_default()(header,{}),jsx_default()("div",{className:common["Container"]},void 0,jsx_default()(external_react_router_dom_["Switch"],{},void 0,jsx_default()(external_react_router_dom_["Route"],{exact:true,path:"/",component:home_home}),jsx_default()(external_react_router_dom_["Route"],{exact:true,path:"/blog",component:pages_blog_blog}),jsx_default()(external_react_router_dom_["Route"],{exact:true,path:"/blog/:id",component:pages_blog_blog}),jsx_default()(external_react_router_dom_["Route"],{component:notFound}))));}}/* harmony default export */ var app = (app_AppRouter);
// CONCATENATED MODULE: ./server/render.tsx
let manifest={};try{if(Object(external_fs_["existsSync"])(`${__dirname}/asset-manifest.json`)){const re=Object(external_fs_["readFileSync"])(`${__dirname}/asset-manifest.json`).toString();console.log(re);manifest=JSON.parse(re);}else{console.error('The file does not exist.');}}catch(err){console.error(err);}const renderAndWrap=store=>{return new Promise((res,rej)=>{const rootSagaRun=store.runSaga(rootSaga).toPromise();rootSagaRun.then(()=>res()).catch(()=>rej());store.closeSagas();});};/**
 * 
 * @param url 
 * @param store 
 * @param assets 
 * @param res 
 */const renderApp=async(url,store)=>{// 
const PROD="production"==='production';const context={splitPoints:[]};// 
const rootComponent=PROD?jsx_default()(external_react_redux_["Provider"],{store:store},void 0,jsx_default()(external_react_router_["StaticRouter"],{location:url},void 0,jsx_default()(app,{}))):null;// Fetch all resources for root saga
await renderAndWrap(store);// Get state from store after sagas were run and strigify it for rendering in HTML
const state=store.getState();const initialState=`window.__INITIAL_STATE__ = ${JSON.stringify(state)}`;const splitPoints=`window.__SPLIT_POINTS__ = ${JSON.stringify(context.splitPoints)}`;// Do first render, trigger sagas for component to run
if(!PROD)return Object(server_["renderToString"])(rootComponent);else return Object(server_["renderToString"])(jsx_default()(html,{PROD:PROD,assets:manifest,rootComponent:rootComponent,initialState:initialState,splitPoints:splitPoints}));};/**
 * 
 * @param req 
 * @param res 
 */const renderPage=async url=>{const history=createMemoryHistory_default()();const store=core_store(history);return await renderApp(url,store);};
// CONCATENATED MODULE: ./server/index.tsx
// Server Side Rendering
const server_PROD="production"==='production';const server_app=external_express_default()();server_app.use('/static',external_express_default.a.static('static'));server_app.use('/static',external_express_default.a.static(__dirname+'/static'));server_app.use(external_express_default.a.static('static'));server_app.use(external_express_default.a.static(__dirname+'/static'));if(!server_PROD){const getRequire=()=> true?require:undefined;const webpackConfig=getRequire()(Object(external_path_["resolve"])(process.cwd(),'webpack.config'));const compiler=external_webpack_default()(webpackConfig);server_app.use(external_webpack_dev_middleware_default()(compiler,{publicPath:webpackConfig.output.publicPath,serverSideRender:true,stats:'errors-only',logLevel:'error'}));server_app.use(external_webpack_hot_middleware_default()(compiler,{log:console.log}));}// Handler
server_app.get('*',async(req,res)=>{const payload=await renderPage(req.url);res.send(payload);});// catch 404 and forward to error handler
server_app.use((req,res,next)=>{const err=new Error('Not Found');err.status=404;next(err);});// error handler
server_app.use((err,req,res)=>{if(server_PROD)console.error('error : ',err.message);else console.error('error : ',err);res.status(err.status||500);});const server=Object(external_http_["createServer"])(server_app);server.listen(3000,()=>{console.log(`${'>>>'} ${'Listening on:'} ${'localhost::'}`);});

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map