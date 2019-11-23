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

$(document).ready(function () {
  var $numberNewsItems = $('.news__item').length;
  var $widthNewsViewport = $('.news__viewport').outerWidth();
  var $widthNewsItem = -$('.news__item').outerWidth();
  var $widthItemNews = $('.news__item').outerWidth();
  var $newsWrapper = $('.news__wrapper');
  var $testNews = $widthItemNews * $numberNewsItems; // $newsWrapper.css('width', $testNews);

  var $widthScrollNews = 0;
  var $widthSlideLineNews = $widthNewsViewport / $numberNewsItems;
  $('.news__slide-line').width($widthSlideLineNews);
  $(window).on('resize', function () {
    $widthSlideLineNews = $widthNewsViewport / $numberNewsItems;
    $(".news__slide-line").width($widthSlideLineNews);
  });

  function leftClickNews() {
    $widthScrollNews = $widthNewsItem;

    if (iNews <= 0 || $widthScrollNews > 0) {
      $widthScrollNews = 0;
    }

    $newsWrapper.css('transform', 'translateX(' + $widthScrollNews + 'px)');
    $newsWrapper.css('MozTransform', 'translateX(' + $widthScrollNews + 'px)');
    $newsWrapper.css('WebkitTransform', 'translateX(' + $widthScrollNews + 'px)');
    $newsWrapper.css('OTransform', 'translateX(' + $widthScrollNews + 'px)');
    $newsWrapper.css('MsTransform', 'translateX(' + $widthScrollNews + 'rpx');
    iNews -= 1; // $widthSlideLineVideo -= $widthSlideLineVideo / 2;

    addWidthLineNews($widthSlideLineNews);
  }

  var countNews = $widthNewsViewport;

  function rightClickNews() {
    if (countNews >= $testNews) {
      $widthScrollNews = $widthScrollNews;
    } else {
      $widthScrollNews += $widthNewsItem;
    }

    $newsWrapper.css('transform', 'translateX(' + $widthScrollNews + 'px)');
    $newsWrapper.css('MozTransform', 'translateX(' + $widthScrollNews + 'px)');
    $newsWrapper.css('WebkitTransform', 'translateX(' + $widthScrollNews + 'px)');
    $newsWrapper.css('OTransform', 'translateX(' + $widthScrollNews + 'px)');
    $newsWrapper.css('MsTransform', 'translateX(' + $widthScrollNews + 'rpx');
    addWidthLineNews($widthSlideLineNews);
    countNews += -$widthScrollNews;
    console.log(countNews);
  }

  function addWidthLineNews(params) {
    console.log(params);

    if (params >= 0) {
      params = $widthSlideLineNews;
    } else {
      params *= -1;
    }

    $('.news__slide-line').width(params);
  } // $leftVideo.on('click', () => {
  // 	leftClickVideo();
  // });
  // $rightVideo.on('click', () => {
  // 	moveVideoItem();
  // });
  // touch feach


  var x0News = null;
  var iNews = 0;
  var lockedNews = false;
  var wNews;
  var dragNews = 0;

  function size() {
    wNews = $('body').outerWidth();
  }

  function unifyVideo(e) {
    return e.changedTouches ? e.changedTouches[0] : e;
  }

  function moveNews(e) {
    if (lockedNews) {
      var dx = unifyVideo(e).clientX - x0News;
      var s = Math.sign(dx);
      var f = +(s * dx / wNews).toFixed(2);

      if ((iNews > 0 || s < 0) && (iNews < $numberNewsItems || s > 0)) {
        iNews -= s;
      }

      if (dx > 0) {
        dragNews = 0;
      }

      var mover = iNews / $numberNewsItems * $widthNewsItem; // console.log(mover);

      mover *= 4;
      nextNews(mover);
      addWidthLineNews(mover);
      dragNews = 0;
      lockedNews = false;
      x0News = null;
    }
  }

  function dragNewsMove(e) {
    // e.preventDefault();
    if (lockedNews) {
      var insideFunc = Math.round(unifyVideo(e).clientX - x0News);
      dragNews = iNews / $numberNewsItems * $widthNewsItem; // console.log(drag);

      if (dragNews > 0) {
        // lockVideo();
        dragNews = 0;
      }

      dragNews *= 4;
      nextNews(dragNews);
      addWidthLineNews(dragNews); // locked = false;
    }
  }

  function lockNews(e) {
    x0News = unifyVideo(e).clientX;
    lockedNews = true;
  }

  size();

  function nextNews(params) {
    if (params > 0) {
      params = 0;
    }

    $newsWrapper.css('transform', 'translateX(' + params + 'px)');
    $newsWrapper.css('MozTransform', 'translateX(' + params + 'px)');
    $newsWrapper.css('WebkitTransform', 'translateX(' + params + 'px)');
    $newsWrapper.css('OTransform', 'translateX(' + params + 'px)');
    $newsWrapper.css('MsTransform', 'translateX(' + params + 'rpx');
  } // }


  $('body').on('resize', function () {
    size();
  });
  $('.video__slide-control--left').on('click', function () {
    leftClickNews();
  });
  $('.video__slide-control--right').on('click', function () {
    rightClickNews();
  }); // addEventListener(resize, size, false);

  var wrapperJsNews = document.getElementsByClassName('news__wrapper')[0];
  wrapperJsNews.addEventListener('mousedown', lockNews, false);
  wrapperJsNews.addEventListener('touchstart', lockNews, false);

  if ($(window).width() <= '1024') {
    wrapperJsNews.addEventListener('mouseup', moveNews, false);
    wrapperJsNews.addEventListener('touchend', moveNews, false);
  }

  $(window).on('resize', function () {
    if ($(window).width() <= "1024") {
      wrapperJsNews.addEventListener("mouseup", moveNews, false);
      wrapperJsNews.addEventListener("touchend", moveNews, false);
    }
  }); // wrapperJsNews.addEventListener('mousemove', dragNewsMove, false);
  // wrapperJsNews.addEventListener('touchmove', dragNewsMove, false);
  // //////////////////////////////////////////////////////////////////////////////////////////////////////
  // video script

  var $numberVideoItems = $('.video__item').length;
  var $widthVideoViewport = $('.video__viewport').outerWidth(); // let $counterVideo = 0;

  var $widthVideoItem = -$('.video__item').outerWidth();
  var $widthItem = $('.video__item').outerWidth(); // let $leftVideo = $('.video__slide-control--left');
  // let $rightVideo = $('.video__slide-control--right');

  var $videoWrapper = $('.video__wrapper');
  var $test = $widthItem * $numberVideoItems;
  $videoWrapper.css('width', $test);
  var $sumItemsInViewport = Math.trunc($widthVideoViewport / $widthItem);
  var $sumOutOfViewport = $numberVideoItems - $sumItemsInViewport;
  var $widthScroll = 0;
  var $widthSlideLineVideo = $widthVideoViewport / $numberVideoItems;
  $('.video__slide-line').width($widthSlideLineVideo);
  $(window).on('resize', function () {
    $widthSlideLineVideo = $widthVideoViewport / $numberVideoItems;
    $(".video__slide-line").width($widthSlideLineVideo);
  });

  function leftClickVideo() {
    $widthScroll = $widthVideoItem;

    if (i <= 0 || $widthScroll > 0) {
      $widthScroll = 0;
    }

    $videoWrapper.css('transform', 'translateX(' + $widthScroll + 'px)');
    $videoWrapper.css('MozTransform', 'translateX(' + $widthScroll + 'px)');
    $videoWrapper.css('WebkitTransform', 'translateX(' + $widthScroll + 'px)');
    $videoWrapper.css('OTransform', 'translateX(' + $widthScroll + 'px)');
    $videoWrapper.css('MsTransform', 'translateX(' + $widthScroll + 'rpx');
    i -= 1; // $widthSlideLineVideo -= $widthSlideLineVideo / 2;

    addWidthLineVideo($widthSlideLineVideo);
  }

  var count = $widthVideoViewport;

  function rightClickVideo() {
    if (count >= $test) {
      $widthScroll = $widthScroll;
    } else {
      $widthScroll += $widthVideoItem;
    }

    $videoWrapper.css('transform', 'translateX(' + $widthScroll + 'px)');
    $videoWrapper.css('MozTransform', 'translateX(' + $widthScroll + 'px)');
    $videoWrapper.css('WebkitTransform', 'translateX(' + $widthScroll + 'px)');
    $videoWrapper.css('OTransform', 'translateX(' + $widthScroll + 'px)');
    $videoWrapper.css('MsTransform', 'translateX(' + $widthScroll + 'rpx');
    addWidthLineVideo($widthSlideLineVideo);
    count += -$widthScroll;
    console.log(count);
  }

  function addWidthLineVideo(params) {
    console.log(params);

    if (params >= 0) {
      params = $widthSlideLineVideo;
    } else {
      params *= -1;
    }

    $('.video__slide-line').width(params);
  }

  $('window').on('resize', function () {
    $sumItemsInViewport = Math.trunc($widthVideoViewport / $widthItem);
  }); // touch feach

  var x0Video = null;
  var i = 0;
  var locked = false;
  var w;
  var drag = 0;

  function size() {
    w = $('body').outerWidth();
  }

  function unifyVideo(e) {
    return e.changedTouches ? e.changedTouches[0] : e;
  }

  function move(e) {
    if (locked) {
      var dx = unifyVideo(e).clientX - x0Video;
      var s = Math.sign(dx);
      var f = +(s * dx / w).toFixed(2);

      if ((i > 0 || s < 0) && (i < $numberVideoItems || s > 0)) {
        i -= s;
      }

      if (dx > 0) {
        drag = 0;
      }

      var mover = i / $numberVideoItems * $widthVideoItem;
      mover *= 4;
      console.log(mover);
      next(mover);
      addWidthLineVideo(mover);
      drag = 0;
      locked = false;
      x0Video = null;
    }
  }

  function dragVideo(e) {
    // e.preventDefault();
    if (locked) {
      var insideFunc = Math.round(unifyVideo(e).clientX - x0Video);
      drag = insideFunc + i / $numberVideoItems * $widthVideoItem; // console.log(drag);

      if (drag > 0) {
        // lockVideo();
        drag = 0;
      }

      next(drag);
      addWidthLineVideo(drag); // locked = false;
    }
  }

  function lockVideo(e) {
    x0Video = unifyVideo(e).clientX;
    locked = true;
  }

  size();

  function next(params) {
    if (params > 0) {
      params = 0;
    }

    $videoWrapper.css('transform', 'translateX(' + params + 'px)');
    $videoWrapper.css('MozTransform', 'translateX(' + params + 'px)');
    $videoWrapper.css('WebkitTransform', 'translateX(' + params + 'px)');
    $videoWrapper.css('OTransform', 'translateX(' + params + 'px)');
    $videoWrapper.css('MsTransform', 'translateX(' + params + 'rpx');
  } // }


  $('body').on('resize', function () {
    size();
  });
  $('.video__slide-control--left').on('click', function () {
    leftClickVideo();
  });
  $('.video__slide-control--right').on('click', function () {
    rightClickVideo();
  });
  var wrapperJs = document.getElementsByClassName('video__wrapper')[0];
  wrapperJs.addEventListener('mousedown', lockVideo, false);
  wrapperJs.addEventListener('touchstart', lockVideo, false);
  wrapperJs.addEventListener('mouseup', move, false);
  wrapperJs.addEventListener('touchend', move, false); // wrapperJs.addEventListener('mousemove', dragVideo, false);
  // wrapperJs.addEventListener('touchmove', dragVideo, false);
  // side panel js

  var $menuButton = $('.menu-button');
  var $check = false;
  var $panel = $('#sidePanel');
  var $hover = $('.hover-content');

  function checkClass() {
    if ($check) {
      $panel.removeClass('open');

      if ($(window).width() <= '1024') {
        $hover.removeClass('hover-tablet'); // $('body').css('background','inherit');
      }

      $check = false;
    } else {
      $panel.addClass('open');

      if ($(window).width() <= '1024') {
        $hover.addClass('hover-tablet'); // $('body').css('background','rgba(0,0,0,0.4)');
      }

      $check = true;
    }
  }

  function addActive() {}

  $menuButton.on('click', function () {
    checkClass();
  });
  $hover.on('click', function () {
    checkClass();
  });
}); // let swiper = new Swiper('.swiper-container', {
// 	slidesPerView: 3,
// 	spaceBetween: 30,
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	},
// });

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
/* harmony import */ var _node_modules_swiper_dist_js_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/swiper/dist/js/swiper */ "./node_modules/swiper/dist/js/swiper.js");
/* harmony import */ var _node_modules_swiper_dist_js_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_swiper_dist_js_swiper__WEBPACK_IMPORTED_MODULE_3__);




svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js"); // let swiper = new Swiper('.swiper-container', {
// 	slidesPerView: 3,
// 	spaceBetween: 30,
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	},
// });

/***/ })

/******/ });
//# sourceMappingURL=main.js.map