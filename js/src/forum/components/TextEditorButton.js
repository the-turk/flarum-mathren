import app from 'flarum/common/app';
import Component from 'flarum/common/Component';
import Dropdown from 'flarum/common/components/Dropdown';
import Button from 'flarum/common/components/Button';
import ItemList from 'flarum/common/utils/ItemList';
import icon from 'flarum/common/helpers/icon';

const localePrefix = 'the-turk-mathren.forum.textEditor.';

export default class extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.delimiters = {
      inline: app.forum.attribute('mathRenMainInlineDelimiter'),
      block: app.forum.attribute('mathRenMainBlockDelimiter'),
    };
  }

  oncreate(vnode) {
    super.oncreate(vnode);
  }

  view() {
    return Dropdown.component(
      {
        className: 'MathRenDropdown',
        buttonClassName: 'Button Button--flat',
        label: icon('fas fa-square-root-alt'),
      },
      this.items().toArray()
    );
  }

  /**
   * Build an item list for the contents of the dropdown menu.
   *
   * @return {ItemList}
   */
  items() {
    const items = new ItemList();

    items.add(
      'mathBlock',
      Button.component(
        {
          icon: 'fas fa-vector-square',
          onclick: () => {
            // opening tag (left delimiter)
            const leftDelim = this.delimiters.block['left'];
            // closing tag (right delimiter)
            const rightDelim = this.delimiters.block['right'];

            this.wrapSelection(leftDelim, rightDelim);
          },
        },
        app.translator.trans(localePrefix + 'blockExpression')
      ),
      50
    );

    items.add(
      'mathInline',
      Button.component(
        {
          icon: 'fas fa-grip-lines',
          onclick: () => {
            // opening tag (left delimiter)
            const leftDelim = this.delimiters.inline['left'];
            // closing tag (right delimiter)
            const rightDelim = this.delimiters.inline['right'];

            this.wrapSelection(leftDelim, rightDelim);
          },
        },
        app.translator.trans(localePrefix + 'inlineExpression')
      ),
      0
    );

    return items;
  }

  /**
   * Wrap the current selection with BBCode tags
   * If there's no selection, put them around the cursor
   *
   * @param string leftDelim
   * @param string rightDelim
   */
  wrapSelection(leftDelim, rightDelim) {
    const selectionRange = this.attrs.textEditor.getSelectionRange();

    if (selectionRange[0] != selectionRange[1]) {
      this.attrs.textEditor.insertAt(selectionRange[0], leftDelim);
      this.attrs.textEditor.insertAt(selectionRange[1] + leftDelim.length, rightDelim);
    } else {
      this.attrs.textEditor.replaceBeforeCursor(selectionRange[0], leftDelim + rightDelim);
      this.attrs.textEditor.moveCursorTo(selectionRange[0] + leftDelim.length);
    }
  }
}
