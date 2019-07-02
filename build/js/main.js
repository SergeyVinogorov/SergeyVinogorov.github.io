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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		"main": 0
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
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");

var $slideFreshNews = 1;
var $newsCount = $('.news__item').length;
var $newsViewport = $('.news__viewport');
var $newsWrapper = $('.news__wrapper');
var $newsSlideControl = $('.news__slide-control');
var $widthViewport = $('.news').outerWidth();
var $leftNews = $('.news__slide-control--left');
var $rightNews = $('.news__slide-control--right');
var $widthSlideLine = $widthViewport / $newsCount;
var $movenewsWrapper = -10;

function addWidthLine() {
  $('.news__slide-line').width($widthSlideLine);
}

var $widthNews = $widthViewport / $newsCount;

function leftClick() {
  if ($slideFreshNews == $newsCount || $slideFreshNews <= 0 || $slideFreshNews > $newsCount) {
    $move$newsWrapper += 10;
    $newsWrapper.css('transform', 'translateX(' + $movenewsWrapper + 'rem)');
    $newsWrapper.css('MozTransform', 'translateX(' + $movenewsWrapper + 'rem)');
    $newsWrapper.css('WebkitTransform', 'translateX(' + $movenewsWrapper + 'rem)');
    $newsWrapper.css('OTransform', 'translateX(' + $movenewsWrapper + 'rem)');
    $newsWrapper.css('MsTransform', 'translateX(' + $movenewsWrapper + 'rem)');
    $slideFreshNews--;
    $widthSlideLine -= $widthNews;
    addWidthLine();
  } else {
    $newsWrapper.css('transform', 'translateX(0.0)');
    $newsWrapper.css('MozTransform', 'translateX(0.0)');
    $newsWrapper.css('WebkitTransform', 'translateX(0.0)');
    $newsWrapper.css('OTransform', 'translateX(0.0)');
    $newsWrapper.css('MsTransform', 'translateX(0.0)');
    $slideFreshNews = 1;
    $movenewsWrapper = -10;
    $widthSlideLine = $widthNews;
    addWidthLine();
  }
}

function nextSlide() {
  if ($slideFreshNews == $newsCount || $slideFreshNews <= 0 || $slideFreshNews > $newsCount) {
    $newsWrapper.css('transform', 'translateX(0.0)');
    $newsWrapper.css('MozTransform', 'translateX(0.0)');
    $newsWrapper.css('WebkitTransform', 'translateX(0.0)');
    $newsWrapper.css('OTransform', 'translateX(0.0)');
    $newsWrapper.css('MsTransform', 'translateX(0.0)');
    $slideFreshNews = 1;
    $movenewsWrapper = -10;
    $widthSlideLine = $widthNews;
    addWidthLine();
  } else {
    $newsWrapper.css('transform', 'translateX(' + $movenewsWrapper + 'rem)');
    $newsWrapper.css('MozTransform', 'translateX(' + $movenewsWrapper + 'rem)');
    $newsWrapper.css('WebkitTransform', 'translateX(' + $movenewsWrapper + 'rem)');
    $newsWrapper.css('OTransform', 'translateX(' + $movenewsWrapper + 'rem)');
    $newsWrapper.css('MsTransform', 'translateX(' + $movenewsWrapper + 'rem)');
    $slideFreshNews++;
    $movenewsWrapper += -10;
    $widthSlideLine += $widthNews;
    addWidthLine();
  }
}

$newsSlideControl.on('click', function () {
  nextSlide();
});
$leftNews.on('click', function () {
  leftClick();
});
$rightNews.on('click', function () {
  nextSlide();
});
addWidthLine(); // touch feach

var x0 = null;

function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}

function lock(e) {
  x0 = unify(e).clientX;
}

document.getElementsByClassName('news__wrapper')[0].addEventListener('mousedown', lock, false);
document.getElementsByClassName('news__wrapper')[0].addEventListener('touchstart', lock, false);
document.getElementsByClassName('news__wrapper')[0].addEventListener('touchmove', function (e) {
  e.preventDefault();
}, false);
document.getElementsByClassName('news__wrapper')[0].addEventListener('mouseup', nextSlide, false);
document.getElementsByClassName('news__wrapper')[0].addEventListener('touchend', nextSlide, false); // video script

var $slideFreshVideo = 1;
var $videoCount = $('.video__item').length;
var $videoViewport = $('.video__viewport');
var $videoWrapper = $('.video__wrapper');
var $videoSlideControl = $('.video__slide-control');
var $widthViewportVideo = $('.video').outerWidth();
var $leftVideo = $('.video__slide-control--left');
var $rightVideo = $('.video__slide-control--right');
var $widthSlideLineVideo = $widthViewportVideo / $videoCount;
var $moveVideoWrapper = -15;

