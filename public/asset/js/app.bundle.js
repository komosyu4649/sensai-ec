!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/asset/js/",n(n.s="./js/index.js")}({"./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_ScrollHeaderLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ScrollHeaderLine */ "./js/ui/ScrollHeaderLine.js");\n/* harmony import */ var _ui_ScrollHeaderScale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/ScrollHeaderScale */ "./js/ui/ScrollHeaderScale.js");\n/* harmony import */ var _ui_ScrollParallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/ScrollParallax */ "./js/ui/ScrollParallax.js");\n/* harmony import */ var _ui_ScrollSwap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/ScrollSwap */ "./js/ui/ScrollSwap.js");\n/* harmony import */ var _ui_LoadFv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/LoadFv */ "./js/ui/LoadFv.js");\n/* harmony import */ var _ui_scrollObserve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/scrollObserve */ "./js/ui/scrollObserve.js");\n/* harmony import */ var _ui_scrollObserve__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ui_scrollObserve__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n// import ScrollObserver from "./ui/ScrollObserver";\n\n\n\nvar scrollHeaderLine = new _ui_ScrollHeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"]();\nvar scrollHeaderScale = new _ui_ScrollHeaderScale__WEBPACK_IMPORTED_MODULE_1__["default"]();\nvar scrollParallax = new _ui_ScrollParallax__WEBPACK_IMPORTED_MODULE_2__["default"]();\nvar scrollSwap = new _ui_ScrollSwap__WEBPACK_IMPORTED_MODULE_3__["default"]();\n// const scrollObserver = new ScrollObserver();\nvar loadFv = new _ui_LoadFv__WEBPACK_IMPORTED_MODULE_4__["default"]();\n\nscrollHeaderLine.init();\nscrollHeaderScale.init();\nscrollParallax.init();\nscrollSwap.init();\n// scrollObserver.init();\nloadFv.init();\n\nwindow.addEventListener(\'scroll\', function () {\n    scrollHeaderLine.onScroll();\n    scrollHeaderScale.onScroll();\n    scrollParallax.onScroll();\n    scrollSwap.onScroll();\n});\n\nwindow.addEventListener(\'load\', function () {\n    loadFv.onLoad();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvaW5kZXguanM/MDI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2Nyb2xsSGVhZGVyTGluZSBmcm9tIFwiLi91aS9TY3JvbGxIZWFkZXJMaW5lXCI7XG5pbXBvcnQgU2Nyb2xsSGVhZGVyU2NhbGUgZnJvbSBcIi4vdWkvU2Nyb2xsSGVhZGVyU2NhbGVcIjtcbmltcG9ydCBTY3JvbGxQYXJhbGxheCBmcm9tIFwiLi91aS9TY3JvbGxQYXJhbGxheFwiO1xuaW1wb3J0IFNjcm9sbFN3YXAgZnJvbSBcIi4vdWkvU2Nyb2xsU3dhcFwiO1xuLy8gaW1wb3J0IFNjcm9sbE9ic2VydmVyIGZyb20gXCIuL3VpL1Njcm9sbE9ic2VydmVyXCI7XG5pbXBvcnQgTG9hZEZ2IGZyb20gXCIuL3VpL0xvYWRGdlwiO1xuaW1wb3J0IFwiLi91aS9zY3JvbGxPYnNlcnZlXCI7XG5cbmNvbnN0IHNjcm9sbEhlYWRlckxpbmUgPSBuZXcgU2Nyb2xsSGVhZGVyTGluZSgpO1xuY29uc3Qgc2Nyb2xsSGVhZGVyU2NhbGUgPSBuZXcgU2Nyb2xsSGVhZGVyU2NhbGUoKTtcbmNvbnN0IHNjcm9sbFBhcmFsbGF4ID0gbmV3IFNjcm9sbFBhcmFsbGF4KCk7XG5jb25zdCBzY3JvbGxTd2FwID0gbmV3IFNjcm9sbFN3YXAoKTtcbi8vIGNvbnN0IHNjcm9sbE9ic2VydmVyID0gbmV3IFNjcm9sbE9ic2VydmVyKCk7XG5jb25zdCBsb2FkRnYgPSBuZXcgTG9hZEZ2KCk7XG5cbnNjcm9sbEhlYWRlckxpbmUuaW5pdCgpO1xuc2Nyb2xsSGVhZGVyU2NhbGUuaW5pdCgpO1xuc2Nyb2xsUGFyYWxsYXguaW5pdCgpO1xuc2Nyb2xsU3dhcC5pbml0KCk7XG4vLyBzY3JvbGxPYnNlcnZlci5pbml0KCk7XG5sb2FkRnYuaW5pdCgpO1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgc2Nyb2xsSGVhZGVyTGluZS5vblNjcm9sbCgpO1xuICAgIHNjcm9sbEhlYWRlclNjYWxlLm9uU2Nyb2xsKCk7XG4gICAgc2Nyb2xsUGFyYWxsYXgub25TY3JvbGwoKTtcbiAgICBzY3JvbGxTd2FwLm9uU2Nyb2xsKCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgbG9hZEZ2Lm9uTG9hZCgpO1xufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/index.js\n')},"./js/ui/LoadFv.js":
/*!*************************!*\
  !*** ./js/ui/LoadFv.js ***!
  \*************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LoadFv = function () {\n    function LoadFv() {\n        _classCallCheck(this, LoadFv);\n\n        this.target = document.querySelector('.js-load');\n        if (!this.target) return;\n    }\n\n    _createClass(LoadFv, [{\n        key: 'init',\n        value: function init() {}\n    }, {\n        key: 'onLoad',\n        value: function onLoad() {\n            this.target.classList.add('is-load');\n        }\n    }]);\n\n    return LoadFv;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadFv);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91aS9Mb2FkRnYuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL3VpL0xvYWRGdi5qcz8yYzU1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRGdiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbG9hZCcpO1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSByZXR1cm47XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtbG9hZCcpO1xuICAgICAgICBcbiAgICB9XG5cbn0iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7OztBQUlBO0FBQ0E7QUFFQTs7Ozs7O0FBZEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/ui/LoadFv.js\n")},"./js/ui/ScrollHeaderLine.js":
/*!***********************************!*\
  !*** ./js/ui/ScrollHeaderLine.js ***!
  \***********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ScrollHeaderLine = function () {\n    function ScrollHeaderLine() {\n        _classCallCheck(this, ScrollHeaderLine);\n\n        this.target = null;\n        this.scrollTop = 0;\n        this.pageHeight = 0;\n    }\n\n    _createClass(ScrollHeaderLine, [{\n        key: 'init',\n        value: function init() {\n            this.setSelector();\n            this.getStyle();\n            this.getHeight();\n        }\n    }, {\n        key: 'setSelector',\n        value: function setSelector() {\n            this.target = document.querySelector('.p-header__line');\n        }\n    }, {\n        key: 'getStyle',\n        value: function getStyle() {\n            this.headerStyleWidth = this.target.style.width = '0%';\n        }\n    }, {\n        key: 'getHeight',\n        value: function getHeight() {\n            this.pageHeight = document.documentElement.scrollHeight;\n        }\n    }, {\n        key: 'onScroll',\n        value: function onScroll() {\n            this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;\n            this.getHeight = 100 + '%';\n            this.headerStyleWidth = this.target.style.width = this.scrollTop + 'px';\n        }\n    }]);\n\n    return ScrollHeaderLine;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollHeaderLine);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91aS9TY3JvbGxIZWFkZXJMaW5lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy91aS9TY3JvbGxIZWFkZXJMaW5lLmpzPzljMDMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsSGVhZGVyTGluZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgIHRoaXMucGFnZUhlaWdodCA9IDA7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RvcigpO1xuICAgICAgICB0aGlzLmdldFN0eWxlKCk7XG4gICAgICAgIHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgc2V0U2VsZWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAtaGVhZGVyX19saW5lJyk7XG4gICAgfVxuXG4gICAgZ2V0U3R5bGUoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyU3R5bGVXaWR0aCA9IHRoaXMudGFyZ2V0LnN0eWxlLndpZHRoID0gJzAlJztcbiAgICB9XG5cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICAgIHRoaXMucGFnZUhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuXG4gICAgb25TY3JvbGwoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgdGhpcy5nZXRIZWlnaHQgPSBgJHsxMDB9JWA7XG4gICAgICAgIHRoaXMuaGVhZGVyU3R5bGVXaWR0aCA9IHRoaXMudGFyZ2V0LnN0eWxlLndpZHRoID0gYCR7dGhpcy5zY3JvbGxUb3B9cHhgO1xuICAgIH1cblxuXG5cbiAgICBcbn0iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUE5QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/ui/ScrollHeaderLine.js\n")},"./js/ui/ScrollHeaderScale.js":
/*!************************************!*\
  !*** ./js/ui/ScrollHeaderScale.js ***!
  \************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ScrollHeaderScale = function () {\n    function ScrollHeaderScale() {\n        _classCallCheck(this, ScrollHeaderScale);\n\n        this.target = null;\n    }\n\n    _createClass(ScrollHeaderScale, [{\n        key: 'init',\n        value: function init() {\n            this.setSelector();\n        }\n    }, {\n        key: 'setSelector',\n        value: function setSelector() {\n            this.target = document.querySelector('.p-header');\n        }\n    }, {\n        key: 'onScroll',\n        value: function onScroll() {\n            this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;\n            // this.target.classList.add('pink')\n            if (this.scrollTop > 0) {\n                this.target.classList.add('is-scroll');\n            } else {\n                this.target.classList.remove('is-scroll');\n            }\n        }\n    }]);\n\n    return ScrollHeaderScale;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollHeaderScale);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91aS9TY3JvbGxIZWFkZXJTY2FsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvdWkvU2Nyb2xsSGVhZGVyU2NhbGUuanM/ZTdjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxIZWFkZXJTY2FsZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0b3IoKTtcbiAgICB9XG5cbiAgICBzZXRTZWxlY3RvcigpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucC1oZWFkZXInKTtcbiAgICB9XG5cbiAgICBvblNjcm9sbCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICAvLyB0aGlzLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwaW5rJylcbiAgICAgICAgaWYodGhpcy5zY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1zY3JvbGwnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2Nyb2xsJylcbiAgICAgICAgfVxuICAgIH1cblxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBdEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/ui/ScrollHeaderScale.js\n")},"./js/ui/ScrollParallax.js":
/*!*********************************!*\
  !*** ./js/ui/ScrollParallax.js ***!
  \*********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ScrollParallax = function () {\n    function ScrollParallax() {\n        _classCallCheck(this, ScrollParallax);\n\n        this.tagets = null;\n        this.posStart = 0;\n        this.posEnd = 0;\n        this.end = 0;\n        this.windowHeight = window.innerHeight;\n    }\n\n    _createClass(ScrollParallax, [{\n        key: 'init',\n        value: function init() {\n            this.setSelector();\n        }\n    }, {\n        key: 'setSelector',\n        value: function setSelector() {\n            this.targets = document.querySelectorAll('.js-scroll__parallax');\n        }\n    }, {\n        key: 'onScroll',\n        value: function onScroll() {\n            this.st = document.documentElement.scrollTop || document.body.scrollTop;;\n            for (var i = 0; i < this.targets.length; i++) {\n                this.target(i);\n            }\n        }\n    }, {\n        key: 'target',\n        value: function target(index) {\n            this.posStart = this.targets[index].getBoundingClientRect().top;\n            this.posEnd = this.targets[index].getBoundingClientRect().bottom;\n            if (this.windowHeight > this.posStart) {\n                this.targets[index].style.transform = 'translateY(' + (this.windowHeight - this.posStart) * this.targets[index].dataset.parallax + 'px)';\n                // this.targets[index].style.transform = `translateY(${(this.st - this.posStart) * this.targets[index].dataset.parallax}px)`;\n            }\n            if (this.windowHeight < this.posStart) {\n                this.targets[index].style.transform = 'none';\n            }\n            if (this.end > this.posEnd) {\n                this.targets[index].style.transform = 'none';\n            }\n        }\n    }]);\n\n    return ScrollParallax;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollParallax);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91aS9TY3JvbGxQYXJhbGxheC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvdWkvU2Nyb2xsUGFyYWxsYXguanM/ZDA5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxQYXJhbGxheCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMudGFnZXRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5wb3NTdGFydCA9IDA7XG4gICAgICAgIHRoaXMucG9zRW5kID0gMDtcbiAgICAgICAgdGhpcy5lbmQgPSAwO1xuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnNldFNlbGVjdG9yKCk7XG4gICAgfVxuXG4gICAgc2V0U2VsZWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zY3JvbGxfX3BhcmFsbGF4Jyk7XG4gICAgfVxuXG4gICAgb25TY3JvbGwoKSB7XG4gICAgICAgIHRoaXMuc3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wOztcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQoIGkgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRhcmdldCggaW5kZXggKSB7XG4gICAgICAgIHRoaXMucG9zU3RhcnQgPSB0aGlzLnRhcmdldHNbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgdGhpcy5wb3NFbmQgPSB0aGlzLnRhcmdldHNbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgICAgaWYodGhpcy53aW5kb3dIZWlnaHQgPiB0aGlzLnBvc1N0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldHNbaW5kZXhdLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7KHRoaXMud2luZG93SGVpZ2h0IC0gdGhpcy5wb3NTdGFydCkgICogdGhpcy50YXJnZXRzW2luZGV4XS5kYXRhc2V0LnBhcmFsbGF4fXB4KWA7XG4gICAgICAgICAgICAvLyB0aGlzLnRhcmdldHNbaW5kZXhdLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7KHRoaXMuc3QgLSB0aGlzLnBvc1N0YXJ0KSAqIHRoaXMudGFyZ2V0c1tpbmRleF0uZGF0YXNldC5wYXJhbGxheH1weClgO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMud2luZG93SGVpZ2h0IDwgdGhpcy5wb3NTdGFydCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXRzW2luZGV4XS5zdHlsZS50cmFuc2Zvcm0gPSBgbm9uZWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5lbmQgPiB0aGlzLnBvc0VuZCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXRzW2luZGV4XS5zdHlsZS50cmFuc2Zvcm0gPSBgbm9uZWA7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBdENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/ui/ScrollParallax.js\n")},"./js/ui/ScrollSwap.js":
/*!*****************************!*\
  !*** ./js/ui/ScrollSwap.js ***!
  \*****************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ScrollSwap = function () {\n    function ScrollSwap() {\n        _classCallCheck(this, ScrollSwap);\n\n        this.target = document.querySelector('.p-producer-personal__block');\n        // this.targetTop = this.target.getBoundingClientRect().top;\n        this.targetTop = 0;\n        this.top = 0;\n        this.items = null;\n        // this.item = null;\n        this.st = document.documentElement.scrollTop || document.body.scrollTop;\n    }\n\n    _createClass(ScrollSwap, [{\n        key: 'init',\n        value: function init() {\n            this.serSelector();\n            this.setPosition();\n        }\n    }, {\n        key: 'serSelector',\n        value: function serSelector() {\n            this.items = document.querySelectorAll('.js-scroll__current');\n            // for( let i = 0; i < this.items.length; i++ ) {\n            //     this.item( i );\n            // }\n        }\n\n        // item( index ) {\n        //     this.itemsIndex = this.items[index];\n        // }\n\n    }, {\n        key: 'setPosition',\n        value: function setPosition() {}\n    }, {\n        key: 'onScroll',\n        value: function onScroll() {\n            this.targetTop = this.target.getBoundingClientRect().top;\n            for (var i = 0; i < this.items.length; i++) {\n                // this.item( i );\n                if (this.targetTop < this.top) {\n                    this.items[i].classList.add('is-scroll__current');\n                    // this.target.addEventListener('scroll', () => {\n                    //     alert(88)\n                    // })\n                }\n            }\n            // if(this.targetTop < this.top) {\n            //     this.itemsIndex.classList.add('is-scroll__current');\n            // }\n        }\n    }]);\n\n    return ScrollSwap;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollSwap);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91aS9TY3JvbGxTd2FwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy91aS9TY3JvbGxTd2FwLmpzPzRmOGIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsU3dhcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucC1wcm9kdWNlci1wZXJzb25hbF9fYmxvY2snKTtcbiAgICAgICAgLy8gdGhpcy50YXJnZXRUb3AgPSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIHRoaXMudGFyZ2V0VG9wID0gMDtcbiAgICAgICAgdGhpcy50b3AgPSAwO1xuICAgICAgICB0aGlzLml0ZW1zID0gbnVsbDtcbiAgICAgICAgLy8gdGhpcy5pdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgfVxuICAgIFxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc2VyU2VsZWN0b3IoKTtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIHNlclNlbGVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNjcm9sbF9fY3VycmVudCcpO1xuICAgICAgICAvLyBmb3IoIGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIC8vICAgICB0aGlzLml0ZW0oIGkgKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8vIGl0ZW0oIGluZGV4ICkge1xuICAgIC8vICAgICB0aGlzLml0ZW1zSW5kZXggPSB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICAvLyB9XG5cbiAgICBzZXRQb3NpdGlvbigpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25TY3JvbGwoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0VG9wID0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAvLyB0aGlzLml0ZW0oIGkgKTtcbiAgICAgICAgICAgIGlmKHRoaXMudGFyZ2V0VG9wIDwgdGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLXNjcm9sbF9fY3VycmVudCcpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgYWxlcnQoODgpXG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZih0aGlzLnRhcmdldFRvcCA8IHRoaXMudG9wKSB7XG4gICAgICAgIC8vICAgICB0aGlzLml0ZW1zSW5kZXguY2xhc3NMaXN0LmFkZCgnaXMtc2Nyb2xsX19jdXJyZW50Jyk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbn0iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUE5Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/ui/ScrollSwap.js\n")},"./js/ui/scrollObserve.js":
/*!********************************!*\
  !*** ./js/ui/scrollObserve.js ***!
  \********************************/
