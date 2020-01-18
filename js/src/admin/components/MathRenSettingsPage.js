import app from 'flarum/app';
import Component from 'flarum/Component';
import saveSettings from 'flarum/utils/saveSettings';
import Button from 'flarum/components/Button';
import Select from 'flarum/components/Select';
import Switch from 'flarum/components/Switch';
import Alert from 'flarum/components/Alert';

export default class MathRenSettingsModal extends Component {
  init() {
    // whether we are saving the settings or not right now
    this.loading = false;

    // the fields we need to watch and to save
    this.fields = [
      // the code tag options
      'blockMathClass',
      'inlineMathClass',
      'wrapperStyle',
      // KaTeX options
      'mainBlockDelimiter',
      'mainInlineDelimiter',
      'aliasBlockDelimiters',
      'aliasInlineDelimiters',
      'decisiveKeywords',
      'ignoredTags',
      'ignoredClasses',
      'errorColor',
      'minRuleThickness',
      'maxSize',
      'macros',
      'maxExpand',
      'outputMode'
    ];

    // the checkboxes we need to watch and to save
    this.checkboxes = [
      // KaTeX options
      'enableFleqn',
      'enableLeqno',
      'enableColorIsTextColor',
      'enableThrowOnError',
      'enableTextEditorButtons'
    ];

    // select options for output mode
    this.outputModeOptions = {
      'html': 'HTML',
      'mathml': 'MathML',
      'htmlAndMathml': 'HTML & MathML'
    };

    // get the saved settings from the database
    const settings = app.data.settings;

    // settings prefix
    // (to be added to every field and checkbox in the setting table)
    this.settingsPrefix = 'the-turk-mathren.';

    // translation prefix
    this.localePrefix = 'the-turk-mathren.admin.settings.';

    // contains default values
    this.values = {};

    // bind the values of the fields and checkboxes
    // to the getter/setter functions
    this.fields.forEach(key =>
      this.values[key] = m.prop(settings[this.addPrefix(key)])
    );
    this.checkboxes.forEach(key => {
      this.values[key] = m.prop(settings[this.addPrefix(key)] === '1');
    });
  }

