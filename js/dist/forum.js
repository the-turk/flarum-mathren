module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/addCopyListener.js":
/*!**************************************!*\
  !*** ./src/forum/addCopyListener.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addCopyListener; });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_katex2tex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/katex2tex */ "./src/forum/utils/katex2tex.js");
/* harmony import */ var _utils_copyDelimiters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/copyDelimiters */ "./src/forum/utils/copyDelimiters.js");
/**
 * Copied & modified from:
 * https://github.com/KaTeX/KaTeX/blob/master/contrib/copy-tex/copy-tex.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2020 Khan Academy and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */




function addCopyListener() {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'oncreate', function () {
    if (!app.forum.attribute('mathRenEnableCopyTeX')) return;
    var delimiters = {
      inline: app.forum.attribute('mathRenMainInlineDelimiter'),
      block: app.forum.attribute('mathRenMainBlockDelimiter')
    }; // Global copy handler to modify behavior on .katex elements.

    document.addEventListener('copy', function (event) {
      var selection = window.getSelection();

      if (selection.isCollapsed) {
        return; // default action OK if selection is empty
      }

      var fragment = selection.getRangeAt(0).cloneContents();

      if (!fragment.querySelector('.katex-mathml')) {
        return; // default action OK if no .katex-mathml elements
      } // Preserve usual HTML copy/paste behavior.


      var html = [];

      for (var i = 0; i < fragment.childNodes.length; i++) {
        html.push(fragment.childNodes[i].outerHTML);
      }

      event.clipboardData.setData('text/html', html.join('')); // Rewrite plain-text version.

      event.clipboardData.setData('text/plain', Object(_utils_katex2tex__WEBPACK_IMPORTED_MODULE_2__["default"])(fragment, Object(_utils_copyDelimiters__WEBPACK_IMPORTED_MODULE_3__["default"])(delimiters)).textContent); // Prevent normal copy handling.

      event.preventDefault();
    });
  });
}

/***/ }),

/***/ "./src/forum/addPostQuoteButton.js":
/*!*****************************************!*\
  !*** ./src/forum/addPostQuoteButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addPostQuoteButton; });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fragments_PostQuoteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragments/PostQuoteButton */ "./src/forum/fragments/PostQuoteButton.js");
/* harmony import */ var _utils_selectedText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/selectedText */ "./src/forum/utils/selectedText.js");
/* harmony import */ var _utils_copyDelimiters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/copyDelimiters */ "./src/forum/utils/copyDelimiters.js");
/**
 * Copied & modified from:
 * https://github.com/flarum/mentions/blob/master/js/src/forum/addPostQuoteButton.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2019-2021 Stichting Flarum (Flarum Foundation)
 * Copyright (c) 2014-2019 Toby Zerner (toby.zerner@gmail.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */





function addPostQuoteButton() {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'oncreate', function () {
    if (!app.forum.attribute('mathRenAddQuoteButton') || !app.forum.attribute('mathRenEnableCopyTeX')) return;
    var post = this.attrs.post;
    var delimiters = {
      inline: app.forum.attribute('mathRenMainInlineDelimiter'),
      block: app.forum.attribute('mathRenMainBlockDelimiter')
    };
    if (post.isHidden() || app.session.user && !post.discussion().canReply()) return;
    var $postBody = this.$('.Post-body'); // Wrap the quote button in a wrapper element so that we can render
    // button into it.

    var $container = $('<div class="Post-quoteButtonContainer-mathRen"></div>');
    var button = new _fragments_PostQuoteButton__WEBPACK_IMPORTED_MODULE_2__["default"](post);

    var handler = function handler(e) {
      setTimeout(function () {
        var content = Object(_utils_selectedText__WEBPACK_IMPORTED_MODULE_3__["default"])($postBody, Object(_utils_copyDelimiters__WEBPACK_IMPORTED_MODULE_4__["default"])(delimiters));

        if (content) {
          button.content = content;
          m.render($container[0], button.render());
          var rects = window.getSelection().getRangeAt(0).getClientRects();
          var firstRect = rects[0];

          if (e.clientY < firstRect.bottom && e.clientX - firstRect.right < firstRect.left - e.clientX) {
            button.showStart(firstRect.left, firstRect.top);
          } else {
            var lastRect = rects[rects.length - 1];
            button.showEnd(lastRect.right, lastRect.bottom);
          }
        }
      }, 1);
    };

    this.$().after($container).on('mouseup', handler);

    if ('ontouchstart' in window) {
      document.addEventListener('selectionchange', handler, false);
    }
  });
}

