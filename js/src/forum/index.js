import { extend } from 'flarum/extend';
import app from 'flarum/app';
import CommentPost from 'flarum/components/CommentPost';
import renderMathInElement from '../../dist/auto-render.min';
import addTextEditorButton from './addTextEditorButton';
import addPostQuoteButton from './addPostQuoteButton';
import addCopyListener from './addCopyListener';

app.initializers.add('the-turk-mathren', () => {
  // Add Text Editor buttons
  addTextEditorButton();

  /**
   * Show a Quote button when Post text is selected
   *
   * You may ask, `flarum/mentions` already doing it, why the hell
   * are you duplicating it? Well, I have to run KaTeX's Copy-tex
   * plugin on the selected post and I need to modify its `selectedText` function.
   * It is impossible to modify that function from here because core extensions
   * are not exporting their components properly.
   *
   * @see https://github.com/flarum/core/issues/1933
   **/
  addPostQuoteButton();

  // Hook into global copy handler to modify behavior on `.katex` elements
  addCopyListener();

  var renderMath = function (element) {
    return renderMathInElement(element, app.forum.attribute('mathRenKatexOptions'));
  };

  /* Run KaTeX renderer on every post loading */
  extend(CommentPost.prototype, 'config', function (original, isInitialized) {
    renderMath($('.Post-body', this.element)[0]);
  });

  /**
   * Render the math in preview mode
   * Note: We also have this TextFormatter's Live preview attributes
   *
   * @see https://github.com/s9e/TextFormatter/blob/master/docs/JavaScript/Live_preview_attributes.md
   */
  if (s9e && s9e.TextFormatter) {
    extend(s9e.TextFormatter, 'preview', function (original, preview, element) {
      if (element.matches('.Post *')) renderMath(element);
    });
  }
});
