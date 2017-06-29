# typedoc-plugin-markdown

[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)
[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Greenkeeper badge](https://badges.greenkeeper.io/tgreyuk/typedoc-plugin-markdown.svg)](https://greenkeeper.io/)

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that exposes themes and options for rendering markdown.

## Getting started

### Installation

```javascript
npm install --save-dev typedoc typedoc-plugin-markdown
```

### How to use

The plugin provides an additional markdown theme.

```javascript
node_modules/.bin/typedoc --theme markdown
```

## Additional arguments

The plugin exposes the following additional arguments:

* `--mdOutFile <fileName.md>`<br />
Compiles output to a single file
* `--mdHideSources`<br />
Suppress sources from output 
* `--mdFlavour<github|bitbucket>`<br />
Specifies the markdown rendering engine.  Defaults to `github`.
* `--mdSourceRepo<path.to.repo>`<br />
The source repo to use for source file linking. Will be ignored on github flavoured projects.<br />
For bitbucket use: `https://bitbucket.org/owner/repository_name`.<br />


## Example output

<pre>
/**
 * This is a function with multiple arguments and a return value.
 * @param paramZ  This is a string parameter.
 * @param paramG  This is a parameter flagged with any.
 */

export function functionWithArguments(paramZ:string, paramG:any):number {
    return 0;
}
 </pre>
 

► **functionWithArguments**(paramZ: *`string`*, paramG: *`any`*): `number`

*Defined in functions.ts:41*

This is a function with multiple arguments and a return value.

**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| paramZ | `string` | This is a string parameter. |
| paramG | `any` | This is a parameter flagged with any.|

**Returns:** `number`

Browse the <a href="https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/tests/mocks/default">test mocks</a> to view further examples. 

## Acknowledgements

* Thanks to kimamula's [typedoc-markdown-theme](https://github.com/kimamula/typedoc-markdown-theme) for the inspiration behind this project.
