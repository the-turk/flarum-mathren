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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
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

/***/ "./src/admin/components/MathRenSettingsPage.js":
/*!*****************************************************!*\
  !*** ./src/admin/components/MathRenSettingsPage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MathRenSettingsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/saveSettings */ "flarum/common/utils/saveSettings");
/* harmony import */ var flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8__);









/* Regex constants those will be used to validate some fields */
// bbcode delimiters

var bbcode_regex = /^\[([a-zA-Z_-]+)\]%e%\[\/\1\](?:,\s*\[([a-zA-Z_-]+)\]%e%\[\/\2\])*$/; // comma seperated lists, except the bbcode delimiters

var comma_regex = /^[a-zA-Z_-]+(?:,\s*[a-zA-Z_-]+)*$/; // hexadecimal colors

var hex_regex = /^#[0-9a-f]{3}([0-9a-f]{3})?$/i; // floating point numbers

var float_regex = /^[0-9]*[.]?[0-9]+$/; // zero or positive integer values

var int_regex = /^\+?(0|[1-9]\d*)$/;
/* Other constants those will be used through this page */

var settingsPrefix = 'the-turk-mathren.';
var localePrefix = 'the-turk-mathren.admin.settings.';

var MathRenSettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MathRenSettingsPage, _ExtensionPage);

  function MathRenSettingsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }

  var _proto = MathRenSettingsPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);

    this.settings = {};
    this.loading = false; // select options for the output mode

    this.outputModeOptions = {
      html: 'HTML',
      mathml: 'MathML',
      htmlAndMathml: 'HTML & MathML'
    };
    this.validaton_rules = {
      blockDelimiters: bbcode_regex,
      inlineDelimiters: bbcode_regex,
      decisiveKeywords: comma_regex,
      ignoredTags: comma_regex,
      ignoredClasses: comma_regex,
      minRuleThickness: float_regex,
      maxSize: float_regex,
      errorColor: hex_regex,
      maxExpand: int_regex
    };
  }
  /**
   * Show the actual settings page
   *
   * @returns {*}
   */
  ;

  _proto.content = function content() {
    var _this = this;

    return [m('div', {
      className: 'MathRenPage'
    }, [m('div', {
      className: 'container'
    }, [m('form', {
      onsubmit: this.onsubmit.bind(this)
    }, [m('h3', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'katexOptionsHeading')), m('hr'), m('.Form-group', [m('label', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'delimiters')), m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'delimitersHelp'))]), m('.Form-group', [m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'fas fa-exclamation-circle'
    }), m('span', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'regexInfo')))]), m('.Form-group .flex-container', [m('div', {
      className: 'inline--label'
    }, m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'blockDelimiters'))), m('div', {
      className: 'inline--input'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'blockDelimiters', '[math]%e%[/math]'),
      placeholder: '[math]%e%[/math]'
    }))]), m('.Form-group .flex-container', [m('div', {
      className: 'inline--label'
    }, m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'inlineDelimiters'))), m('div', {
      className: 'inline--input'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'inlineDelimiters', '[imath]%e%[/imath]'),
      placeholder: '[imath]%e%[/imath]'
    }))]), m('.Form-group', [m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'fas fa-info-circle'
    }), m('span', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'mainDelimitersInfo')))]), m('.Form-group', [m('label', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'ignoringExpressions')), m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'ignoringExpressionsHelp'))]), m('.Form-group', [m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'fas fa-exclamation-circle'
    }), m('span', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'regexInfo')))]), m('.Form-group .flex-container', [m('div', {
      className: 'inline--label'
    }, m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'decisiveKeywords'))), m('div', {
      className: 'inline--input'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'decisiveKeywords', 'ignore'),
      placeholder: 'ignore'
    }))]), m('.Form-group', [m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'fas fa-question-circle'
    }), m('span', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'decisiveKeywordsHelp')))]), m('.Form-group .flex-container', [m('div', {
      className: 'inline--label'
    }, m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'ignoredTags'))), m('div', {
      className: 'inline--input'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'ignoredTags', ''),
      placeholder: 'script,noscript,style,textarea,pre,code'
    }))]), m('.Form-group .flex-container', [m('div', {
      className: 'inline--label'
    }, m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'ignoredClasses'))), m('div', {
      className: 'inline--input'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'ignoredClasses', 'mathren-ignore'),
      placeholder: 'mathren-ignore'
    }))]), m('.Form-group', [m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'fas fa-info-circle'
    }), m('span', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'ignoredClassesInfo')))]), m('.Form-group', [m('label', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'outputMode')), m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'outputModeHelp')), m('div', flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      options: this.outputModeOptions,
      onchange: this.setting(settingsPrefix + 'outputMode'),
      value: this.setting(settingsPrefix + 'outputMode')() || 'htmlAndMathml'
    }))]), m('.Form-group', [m('label', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      state: this.setting(settingsPrefix + 'enableFleqn', '0')() === '1',
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'enableFleqn')(value ? '1' : '0');
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'enableFleqn')))]), m('.Form-group', [m('label', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      state: this.setting(settingsPrefix + 'enableLeqno', '0')() === '1',
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'enableLeqno')(value ? '1' : '0');
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'enableLeqno')))]), m('.Form-group', [m('label', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      state: this.setting(settingsPrefix + 'enableColorIsTextColor', '0')() === '1',
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'enableColorIsTextColor')(value ? '1' : '0');
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'enableColorIsTextColor')))]), m('.Form-group', [m('label', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      state: this.setting(settingsPrefix + 'enableThrowOnError', '0')() === '1',
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'enableThrowOnError')(value ? '1' : '0');
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'enableThrowOnError')))]), m('.Form-group .flex-container', [m('div', {
      className: 'inline--input-color-label'
    }, m('label', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'errorColor')), m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'errorColorHelp'))), m('div', {
      className: 'inline--input-color'
    }, m('input[type=color].FormControl', {
      bidi: this.setting(settingsPrefix + 'errorColor', '#cc0000'),
      disabled: this.setting(settingsPrefix + 'enableThrowOnError')() === '1'
    }))]), m('.Form-group', [m('label', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'sizeSettings')), m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'sizeSettingsHelp'))]), m('.Form-group .flex-container', [m('div', {
      className: 'inline--label'
    }, m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'minRuleThickness'))), m('div', {
      className: 'inline--input'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'minRuleThickness', '0.05'),
      placeholder: '0.05'
    }))]), m('.Form-group .flex-container', [m('div', {
      className: 'inline--label'
    }, m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'maxSize'))), m('div', {
      className: 'inline--input'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'maxSize', '10'),
      placeholder: '10'
    }))]), m('.Form-group', [m('label', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'macros')), m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'macrosHelp')), m('textarea.FormControl', {
      bidi: this.setting(settingsPrefix + 'macros', ''),
      placeholder: '"\\\\RR": "\\\\mathbb{R}"\n"\\\\NN": "\\\\mathbb{N}"'
    })]), m('.Form-group', [m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'fas fa-exclamation-circle'
    }), m('span', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'syntaxInfo')))]), m('.Form-group .flex-container', [m('div', {
      className: 'inline--label'
    }, m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'maxExpand'))), m('div', {
      className: 'inline--input'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'maxExpand', '1000'),
      placeholder: '1000'
    }))]), m('.Form-group', [flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: 'success',
      dismissible: false
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'katexOptionsInfo', {
      a: m("a", {
        href: "https://katex.org/docs/options.html",
        target: "_blank"
      })
    }))]), m('h3', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'otherOptionsHeading')), m('hr'), m('.Form-group', [m('label', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      state: this.setting(settingsPrefix + 'enableTextEditorButtons', '1')() === '1',
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'enableTextEditorButtons')(value ? '1' : '0');
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'enableTextEditorButtons')))]), m('.Form-group', [m('label', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      state: this.setting(settingsPrefix + 'enableCopyTeX', '1')() === '1',
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'enableCopyTeX')(value ? '1' : '0');
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'enableCopyTeX')))]), m('.Form-group', [m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'fas fa-info-circle'
    }), m('span', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'mentions')))]), flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      type: 'submit',
      className: 'Button Button--primary',
      loading: this.loading,
      disabled: !this.changed()
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.admin.settings.submit_button'))])])])];
  };

  _proto.setting = function setting(key, fallback) {
    if (fallback === void 0) {
      fallback = '';
    }

    this.settings[key] = this.settings[key] || flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.data.settings[key] || fallback);
    return this.settings[key];
  };

  _proto.dirty = function dirty() {
    var _this2 = this;

    var dirty = {};
    Object.keys(this.settings).forEach(function (key) {
      var value = _this2.settings[key]();

      if (value !== flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.data.settings[key]) {
        dirty[key] = value;
      }
    });
    return dirty;
  }
  /**
   * Check if settings differ from their stored values.
   *
   * @returns {boolean}
   */
  ;

  _proto.changed = function changed() {
    return Object.keys(this.dirty()).length;
  }
  /**
   * Handle form's submit event.
   *
   * @param {Event} e
   */
  ;

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    e.preventDefault();
    if (this.loading) return;
    this.loading = true;
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.dismiss(this.alertMessage); // validate settings

    if (!this.validate.bind(this, this.validaton_rules)()) {
      this.loading = false;
      m.redraw();
    } else {
      flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_5___default()(this.dirty()).then(function () {
        _this3.alertMessage = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a, {
          type: 'success'
        }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.admin.settings.saved_message'));
      })["catch"](function () {}).then(function () {
        // return to the initial state and redraw the page
        _this3.loading = false;
        m.redraw();
      });
    }
  }
  /**
   * Validate fields.
   *
   * @returns {boolean}
   */
  ;

  _proto.validate = function validate(rules) {
    var _this4 = this;

    var valid = true;
    Object.keys(rules).every(function (field) {
      var value = _this4.setting(settingsPrefix + field)();

      if (value && !rules[field].test(value)) {
        valid = false;
        _this4.alertMessage = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a, {
          type: 'error'
        }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'validation', {
          field_key: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + field)
        }));
      }

      return valid;
    });
    return valid;
  };

  return MathRenSettingsPage;
}(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_4___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MathRenSettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MathRenSettingsPage */ "./src/admin/components/MathRenSettingsPage.js");

 // initialize settings modal

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('the-turk-mathren', function (app) {
  // Add the admin pane
  app.extensionData["for"]('the-turk-mathren').registerPage(_components_MathRenSettingsPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
});

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/saveSettings":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/utils/saveSettings']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/saveSettings'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map