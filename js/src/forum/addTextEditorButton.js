import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/components/TextEditor';
import TextEditorButton from './components/TextEditorButton';

export default function addTextEditorButton() {
  extend(TextEditor.prototype, 'toolbarItems', function (items) {
    if (app.forum.attribute('mathRenEnableTextEditorButtons') === true) {
      items.add('the-turk-mathren', <TextEditorButton textEditor={this.attrs.composer.editor} />);
    }
  });
}