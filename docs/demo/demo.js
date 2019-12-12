/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"demo.js": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./demoSrc/demo.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bin/ThreeTicker.js":
/*!****************************!*\
  !*** ./bin/ThreeTicker.js ***!
  \****************************/
/*! exports provided: ThreeTicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeTicker\", function() { return ThreeTicker; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _ThreeTickerEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThreeTickerEvent */ \"./bin/ThreeTickerEvent.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n/**\n * @deprecated ThreeTicker is deprecated. Please migrate to RAF-ticker https://github.com/MasatoMakino/raf-ticker\n */\n\nvar ThreeTicker =\n/*#__PURE__*/\nfunction () {\n  function ThreeTicker() {\n    _classCallCheck(this, ThreeTicker);\n  }\n\n  _createClass(ThreeTicker, null, [{\n    key: \"initialize\",\n    value: function initialize() {\n      console.warn(\"deprecated : ThreeTicker is deprecated. Please migrate to RAF-ticker https://github.com/MasatoMakino/raf-ticker\");\n      this._dispatcher = new three__WEBPACK_IMPORTED_MODULE_0__[\"EventDispatcher\"]();\n      ThreeTicker.onTick(performance.now());\n    }\n  }, {\n    key: \"addEventListener\",\n    value: function addEventListener(type, listener) {\n      this._dispatcher.addEventListener(type, listener);\n    }\n  }, {\n    key: \"hasEventListener\",\n    value: function hasEventListener(type, listener) {\n      return this._dispatcher.hasEventListener(type, listener);\n    }\n  }, {\n    key: \"removeEventListener\",\n    value: function removeEventListener(type, listener) {\n      this._dispatcher.removeEventListener(type, listener);\n    }\n  }]);\n\n  return ThreeTicker;\n}();\n\nThreeTicker.onTick = function (timestamp) {\n  if (ThreeTicker._lastUpdateTimestamp == null) {\n    ThreeTicker._lastUpdateTimestamp = timestamp;\n  }\n\n  var delta = timestamp - ThreeTicker._lastUpdateTimestamp;\n\n  ThreeTicker._dispatcher.dispatchEvent(new _ThreeTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"ThreeTickerEvent\"](_ThreeTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"ThreeTickerEventType\"].onBeforeTick, timestamp, delta));\n\n  ThreeTicker._dispatcher.dispatchEvent(new _ThreeTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"ThreeTickerEvent\"](_ThreeTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"ThreeTickerEventType\"].tick, timestamp, delta));\n\n  ThreeTicker._dispatcher.dispatchEvent(new _ThreeTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"ThreeTickerEvent\"](_ThreeTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"ThreeTickerEventType\"].onAfterTick, timestamp, delta));\n\n  ThreeTicker._lastUpdateTimestamp = timestamp;\n  ThreeTicker._id = requestAnimationFrame(ThreeTicker.onTick);\n};\n\nThreeTicker.initialize();\n\n//# sourceURL=webpack:///./bin/ThreeTicker.js?");

/***/ }),

/***/ "./bin/ThreeTickerEvent.js":
/*!*********************************!*\
  !*** ./bin/ThreeTickerEvent.js ***!
  \*********************************/
/*! exports provided: ThreeTickerEventType, ThreeTickerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeTickerEventType\", function() { return ThreeTickerEventType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeTickerEvent\", function() { return ThreeTickerEvent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ThreeTickerEventType;\n\n(function (ThreeTickerEventType) {\n  ThreeTickerEventType[\"onBeforeTick\"] = \"onBeforeTick\";\n  ThreeTickerEventType[\"tick\"] = \"tick\";\n  ThreeTickerEventType[\"onAfterTick\"] = \"onAfterTick\";\n})(ThreeTickerEventType || (ThreeTickerEventType = {}));\n\nvar ThreeTickerEvent = function ThreeTickerEvent(type, timestamp, delta) {\n  _classCallCheck(this, ThreeTickerEvent);\n\n  this.type = type;\n  this.timestamp = timestamp;\n  this.delta = delta;\n};\n\n//# sourceURL=webpack:///./bin/ThreeTickerEvent.js?");

/***/ }),

/***/ "./bin/index.js":
/*!**********************!*\
  !*** ./bin/index.js ***!
  \**********************/
/*! exports provided: ThreeTicker, ThreeTickerEventType, ThreeTickerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ThreeTicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThreeTicker */ \"./bin/ThreeTicker.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ThreeTicker\", function() { return _ThreeTicker__WEBPACK_IMPORTED_MODULE_0__[\"ThreeTicker\"]; });\n\n/* harmony import */ var _ThreeTickerEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThreeTickerEvent */ \"./bin/ThreeTickerEvent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ThreeTickerEventType\", function() { return _ThreeTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"ThreeTickerEventType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ThreeTickerEvent\", function() { return _ThreeTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"ThreeTickerEvent\"]; });\n\n\n\n\n//# sourceURL=webpack:///./bin/index.js?");

