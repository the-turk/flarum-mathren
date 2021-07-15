/*
 * This file is part of MathRen.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import app from 'flarum/common/app';

import Button from 'flarum/common/components/Button';
import Component from 'flarum/common/Component';
import Dropdown from 'flarum/common/components/Dropdown';
import ItemList from 'flarum/common/utils/ItemList';
import icon from 'flarum/common/helpers/icon';

import getPrimaryDelimiters from '../utils/katex/getPrimaryDelimiters';
import getFlarumComposers from '../utils/getFlarumComposers';

export default class TextEditorButton extends Component {
  view() {
    return Dropdown.component(
      {
        className: 'MathRen-buttonsDropdown',
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
      'mathren-blockButton',
      Button.component(
        {
          icon: 'fas fa-vector-square',
          onclick: () => this.wrapSelection(true),
        },
        app.translator.trans('the-turk-mathren.forum.composer.block_expression')
      ),
      50
    );

    items.add(
      'mathren-inlineButton',
      Button.component(
        {
          icon: 'fas fa-grip-lines',
          onclick: () => this.wrapSelection(),
        },
        app.translator.trans('the-turk-mathren.forum.composer.inline_expression')
      ),
      0
    );

    return items;
  }

  /**
   * Wrap the current selection with BBCode tags.
   * If there's no selection, put them around the cursor.
   *
   * @param displayMode Whether this button is used for block or inline expressions.
   */
  wrapSelection(displayMode = false) {
    const composerClass = app.composer.body.componentClass;

    // Get primary delimiters based on the `aliases_as_primary` setting.
    // If this isn't a native Flarum composer (i.e. it created by an extension),
    // then we will use BBCode delimiters no matter what because we're
    // replacing alias delimiters on the fly. This causing wrong cursor location.
    this.delimiters = getPrimaryDelimiters.bind(this, app.forum, getFlarumComposers().indexOf(composerClass) === -1)();

    // opening tag (left delimiter)
    const leftDelim = displayMode ? this.delimiters.block['left'] : this.delimiters.inline['left'];

    // closing tag (right delimiter)
    const rightDelim = displayMode ? this.delimiters.block['right'] : this.delimiters.inline['right'];

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
