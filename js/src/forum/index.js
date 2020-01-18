import {
  extend
} from 'flarum/extend';
import app from 'flarum/app';
import CommentPost from 'flarum/components/CommentPost';
import renderMathInElement from '../../dist/auto-render.min';
import TextEditor from 'flarum/components/TextEditor';
import MathDropdown from './components/MathDropdown';

app.initializers.add('the-turk-mathren', () => {
  // on every post loading
  extend(CommentPost.prototype, 'config', function() {
    // run KaTeX renderer on the single post body
    // more information on https://katex.org/docs/autorender.html
    renderMathInElement($('.Post-body', this.element)[0], {
      "ignoredTags": app.forum.attribute('mathRenIgnoredTags'),
      "ignoredClasses": app.forum.attribute('mathRenIgnoredClasses'),
      "fleqn": app.forum.attribute('mathRenEnableFleqn'),
      "leqno": app.forum.attribute('mathRenEnableLeqno'),
      "output": app.forum.attribute('mathRenOutputMode'),
      "throwOnError": app.forum.attribute('mathRenEnableThrowOnError'),
      "errorColor": app.forum.attribute('mathRenErrorColor'),
      "minRuleThickness": app.forum.attribute('mathRenMinRuleThickness'),
      "maxSize": app.forum.attribute('mathRenMaxSize'),
      "maxExpand": app.forum.attribute('mathRenMaxExpand'),
      "macros": JSON.parse(app.forum.attribute('mathRenMacros')),
      "delimiters": app.forum.attribute('mathRenDelimiters'),
      "colorIsTextColor": app.forum.attribute('mathRenEnableColorIsTextColor')
    });
  });


  // add text editor buttons
  extend(TextEditor.prototype, 'toolbarItems', function(items) {
    if (app.forum.attribute('mathRenEnableTextEditorButtons') === true) {
      const mathButton = new MathDropdown({
        textEditor: this,
      });

      items.add('the-turk-mathren', mathButton);
    }
  });
});
