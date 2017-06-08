# typedoc-plugin-markdown

![npm](https://img.shields.io/npm/dt/typedoc-plugin-markdown.svg)
![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)

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

### Markdown options

Markdown engines render markdown in different ways. By default typedoc supports github flavoured markdown. For others additional options are required.


| Name      | Description | Default value               
| --------- | ----------- | ----
markdownFlavour | The markdown rendering engine. Supports "github" or "bitbucket" | github
markdownSourcefilePrefix | The prefix to use for sourcefiles. | Supports github source files as default.

#### Example options
```javascript
--markdownFlavour bitbucket

--markdownSourcefilePrefix https://bitbucket.org/owner/repository_name/src/master/src/
```
 
## Samples

* [TypeDoc Examples](samples/out/typedoc/index.md)
* [Microsoft TypeScript Samples](samples/out/microsoft/index.md)

## Acknowledgements

* Thanks to kimamula's [typedoc-markdown-theme](https://github.com/kimamula/typedoc-markdown-theme) for the inspiration behind this package.




 



