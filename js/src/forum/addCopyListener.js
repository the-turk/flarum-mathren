/*
 * This file is part of MathRen.
 *
 * Original Copyright Khan Academy. Licensed under the MIT License.
 * See license text at https://github.com/KaTeX/KaTeX/blob/master/LICENSE.
 */

import { extend } from 'flarum/common/extend';
import DiscussionPage from 'flarum/common/components/DiscussionPage';

import copyDelimiters from './utils/katex/copyDelimiters';
import katexReplaceWithTex from './utils/katex/katex2tex';
import getPrimaryDelimiters from './utils/katex/getPrimaryDelimiters';

export default function addCopyListener() {
  extend(DiscussionPage.prototype, 'oncreate', function () {
    if (!app.forum.attribute('mathren.enable_copy_tex')) return;

    const delimiters = getPrimaryDelimiters.bind(this, app.forum)();

    // Global copy handler to modify behavior on .katex elements.
    document.addEventListener('copy', function (event) {
      const selection = window.getSelection();

      if (selection.isCollapsed) {
        return; // default action OK if selection is empty
      }

      const fragment = selection.getRangeAt(0).cloneContents();

      if (!fragment.querySelector('.katex-mathml')) {
        return; // default action OK if no .katex-mathml elements
      }

      // Preserve usual HTML copy/paste behavior.
      const html = [];

      for (let i = 0; i < fragment.childNodes.length; i++) {
        html.push(fragment.childNodes[i].outerHTML);
      }

      event.clipboardData.setData('text/html', html.join(''));

      // Rewrite plain-text version.
      event.clipboardData.setData('text/plain', katexReplaceWithTex(fragment, copyDelimiters(delimiters)).textContent);

      // Prevent normal copy handling.
      event.preventDefault();
    });
  });
}
