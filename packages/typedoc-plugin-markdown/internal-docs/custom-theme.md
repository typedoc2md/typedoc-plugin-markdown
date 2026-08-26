---
title: Custom Theme
description: How to extend the default Markdown Theme.
---

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
  "plugin": ["typedoc-plugin-markdown", "./local-plugins/my-custom-plugin.js"],
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
  templates: MarkdownThemeContext['templates'] = {
    ...(this as MarkdownThemeContext).templates,
    reflection: (page) => {
      return `New template for ${page.model.name}!`;
    },
  };

  // customise partials
  partials: MarkdownThemeContext['partials'] = {
    ...(this as MarkdownThemeContext).partials,
    header: () => {
      return `
# Welcome to custom header for ${this.page.project.name} project!
Use my new helper - ${this.helpers.newHelper()}
`;
    },
  };

  // customise helpers
  helpers = {
    ...(this as MarkdownThemeContext).helpers,
    newHelper: () => {
      return 'New helper!';
    },
  };
}
```

Note the shape of the overrides:

- Spread via `(this as MarkdownThemeContext)` rather than plain `this`. The base class has already initialized these fields by the time the subclass initializers run, but TypeScript sees the subclass declaration as self-referential and reports `TS2729` without the cast.
- Annotating `templates` and `partials` gives each override's params their types from the base, so they do not need annotating individually. Leave `helpers` unannotated where the intention is to add new helpers to it.
- Each resource takes the params of the one it replaces. `templates.reflection` receives the page event (`page.model` is the reflection), while `partials.header` takes none and reads `this.page`.