/***/ }),

/***/ "./src/forum/addTextEditorButton.js":
/*!******************************************!*\
  !*** ./src/forum/addTextEditorButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addTextEditorButton; });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TextEditorButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TextEditorButton */ "./src/forum/components/TextEditorButton.js");



function addTextEditorButton() {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'toolbarItems', function (items) {
    if (app.forum.attribute('mathRenEnableTextEditorButtons') === true) {
      items.add('the-turk-mathren', m(_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        textEditor: this.attrs.composer.editor
      }));
    }
  });
}

/***/ }),

/***/ "./src/forum/components/TextEditorButton.js":
/*!**************************************************!*\
  !*** ./src/forum/components/TextEditorButton.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__);







var localePrefix = 'the-turk-mathren.forum.textEditor.';

var _default = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.delimiters = {
      inline: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('mathRenMainInlineDelimiter'),
      block: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('mathRenMainBlockDelimiter')
    };
  };

  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);
  };

  _proto.view = function view() {
    return flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'MathRenDropdown',
      buttonClassName: 'Button Button--flat',
      label: flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('fas fa-square-root-alt')
    }, this.items().toArray());
  }
  /**
   * Build an item list for the contents of the dropdown menu.
   *
   * @return {ItemList}
   */
  ;

  _proto.items = function items() {
    var _this = this;

    var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default.a();
    items.add('mathBlock', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      icon: 'fas fa-vector-square',
      onclick: function onclick() {
        // opening tag (left delimiter)
        var leftDelim = _this.delimiters.block['left']; // closing tag (right delimiter)

        var rightDelim = _this.delimiters.block['right'];

        _this.wrapSelection(leftDelim, rightDelim);
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'blockExpression')), 50);
    items.add('mathInline', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      icon: 'fas fa-grip-lines',
      onclick: function onclick() {
        // opening tag (left delimiter)
        var leftDelim = _this.delimiters.inline['left']; // closing tag (right delimiter)

        var rightDelim = _this.delimiters.inline['right'];

        _this.wrapSelection(leftDelim, rightDelim);
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'inlineExpression')), 0);
    return items;
  }
  /**
   * Wrap the current selection with BBCode tags
   * If there's no selection, put them around the cursor
   * 
   * @param string leftDelim
   * @param string rightDelim
   */
  ;

  _proto.wrapSelection = function wrapSelection(leftDelim, rightDelim) {
    var selectionRange = this.attrs.textEditor.getSelectionRange();

    if (selectionRange[0] != selectionRange[1]) {
      this.attrs.textEditor.insertAt(selectionRange[0], leftDelim);
      this.attrs.textEditor.insertAt(selectionRange[1] + leftDelim.length, rightDelim);
    } else {
      this.attrs.textEditor.replaceBeforeCursor(selectionRange[0], leftDelim + rightDelim);
      this.attrs.textEditor.moveCursorTo(selectionRange[0] + leftDelim.length);
    }
  };

  return _default;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/fragments/PostQuoteButton.js":
/*!************************************************!*\
  !*** ./src/forum/fragments/PostQuoteButton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostQuoteButton; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Fragment */ "flarum/Fragment");
/* harmony import */ var flarum_Fragment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Fragment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_reply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/reply */ "./src/forum/utils/reply.js");


/**
 * Copied & modified from:
 * https://github.com/flarum/mentions/blob/master/js/src/forum/fragments/PostQuoteButton.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2019-2021 Stichting Flarum (Flarum Foundation)
 * Copyright (c) 2014-2019 Toby Zerner (toby.zerner@gmail.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */




