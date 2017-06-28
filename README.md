# typedoc-plugin-markdown

[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)
[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Greenkeeper badge](https://badges.greenkeeper.io/tgreyuk/typedoc-plugin-markdown.svg)](https://greenkeeper.io/)

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that exposes themes and options for rendering markdown.

## Getting started

```javascript
npm install --save-dev typedoc typedoc-plugin-markdown
```

### How to use

The plugin provides an additional markdown theme.

```javascript
node_modules/.bin/typedoc --theme markdown
```

### Additional arguments

The plugin exposes the following additional arguments:

* `--mdFlavour<github|bitbucket>`<br />
Specifies the markdown rendering engine.  Defaults to `github`.
* `--mdOutFile <fileName.md>`<br />
Compiles output to a single file
* `--mdHideSources`<br />
Suppress sources from output 
* `--mdSourceRepo<path.to.repo>`<br />
The source repo to use for source file linking. Will be ignored on github flavoured projects.<br />
For bitbucket use: `https://bitbucket.org/owner/repository_name`.<br />

### Why not just create a theme?

Creating a pluign that exposes a theme provides a mechanism to offer a feature rich set of additional options.

## Samples

Samples of generated output.

* [Generated output from TypeDoc's examples directory](https://github.com/tgreyuk/typedoc-plugin-markdown-samples/blob/master/out/typedoc/README.md) 
* [Generated from a selection of Microsoft TypeScriptSamples](https://github.com/tgreyuk/typedoc-plugin-markdown-samples/blob/master/out/microsoft/README.md) 


## Acknowledgements

* Thanks to kimamula's [typedoc-markdown-theme](https://github.com/kimamula/typedoc-markdown-theme) for the inspiration behind this project.
