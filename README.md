# typedoc-plugin-markdown

![npm](https://img.shields.io/npm/dt/typedoc-plugin-markdown.svg)
![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)

*Alpha version under development. Please feel free to use with this caveat - feedback welcome.*

A plugin for [Typedoc](https://github.com/TypeStrong/typedoc) that exposes themes and options for rendering markdown.

*Why not just create a typedoc theme?* 

Easy to implement (don't have to worry about theme locations) with the further abilty to pass in further options. 

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

```javascript
typedoc --theme markdown --markdownFlavour bitbucket markdownSourcefilePrefix 'https://bitbucket.org/owner/repository_name/src/master/src/'
```
 
 ## Samples

* [Microsoft TypeScript Sample: Raytracer](samples/raytracer/index.md)

## Acknowledgements

* Thanks to kimamula ([typedoc-markdown-theme](https://github.com/kimamula/typedoc-markdown-theme)) for the inspiration behind this package.


 



