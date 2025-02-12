[Developer Guide](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [theme](../README.md) / Custom Theme

## Custom Theme

If there are some specific customization not achievable with hooks or events then a more advanced customization can be achieved by providing a new theme class which returns a different context class.

This implementation follows an adapted version of [TypeDoc's custom theming implementation](https://typedoc.org/documents/Development.Custom_Themes.html).

Please note that although the theme api is public it is not covered by semantic versioning and the contract may change between versions (although changes will likely be minimal). If full stability is required please either fix versions, fork the project or do not extend the theme.

### Example

This code defines a new theme called “customTheme”:

```ts
export function load(app) {
  app.renderer.defineTheme('customTheme', MyMarkdownTheme);
}

class MyMarkdownTheme extends MarkdownTheme {}
```

The theme can then be consumed by the `theme` option:

```json filename="typedoc.json"
{
  "plugin": ["typedoc-plugin-mardown", "./local-plugins/my-custom-plugin.js"],
  "theme": "customTheme"
}
```

The themes can be extended to provide custom partials, helpers and templates by proving a custom render context class.

```ts
class MyMarkdownTheme extends MarkdownTheme {
  getRenderContext(page) {
    return new MyMarkdownThemeContext(this, page, this.application.options);
  }
}

class MyMarkdownThemeContext extends MarkdownThemeContext {
  // customise templates
  templates = {
    ...this.templates,
    reflection: (model) => {
      return `New template for ${model.name}!`;
    },
  };

  // customise partials
  partials = {
    ...this.partials,
    header: (model) => {
      return `
# Welcome to custom header for ${this.page.project.name} project and ${model.name} model!
Use my new helper - ${this.helpers.newHelper()}
   `;
    },
  };

  // customise helpers
  helpers = {
    ...this.helpers,
    newHelper: () => {
      return 'New helper!';
    },
  };
}
```
