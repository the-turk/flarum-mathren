### 0.3.1
- **Fix** wrong selection range after adding BBCodes via composer buttons.
- **Fix** it was rendering the same post x2 times for no reason. 🤦‍♂️
- **Fix** wrong default value for "Allow copying the source of KaTeX-rendered elements" option.
- Optimize page load time.
    + Now it loads scripts only when it is necessary. Huge thanks to @datitisev
- Switch to CDN.
- **Update** KaTeX to v0.12.0 (see their [changelog](https://github.com/KaTeX/KaTeX/blob/master/CHANGELOG.md)).
- Require `flarum/mentions` to make the quote button work.
- Run prettier for all JS files.

### 0.3.0
- **Drop** special delimiters support (it is BBCodes-only now).
    + Thus, it should work faster from `0.2.x`
    + I'll continue looking for better solutions to use them.
- **Remove** the ability to customize wrappers from the MathRen settings page.
    + Because we can add custom CSS from the Appearance page already.
- **Remove** the ability to change block and inline wrapper classes.
- **Add** live previews.
- **Add** [Copy-tex](https://github.com/KaTeX/KaTeX/tree/master/contrib/copy-tex) plugin.
    + Now you can copy any expression's source to the clipboard. You can even quote it with selection.
    + It's not working flawless though, see their repository for known issues and let's see if we can find unknown ones.
- **Add** some validation for the MathRen settings page.
- **Fix** macros weren't working all the time.
    + Now you have to write them using JavaScript's syntax (e.g. `\name` => `\\name`)

Also the backend has become more clear now, don't hesitate to join me.

### 0.2.7
- **Update** version constraints for Flarum 0.1.0-beta.13.

### 0.2.6
- **Update** version constraints for Flarum 0.1.0-beta.12.

### 0.2.5
- **Add** Ukranian language

### 0.2.4
- **Remove** unnecessary files.
- **Remove** filter definitions.
- **Fix** a typo in settings page component.
- **Fix** linebreaks ruins rendering expressions.

### 0.2.3
- **Fix** (hopefully) all PHP-related errors/warnings/notices.
- **Fix** \\[%e%\\] must come last (if any) in the additional delimiters list.
- **Improve** rendering performance.

### 0.2.2
- **Fix** static methods.

### 0.2.1
- **Fix** syntax error.

### 0.2.0
- **Move** settings to the left pane.
    + It was a long set of options to be shown in a modal.
- **Remove** `<code />` wrapper
    + You don't have to wrap your expressions with `<code />` tag anymore for Markdown or BBCode compability.
- **Add** `<span />` wrapper with customizable class names
    + You still can stylize your expressions.
- **Add** text editor buttons.
    + Disabled by default.
- **Add** customizable delimiters options.
    + Now you can use unlimited set of delimiters through this extension.
- **Add** decisive keywords option to ignore expressions.
- **Add** option for allowing `\color` command (TeX) to take two arguments.
- **Update** README.md

### 0.1.0
- Initial relase.
