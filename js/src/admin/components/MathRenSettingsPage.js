import app from 'flarum/common/app';
import Alert from 'flarum/common/components/Alert';
import Button from 'flarum/common/components/Button';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import saveSettings from 'flarum/common/utils/saveSettings';
import Select from 'flarum/common/components/Select';
import Stream from 'flarum/common/utils/Stream';
import Switch from 'flarum/common/components/Switch';

/* Regex constants those will be used to validate some fields */
// bbcode delimiters
const bbcode_regex = /^\[([a-zA-Z_-]+)\]%e%\[\/\1\](?:,\s*\[([a-zA-Z_-]+)\]%e%\[\/\2\])*$/;
// comma seperated lists, except the bbcode delimiters
const comma_regex = /^[a-zA-Z_-]+(?:,\s*[a-zA-Z_-]+)*$/;
// hexadecimal colors
const hex_regex = /^#[0-9a-f]{3}([0-9a-f]{3})?$/i;
// floating point numbers
const float_regex = /^[0-9]*[.]?[0-9]+$/;
// zero or positive integer values
const int_regex = /^\+?(0|[1-9]\d*)$/;

/* Other constants those will be used through this page */
const settingsPrefix = 'the-turk-mathren.';
const localePrefix = 'the-turk-mathren.admin.settings.';