var PostQuoteButton = /*#__PURE__*/function (_Fragment) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostQuoteButton, _Fragment);

  function PostQuoteButton(post) {
    var _this;

    _this = _Fragment.call(this) || this;
    _this.post = post;
    return _this;
  }

  var _proto = PostQuoteButton.prototype;

  _proto.view = function view() {
    var _this2 = this;

    return m("button", {
      "class": "Button PostQuoteButton",
      onclick: function onclick() {
        Object(_utils_reply__WEBPACK_IMPORTED_MODULE_3__["default"])(_this2.post, _this2.content);
      }
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-quote-left', {
      className: 'Button-icon'
    }), app.translator.trans('flarum-mentions.forum.post.quote_button'));
  };

  _proto.show = function show(left, top) {
    var $this = this.$().show();
    var parentOffset = $this.offsetParent().offset();
    $this.css('left', left - parentOffset.left).css('top', top - parentOffset.top);
    this.hideHandler = this.hide.bind(this);
    $(document).on('mouseup', this.hideHandler);
  };

  _proto.showStart = function showStart(left, top) {
    var $this = this.$();
    this.show(left, $(window).scrollTop() + top - $this.outerHeight() - 5);
  };

  _proto.showEnd = function showEnd(right, bottom) {
    var $this = this.$();
    this.show(right - $this.outerWidth(), $(window).scrollTop() + bottom + 5);
  };

  _proto.hide = function hide() {
    this.$().hide();
    $(document).off('mouseup', this.hideHandler);
  };

  return PostQuoteButton;
}(flarum_Fragment__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _addTextEditorButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTextEditorButton */ "./src/forum/addTextEditorButton.js");
/* harmony import */ var _addPostQuoteButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addPostQuoteButton */ "./src/forum/addPostQuoteButton.js");
/* harmony import */ var _addCopyListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addCopyListener */ "./src/forum/addCopyListener.js");






flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('the-turk-mathren', function () {
  var whenLoaded = {};
  var hasLoaded = false;
  var isLoading = false;

  var load = function load() {
    isLoading = true;
    $.getScript('//cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.js', function () {
      $.getScript('//cdn.jsdelivr.net/npm/katex@0.13.11/dist/contrib/auto-render.min.js', function () {
        for (var id in whenLoaded) {
          whenLoaded[id]();
        }

        whenLoaded = {};
        isLoading = false;
        hasLoaded = true;
      });
    });
  }; // Add Text Editor buttons


  Object(_addTextEditorButton__WEBPACK_IMPORTED_MODULE_3__["default"])();
  /**
   * Show a Quote button when Post text is selected
   *
   * We have to run KaTeX's Copy-tex plugin on the selected post
   * and need to modify `selectedText` function which comes with
   * `flarum/mentions` extension.
   **/

  Object(_addPostQuoteButton__WEBPACK_IMPORTED_MODULE_4__["default"])(); // Hook into global copy handler to modify behavior on `.katex` elements

  Object(_addCopyListener__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var renderMath = function renderMath(element, id) {
    var render = function render() {
      return renderMathInElement(element, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('mathRenKatexOptions'));
    };

    if (!hasLoaded) {
      whenLoaded[id] = render;
      if (isLoading) return;
      load();
    } else {
      render();
    }
  };
  /* Run KaTeX renderer on every post loading */


  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oncreate', function () {
    renderMath($(this.element)[0], this.attrs.post.id());
  });
  /**
   * Render the math in preview mode
   * Note: We also have this TextFormatter's Live preview attributes
   *
   * @see https://github.com/s9e/TextFormatter/blob/master/docs/JavaScript/Live_preview_attributes.md
   */

  if (s9e && s9e.TextFormatter) {
    Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(s9e.TextFormatter, 'preview', function (original, preview, element) {
      if (element.matches('.Post *')) renderMath(element, 0);
    });
  }
});

