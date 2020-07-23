/**
 * Copied & modified from:
 * https://github.com/flarum/mentions/blob/master/js/src/forum/utils/selectedText.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Stichting Flarum (Flarum Foundation)
 * Copyright (c) 2014-2019 Toby Zerner (toby.zerner@gmail.com)
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

import katexReplaceWithTex from './katex2tex';

export default function selectedText(body, copyDelimiters) {
  const selection = window.getSelection();
  if (selection.rangeCount) {
    const range = selection.getRangeAt(0);
    const parent = range.commonAncestorContainer;
    if (body[0] === parent || $.contains(body[0], parent)) {
      let fragment = selection.getRangeAt(0).cloneContents();

      if (fragment.querySelector('.katex-mathml')) {
        fragment = katexReplaceWithTex(fragment, copyDelimiters);
      }

      const clone = $('<div>').append(fragment);

      // Replace emoji images with their shortcode (found in alt attribute)
      clone.find('img.emoji').replaceWith(function () {
        return this.alt;
      });

      // Replace all other images with a Markdown image
      clone.find('img').replaceWith(function () {
        return '![](' + this.src + ')';
      });

      // Replace all links with a Markdown link
      clone.find('a').replaceWith(function () {
        return '[' + this.innerText + '](' + this.href + ')';
      });

      return clone.text();
    }
  }
  return '';
}
