//! az-autofocus version 1.0.0 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (http://kentcdodds.com) (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["azAutofocus"] = factory(require("angular"));
	else
		root["azAutofocus"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var ngModuleName = 'azAutofocus';
	var ngModule = _angular2['default'].module(ngModuleName, []);

	exports['default'] = ngModule.directive('azAutofocus', azAutofocus).name;
	// <-- exporting the module name

	// @ngInject
	function azAutofocus($timeout, $document) {
	  return {
	    restrict: 'A',
	    link: azAutofocusLink
	  };

	  function azAutofocusLink(scope, element, attrs) {
	    var previousEl = null;
	    var el = element[0];
	    var doc = $document[0];
	    attrs.$observe('azAutofocus', function respondToFocusExpressionChange(value) {
	      /* eslint no-bitwise:0 */ // I know what I'm doing. I promise...
	      if (value === 'true') {
	        $timeout(function setElementFocus() {
	          previousEl = doc.activeElement;
	          el.focus();
	        }, ~ ~attrs.focusWait);
	      } else if (value === 'false') {
	        if (doc.activeElement === el) {
	          el.blur();
	          if (attrs.hasOwnProperty('refocus') && previousEl) {
	            previousEl.focus();
	          }
	        }
	      }
	    });
	  }
	}
	azAutofocus.$inject = ["$timeout", "$document"];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;