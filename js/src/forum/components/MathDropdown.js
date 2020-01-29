import app from 'flarum/app';
import Component from 'flarum/Component';
import Dropdown from 'flarum/components/Dropdown';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import Separator from 'flarum/components/Separator';
import icon from 'flarum/helpers/icon';
import Alert from 'flarum/components/Alert';

export default class extends Component {
  init() {
    this.textEditor = this.props.textEditor;

    // translation prefix
    this.localePrefix = 'the-turk-mathren.forum.textEditor.';

    // main BBCode delimiters
    this.mainBlockDelimiter = app.forum.attribute('mathRenMainBlockDelimiter');
    this.mainInlineDelimiter = app.forum.attribute('mathRenMainInlineDelimiter');
  }

  view() {
    return Dropdown.component({
      className: 'MathRenDropdown',
      buttonClassName: 'Button Button--flat',
      label: icon('fas fa-square-root-alt'),
      children: this.items().toArray()
    });
  }

  /**
   * Build an item list for the contents of the dropdown menu.
   *
   * @return {ItemList}
   */
  items() {
    const items = new ItemList();

    items.add('mathBlock', Button.component({
        icon: 'fas fa-vector-square',
        children: app.translator.trans(this.localePrefix + 'blockExpression'),
        onclick: () => {
          // opening tag (left delimiter)
          const leftDelim = this.mainBlockDelimiter['left'];
          // closing tag (right delimiter)
          const rightDelim = this.mainBlockDelimiter['right'];

          var wrapper = this.wrapSelection(leftDelim, rightDelim);

          this.textEditor.setValue(wrapper.value);
          this.textEditor.setSelectionRange(wrapper.range);
        },
      }),
      50
    );

    items.add('mathInline', Button.component({
        icon: 'fas fa-grip-lines',
        children: app.translator.trans(this.localePrefix + 'inlineExpression'),
        onclick: () => {
          // opening tag (left delimiter)
          const leftDelim = this.mainInlineDelimiter['left'];
          // closing tag (right delimiter)
          const rightDelim = this.mainInlineDelimiter['right'];

          var wrapper = this.wrapSelection(leftDelim, rightDelim);

          this.textEditor.setValue(wrapper.value);
          this.textEditor.setSelectionRange(wrapper.range);
        },
      }),
      0
    );

    return items;
  }

  /**
   * Wrap the current selection with BBCode tags
   * If there's no selection, put them around the cursor
   * Adapted from flagrow/fonts extension
   *
   * @param string leftDelim
   * @param string rightDelim
   * @return object
   */
  wrapSelection(leftDelim, rightDelim) {
    const range = this.textEditor.getSelectionRange();
    const value = this.textEditor.value();

    const before = value.slice(0, range[0]);
    const after = value.slice(range[1]);
    const selected = value.slice(range[0], range[1]);

    return {
      value: before + leftDelim + selected + rightDelim + after,
      range: before.length + leftDelim.length + before.length + rightDelim.length + selected.length
    }
  }
}
