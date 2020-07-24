import { extend } from 'flarum/extend';
import app from 'flarum/app';
import CommentPost from 'flarum/components/CommentPost';
import addTextEditorButton from './addTextEditorButton';
import addPostQuoteButton from './addPostQuoteButton';
import addCopyListener from './addCopyListener';

const ext = 'the-turk-mathren';

app.initializers.add(ext, () => {
  let whenLoaded = {};
  let hasLoaded = false;
  let isLoading = false;

  const load = () => {
    isLoading = true;
    const katexFolder = app.forum.attribute('baseUrl') + '/assets/extensions/' + ext + '/katex/dist';

    $.getScript(katexFolder + '/katex.min.js', () => {
      $.getScript(katexFolder + '/contrib/auto-render.min.js', () => {
        for (const id in whenLoaded) {
          whenLoaded[id]();
        }

        whenLoaded = {};
        isLoading = false;
        hasLoaded = true;
      });
    });
  };

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

  var renderMath = function (element, id) {
    const render = () => renderMathInElement(element, app.forum.attribute('mathRenKatexOptions'));

    if (!hasLoaded) {
      whenLoaded[id] = render;

      if (isLoading) return;

      load();
    } else {
      render();
    }
  };

  /* Run KaTeX renderer on every post loading */
  extend(CommentPost.prototype, 'config', function (original, isInitialized) {
    if (!isInitialized) return;
    renderMath($('.Post-body', this.element)[0], this.props.post.id());
  });

  /**
   * Render the math in preview mode
   * Note: We also have this TextFormatter's Live preview attributes
   *
   * @see https://github.com/s9e/TextFormatter/blob/master/docs/JavaScript/Live_preview_attributes.md
   */
  if (s9e && s9e.TextFormatter) {
    extend(s9e.TextFormatter, 'preview', function (original, preview, element) {
      if (element.matches('.Post *')) renderMath(element, 0);
    });
  }
});
