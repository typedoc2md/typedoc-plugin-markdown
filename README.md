# typedoc-plugin-markdown

[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)
[![npm version](https://badge.fury.io/js/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)

*Alpha version under development. Please feel free to use with this caveat - feedback welcome.*

## What

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that exposes themes and options for rendering markdown.

### Why not just create a theme?

Creating a pluign that exposes a theme provides a mechanism to offer a feature rich set of additional options.
In addition it simplifies the implementation as we can call the theme by name rather than path. 

## Getting started
```javascript
npm install --save-dev typedoc-plugin-markdown
```

### How to use

The plugin provides an additional markdown theme.

```javascript
typedoc --theme markdown
```

### Additional argumentsd

The plugin exposes the following additional arguments:

* `--markdownOutFile <fileName.md>`<br />
Compiles output to a single file
* `--markdownSuppressIndexes`<br />
Suppress indexes from output - useful to reduce noise on small projects
* `--markdownFlavour<github|bitbucket>`<br />
Specifies the markdown rendering engine.  Defaults to `github`.
* `--markdownSourceRepo<path.to.repo>`<br />
Will be ignored on github flavoured projects.<br />
For bitbucket use: `https://bitbucket.org/owner/repository_name`.<br />


## Samples

Samples of generated output.

* [Generated output from TypeDoc's examples directory](https://github.com/tgreyuk/typedoc-plugin-markdown-samples/blob/master/out/typedoc/index.md) 
* [Generated from a selection of Microsoft TypeScriptSamples](https://github.com/tgreyuk/typedoc-plugin-markdown-samples/blob/master/out/microsoft/index.md) 


## Acknowledgements

* Thanks to kimamula's [typedoc-markdown-theme](https://github.com/kimamula/typedoc-markdown-theme) for the inspiration behind this project.




 



