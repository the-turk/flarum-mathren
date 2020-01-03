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
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modals_MathRenSettingsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals/MathRenSettingsModal */ "./src/admin/modals/MathRenSettingsModal.js");

 // initialize settings modal

flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('the-turk-mathren', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.extensionSettings['the-turk-mathren'] = function () {
    return flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.modal.show(new _modals_MathRenSettingsModal__WEBPACK_IMPORTED_MODULE_1__["default"]());
  };
});

/***/ }),

/***/ "./src/admin/modals/MathRenSettingsModal.js":
/*!**************************************************!*\
  !*** ./src/admin/modals/MathRenSettingsModal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MathRenSettingsModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/SettingsModal */ "flarum/components/SettingsModal");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Select */ "flarum/components/Select");
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6__);






 // just to make things easier

var settingsPrefix = 'the-turk-mathren.';
var translationPrefix = 'the-turk-mathren.admin.settings.';

var MathRenSettingsModal =
/*#__PURE__*/
function (_SettingsModal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MathRenSettingsModal, _SettingsModal);

  function MathRenSettingsModal() {
    return _SettingsModal.apply(this, arguments) || this;
  }

  var _proto = MathRenSettingsModal.prototype;

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'title');
  }
  /**
     * Build modal form.
     *
     * @returns {*}
     */
  ;

  _proto.form = function form() {
    var _this = this;

    return [m('h3', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'codeOptionsHeading')), m('hr'), m('.Form-group', [m('label', flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      state: this.setting(settingsPrefix + 'enableCode', '1')() === '1',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'enableCode'),
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'enableCode')(value ? '1' : '0');
      }
    })), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'enableCodeHelp'))]), m('.Form-group', [flarum_components_Alert__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'enableCodeWarning'),
      dismissible: false
    })]), this.setting(settingsPrefix + 'enableCode')() === '1' ? [m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'codeClasses')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'codeClassesHelp'))]), m('.Form-group', [m('div', {
      style: 'display:inline-block;vertical-align:middle;width:35%;'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'codeClass'))), m('div', {
      style: 'display:inline-block;vertical-align:middle;width:63%;margin-left:2%;'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'codeClass', 'mathren-code'),
      placeholder: 'mathren-code'
    }))]), m('.Form-group', [m('div', {
      style: 'display:inline-block;vertical-align:middle;width:35%;'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'inlineCodeClass'))), m('div', {
      style: 'display:inline-block;vertical-align:middle;width:63%;margin-left:2%;'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'inlineCodeClass', 'mathren-inline-code'),
      placeholder: 'mathren-inline-code'
    }))]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'codeStyle')), m('textarea.FormControl', {
      bidi: this.setting(settingsPrefix + 'codeStyle', '.mathren-code { }\n.mathren-inline-code { }'),
      placeholder: '.mathren-code { }\n.mathren-inline-code { }'
    })])] : null, m('h3', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'katexOptionsHeading')), m('hr'), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'ignoredTags')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'ignoredTagsHelp')), m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'ignoredTags'),
      placeholder: 'script,noscript,style,textarea,pre'
    })]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'ignoredClasses')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'ignoredClassesHelp')), m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'ignoredClasses', 'mathren-code-ignore,mathren-inline-code-ignore'),
      placeholder: 'mathren-code-ignore,mathren-inline-code-ignore'
    })]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'outputMode')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'outputModeHelp')), m('div', flarum_components_Select__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      options: {
        html: 'HTML',
        mathml: 'MathML',
        htmlAndMathml: 'HTML & MathML'
      },
      onchange: this.setting(settingsPrefix + 'outputMode'),
      value: this.setting(settingsPrefix + 'outputMode')() || this.setting(settingsPrefix + 'outputMode')('htmlAndMathml')
    }))]), m('.Form-group', [m('label', flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      state: this.setting(settingsPrefix + 'enableFleqn', '0')() === '1',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'enableFleqn'),
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'enableFleqn')(value ? '1' : '0');
      }
    }))]), m('.Form-group', [m('label', flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      state: this.setting(settingsPrefix + 'enableLeqno', '0')() === '1',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'enableLeqno'),
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'enableLeqno')(value ? '1' : '0');
      }
    }))]), m('.Form-group', [m('label', flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      state: this.setting(settingsPrefix + 'enableThrowOnError', '0')() === '1',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'enableThrowOnError'),
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'enableThrowOnError')(value ? '1' : '0');
      }
    }))]), this.setting(settingsPrefix + 'enableThrowOnError')() === '0' ? [m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'errorColor')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'errorColorHelp')), m('input[type=color].FormControl', {
      bidi: this.setting(settingsPrefix + 'errorColor', '#cc0000')
    })])] : null, m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'sizeSettings')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'sizeSettingsHelp'))]), m('.Form-group', [m('div', {
      style: 'display:inline-block;vertical-align:middle;width:35%;'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'minRuleThickness'))), m('div', {
      style: 'display:inline-block;vertical-align:middle;width:63%;margin-left:2%;'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'minRuleThickness', '0.05'),
      placeholder: '0.05'
    }))]), m('.Form-group', [m('div', {
      style: 'display:inline-block;vertical-align:middle;width:35%;'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'maxSize'))), m('div', {
      style: 'display:inline-block;vertical-align:middle;width:63%;margin-left:2%;'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'maxSize', '10'),
      placeholder: '10'
    }))]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'macros')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'macrosHelp')), m('textarea.FormControl', {
      bidi: this.setting(settingsPrefix + 'macros'),
      placeholder: '\\RR: \\mathbb{R},\n\\NN: \\mathbb{N}'
    })]), m('.Form-group', [m('div', {
      style: 'display:inline-block;vertical-align:middle;width:35%;'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'maxExpand'))), m('div', {
      style: 'display:inline-block;vertical-align:middle;width:63%;margin-left:2%;'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'maxExpand', '1000'),
      placeholder: '1000'
    }))]), m('.Form-group', [flarum_components_Alert__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'katexOptionsInfo'),
      type: 'success',
      dismissible: false
    })])];
  };

  return MathRenSettingsModal;
}(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Select":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Select']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Select'];

/***/ }),

/***/ "flarum/components/SettingsModal":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsModal']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingsModal'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/utils/saveSettings":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/saveSettings']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/saveSettings'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map