/***/ }),

/***/ "./demoSrc/Common.js":
/*!***************************!*\
  !*** ./demoSrc/Common.js ***!
  \***************************/
/*! exports provided: Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Common\", function() { return Common; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Common =\n/*#__PURE__*/\nfunction () {\n  function Common() {\n    _classCallCheck(this, Common);\n  }\n\n  _createClass(Common, null, [{\n    key: \"initScene\",\n    value: function initScene() {\n      var scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n      return scene;\n    }\n  }, {\n    key: \"initLight\",\n    value: function initLight(scene) {\n      var ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"](0xffffff, 1.0);\n      scene.add(ambientLight);\n      return ambientLight;\n    }\n  }, {\n    key: \"initCamera\",\n    value: function initCamera(scene, W, H) {\n      var near = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n      var far = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 400;\n      var camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, W / H, near, far);\n      camera.position.set(0, 0, 100);\n      camera.updateMatrixWorld(false);\n      scene.add(camera);\n      return camera;\n    }\n  }, {\n    key: \"initControl\",\n    value: function initControl(camera, render) {\n      var domElement;\n\n      if (render) {\n        domElement = render.domElement;\n      }\n\n      var control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__[\"OrbitControls\"](camera, domElement);\n      control.update();\n      return control;\n    }\n  }, {\n    key: \"initRenderer\",\n    value: function initRenderer(W, H, option) {\n      option = Object.assign({\n        color: 0x000000,\n        id: \"webgl-canvas\",\n        antialias: true\n      }, option);\n      var renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n        canvas: document.getElementById(option.id),\n        antialias: option.antialias\n      });\n      renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](option.color));\n      renderer.setSize(W, H);\n      renderer.setPixelRatio(window.devicePixelRatio);\n      return renderer;\n    }\n  }, {\n    key: \"initHelper\",\n    value: function initHelper(scene) {\n      var axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__[\"AxesHelper\"](30);\n      scene.add(axesHelper);\n    } // static render(control, renderer, scene, camera, onBeforeRender) {\n    //   const rendering = () => {\n    //     if (onBeforeRender) {\n    //       onBeforeRender();\n    //     }\n    //     control.update();\n    //     renderer.render(scene, camera);\n    //     requestAnimationFrame(rendering);\n    //   };\n    //   rendering();\n    // }\n\n  }]);\n\n  return Common;\n}();\n\n//# sourceURL=webpack:///./demoSrc/Common.js?");

/***/ }),

/***/ "./demoSrc/demo.js":
/*!*************************!*\
  !*** ./demoSrc/demo.js ***!
  \*************************/
/*! exports provided: Demo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Demo\", function() { return Demo; });\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Common */ \"./demoSrc/Common.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _bin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bin */ \"./bin/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar Demo = function Demo() {\n  _classCallCheck(this, Demo);\n\n  var W = 640;\n  var H = 480;\n  var scene = _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initScene();\n  scene.fog = new three__WEBPACK_IMPORTED_MODULE_1__[\"Fog\"](0x000000, 80, 160);\n  _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initLight(scene);\n  var camera = _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initCamera(scene, W, H);\n  var renderer = _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initRenderer(W, H, {\n    antialias: false\n  });\n  var control = _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initControl(camera, renderer);\n  _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initHelper(scene);\n  _bin__WEBPACK_IMPORTED_MODULE_2__[\"ThreeTicker\"].addEventListener(_bin__WEBPACK_IMPORTED_MODULE_2__[\"ThreeTickerEventType\"].onBeforeTick, function (e) {\n    console.log(\"\".concat(e.type, \" : \").concat(e.delta, \", \").concat(e.timestamp));\n  });\n  _bin__WEBPACK_IMPORTED_MODULE_2__[\"ThreeTicker\"].addEventListener(_bin__WEBPACK_IMPORTED_MODULE_2__[\"ThreeTickerEventType\"].tick, function (e) {\n    renderer.render(scene, camera);\n    console.log(\"\".concat(e.type, \" : \").concat(e.delta, \", \").concat(e.timestamp));\n  });\n  _bin__WEBPACK_IMPORTED_MODULE_2__[\"ThreeTicker\"].addEventListener(_bin__WEBPACK_IMPORTED_MODULE_2__[\"ThreeTickerEventType\"].onAfterTick, function (e) {\n    console.log(\"\".concat(e.type, \" : \").concat(e.delta, \", \").concat(e.timestamp));\n  });\n};\n\nwindow.onload = function () {\n  var demo = new Demo();\n};\n\n//# sourceURL=webpack:///./demoSrc/demo.js?");

/***/ })

/******/ });