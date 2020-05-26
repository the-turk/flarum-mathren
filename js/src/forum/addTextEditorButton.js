import { extend } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';
import TextEditorButton from './components/TextEditorButton';

export default function addTextEditorButton() {
  extend(TextEditor.prototype, 'toolbarItems', function(items) {
    if (app.forum.attribute('mathRenEnableTextEditorButtons') === true) {
      const mathButton = new TextEditorButton({
        textEditor: this,
      });

      items.add('the-turk-mathren', mathButton);
    }
  });
}
