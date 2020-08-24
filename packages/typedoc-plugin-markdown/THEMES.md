# Markdown Themes

By default, the Markdown theme will attempt to render standard CommonMark, suitable for the majority of Markdown engines.
It follows the same structure and file patterns as the default HTML theme (see [typedoc-default-themes](https://github.com/TypeStrong/typedoc-default-themes)).

## Creating a custom markdown theme

The Markdown theme packaged with the plugin can also be extended with a custom Markdown theme using the standard TypeDoc theming pattern as per https://typedoc.org/guides/themes/.

### Create a theme.js class

As per the theme docs create a `theme.js` file which TypeDoc will then attempt to load from a given location.

_mytheme/custom-theme.js_

```js
const MarkdownTheme = require('typedoc-plugin-markdown/dist/theme');

class CustomMarkdownTheme extends MarkdownTheme.default {
  constructor(renderer, basePath) {
    super(renderer, basePath);
  }
}

exports.default = CustomMarkdownTheme;
```

### Theme resources

By default the theme will inherit the resources of the Markdown theme (https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/src/resources).

These can be replaced and updated as required.

### Building the theme

#### CLI

```
npx typedoc ./src --plugin typedoc-plugin-markdown --theme ./mytheme/custom-theme --out docs
```

#### API

```js
const { Application } = require('typedoc');
const path = require('path');

const app = new Application();
app.bootstrap({
  module: 'CommonJS',
  target: 'ES5',
  readme: 'none',
  theme: path.join(__dirname, 'mytheme', 'custom-theme'),
  plugin: 'typedoc-plugin-markdown',
});

app.generateDocs(app.expandInputFiles(['./src']), 'docs');
```

See https://typedoc.org/guides/installation/#node-module
