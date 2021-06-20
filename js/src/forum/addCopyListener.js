/**
 * Copied & modified from:
 * https://github.com/KaTeX/KaTeX/blob/master/contrib/copy-tex/copy-tex.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2020 Khan Academy and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { extend } from 'flarum/common/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';
import katexReplaceWithTex from './utils/katex2tex';
import copyDelimiters from './utils/copyDelimiters';

export default function addCopyListener() {
  extend(DiscussionPage.prototype, 'oncreate', function () {
    if (!app.forum.attribute('mathRenEnableCopyTeX')) return;

    const delimiters = {
      inline: app.forum.attribute('mathRenMainInlineDelimiter'),
      block: app.forum.attribute('mathRenMainBlockDelimiter'),
    };

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