/***/ }),

/***/ "./src/forum/utils/cleanDisplayName.js":
/*!*********************************************!*\
  !*** ./src/forum/utils/cleanDisplayName.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cleanDisplayName; });
/**
 * Copied from:
 * https://github.com/flarum/mentions/blob/master/js/src/forum/utils/cleanDisplayName.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2019-2021 Stichting Flarum (Flarum Foundation)
 * Copyright (c) 2014-2019 Toby Zerner (toby.zerner@gmail.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function cleanDisplayName(user) {
  return user.displayName().replace(/"#[a-z]{0,3}[0-9]+/, '_');
}

/***/ }),

/***/ "./src/forum/utils/copyDelimiters.js":
/*!*******************************************!*\
  !*** ./src/forum/utils/copyDelimiters.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return copyDelimiters; });
/**
 * Define delimiters those will be used in Copy-tex plugin
 *
 * @see https://github.com/KaTeX/KaTeX/blob/master/contrib/copy-tex/katex2tex.js#L1-L5
 * @returns {object}
 */
function copyDelimiters(delimiters) {
  return {
    inline: [delimiters.inline.left, delimiters.inline.right],
    display: [delimiters.block.left, delimiters.block.right]
  };
}

/***/ }),

/***/ "./src/forum/utils/katex2tex.js":
/*!**************************************!*\
  !*** ./src/forum/utils/katex2tex.js ***!
  \**************************************/
/*! exports provided: katexReplaceWithTex, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "katexReplaceWithTex", function() { return katexReplaceWithTex; });
/**
 * Copied & modified from:
 * https://github.com/KaTeX/KaTeX/blob/master/contrib/copy-tex/katex2tex.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2019 Khan Academy and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
// Replace .katex elements with their TeX source (<annotation> element).
// Modifies fragment in-place.  Useful for writing your own 'copy' handler,
// as in copy-tex.js.
var katexReplaceWithTex = function katexReplaceWithTex(fragment, copyDelimiters) {
  // Remove .katex-html blocks that are preceded by .katex-mathml blocks
  // (which will get replaced below).
  var katexHtml = fragment.querySelectorAll('.katex-mathml + .katex-html');

  for (var i = 0; i < katexHtml.length; i++) {
    var element = katexHtml[i];

    if (element.remove) {
      element.remove(null);
    } else {
      element.parentNode.removeChild(element);
    }
  } // Replace .katex-mathml elements with their annotation (TeX source)
  // descendant, with inline delimiters.


  var katexMathml = fragment.querySelectorAll('.katex-mathml');

  for (var _i = 0; _i < katexMathml.length; _i++) {
    var _element = katexMathml[_i];

    var texSource = _element.querySelector('annotation');

    if (texSource) {
      if (_element.replaceWith) {
        _element.replaceWith(texSource);
      } else {
        _element.parentNode.replaceChild(texSource, _element);
      }

      texSource.innerHTML = copyDelimiters.inline[0] + texSource.innerHTML + copyDelimiters.inline[1];
    }
  } // Switch display math to display delimiters.


  var displays = fragment.querySelectorAll('.katex-display annotation');

  for (var _i2 = 0; _i2 < displays.length; _i2++) {
    var _element2 = displays[_i2];
    _element2.innerHTML = copyDelimiters.display[0] + _element2.innerHTML.substr(copyDelimiters.inline[0].length, _element2.innerHTML.length - copyDelimiters.inline[0].length - copyDelimiters.inline[1].length) + copyDelimiters.display[1];
  }

  return fragment;
};
/* harmony default export */ __webpack_exports__["default"] = (katexReplaceWithTex);

/***/ }),

/***/ "./src/forum/utils/reply.js":
/*!**********************************!*\
  !*** ./src/forum/utils/reply.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reply; });
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/utils/DiscussionControls */ "flarum/utils/DiscussionControls");
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/EditPostComposer */ "flarum/components/EditPostComposer");
/* harmony import */ var flarum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cleanDisplayName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanDisplayName */ "./src/forum/utils/cleanDisplayName.js");
/**
 * Copied from:
 * https://github.com/flarum/mentions/blob/master/js/src/forum/utils/reply.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2019-2021 Stichting Flarum (Flarum Foundation)
 * Copyright (c) 2014-2019 Toby Zerner (toby.zerner@gmail.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */




