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

/***/ "./src/admin/addSettingsPane.js":
/*!**************************************!*\
  !*** ./src/admin/addSettingsPane.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/AdminNav */ "flarum/components/AdminNav");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/AdminLinkButton */ "flarum/components/AdminLinkButton");
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MathRenSettingsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MathRenSettingsPage */ "./src/admin/components/MathRenSettingsPage.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  // create the route
  app.routes['the-turk-mathren'] = {
    path: '/the-turk/mathren',
    component: _components_MathRenSettingsPage__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  }; // bind the route we created to the three dots settings button

  app.extensionSettings['the-turk-mathren'] = function () {
    return m.route(app.route('the-turk-mathren'));
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'items', function (items) {
    // add the MathRen tab to the admin navigation menu
    items.add('the-turk-mathren', flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      href: app.route('the-turk-mathren'),
      icon: 'fas fa-square-root-alt',
      children: app.translator.trans('the-turk-mathren.admin.settings.title'),
      description: app.translator.trans('the-turk-mathren.admin.settings.description')
    }));
  });
});

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
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Select */ "flarum/components/Select");
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_7__);









var MathRenSettingsPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MathRenSettingsPage, _Component);

  function MathRenSettingsPage() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MathRenSettingsPage.prototype;

  _proto.init = function init() {
    var _this = this;

    // whether we are saving the settings or not right now
    this.loading = false; // the fields we need to watch and to save

    this.fields = [// the code tag options
    'blockMathClass', 'inlineMathClass', 'wrapperStyle', // KaTeX options
    'mainBlockDelimiter', 'mainInlineDelimiter', 'aliasBlockDelimiters', 'aliasInlineDelimiters', 'decisiveKeywords', 'ignoredTags', 'ignoredClasses', 'errorColor', 'minRuleThickness', 'maxSize', 'macros', 'maxExpand', 'outputMode']; // the checkboxes we need to watch and to save

    this.checkboxes = [// KaTeX options
    'enableFleqn', 'enableLeqno', 'enableColorIsTextColor', 'enableThrowOnError', 'enableTextEditorButtons']; // select options for output mode

    this.outputModeOptions = {
      'html': 'HTML',
      'mathml': 'MathML',
      'htmlAndMathml': 'HTML & MathML'
    }; // get the saved settings from the database

    var settings = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.data.settings; // settings prefix
    // (to be added to every field and checkbox in the setting table)

    this.settingsPrefix = 'the-turk-mathren.'; // translation prefix

    this.localePrefix = 'the-turk-mathren.admin.settings.'; // contains default values

    this.values = {}; // bind the values of the fields and checkboxes
    // to the getter/setter functions

    this.fields.forEach(function (key) {
      return _this.values[key] = m.prop(settings[_this.addPrefix(key)]);
    });
    this.checkboxes.forEach(function (key) {
      _this.values[key] = m.prop(settings[_this.addPrefix(key)] === '1');
    });
  }
  /**
   * Show the actual MathRenSettingsPage.
   *
   * @returns {*}
   */
  ;

  _proto.view = function view() {
    return [m('div', {
      className: 'MathRenPage'
    }, [m('div', {
      className: 'container'
    }, [m('form', {
      onsubmit: this.onsubmit.bind(this)
    }, [m('.Form-group', [m('iframe', {
      src: 'https://ghbtns.com/github-btn.html?user=the-turk' + '&repo=flarum-mathren&type=watch&count=true&v=2',
      frameborder: '0',
      scrolling: 'no'
    })]), m('h3', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'wrapperOptionsHeading')), m('hr'), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'mathClasses')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'mathClassesHelp'))]), m('.Form-group', [m('div', {
      className: 'inlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'blockMathClass'))), m('div', {
      className: 'inlineDivInput'
    }, m('input[type=text].FormControl', {
      value: this.values.blockMathClass() || 'mathren-block',
      oninput: m.withAttr('value', this.values.blockMathClass)
    }))]), m('.Form-group', [m('div', {
      className: 'inlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'inlineMathClass'))), m('div', {
      className: 'inlineDivInput'
    }, m('input[type=text].FormControl', {
      value: this.values.inlineMathClass() || 'mathren-inline',
      oninput: m.withAttr('value', this.values.inlineMathClass)
    }))]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'wrapperStyle')), m('textarea.FormControl', {
      value: this.values.wrapperStyle() || '',
      placeholder: '.mathren-block { } .mathren-inline { } .mathren-ignore { }',
      oninput: m.withAttr('value', this.values.wrapperStyle)
    })]), m('h3', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'katexOptionsHeading')), m('hr'), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'delimiters')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'delimitersHelp'))]), m('.Form-group', [m('div', {
      className: 'inlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'mainBlockDelimiter'))), m('div', {
      className: 'inlineDivInput'
    }, m('input[type=text].FormControl', {
      value: this.values.mainBlockDelimiter() || '[math]%e%[/math]',
      placeholder: '[math]%e%[/math]',
      oninput: m.withAttr('value', this.values.mainBlockDelimiter)
    }))]), m('.Form-group', [m('div', {
      className: 'inlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'mainInlineDelimiter'))), m('div', {
      className: 'inlineDivInput'
    }, m('input[type=text].FormControl', {
      value: this.values.mainInlineDelimiter() || '[imath]%e%[/imath]',
      placeholder: '[imath]%e%[/imath]',
      oninput: m.withAttr('value', this.values.mainInlineDelimiter)
    }))]), m('.Form-group', [m('div', {
      className: 'inlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'aliasBlockDelimiters'))), m('div', {
      className: 'inlineDivInput'
    }, m('input[type=text].FormControl', {
      value: this.values.aliasBlockDelimiters() || '',
      placeholder: '[mathren]%e%[/mathren],$$%e%$$,\\[%e%\\]',
      oninput: m.withAttr('value', this.values.aliasBlockDelimiters)
    }))]), m('.Form-group', [m('div', {
      className: 'inlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'aliasInlineDelimiters'))), m('div', {
      className: 'inlineDivInput'
    }, m('input[type=text].FormControl', {
      value: this.values.aliasInlineDelimiters() || '',
      placeholder: '[mathren-inline]%e%[/mathren-inline],\\(%e%\\)',
      oninput: m.withAttr('value', this.values.aliasInlineDelimiters)
    }))]), m('.Form-group', [m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'fas fa-question-circle'
    }), m('span', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'aliasDelimitersHelp')))]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'ignoringExpressions')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'ignoringExpressionsHelp'))]), m('.Form-group', [m('div', {
      className: 'inlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'decisiveKeywords'))), m('div', {
      className: 'inlineDivInput'
    }, m('input[type=text].FormControl', {
      value: this.values.decisiveKeywords() || 'ignore',
      placeholder: 'ignore',
      oninput: m.withAttr('value', this.values.decisiveKeywords)
    }))]), m('.Form-group', [m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'fas fa-exclamation-circle'
    }), m('span', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'decisiveKeywordsWarning'))), m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'fas fa-info-circle'
    }), m('span', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'decisiveKeywordsInfo'))), m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'fas fa-question-circle'
    }), m('span', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'decisiveKeywordsHelp')))]), m('.Form-group', [m('div', {
      className: 'inlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'ignoredTags'))), m('div', {
      className: 'inlineDivInput'
    }, m('input[type=text].FormControl', {
      value: this.values.ignoredTags() || '',
      placeholder: 'script,noscript,style,textarea,pre,code',
      oninput: m.withAttr('value', this.values.ignoredTags)
    }))]), m('.Form-group', [m('div', {
      className: 'inlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'ignoredClasses'))), m('div', {
      className: 'inlineDivInput'
    }, m('input[type=text].FormControl', {
      value: this.values.ignoredClasses() || 'mathren-ignore',
      placeholder: 'mathren-ignore',
      oninput: m.withAttr('value', this.values.ignoredClasses)
    }))]), m('.Form-group', [m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'fas fa-info-circle'
    }), m('span', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'ignoredClassesInfo')))]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'outputMode')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'outputModeHelp')), m('div', flarum_components_Select__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      options: this.outputModeOptions,
      onchange: this.values.outputMode,
      value: this.values.outputMode() || 'htmlAndMathml'
    }))]), m('.Form-group', [m('label', flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      state: this.values.enableFleqn(),
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'enableFleqn'),
      onchange: this.values.enableFleqn
    }))]), m('.Form-group', [m('label', flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      state: this.values.enableLeqno(),
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'enableLeqno'),
      onchange: this.values.enableLeqno
    }))]), m('.Form-group', [m('label', flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      state: this.values.enableColorIsTextColor(),
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'enableColorIsTextColor'),
      onchange: this.values.enableColorIsTextColor
    }))]), m('.Form-group', [m('label', flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      state: this.values.enableThrowOnError(),
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'enableThrowOnError'),
      onchange: this.values.enableThrowOnError
    }))]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'errorColor')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'errorColorHelp')), m('input[type=color].FormControl', {
      value: this.values.errorColor() || '#cc0000',
      oninput: m.withAttr('value', this.values.errorColor),
      disabled: this.values.enableThrowOnError()
    })]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'sizeSettings')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'sizeSettingsHelp'))]), m('.Form-group', [m('div', {
      className: 'inlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'minRuleThickness'))), m('div', {
      className: 'inlineDivInput'
    }, m('input[type=text].FormControl', {
      value: this.values.minRuleThickness() || '0.05',
      placeholder: '0.05',
      oninput: m.withAttr('value', this.values.minRuleThickness)
    }))]), m('.Form-group', [m('div', {
      className: 'inlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'maxSize'))), m('div', {
      className: 'inlineDivInput'
    }, m('input[type=text].FormControl', {
      value: this.values.maxSize() || '10',
      placeholder: '10',
      oninput: m.withAttr('value', this.values.maxSize)
    }))]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'macros')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'macrosHelp')), m('textarea.FormControl', {
      value: this.values.macros() || '',
      placeholder: '\\RR: \\mathbb{R},\n\\NN: \\mathbb{N}',
      oninput: m.withAttr('value', this.values.macros)
    })]), m('.Form-group', [m('div', {
      className: 'inlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'maxExpand'))), m('div', {
      className: 'inlineDivInput'
    }, m('input[type=text].FormControl', {
      value: this.values.maxExpand() || '1000',
      placeholder: '1000',
      oninput: m.withAttr('value', this.values.maxExpand)
    }))]), m('.Form-group', [flarum_components_Alert__WEBPACK_IMPORTED_MODULE_7___default.a.component({
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'katexOptionsInfo'),
      type: 'success',
      dismissible: false
    })]), m('h3', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'otherOptionsHeading')), m('hr'), m('.Form-group', [m('label', flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      state: this.values.enableTextEditorButtons(),
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.localePrefix + 'enableTextEditorButtons'),
      onchange: this.values.enableTextEditorButtons
    }))]), flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      type: 'submit',
      className: 'Button Button--primary',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.admin.basics.submit_button'),
      loading: this.loading,
      disabled: !this.changed()
    })])])])];
  }
  /**
   * Checks if the values of the fields and checkboxes are different from
   * the ones stored in the database
   *
   * @returns boolean
   */
  ;

  _proto.changed = function changed() {
    var _this2 = this;

    var fieldsCheck = this.fields.some(function (key) {
      return _this2.values[key]() !== flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.data.settings[_this2.addPrefix(key)];
    });
    var checkboxesCheck = this.checkboxes.some(function (key) {
      return _this2.values[key]() !== (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.data.settings[_this2.addPrefix(key)] == '1');
    });
    return fieldsCheck || checkboxesCheck;
  }
  /**
   * Saves the settings to the database and redraw the page
   *
   * @param e
   */
  ;

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    // prevent the usual form submit behaviour
    e.preventDefault(); // if the page is already saving, do nothing

    if (this.loading) return; // prevents multiple savings

    this.loading = true; // remove previous success popup

    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.dismiss(this.successAlert);
    var settings = {}; // gets all the values from the form

    this.fields.forEach(function (key) {
      return settings[_this3.addPrefix(key)] = _this3.values[key]();
    });
    this.checkboxes.forEach(function (key) {
      return settings[_this3.addPrefix(key)] = _this3.values[key]();
    }); // actually saves everything in the database

    flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3___default()(settings).then(function () {
      // on success, show popup
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show(_this3.successAlert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_7___default.a({
        type: 'success',
        children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.admin.basics.saved_message')
      }));
    })["catch"](function () {}).then(function () {
      // return to the initial state and redraw the page
      _this3.loading = false;
      m.redraw();
    });
  }
  /**
   * Adds the prefix 'this.settingsPrefix' at the beginning of 'key'
   *
   * @returns string
   */
  ;

  _proto.addPrefix = function addPrefix(key) {
    return this.settingsPrefix + key;
  };

  return MathRenSettingsPage;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



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
/* harmony import */ var _addSettingsPane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addSettingsPane */ "./src/admin/addSettingsPane.js");

 // initialize settings modal

flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('the-turk-mathren', function (app) {
  // add the admin pane
  Object(_addSettingsPane__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/AdminLinkButton":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/AdminLinkButton']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminLinkButton'];

/***/ }),

/***/ "flarum/components/AdminNav":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/AdminNav']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminNav'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Select":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Select']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Select'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

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