/*! no static exports found */function(module,exports){eval("var targets = document.querySelectorAll('.js-scroll__obs');\n// const words = document.querySelectorAll('.c-ttl__sec span');\n// for(let i = 0; i < words.length; i++) {\n//     console.log(words[i]);\n// }\n\nvar options = {\n    root: null,\n    rootMargin: '0px',\n    threshold: .4\n};\n\nvar observer = new IntersectionObserver(callback, options);\n\nfor (var i = 0; i < targets.length; i++) {\n    observer.observe(targets[i]);\n}\n\nfunction callback(entries) {\n    for (var _i = 0; _i < entries.length; _i++) {\n        if (entries[_i].isIntersecting) {\n            setEvent(entries[_i].target);\n        }\n    }\n}\n\nfunction setEvent(target) {\n    target.classList.add('is-scroll__obs');\n    // const setTargets = document.querySelectorAll('.js-scroll__obs');\n    // if(!setTargets) {\n    //     return\n    // }\n    // for(let i = 0; i < setTargets.length; i++) {\n    //     setTargets[i].classList.add('is-scroll__obs');\n    // }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91aS9zY3JvbGxPYnNlcnZlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy91aS9zY3JvbGxPYnNlcnZlLmpzP2Y3ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zY3JvbGxfX29icycpO1xuLy8gY29uc3Qgd29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy10dGxfX3NlYyBzcGFuJyk7XG4vLyBmb3IobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbi8vICAgICBjb25zb2xlLmxvZyh3b3Jkc1tpXSk7XG4vLyB9XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcm9vdDogbnVsbCxcbiAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICB0aHJlc2hvbGQ6IC40LFxufVxuXG5sZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xuXG5mb3IobGV0IGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0c1tpXSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxiYWNrKGVudHJpZXMpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihlbnRyaWVzW2ldLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICBzZXRFdmVudChlbnRyaWVzW2ldLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldEV2ZW50KHRhcmdldCkge1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1zY3JvbGxfX29icycpO1xuICAgIC8vIGNvbnN0IHNldFRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2Nyb2xsX19vYnMnKTtcbiAgICAvLyBpZighc2V0VGFyZ2V0cykge1xuICAgIC8vICAgICByZXR1cm5cbiAgICAvLyB9XG4gICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IHNldFRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgc2V0VGFyZ2V0c1tpXS5jbGFzc0xpc3QuYWRkKCdpcy1zY3JvbGxfX29icycpO1xuICAgIC8vIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/ui/scrollObserve.js\n")}});