function insertMention(post, composer, quote) {
  var user = post.user();
  var mention = "@\"" + (user && Object(_cleanDisplayName__WEBPACK_IMPORTED_MODULE_2__["default"])(user) || app.translator.trans('core.lib.username.deleted_text')) + "\"#p" + post.id() + " "; // If the composer is empty, then assume we're starting a new reply.
  // In which case we don't want the user to have to confirm if they
  // close the composer straight away.

  if (!composer.fields.content()) {
    composer.body.attrs.originalContent = mention;
  }

  var cursorPosition = composer.editor.getSelectionRange()[0];
  var preceding = composer.fields.content().slice(0, cursorPosition);
  var precedingNewlines = preceding.length == 0 ? 0 : 3 - preceding.match(/(\n{0,2})$/)[0].length;
  composer.editor.insertAtCursor(Array(precedingNewlines).join('\n') + ( // Insert up to two newlines, depending on preceding whitespace
  quote ? '> ' + mention + quote.trim().replace(/\n/g, '\n> ') + '\n\n' : mention), false);
}

function reply(post, quote) {
  if (app.composer.bodyMatches(flarum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_1___default.a) && app.composer.body.attrs.post.discussion() === post.discussion()) {
    // If we're already editing a post in the discussion of post we're quoting,
    // insert the mention directly.
    insertMention(post, app.composer, quote);
  } else {
    // The default "Reply" action behavior will only open a new composer if
    // necessary, but it will always be a ReplyComposer, hence the exceptional
    // case above.
    flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_0___default.a.replyAction.call(post.discussion()).then(function (composer) {
      return insertMention(post, composer, quote);
    });
  }
}

/***/ }),

/***/ "./src/forum/utils/selectedText.js":
/*!*****************************************!*\
  !*** ./src/forum/utils/selectedText.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return selectedText; });
/* harmony import */ var _katex2tex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./katex2tex */ "./src/forum/utils/katex2tex.js");
/**
 * Copied & modified from:
 * https://github.com/flarum/mentions/blob/master/js/src/forum/utils/selectedText.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2019-2021 Stichting Flarum (Flarum Foundation)
 * Copyright (c) 2014-2019 Toby Zerner (toby.zerner@gmail.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

function selectedText(body, copyDelimiters) {
  var selection = window.getSelection();

  if (selection.rangeCount) {
    var range = selection.getRangeAt(0);
    var parent = range.commonAncestorContainer;

    if (body[0] === parent || $.contains(body[0], parent)) {
      var fragment = selection.getRangeAt(0).cloneContents();

      if (fragment.querySelector('.katex-mathml')) {
        fragment = Object(_katex2tex__WEBPACK_IMPORTED_MODULE_0__["default"])(fragment, copyDelimiters);
      }

      var clone = $('<div>').append(fragment); // Replace emoji images with their shortcode (found in alt attribute)

      clone.find('img.emoji').replaceWith(function () {
        return this.alt;
      }); // Replace all other images with a Markdown image

      clone.find('img').replaceWith(function () {
        return '![](' + this.src + ')';
      }); // Replace all links with a Markdown link

      clone.find('a').replaceWith(function () {
        return '[' + this.innerText + '](' + this.href + ')';
      });
      return clone.text();
    }
  }

  return '';
}

/***/ }),

/***/ "flarum/Fragment":
/*!*************************************************!*\
  !*** external "flarum.core.compat['Fragment']" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Fragment'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/DiscussionPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionPage']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionPage'];

/***/ }),

/***/ "flarum/components/EditPostComposer":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/EditPostComposer']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/EditPostComposer'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/utils/DiscussionControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/DiscussionControls']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/DiscussionControls'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map