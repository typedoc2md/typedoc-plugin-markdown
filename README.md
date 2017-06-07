# typedoc-plugin-markdown

*Alpha version under development. Please feel free to use - feedback welcome.*

A plugin [typeoc](https://github.com/TypeStrong/typedoc) that exposes themes and options for rendering markdown.

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


 



