"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/roboto/roboto-v30-latin-regular.woff2 */ \"./src/fonts/roboto/roboto-v30-latin-regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/enter.png */ \"./src/images/enter.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bin.png */ \"./src/images/bin.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'roboto';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2');\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n\\n/* GLOBAL */\\nbody {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  overflow: hidden;\\n  flex-wrap: wrap;\\n  margin: 0;\\n  background: rgb(238, 158, 5);\\n  background: linear-gradient(0deg, rgba(238, 158, 5, 1) 0%, rgba(0, 0, 0, 1) 100%);\\n  background-repeat: no-repeat;\\n  height: 100vh;\\n}\\n\\nbody * {\\n  font-family: 'roboto', sans-serif;\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  outline: none;\\n  color: rgb(219, 219, 219);\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n/* LIST STRUCTURE */\\n#list {\\n  position: absolute;\\n  top: 12vh;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 20px;\\n  padding-top: 12px;\\n  width: 90%;\\n  max-width: 750px;\\n  min-width: 350px;\\n  margin-bottom: 15%;\\n  background-color: rgb(49, 47, 43);\\n  box-shadow: 7px 5px 5px black;\\n}\\n\\n#title {\\n  display: flex;\\n  flex-direction: row;\\n  border: 0;\\n}\\n\\n#listTitle {\\n  font-weight: bold;\\n  font-size: 22px;\\n  padding: 12px;\\n  border-bottom: 0;\\n  text-align: center;\\n  width: 100%;\\n  background-color: rgb(49, 47, 43);\\n}\\n\\n#addTask {\\n  display: flex;\\n  flex-direction: row;\\n  border: 0;\\n}\\n\\n#addDescription {\\n  font-size: 18px;\\n  margin-bottom: 15px;\\n  padding: 12px;\\n  border-bottom: 0;\\n  width: 100%;\\n  background-color: rgb(49, 47, 43);\\n}\\n\\n#addDescription:focus,\\n#listTitle:focus {\\n  background-color: rgb(61, 59, 55);\\n}\\n\\n#addDescription::placeholder {\\n  font-style: italic;\\n}\\n\\n#addButton {\\n  height: auto;\\n  width: 36px;\\n  border: 0;\\n  background-color: rgb(49, 47, 43);\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: 26px;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n}\\n\\n/* ul */\\n\\n/* li, input type checkbox, input type text, button, img */\\n#tasks {\\n  display: flex;\\n  flex-direction: column;\\n  overflow: auto;\\n  width: 100%;\\n  max-height: 50vh;\\n  background-color: rgb(49, 47, 43);\\n}\\n\\n#tasks li {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n}\\n\\n#tasks li input[type=text] {\\n  font-size: 16px;\\n  padding: 10px;\\n  width: 100%;\\n  border: 0;\\n  background-color: rgb(49, 47, 43);\\n}\\n\\n#tasks li input[type=text].highlight {\\n  background-color: rgb(73, 68, 52);\\n}\\n\\n#tasks li input[type=text].done {\\n  font-style: italic;\\n  text-decoration: line-through;\\n}\\n\\n#tasks li input[type=checkbox] {\\n  appearance: none;\\n  margin: 7px;\\n  border-radius: 4px;\\n  width: 18px;\\n  height: 18px;\\n  background-color: rgb(219, 219, 219);\\n}\\n\\n#tasks li input[type=checkbox]:checked {\\n  background-color: rgb(226, 142, 17);\\n}\\n\\n#tasks li img {\\n  height: 21px;\\n  width: 21px;\\n  margin-left: 6px;\\n  margin-right: 6px;\\n}\\n\\n#tasks li button {\\n  height: 36px;\\n  width: 36px;\\n  margin-left: 5px;\\n  border: 0;\\n  background-color: rgba(255, 255, 255, 0);\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-size: 26px;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n}\\n\\n#clearCompleted {\\n  font-size: 18px;\\n  padding: 15px;\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n  margin-top: 15px;\\n  border: 0;\\n  background-color: rgb(61, 59, 55);\\n}\\n\\n#clearCompleted:hover {\\n  background-color: rgb(73, 71, 66);\\n}\\n\\n#clearCompleted:active {\\n  background-color: rgb(83, 80, 75);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_taskClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskClass.js */ \"./src/modules/taskClass.js\");\n\n\n\nconst addTask = document.getElementById('addTask');\nconst addDescription = document.getElementById('addDescription');\nconst listTitle = document.getElementById('listTitle');\nconst clearCompleted = document.getElementById('clearCompleted');\n\nlet idData = 0;\nif (localStorage.getItem('idData')) {\n  idData = localStorage.getItem('idData');\n}\nconst list = new _modules_taskClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](idData);\nlist.tasks = list.getData();\n\nif (localStorage.getItem('listName')) {\n  listTitle.value = localStorage.getItem('listName');\n}\nlistTitle.addEventListener('input', () => {\n  list.setListName(listTitle.value);\n});\n\n// Populating data\nfor (let i = 0; i < list.tasks.length; i += 1) {\n  const newTask = list.tasks[i];\n  list.addLi(newTask);\n  const description = document.getElementById(`input${newTask.id}`);\n  const checkbox = document.getElementById(`checkbox${newTask.id}`);\n  const removeButton = document.getElementById(`button${newTask.id}`);\n  if (newTask.isCompleted) list.checkTask(newTask.id);\n  // event listeners:\n  removeButton.addEventListener('click', () => {\n    list.removeTask(newTask);\n  });\n  description.addEventListener('input', () => {\n    list.updateDescription(description.value, newTask);\n  });\n  description.addEventListener('click', () => {\n    list.highlightTask(newTask);\n  });\n  description.addEventListener('keydown', () => {\n    list.highlightTask(newTask);\n  });\n  checkbox.addEventListener('change', () => {\n    list.updateCheckbox(newTask);\n    list.checkTask(newTask.id);\n  });\n}\n\naddTask.addEventListener('submit', () => {\n  const newTask = list.addTask(addDescription.value);\n  list.addLi(list.tasks[list.tasks.length - 1]);\n  const description = document.getElementById(`input${list.taskID - 1}`);\n  const checkbox = document.getElementById(`checkbox${list.taskID - 1}`);\n  const removeButton = document.getElementById(`button${list.taskID - 1}`);\n  addDescription.value = '';\n  // event listeners:\n  removeButton.addEventListener('click', () => {\n    list.removeTask(newTask);\n  });\n  description.addEventListener('input', () => {\n    list.updateDescription(description.value, newTask);\n  });\n  description.addEventListener('click', () => {\n    list.highlightTask(newTask);\n  });\n  description.addEventListener('keydown', () => {\n    list.highlightTask(newTask);\n  });\n  checkbox.addEventListener('change', () => {\n    list.updateCheckbox(newTask);\n    list.checkTask(newTask.id);\n  });\n});\n\nclearCompleted.addEventListener('click', () => {\n  list.tasks = list.tasks.filter(list.clearCompleted);\n  list.setData();\n});\n\n// quality of life\nlistTitle.addEventListener('click', () => {\n  list.removeHighlight();\n});\naddTask.addEventListener('click', () => {\n  list.removeHighlight();\n});\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/taskClass.js":
/*!**********************************!*\
  !*** ./src/modules/taskClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_move_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/move.png */ \"./src/images/move.png\");\n\n\nclass List {\n  constructor(taskID) {\n    this.tasks = [];\n    this.taskID = Number(taskID);\n  }\n\n  addTask = (description, index, isCompleted) => {\n    const newTask = {\n      description: description ?? 'description',\n      isCompleted: isCompleted ?? false,\n      index: index ?? this.tasks.length,\n      id: this.taskID,\n    };\n    newTask.index += 1;\n    this.tasks.push(newTask);\n    this.taskID += 1;\n    this.setData();\n    return newTask;\n  };\n\n  addLi = (task) => {\n    const ul = document.getElementById('tasks');\n    const li = document.createElement('li');\n    const checkbox = document.createElement('INPUT');\n    const input = document.createElement('INPUT');\n    const button = document.createElement('button');\n    const drag = document.createElement('img');\n    button.classList.add('hidden');\n    drag.classList.add('dots');\n    drag.setAttribute('src', _images_move_png__WEBPACK_IMPORTED_MODULE_0__);\n    drag.setAttribute('id', `drag${task.id}`);\n    li.setAttribute('id', `li${task.id}`);\n    checkbox.setAttribute('id', `checkbox${task.id}`);\n    input.setAttribute('id', `input${task.id}`);\n    button.setAttribute('id', `button${task.id}`);\n    checkbox.setAttribute('type', 'checkbox');\n    input.setAttribute('type', 'text');\n    checkbox.checked = task.isCompleted;\n    input.value = task.description;\n    li.append(checkbox, input, button, drag);\n    ul.append(li);\n  };\n\n  removeTask = (task) => {\n    const ul = document.getElementById('tasks');\n    const index = this.getTaskIndex(task.id);\n    const li = document.getElementById(`li${task.id}`);\n    this.tasks.splice(index, 1);\n    ul.removeChild(li);\n    for (let i = index; i < this.tasks.length; i += 1) {\n      this.tasks[i].index -= 1;\n    }\n    this.setData();\n  };\n\n  removeDiv = (task) => {\n    const ul = document.getElementById('tasks');\n    const index = this.getTaskIndex(task.id);\n    const li = document.getElementById(`li${task.id}`);\n    ul.removeChild(li);\n    for (let i = index; i < this.tasks.length; i += 1) {\n      this.tasks[i].index -= 1;\n    }\n  };\n\n  clearCompleted = (task) => {\n    if (task.isCompleted === true) {\n      this.removeDiv(task);\n      return false;\n    }\n    return true;\n  };\n\n  highlightTask = (task) => {\n    this.removeHighlight();\n    const input = document.getElementById(`input${task.id}`);\n    const removeButton = document.getElementById(`button${task.id}`);\n    const drag = document.getElementById(`drag${task.id}`);\n    input.classList.add('highlight');\n    drag.classList.add('hidden');\n    removeButton.classList.remove('hidden');\n  };\n\n  removeHighlight = () => {\n    const id = this.findHighlight();\n    if (id >= 0) {\n      const input = document.getElementById(`input${id}`);\n      const drag = document.getElementById(`drag${id}`);\n      const removeButton = document.getElementById(`button${id}`);\n      input.classList.remove('highlight');\n      drag.classList.remove('hidden');\n      removeButton.classList.add('hidden');\n    }\n  };\n\n  findHighlight = () => {\n    for (let i = 0; i < this.tasks.length; i += 1) {\n      const { id } = this.tasks[i];\n      const input = document.getElementById(`input${id}`);\n      if (input.classList.contains('highlight')) {\n        return id;\n      }\n    }\n    return -1;\n  };\n\n  updateDescription = (description, task) => {\n    task.description = description;\n    this.setData();\n  };\n\n  updateCheckbox = (task) => {\n    task.isCompleted = !task.isCompleted;\n    this.setData();\n  };\n\n  checkTask = (id) => {\n    const description = document.getElementById(`input${id}`);\n    description.toggleAttribute('disabled');\n    description.classList.toggle('done');\n  };\n\n  setData = () => {\n    localStorage.setItem('tasksData', JSON.stringify(this.tasks));\n    localStorage.setItem('idData', this.taskID);\n  };\n\n  getData = () => {\n    if (localStorage.getItem('tasksData')) {\n      return JSON.parse(localStorage.getItem('tasksData'));\n    }\n    return [];\n  };\n\n  getTaskIndex = (id) => {\n    let i = 0;\n    while (this.tasks[i].id !== id) {\n      i += 1;\n    }\n    return i;\n  };\n\n  setListName = (newTitle) => {\n    localStorage.setItem('listName', newTitle);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/taskClass.js?");

/***/ }),

/***/ "./src/fonts/roboto/roboto-v30-latin-regular.woff2":
/*!*********************************************************!*\
  !*** ./src/fonts/roboto/roboto-v30-latin-regular.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b009a76ad6afe4ebd301.woff2\";\n\n//# sourceURL=webpack://webpack-demo/./src/fonts/roboto/roboto-v30-latin-regular.woff2?");

/***/ }),

/***/ "./src/images/bin.png":
/*!****************************!*\
  !*** ./src/images/bin.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"886adc4ac0a80a7a0a71.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/bin.png?");

/***/ }),

/***/ "./src/images/enter.png":
/*!******************************!*\
  !*** ./src/images/enter.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"459888b4bd70f5cdc74e.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/enter.png?");

/***/ }),

/***/ "./src/images/move.png":
/*!*****************************!*\
  !*** ./src/images/move.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9566a6cf2bef7c4a57c1.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/move.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);