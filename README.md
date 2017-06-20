# typedoc-plugin-markdown
[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)

*Alpha version under development. Please feel free to use with this caveat - feedback welcome.*

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that exposes themes and options for rendering markdown.

## Installation
```javascript
npm install --save-dev typedoc-plugin-markdown
```

## Usage

The plugin provides an additional markdown theme.

```javascript
typedoc --theme markdown
```

### Markdown options (experimental)

The plugin exposes the following additional options;

| Name      | Description | Default value               
| --------- | ----------- | ----
| markdownSinglePage | Export to a single file | off
| markdownFlavour | The markdown rendering engine. "github" or "bitbucket" | github
| markdownSourcefilePrefix | The prefix to use for sourcefiles. | github source file path

*Examples*:

```
--markdownSourcefilePrefix https://bitbucket.org/owner/repository_name/src/master/src/
```
 
## Samples

Samples of generated output.

* [Generated output from TypeDoc's examples directory](https://github.com/tgreyuk/typedoc-plugin-markdown-samples/blob/master/out/typedoc/index.md) 
* [Generated from a selection of Microsoft TypeScriptSamples](https://github.com/tgreyuk/typedoc-plugin-markdown-samples/blob/master/out/microsoft/index.md) 


## Acknowledgements

* Thanks to kimamula's [typedoc-markdown-theme](https://github.com/kimamula/typedoc-markdown-theme) for the inspiration behind this project.




 



