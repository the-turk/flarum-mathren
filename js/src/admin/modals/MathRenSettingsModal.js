import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';
import Select from 'flarum/components/Select';
import Switch from 'flarum/components/Switch';
import Alert from 'flarum/components/Alert';
import saveSettings from 'flarum/utils/saveSettings';

// just to make things easier
const settingsPrefix = 'the-turk-mathren.';
const translationPrefix = 'the-turk-mathren.admin.settings.';

export default class MathRenSettingsModal extends SettingsModal {	
    title() {
        return app.translator.trans(translationPrefix + 'title');
    }

	/**
    * Build modal form.
    *
    * @returns {*}
    */
    form() {
		return [
			m('h3', app.translator.trans(translationPrefix + 'codeOptionsHeading')),
			m('hr'),
			m('.Form-group', [
				m('label', Switch.component({
					state: this.setting(settingsPrefix + 'enableCode', '1')() === '1',
					children: app.translator.trans(translationPrefix + 'enableCode'),
					onchange: value => {
						this.setting(settingsPrefix + 'enableCode')(value ? '1' : '0');
                    }
				})),
				m('.helpText', app.translator.trans(translationPrefix + 'enableCodeHelp')),
			]),
			m('.Form-group', [
				Alert.component({
					children: app.translator.trans(translationPrefix + 'enableCodeWarning'),
					dismissible: false,
				}),
			]),
			(this.setting(settingsPrefix + 'enableCode')() === '1' ? [
				m('.Form-group', [
					m('label', app.translator.trans(translationPrefix + 'codeClasses')),
					m('.helpText', app.translator.trans(translationPrefix + 'codeClassesHelp'))
				]),
				m('.Form-group', [
					m('div', { style: 'display:inline-block;vertical-align:middle;width:35%;' },
						m('.helpText', app.translator.trans(translationPrefix + 'codeClass'))
					),
					m('div', { style: 'display:inline-block;vertical-align:middle;width:63%;margin-left:2%;' },
						m('input[type=text].FormControl', {
							bidi: this.setting(settingsPrefix + 'codeClass', 'mathren-code'),
							placeholder: 'mathren-code'
						}),
					),
				]),
				m('.Form-group', [
					m('div', { style: 'display:inline-block;vertical-align:middle;width:35%;' },
						m('.helpText', app.translator.trans(translationPrefix + 'inlineCodeClass'))
					),
					m('div', { style: 'display:inline-block;vertical-align:middle;width:63%;margin-left:2%;' },
						m('input[type=text].FormControl', {
							bidi: this.setting(settingsPrefix + 'inlineCodeClass', 'mathren-inline-code'),
							placeholder: 'mathren-inline-code'
						}),
					),
				]),
				m('.Form-group', [
					m('label', app.translator.trans(translationPrefix + 'codeStyle')),
					m('textarea.FormControl', {
						bidi: this.setting(settingsPrefix + 'codeStyle', '.mathren-code { }\n.mathren-inline-code { }'),
						placeholder: '.mathren-code { }\n.mathren-inline-code { }'
					})
				]),
			] : null),
			m('h3', app.translator.trans(translationPrefix + 'katexOptionsHeading')),
			m('hr'),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'ignoredTags')),
				m('.helpText', app.translator.trans(translationPrefix + 'ignoredTagsHelp')),
				m('input[type=text].FormControl', {
					bidi: this.setting(settingsPrefix + 'ignoredTags'),
					placeholder: 'script,noscript,style,textarea,pre'
				})
			]),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'ignoredClasses')),
				m('.helpText', app.translator.trans(translationPrefix + 'ignoredClassesHelp')),
				m('input[type=text].FormControl', {
					bidi: this.setting(settingsPrefix + 'ignoredClasses', 'mathren-code-ignore,mathren-inline-code-ignore'),
					placeholder: 'mathren-code-ignore,mathren-inline-code-ignore'
				})
			]),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'outputMode')),
				m('.helpText', app.translator.trans(translationPrefix + 'outputModeHelp')),
				m('div', Select.component({
					options: {
					  html: 'HTML',
					  mathml: 'MathML',
					  htmlAndMathml: 'HTML & MathML'
					},
					onchange: this.setting(settingsPrefix + 'outputMode'),
					value: this.setting(settingsPrefix + 'outputMode')() || this.setting(settingsPrefix + 'outputMode')('htmlAndMathml')
				})),
			]),
			m('.Form-group', [
				m('label', Switch.component({
					state: this.setting(settingsPrefix + 'enableFleqn', '0')() === '1',
					children: app.translator.trans(translationPrefix + 'enableFleqn'),
					onchange: value => {
						this.setting(settingsPrefix + 'enableFleqn')(value ? '1' : '0');
                    }
				})),
			]),
			m('.Form-group', [
				m('label', Switch.component({
					state: this.setting(settingsPrefix + 'enableLeqno', '0')() === '1',
					children: app.translator.trans(translationPrefix + 'enableLeqno'),
					onchange: value => {
						this.setting(settingsPrefix + 'enableLeqno')(value ? '1' : '0');
                    }
				})),
			]),
			m('.Form-group', [
				m('label', Switch.component({
					state: this.setting(settingsPrefix + 'enableThrowOnError', '0')() === '1',
					children: app.translator.trans(translationPrefix + 'enableThrowOnError'),
					onchange: value => {
						this.setting(settingsPrefix + 'enableThrowOnError')(value ? '1' : '0');
                    }
				})),
			]),
			(this.setting(settingsPrefix + 'enableThrowOnError')() === '0' ? [
				m('.Form-group', [
					m('label', app.translator.trans(translationPrefix + 'errorColor')),
					m('.helpText', app.translator.trans(translationPrefix + 'errorColorHelp')),
					m('input[type=color].FormControl', {
						bidi: this.setting(settingsPrefix + 'errorColor', '#cc0000')
					})
				]),
			] : null),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'sizeSettings')),
				m('.helpText', app.translator.trans(translationPrefix + 'sizeSettingsHelp'))
			]),
			m('.Form-group', [
				m('div', { style: 'display:inline-block;vertical-align:middle;width:35%;' },
					m('.helpText', app.translator.trans(translationPrefix + 'minRuleThickness'))
				),
				m('div', { style: 'display:inline-block;vertical-align:middle;width:63%;margin-left:2%;' },
					m('input[type=text].FormControl', {
						bidi: this.setting(settingsPrefix + 'minRuleThickness', '0.05'),
						placeholder: '0.05'
					}),
				),
			]),
			m('.Form-group', [
				m('div', { style: 'display:inline-block;vertical-align:middle;width:35%;' },
					m('.helpText', app.translator.trans(translationPrefix + 'maxSize'))
				),
				m('div', { style: 'display:inline-block;vertical-align:middle;width:63%;margin-left:2%;' },
					m('input[type=text].FormControl', {
						bidi: this.setting(settingsPrefix + 'maxSize', '10'),
						placeholder: '10'
					}),
				),
			]),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'macros')),
				m('.helpText', app.translator.trans(translationPrefix + 'macrosHelp')),
				m('textarea.FormControl', {
					bidi: this.setting(settingsPrefix + 'macros'),
					placeholder: '\\RR: \\mathbb{R},\n\\NN: \\mathbb{N}'
				})
			]),
			m('.Form-group', [
				m('div', { style: 'display:inline-block;vertical-align:middle;width:35%;' },
					m('.helpText', app.translator.trans(translationPrefix + 'maxExpand'))
				),
				m('div', { style: 'display:inline-block;vertical-align:middle;width:63%;margin-left:2%;' },
					m('input[type=text].FormControl', {
						bidi: this.setting(settingsPrefix + 'maxExpand', '1000'),
						placeholder: '1000'
					}),
				),
			]),
			m('.Form-group', [
				Alert.component({
					children: app.translator.trans(translationPrefix + 'katexOptionsInfo'),
					type: 'success',
					dismissible: false,
				}),
			]),
        ];
    }
}