import { extend } from 'flarum/common/extend';
import app from 'flarum/common/app';
import CommentPost from 'flarum/components/CommentPost';
import addTextEditorButton from './addTextEditorButton';
import addPostQuoteButton from './addPostQuoteButton';
import addCopyListener from './addCopyListener';

app.initializers.add('the-turk-mathren', () => {
  let whenLoaded = {};
  let hasLoaded = false;
  let isLoading = false;

  const load = () => {
    isLoading = true;

    $.getScript('//cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.js', () => {
      $.getScript('//cdn.jsdelivr.net/npm/katex@0.13.11/dist/contrib/auto-render.min.js', () => {
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
   * We have to run KaTeX's Copy-tex plugin on the selected post
   * and need to modify `selectedText` function which comes with
   * `flarum/mentions` extension.
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
  extend(CommentPost.prototype, 'onupdate', function () {
    const postId = this.attrs.post.id();

    $.each($('.Post-body', this.element), function (i, p) {
      renderMath(p, postId + '_' + i);
    });
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
