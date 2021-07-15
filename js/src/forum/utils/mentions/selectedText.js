/*
 * This file is part of MathRen.
 *
 * Original Copyright Stichting Flarum (Flarum Foundation), Toby Zerner (toby.zerner@gmail.com).
 * Licensed under the MIT License. See license text at https://github.com/flarum/mentions/blob/master/LICENSE.
 */

import katexReplaceWithTex from '../katex/katex2tex';

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
