# Customizing

If required the theme can be further extended using recommended patterns of the HTML theme - please see TypeDoc's [custom theme](https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md) docs.

This approach can be implemented in this example showing how the header and footer templates can be customized with a new theme using a customn plugin.

`custom-plugin.ts`

```ts
import { Application, PageEvent, Reflection } from 'typedoc';
import { MarkdownTheme, MarkdownThemeRenderContext } from 'typedoc-plugin-markdown';

export function load(app: Application) {
  app.renderer.defineTheme('custom-markdown-theme', CustomTheme);
}

class CustomMarkdownTheme extends MarkdownTheme {
  override getRenderContext(pageEvent: PageEvent<Reflection>) {
    return new CustomMarkdownTheme(pageEvent, this.application.options);
  }
}

class CustomMarkdownTheme extends MarkdownThemeRenderContext {
  override header = () => {
    return 'CUSTOM HEADER HERE';
  };

  override footer = () => {
    return 'CUSTOM FOOTER HERE';
  };
}
```

To theme can then be added to the TypeDoc config as follows:

`typedoc.json`

```json
{
  "plugin": ["typedoc-plugin-markdown", "./dist/custom-plugin"],
  "theme": "custom-markdown-theme"
}
```
