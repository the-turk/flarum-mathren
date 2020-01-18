# MathRen for Flarum

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/the-turk/flarum-mathren/blob/master/LICENSE) [![Latest Stable Version](https://img.shields.io/packagist/v/the-turk/flarum-mathren.svg)](https://packagist.org/packages/the-turk/flarum-mathren) [![Total Downloads](https://img.shields.io/packagist/dt/the-turk/flarum-mathren.svg)](https://packagist.org/packages/the-turk/flarum-mathren)

An extension that handles TeX math rendering for your [Flarum](https://github.com/flarum) forum.

![Screenshot](https://i.ibb.co/whsx4Yf/math-Ren-Post.png)

[Click to view settings screenshot](https://i.ibb.co/3hVCKz0/math-Ren-Settings-Page.png)

## Features

- Based on [KaTeX](https://github.com/KaTeX/KaTeX) (the fastest math typesetting library on the web).
- Display expressions as an inline or a block element.
- Compatible with Markdown and BBCode.
- Almost fully customizable.
- Fully self-hosted.

## Installation

Use [Bazaar](https://discuss.flarum.org/d/5151) or install manually:

```bash
composer require the-turk/flarum-mathren
```

## Updating

```bash
composer update the-turk/flarum-mathren
php flarum cache:clear
```

## Usage

Enable the extension.

#### Delimiters
You can use unlimited set of delimiters through this extension. But choose them wisely. LaTeX originally uses `$…$` for inline delimiters, but it ruins the display of normal `$` in text as expected in forum environment. However, MathRen uses `[math]...[/math]` for block and `[imath]...[/imath]` for inline delimiters by default (could be changed from the settings page) and has nothing to do with special characters.

You will see two new definitions including **Main BBCode delimiter** and **Alias delimiters** on the settings page. Since we can't use Regex for a simple find and replace operation with obvious reasons (See more on [here](https://github.com/Khan/perseus/blob/master/src/perseus-markdown.jsx)), additional delimiters are meant to be **alias** for _main BBCode delimiters_. If you have special delimiters (like `$$`) in your alias delimiters list, MathRen will scan the whole post for additional (alias) delimiters when saving a post and will try to replace them with main BBCode delimiters. This may cause longer waiting time when saving a post. You may want to use additional BBCode delimiters instead of special ones to prevent this action though. Because additional BBCode delimiters won't be changed with main BBCode delimiters and will stay as it is in the abscence of special delimiters in alias delimiters list.

#### Block Expressions

Wrap your TeX code with `[math]` and `[/math]` or your custom delimiters.

```
[math]\int_{-\infty}^\infty\hat\xi\,e^{2\pi i\xi x}\,d\xi[/math]
```

Block expressions will be wrapped with `<span class="mathren-block">...</span>` by default.

#### Inline Expressions

Wrap your TeX code with `[imath]` and `[/imath]` or your custom delimiters.

```
Lorem ipsum dolor [imath]\varDelta = b^2-4ac[/imath] sit amet.
```

Inline expressions will be wrapped with `<span class="mathren-inline">...</span>` by default.

#### Ignoring Expressions

If you're willing to show the TeX code with delimiters,  there are two options:

1. Wrap your expression with \`backticks\` or `code` tag.
  + You must set it as an ignored tag from the settings page.
2. Use a decisive keyword with your expressions.
  + The keyword is `ignore` by default. But you can change it or assign multiple keywords from the settings page. You must write one of these keywords next to the _special_ right delimiter (i.e. `$$...$${keyword}`, `\(...\){keyword}`) with curly brackets or inside a BBCode (i.e. `[math=keyword]...[/math]`). Note that `[math]%e%[/math]{keyword}` is an example of invalid usage.

These expressions won't be rendered:

```
`[math]\int_{-\infty}^\infty\hat\xi\,e^{2\pi i\xi x}\,d\xi[/math]`
[math=ignore]\int_{-\infty}^\infty\hat\xi\,e^{2\pi i\xi x}\,d\xi[/math]
[imath=ignore]\varDelta = b^2-4ac[/imath]
$$\int_{-\infty}^\infty\hat\xi\,e^{2\pi i\xi x}\,d\xi$${ignore}
\[\int_{-\infty}^\infty\hat\xi\,e^{2\pi i\xi x}\,d\xi\]{ignore}
\(\varDelta = b^2-4ac\){ignore}
```

Ignored expressions will be wrapped with `<span class="mathren-ignore">...</span>` by default if you choose the second option.

## Links

- [Flarum Discuss post](https://discuss.flarum.org/d/22439-mathren-tex-math-rendering)
- [Source code on GitHub](https://github.com/the-turk/flarum-mathren)
- [Changelog](https://github.com/the-turk/flarum-mathren/blob/master/CHANGELOG.md)
- [Report an issue](https://github.com/the-turk/flarum-mathren/issues)
- [Download via Packagist](https://packagist.org/packages/the-turk/flarum-mathren)

_English is not my mother tongue, i'll appreciate it if you correct my translations._