  /**
   * Show the actual MathRenSettingsPage.
   *
   * @returns {*}
   */
  view() {
    return [
      m('div', {
        className: 'MathRenPage'
      }, [
        m('div', {
          className: 'container'
        }, [
          m('form', {
            onsubmit: this.onsubmit.bind(this)
          }, [
            m('.Form-group', [
              m('iframe', {
                src: 'https://ghbtns.com/github-btn.html?user=the-turk' +
                  '&repo=flarum-mathren&type=watch&count=true&v=2',
                frameborder: '0',
                scrolling: 'no'
              }),
            ]),
            m('h3', app.translator.trans(this.localePrefix + 'wrapperOptionsHeading')),
            m('hr'),
            m('.Form-group', [
              m('label', app.translator.trans(this.localePrefix + 'mathClasses')),
              m('.helpText', app.translator.trans(this.localePrefix + 'mathClassesHelp'))
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'inlineDivLabel'
                },
                m('.helpText', app.translator.trans(this.localePrefix + 'blockMathClass'))
              ),
              m('div', {
                  className: 'inlineDivInput'
                },
                m('input[type=text].FormControl', {
                  value: this.values.blockMathClass() || 'mathren-block',
                  oninput: m.withAttr('value', this.values.blockMathClass)
                }),
              ),
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'inlineDivLabel'
                },
                m('.helpText', app.translator.trans(this.localePrefix + 'inlineMathClass'))
              ),
              m('div', {
                  className: 'inlineDivInput'
                },
                m('input[type=text].FormControl', {
                  value: this.values.inlineMathClass() || 'mathren-inline',
                  oninput: m.withAttr('value', this.values.inlineMathClass)
                }),
              ),
            ]),
            m('.Form-group', [
              m('label', app.translator.trans(this.localePrefix + 'wrapperStyle')),
              m('textarea.FormControl', {
                value: this.values.wrapperStyle() || '',
                placeholder: '.mathren-block { } .mathren-inline { }',
                oninput: m.withAttr('value', this.values.wrapperStyle)
              })
            ]),
            m('h3', app.translator.trans(this.localePrefix + 'katexOptionsHeading')),
            m('hr'),
            m('.Form-group', [
              m('label', app.translator.trans(this.localePrefix + 'delimiters')),
              m('.helpText', app.translator.trans(this.localePrefix + 'delimitersHelp'))
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'inlineDivLabel'
                },
                m('.helpText', app.translator.trans(this.localePrefix + 'mainBlockDelimiter'))
              ),
              m('div', {
                  className: 'inlineDivInput'
                },
                m('input[type=text].FormControl', {
                  value: this.values.mainBlockDelimiter() || '[math]%e%[/math]',
                  placeholder: '[math]%e%[/math]',
                  oninput: m.withAttr('value', this.values.mainBlockDelimiter)
                }),
              ),
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'inlineDivLabel'
                },
                m('.helpText', app.translator.trans(this.localePrefix + 'mainInlineDelimiter'))
              ),
              m('div', {
                  className: 'inlineDivInput'
                },
                m('input[type=text].FormControl', {
                  value: this.values.mainInlineDelimiter() || '[imath]%e%[/imath]',
                  placeholder: '[imath]%e%[/imath]',
                  oninput: m.withAttr('value', this.values.mainInlineDelimiter)
                }),
              ),
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'helpText',
                },
                m('i', {
                  className: 'fas fa-exclamation-circle',
                }),
                m('span', app.translator.trans(this.localePrefix + 'delimiterWarning')),
              ),
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'inlineDivLabel'
                },
                m('.helpText', app.translator.trans(this.localePrefix + 'aliasBlockDelimiters'))
              ),
              m('div', {
                  className: 'inlineDivInput'
                },
                m('input[type=text].FormControl', {
                  value: this.values.aliasBlockDelimiters() || '',
                  placeholder: '[mathren]%e%[/mathren],$$%e%$$,\\[%e%\\]',
                  oninput: m.withAttr('value', this.values.aliasBlockDelimiters)
                }),
              ),
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'inlineDivLabel'
                },
                m('.helpText', app.translator.trans(this.localePrefix + 'aliasInlineDelimiters'))
              ),
              m('div', {
                  className: 'inlineDivInput'
                },
                m('input[type=text].FormControl', {
                  value: this.values.aliasInlineDelimiters() || '',
                  placeholder: '[mathren-inline]%e%[/mathren-inline],\\(%e%\\)',
                  oninput: m.withAttr('value', this.values.aliasInlineDelimiters)
                }),
              ),
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'helpText',
                },
                m('i', {
                  className: 'fas fa-question-circle',
                }),
                m('span', app.translator.trans(this.localePrefix + 'aliasDelimitersHelp')),
              ),
            ]),
            m('.Form-group', [
              m('label', app.translator.trans(this.localePrefix + 'ignoringExpressions')),
              m('.helpText', app.translator.trans(this.localePrefix + 'ignoringExpressionsHelp'))
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'inlineDivLabel'
                },
                m('.helpText', app.translator.trans(this.localePrefix + 'decisiveKeywords'))
              ),
              m('div', {
                  className: 'inlineDivInput'
                },
                m('input[type=text].FormControl', {
                  value: this.values.decisiveKeywords() || 'ignore',
                  placeholder: 'ignore',
                  oninput: m.withAttr('value', this.values.decisiveKeywords)
                }),
              ),
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'helpText',
                },
                m('i', {
                  className: 'fas fa-exclamation-circle',
                }),
                m('span', app.translator.trans(this.localePrefix + 'decisiveKeywordsWarning')),
              ),
              m('div', {
                  className: 'helpText',
                },
                m('i', {
                  className: 'fas fa-info-circle',
                }),
                m('span', app.translator.trans(this.localePrefix + 'decisiveKeywordsInfo')),
              ),
              m('div', {
                  className: 'helpText',
                },
                m('i', {
                  className: 'fas fa-question-circle',
                }),
                m('span', app.translator.trans(this.localePrefix + 'decisiveKeywordsHelp')),
              ),
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'inlineDivLabel'
                },
                m('.helpText', app.translator.trans(this.localePrefix + 'ignoredTags'))
              ),
              m('div', {
                  className: 'inlineDivInput'
                },
                m('input[type=text].FormControl', {
                  value: this.values.ignoredTags() || '',
                  placeholder: 'script,noscript,style,textarea,pre,code',
                  oninput: m.withAttr('value', this.values.ignoredTags)
                }),
              ),
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'inlineDivLabel'
                },
                m('.helpText', app.translator.trans(this.localePrefix + 'ignoredClasses'))
              ),
              m('div', {
                  className: 'inlineDivInput'
                },
                m('input[type=text].FormControl', {
                  value: this.values.ignoredClasses() || 'mathren-ignore',
                  placeholder: 'mathren-ignore',
                  oninput: m.withAttr('value', this.values.ignoredClasses)
                }),
              ),
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'helpText',
                },
                m('i', {
                  className: 'fas fa-info-circle',
                }),
                m('span', app.translator.trans(this.localePrefix + 'ignoredClassesInfo')),
              ),
            ]),
            m('.Form-group', [
              m('label', app.translator.trans(this.localePrefix + 'outputMode')),
              m('.helpText', app.translator.trans(this.localePrefix + 'outputModeHelp')),
              m('div', Select.component({
                options: this.outputModeOptions,
                onchange: this.values.outputMode,
                value: this.values.outputMode() || 'htmlAndMathml'
              })),
            ]),
            m('.Form-group', [
              m('label', Switch.component({
                state: this.values.enableFleqn(),
                children: app.translator.trans(this.localePrefix + 'enableFleqn'),
                onchange: this.values.enableFleqn
              })),
            ]),
            m('.Form-group', [
              m('label', Switch.component({
                state: this.values.enableLeqno(),
                children: app.translator.trans(this.localePrefix + 'enableLeqno'),
                onchange: this.values.enableLeqno
              })),
            ]),
            m('.Form-group', [
              m('label', Switch.component({
                state: this.values.enableColorIsTextColor(),
                children: app.translator.trans(this.localePrefix + 'enableColorIsTextColor'),
                onchange: this.values.enableColorIsTextColor
              })),
            ]),
            m('.Form-group', [
              m('label', Switch.component({
                state: this.values.enableThrowOnError(),
                children: app.translator.trans(this.localePrefix + 'enableThrowOnError'),
                onchange: this.values.enableThrowOnError
              })),
            ]),
            m('.Form-group', [
              m('label', app.translator.trans(this.localePrefix + 'errorColor')),
              m('.helpText', app.translator.trans(this.localePrefix + 'errorColorHelp')),
              m('input[type=color].FormControl', {
                value: this.values.errorColor() || '#cc0000',
                oninput: m.withAttr('value', this.values.errorColor),
                disabled: this.values.enableThrowOnError()
              })
            ]),
            m('.Form-group', [
              m('label', app.translator.trans(this.localePrefix + 'sizeSettings')),
              m('.helpText', app.translator.trans(this.localePrefix + 'sizeSettingsHelp'))
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'inlineDivLabel'
                },
                m('.helpText', app.translator.trans(this.localePrefix + 'minRuleThickness'))
              ),
              m('div', {
                  className: 'inlineDivInput'
                },
                m('input[type=text].FormControl', {
                  value: this.values.minRuleThickness() || '0.05',
                  placeholder: '0.05',
                  oninput: m.withAttr('value', this.values.minRuleThickness)
                }),
              ),
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'inlineDivLabel'
                },
                m('.helpText', app.translator.trans(this.localePrefix + 'maxSize'))
              ),
              m('div', {
                  className: 'inlineDivInput'
                },
                m('input[type=text].FormControl', {
                  value: this.values.maxSize() || '10',
                  placeholder: '10',
                  oninput: m.withAttr('value', this.values.maxSize)
                }),
              ),
            ]),
            m('.Form-group', [
              m('label', app.translator.trans(this.localePrefix + 'macros')),
              m('.helpText', app.translator.trans(this.localePrefix + 'macrosHelp')),
              m('textarea.FormControl', {
                value: this.values.macros() || '',
                placeholder: '\\RR: \\mathbb{R},\n\\NN: \\mathbb{N}',
                oninput: m.withAttr('value', this.values.macros)
              })
            ]),
            m('.Form-group', [
              m('div', {
                  className: 'inlineDivLabel'
                },
                m('.helpText', app.translator.trans(this.localePrefix + 'maxExpand'))
              ),
              m('div', {
                  className: 'inlineDivInput'
                },
                m('input[type=text].FormControl', {
                  value: this.values.maxExpand() || '1000',
                  placeholder: '1000',
                  oninput: m.withAttr('value', this.values.maxExpand)
                }),
              ),
            ]),
            m('.Form-group', [
              Alert.component({
                children: app.translator.trans(this.localePrefix + 'katexOptionsInfo'),
                type: 'success',
                dismissible: false,
              }),
            ]),
            m('h3', app.translator.trans(this.localePrefix + 'otherOptionsHeading')),
            m('hr'),
            m('.Form-group', [
              m('label', Switch.component({
                state: this.values.enableTextEditorButtons(),
                children: app.translator.trans(this.localePrefix + 'enableTextEditorButtons'),
                onchange: this.values.enableTextEditorButtons
              })),
            ]),
            Button.component({
              type: 'submit',
              className: 'Button Button--primary',
              children: app.translator.trans('core.admin.basics.submit_button'),
              loading: this.loading,
              disabled: !this.changed()
            }),
          ])
        ]),
      ])
    ];
  }

  /**
   * Checks if the values of the fields and checkboxes are different from
   * the ones stored in the database
   *
   * @returns boolean
   */
  changed() {
    var fieldsCheck = this.fields.some(
      key => this.values[key]() !== app.data.settings[this.addPrefix(key)]);
    var checkboxesCheck = this.checkboxes.some(
      key => this.values[key]() !== (app.data.settings[this.addPrefix(key)] == '1'));
    return fieldsCheck || checkboxesCheck
  }

  /**
   * Saves the settings to the database and redraw the page
   *
   * @param e
   */
  onsubmit(e) {
    // prevent the usual form submit behaviour
    e.preventDefault();

    // if the page is already saving, do nothing
    if (this.loading) return;

    // prevents multiple savings
    this.loading = true;

    // remove previous success popup
    app.alerts.dismiss(this.successAlert);

    const settings = {};

    // gets all the values from the form
    this.fields.forEach(key => settings[this.addPrefix(key)] = this.values[key]());
    this.checkboxes.forEach(key => settings[this.addPrefix(key)] = this.values[key]());

    // actually saves everything in the database
    saveSettings(settings)
      .then(() => {
        // on success, show popup
        app.alerts.show(this.successAlert = new Alert({
          type: 'success',
          children: app.translator.trans('core.admin.basics.saved_message')
        }));
      })
      .catch(() => {})
      .then(() => {
        // return to the initial state and redraw the page
        this.loading = false;
        m.redraw();
      });
  }

  /**
   * Adds the prefix 'this.settingsPrefix' at the beginning of 'key'
   *
   * @returns string
   */
  addPrefix(key) {
    return this.settingsPrefix + key;
  }
}
