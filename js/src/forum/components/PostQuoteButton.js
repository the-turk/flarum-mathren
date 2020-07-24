/**
 * Copied & modified from:
 * https://github.com/flarum/mentions/blob/master/js/src/forum/components/PostQuoteButton.js
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

import Button from 'flarum/components/Button';
import extract from 'flarum/utils/extract';

import reply from '../utils/reply';

export default class PostQuoteButton extends Button {
  view() {
    const post = extract(this.props, 'post');
    const content = extract(this.props, 'content');

    this.props.className = 'Button PostQuoteButton';
    this.props.icon = 'fas fa-quote-left';
    this.props.children = app.translator.trans('the-turk-mathren.forum.quoteButton');
    this.props.onclick = () => {
      this.hide();
      reply(post, content);
    };
    this.props.onmousedown = (e) => e.stopPropagation();

    return super.view();
  }

  config(isInitialized) {
    if (isInitialized) return;

    $(document).on('mousedown', this.hide.bind(this));
  }

  show(left, top) {
    const $this = this.$().show();
    const parentOffset = $this.offsetParent().offset();

    $this.css('left', left - parentOffset.left).css('top', top - parentOffset.top);
  }

  showStart(left, top) {
    const $this = this.$();

    this.show(left, $(window).scrollTop() + top - $this.outerHeight() - 5);
  }

  showEnd(right, bottom) {
    const $this = this.$();

    this.show(right - $this.outerWidth(), $(window).scrollTop() + bottom + 5);
  }

  hide() {
    this.$().hide();
  }
}
