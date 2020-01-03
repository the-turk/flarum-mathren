# MathRen for Flarum

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/flagrow/upload/blob/master/LICENSE.md) [![Latest Stable Version](https://img.shields.io/packagist/v/flagrow/upload.svg)](https://packagist.org/packages/flagrow/upload) [![Total Downloads](https://img.shields.io/packagist/dt/flagrow/upload.svg)](https://packagist.org/packages/flagrow/upload)

An extension that handles TeX math rendering for your [Flarum](https://github.com/flarum) forum.

## Features

- Based on [KaTeX](https://github.com/KaTeX/KaTeX) (the fastest math typesetting library on the web).
- Display expressions as an inline or a block element.
- Compatible with _Markdown_ and BBCode.
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

Some extensions such as _Markdown_ may cause unwanted formatting on your mathematical expressions. Hence, please double-check that you have enabled the "Wrap mathematical expressions with <code />" option from the settings modal if you're using such extensions. Everything else is optional.

### Block Expressions

Wrap your TeX code with `[mathren]` and `[/mathren]` delimiters.

```
[mathren]\int_{-\infty}^\infty\hat\xi\,e^{2\pi i\xi x}\,d\xi[/mathren]
```

### Inline Expressions

Wrap your TeX code with `[mathren-inline]` and `[/mathren-inline]` delimiters.

```
Lorem ipsum dolor [mathren-inline]\DELTA = b^2 4ac[/mathren-inline] sit amet.
```

### Ignored Classes

If you're willing to show the TeX code with delimiters, set `{codeClass}-ignore` class as an ignored class from the settings modal and use `[mathren=-ignore]` or `[mathren-inline=-ignore]` delimiters. These delimiters will automatically change into `[mathren]` and `[mathren-inline]` respectively. You must replace `{codeClass}` with the code tag's class name (defaults: `mathren-code` for block and `mathren-inline-code` for inline expressions).

This block expression won't be rendered:

```
[mathren=-ignore]\int_{-\infty}^\infty\hat\xi\,e^{2\pi i\xi x}\,d\xi[/mathren]
```

This inline expression won't be rendered either:

```
[mathren-inline=-ignore]\e = mc^2[/mathren-inline]
```

## Links

- [Flarum Discuss post](https://discuss.flarum.org/d/4154)
- [Source code on GitHub](https://github.com/the-turk/mathren)
- [Changelog](https://github.com/the-turk/mathren/blob/master/CHANGELOG.md)
- [Report an issue](https://github.com/the-turk/mathren/issues)
- [Download via Packagist](https://packagist.org/packages/the-turk/mathren)

_This is my first [Flarum](https://github.com/flarum) extension. So please go easy on me. :blush:_
_English is not my mother tongue, i'll appreciate it if you correct my translations. :no_mouth:_