function addWidthLineVideo() {
  $('.video__slide-line').width($widthSlideLineVideo);
}

var $widthVideo = $widthViewportVideo / $videoCount;

function leftClickVideo() {
  if ($slideFreshVideo == $videoCount || $slideFreshVideo <= 0 || $slideFreshVideo > $videoCount) {
    $moveVideoWrapper += 15;
    $videoWrapper.css('transform', 'translateX(' + $moveVideoWrapper + 'rem)');
    $videoWrapper.css('MozTransform', 'translateX(' + $moveVideoWrapper + 'rem)');
    $videoWrapper.css('WebkitTransform', 'translateX(' + $moveVideoWrapper + 'rem)');
    $videoWrapper.css('OTransform', 'translateX(' + $moveVideoWrapper + 'rem)');
    $videoWrapper.css('MsTransform', 'translateX(' + $moveVideoWrapper + 'rem)');
    $slideFreshVideo--;
    $widthSlideLineVideo -= $widthVideo;
    addWidthLineVideo();
  } else {
    $videoWrapper.css('transform', 'translateX(0.0)');
    $videoWrapper.css('MozTransform', 'translateX(0.0)');
    $videoWrapper.css('WebkitTransform', 'translateX(0.0)');
    $videoWrapper.css('OTransform', 'translateX(0.0)');
    $videoWrapper.css('MsTransform', 'translateX(0.0)');
    $slideFreshVideo = 1;
    $moveVideoWrapper = -15;
    $widthSlideLineVideo = $widthVideo;
    addWidthLineVideo();
  }
}

function nextSlideVideo() {
  if ($slideFreshVideo == $videoCount || $slideFreshVideo <= 0 || $slideFreshVideo > $videoCount) {
    $videoWrapper.css('transform', 'translateX(0.0)');
    $videoWrapper.css('MozTransform', 'translateX(0.0)');
    $videoWrapper.css('WebkitTransform', 'translateX(0.0)');
    $videoWrapper.css('OTransform', 'translateX(0.0)');
    $videoWrapper.css('MsTransform', 'translateX(0.0)');
    $slideFreshVideo = 1;
    $moveVideoWrapper = -15;
    $widthSlideLineVideo = $widthVideo;
    addWidthLineVideo();
  } else {
    $videoWrapper.css('transform', 'translateX(' + $moveVideoWrapper + 'rem)');
    $videoWrapper.css('MozTransform', 'translateX(' + $moveVideoWrapper + 'rem)');
    $videoWrapper.css('WebkitTransform', 'translateX(' + $moveVideoWrapper + 'rem)');
    $videoWrapper.css('OTransform', 'translateX(' + $moveVideoWrapper + 'rem)');
    $videoWrapper.css('MsTransform', 'translateX(' + $moveVideoWrapper + 'rem)');
    $slideFreshVideo++;
    $moveVideoWrapper += -15;
    $widthSlideLineVideo += $widthVideo;
    addWidthLineVideo();
  }
}

$videoSlideControl.on('click', function () {
  nextSlideVideo();
});
$leftVideo.on('click', function () {
  leftClickVideo();
});
$rightVideo.on('click', function () {
  nextSlideVideo();
});
addWidthLineVideo(); // touch feach

var x0Video = null;

function unifyVideo(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}

function lockVideo(e) {
  x0Video = unifyVideo(e).clientX;
}

document.getElementsByClassName('video__wrapper')[0].addEventListener('mousedown', lockVideo, false);
document.getElementsByClassName('video__wrapper')[0].addEventListener('touchstart', lockVideo, false);
document.getElementsByClassName('video__wrapper')[0].addEventListener('touchmove', function (e) {
  e.preventDefault();
}, false);
document.getElementsByClassName('video__wrapper')[0].addEventListener('mouseup', nextSlideVideo, false);
document.getElementsByClassName('video__wrapper')[0].addEventListener('touchend', nextSlideVideo, false); // side panel js

var $menuButton = $('.menu-button');
var $check = false;
var $panel = $('#sidePanel');
$menuButton.on('click', function () {
  if ($check) {
    $panel.removeClass('open');

    if ($(window).width() <= '768') {
      $('.hover-content').removeClass('hover-tablet');
    }

    $check = false;
  } else {
    $panel.addClass('open');

    if ($(window).width() <= '768') {
      $('.hover-content').addClass('hover-tablet');
    }

    $check = true;
  }
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map