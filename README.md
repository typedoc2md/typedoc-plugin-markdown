# typedoc-plugin-markdown

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://travis-ci.org/tgreyjs/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyjs/typedoc-plugin-markdown)
[![Greenkeeper badge](https://badges.greenkeeper.io/tgreyjs/typedoc-plugin-markdown.svg)](https://greenkeeper.io/)

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that exposes a theme and additional arguments for rendering markdown.

## Installation

```javascript
npm install --save-dev typedoc typedoc-plugin-markdown
```

## Usage

### Specify the theme

The plugin provides an additional markdown theme:

*shell:*
```
$ node_modules/.bin/typedoc --theme markdown
```

*npm script:*
```
"scripts": {
 "docs": "typedoc --theme markdown"
}
```

### Additional arguments

The plugin exposes the following additional arguments:

 * `--mdEngine<github|bitbucket|gitbook>`<br />
 The markdown rendering engine:

  * "github": Optimised for GitHub/CommonMark (Default). 
  * "bitbucket": Renders markdown to support Bitbucket anchor linking and more.<br />
  * "gitbook": Adds SUMMARY.md file to generate a book's table of contents and sets header levels to display correct sub-navigation menu. (*Optimised for newest version of GitBook*).

* `--mdHideSources`<br />
  Suppress source file linking from output.
  

* `--mdSourceRepo<path.to.repo>`(*Will be ignored on GitHub repositories*)<br />
  The source repo to use for source file linking.<br />
  For bitbucket use: `https://bitbucket.org/owner/repository_name`. 

## Example output

* <a href="https://github.com/tgreyjs/typedoc-plugin-markdown/tree/master/examples/out/README.md">Some general example output.</a>



## Acknowledgements

* Thanks to kimamula's [typedoc-markdown-theme](https://github.com/kimamula/typedoc-markdown-theme) for the inspiration behind this project.