export default class MathRenSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.settings = {};
    this.loading = false;

    // select options for the output mode
    this.outputModeOptions = {
      html: 'HTML',
      mathml: 'MathML',
      htmlAndMathml: 'HTML & MathML',
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
      maxExpand: int_regex,
    };
  }

  /**
   * Show the actual settings page
   *
   * @returns {*}
   */
  content() {
    return [
      m(
        'div',
        {
          className: 'MathRenPage',
        },
        [
          m(
            'div',
            {
              className: 'container',
            },
            [
              m(
                'form',
                {
                  onsubmit: this.onsubmit.bind(this),
                },
                [
                  m('h3', app.translator.trans(localePrefix + 'katexOptionsHeading')),
                  m('hr'),
                  m('.Form-group', [
                    m('label', app.translator.trans(localePrefix + 'delimiters')),
                    m('.helpText', app.translator.trans(localePrefix + 'delimitersHelp')),
                  ]),
                  m('.Form-group', [
                    m(
                      'div',
                      {
                        className: 'helpText',
                      },
                      m('i', {
                        className: 'fas fa-exclamation-circle',
                      }),
                      m('span', app.translator.trans(localePrefix + 'regexInfo'))
                    ),
                  ]),
                  m('.Form-group .flex-container', [
                    m(
                      'div',
                      {
                        className: 'inline--label',
                      },
                      m('.helpText', app.translator.trans(localePrefix + 'blockDelimiters'))
                    ),
                    m(
                      'div',
                      {
                        className: 'inline--input',
                      },
                      m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'blockDelimiters', '[math]%e%[/math]'),
                        placeholder: '[math]%e%[/math]',
                      })
                    ),
                  ]),
                  m('.Form-group .flex-container', [
                    m(
                      'div',
                      {
                        className: 'inline--label',
                      },
                      m('.helpText', app.translator.trans(localePrefix + 'inlineDelimiters'))
                    ),
                    m(
                      'div',
                      {
                        className: 'inline--input',
                      },
                      m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'inlineDelimiters', '[imath]%e%[/imath]'),
                        placeholder: '[imath]%e%[/imath]',
                      })
                    ),
                  ]),
                  m('.Form-group', [
                    m(
                      'div',
                      {
                        className: 'helpText',
                      },
                      m('i', {
                        className: 'fas fa-info-circle',
                      }),
                      m('span', app.translator.trans(localePrefix + 'mainDelimitersInfo'))
                    ),
                  ]),
                  m('.Form-group', [
                    m('label', app.translator.trans(localePrefix + 'ignoringExpressions')),
                    m('.helpText', app.translator.trans(localePrefix + 'ignoringExpressionsHelp')),
                  ]),
                  m('.Form-group', [
                    m(
                      'div',
                      {
                        className: 'helpText',
                      },
                      m('i', {
                        className: 'fas fa-exclamation-circle',
                      }),
                      m('span', app.translator.trans(localePrefix + 'regexInfo'))
                    ),
                  ]),
                  m('.Form-group .flex-container', [
                    m(
                      'div',
                      {
                        className: 'inline--label',
                      },
                      m('.helpText', app.translator.trans(localePrefix + 'decisiveKeywords'))
                    ),
                    m(
                      'div',
                      {
                        className: 'inline--input',
                      },
                      m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'decisiveKeywords', 'ignore'),
                        placeholder: 'ignore',
                      })
                    ),
                  ]),
                  m('.Form-group', [
                    m(
                      'div',
                      {
                        className: 'helpText',
                      },
                      m('i', {
                        className: 'fas fa-question-circle',
                      }),
                      m('span', app.translator.trans(localePrefix + 'decisiveKeywordsHelp'))
                    ),
                  ]),
                  m('.Form-group .flex-container', [
                    m(
                      'div',
                      {
                        className: 'inline--label',
                      },
                      m('.helpText', app.translator.trans(localePrefix + 'ignoredTags'))
                    ),
                    m(
                      'div',
                      {
                        className: 'inline--input',
                      },
                      m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'ignoredTags', ''),
                        placeholder: 'script,noscript,style,textarea,pre,code',
                      })
                    ),
                  ]),
                  m('.Form-group .flex-container', [
                    m(
                      'div',
                      {
                        className: 'inline--label',
                      },
                      m('.helpText', app.translator.trans(localePrefix + 'ignoredClasses'))
                    ),
                    m(
                      'div',
                      {
                        className: 'inline--input',
                      },
                      m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'ignoredClasses', 'mathren-ignore'),
                        placeholder: 'mathren-ignore',
                      })
                    ),
                  ]),
                  m('.Form-group', [
                    m(
                      'div',
                      {
                        className: 'helpText',
                      },
                      m('i', {
                        className: 'fas fa-info-circle',
                      }),
                      m('span', app.translator.trans(localePrefix + 'ignoredClassesInfo'))
                    ),
                  ]),
                  m('.Form-group', [
                    m('label', app.translator.trans(localePrefix + 'outputMode')),
                    m('.helpText', app.translator.trans(localePrefix + 'outputModeHelp')),
                    m(
                      'div',
                      Select.component({
                        options: this.outputModeOptions,
                        onchange: this.setting(settingsPrefix + 'outputMode'),
                        value: this.setting(settingsPrefix + 'outputMode')() || 'htmlAndMathml',
                      })
                    ),
                  ]),
                  m('.Form-group', [
                    m(
                      'label',
                      Switch.component(
                        {
                          state: this.setting(settingsPrefix + 'enableFleqn', '0')() === '1',
                          onchange: (value) => {
                            this.setting(settingsPrefix + 'enableFleqn')(value ? '1' : '0');
                          },
                        },
                        app.translator.trans(localePrefix + 'enableFleqn')
                      )
                    ),
                  ]),
                  m('.Form-group', [
                    m(
                      'label',
                      Switch.component(
                        {
                          state: this.setting(settingsPrefix + 'enableLeqno', '0')() === '1',
                          onchange: (value) => {
                            this.setting(settingsPrefix + 'enableLeqno')(value ? '1' : '0');
                          },
                        },
                        app.translator.trans(localePrefix + 'enableLeqno')
                      )
                    ),
                  ]),
                  m('.Form-group', [
                    m(
                      'label',
                      Switch.component(
                        {
                          state: this.setting(settingsPrefix + 'enableColorIsTextColor', '0')() === '1',
                          onchange: (value) => {
                            this.setting(settingsPrefix + 'enableColorIsTextColor')(value ? '1' : '0');
                          },
                        },
                        app.translator.trans(localePrefix + 'enableColorIsTextColor')
                      )
                    ),
                  ]),
                  m('.Form-group', [
                    m(
                      'label',
                      Switch.component(
                        {
                          state: this.setting(settingsPrefix + 'enableThrowOnError', '0')() === '1',
                          onchange: (value) => {
                            this.setting(settingsPrefix + 'enableThrowOnError')(value ? '1' : '0');
                          },
                        },
                        app.translator.trans(localePrefix + 'enableThrowOnError')
                      )
                    ),
                  ]),
                  m('.Form-group .flex-container', [
                    m(
                      'div',
                      {
                        className: 'inline--input-color-label',
                      },
                      m('label', app.translator.trans(localePrefix + 'errorColor')),
                      m('.helpText', app.translator.trans(localePrefix + 'errorColorHelp'))
                    ),
                    m(
                      'div',
                      {
                        className: 'inline--input-color',
                      },
                      m('input[type=color].FormControl', {
                        bidi: this.setting(settingsPrefix + 'errorColor', '#cc0000'),
                        disabled: this.setting(settingsPrefix + 'enableThrowOnError')() === '1',
                      })
                    ),
                  ]),
                  m('.Form-group', [
                    m('label', app.translator.trans(localePrefix + 'sizeSettings')),
                    m('.helpText', app.translator.trans(localePrefix + 'sizeSettingsHelp')),
                  ]),
                  m('.Form-group .flex-container', [
                    m(
                      'div',
                      {
                        className: 'inline--label',
                      },
                      m('.helpText', app.translator.trans(localePrefix + 'minRuleThickness'))
                    ),
                    m(
                      'div',
                      {
                        className: 'inline--input',
                      },
                      m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'minRuleThickness', '0.05'),
                        placeholder: '0.05',
                      })
                    ),
                  ]),
                  m('.Form-group .flex-container', [
                    m(
                      'div',
                      {
                        className: 'inline--label',
                      },
                      m('.helpText', app.translator.trans(localePrefix + 'maxSize'))
                    ),
                    m(
                      'div',
                      {
                        className: 'inline--input',
                      },
                      m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'maxSize', '10'),
                        placeholder: '10',
                      })
                    ),
                  ]),
                  m('.Form-group', [
                    m('label', app.translator.trans(localePrefix + 'macros')),
                    m('.helpText', app.translator.trans(localePrefix + 'macrosHelp')),
                    m('textarea.FormControl', {
                      bidi: this.setting(settingsPrefix + 'macros', ''),
                      placeholder: '"\\\\RR": "\\\\mathbb{R}"\n"\\\\NN": "\\\\mathbb{N}"',
                    }),
                  ]),
                  m('.Form-group', [
                    m(
                      'div',
                      {
                        className: 'helpText',
                      },
                      m('i', {
                        className: 'fas fa-exclamation-circle',
                      }),
                      m('span', app.translator.trans(localePrefix + 'syntaxInfo'))
                    ),
                  ]),
                  m('.Form-group .flex-container', [
                    m(
                      'div',
                      {
                        className: 'inline--label',
                      },
                      m('.helpText', app.translator.trans(localePrefix + 'maxExpand'))
                    ),
                    m(
                      'div',
                      {
                        className: 'inline--input',
                      },
                      m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'maxExpand', '1000'),
                        placeholder: '1000',
                      })
                    ),
                  ]),
                  m('.Form-group', [
                    Alert.component(
                      {
                        type: 'success',
                        dismissible: false,
                      },
                      app.translator.trans(localePrefix + 'katexOptionsInfo', {
                        a: <a href="https://katex.org/docs/options.html" target="_blank" />,
                      })
                    ),
                  ]),
                  m('h3', app.translator.trans(localePrefix + 'otherOptionsHeading')),
                  m('hr'),
                  m('.Form-group', [
                    m(
                      'label',
                      Switch.component(
                        {
                          state: this.setting(settingsPrefix + 'enableTextEditorButtons', '1')() === '1',
                          onchange: (value) => {
                            this.setting(settingsPrefix + 'enableTextEditorButtons')(value ? '1' : '0');
                          },
                        },
                        app.translator.trans(localePrefix + 'enableTextEditorButtons')
                      )
                    ),
                  ]),
                  m('.Form-group', [
                    m(
                      'label',
                      Switch.component(
                        {
                          state: this.setting(settingsPrefix + 'enableCopyTeX', '1')() === '1',
                          onchange: (value) => {
                            this.setting(settingsPrefix + 'enableCopyTeX')(value ? '1' : '0');
                          },
                        },
                        app.translator.trans(localePrefix + 'enableCopyTeX')
                      )
                    ),
                  ]),
                  m('.Form-group', [
                    m(
                      'div',
                      {
                        className: 'helpText',
                      },
                      m('i', {
                        className: 'fas fa-info-circle',
                      }),
                      m('span', app.translator.trans(localePrefix + 'mentions'))
                    ),
                  ]),
                  Button.component(
                    {
                      type: 'submit',
                      className: 'Button Button--primary',
                      loading: this.loading,
                      disabled: !this.changed(),
                    },
                    app.translator.trans('core.admin.settings.submit_button')
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
    ];
  }

  setting(key, fallback = '') {
    this.settings[key] = this.settings[key] || Stream(app.data.settings[key] || fallback);

    return this.settings[key];
  }

  dirty() {
    const dirty = {};

    Object.keys(this.settings).forEach((key) => {
      const value = this.settings[key]();

      if (value !== app.data.settings[key]) {
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
  changed() {
    return Object.keys(this.dirty()).length;
  }

  /**
   * Handle form's submit event.
   *
   * @param {Event} e
   */
  onsubmit(e) {
    e.preventDefault();

    if (this.loading) return;

    this.loading = true;
    app.alerts.dismiss(this.alertMessage);

    // validate settings
    if (!this.validate.bind(this, this.validaton_rules)()) {
      this.loading = false;
      m.redraw();
    } else {
      saveSettings(this.dirty())
        .then(() => {
          this.alertMessage = app.alerts.show(Alert, { type: 'success' }, app.translator.trans('core.admin.settings.saved_message'));
        })
        .catch(() => {})
        .then(() => {
          // return to the initial state and redraw the page
          this.loading = false;
          m.redraw();
        });
    }
  }

  /**
   * Validate fields.
   *
   * @returns {boolean}
   */
  validate(rules) {
    let valid = true;

    Object.keys(rules).every((field) => {
      const value = this.setting(settingsPrefix + field)();

      if (value && !rules[field].test(value)) {
        valid = false;
        this.alertMessage = app.alerts.show(
          Alert,
          { type: 'error' },
          app.translator.trans(localePrefix + 'validation', {
            field_key: app.translator.trans(localePrefix + field),
          })
        );
      }

      return valid;
    });

    return valid;
  }
}
