---
title: Customizing Output
description: How to extend and customize output.
---

# Customizing Output

It is possible to customize the output of the generated markdown files by creating local plugins.
All these concepts follow an adapted version of [TypeDoc's core customization implementation](https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md).

See the [Local Plugins](/api-docs/Document.Local-Plugins) guide for implementation details.

## Hooks

Hooks allows strings to be injected into the output in specific locations and are the most basic form of customization.

### Example

```ts filename="custom-plugin.mjs"
// @ts-check
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.markdownHooks.on('page.end', () => `**Generated using \`page.end\` hook**`);
}
```

### See

- [MarkdownRendererHooks](https://typedoc-plugin-markdown.org/api-docs/Interface.MarkdownRendererHooks).

## Events

Events are more powerful than hooks and allow for more complex customizations and provide a context that can be used to modify the output.

### Renderer Events

Renderer events are emitted at the beginning (before pages are rendered) and end (after pages are rendered) of the rendering process.
You would typically use this event to modify urls or navigation structure.

#### Example

```ts filename="custom-plugin.mjs"
// @ts-check
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.on(
    MarkdownRendererEvent.BEGIN,
    /**
     * @param {import('typedoc-plugin-markdown').MarkdownRendererEvent} renderer
     */
    (renderer) => {
      renderer.urls = event.urls.map((urlMapping) => {
        const newUrl = urlMapping.url.replace('foo', 'bar');
        urlMapping.url = newUrl;
        urlMapping.model.url = newUrl; // also required
        return urlMapping;
      });
    },
  );
}
```

#### See

- [MarkdownRendererEvent](/api-docs/Class.MarkdownRendererEvent).

### Page Events

Page events emitted before and after the markdown of each page is rendered.
You would typically use this event to modify content of a page.

#### Example

```ts filename="custom-plugin.mjs"
// @ts-check
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.on(
    MarkdownPageEvent.BEGIN,
    /**
     * @param {import('typedoc-plugin-markdown').MarkdownPageEvent} page
     */
    (page) => {
      page.contents = page.contents.replace('foo', 'bar');
    },
  );
}
```

#### See

- [MarkdownPageEvent](/api-docs/Class.MarkdownPageEvent).

## Async Jobs

Async jobs are used to perform asynchronous tasks before or after rendering with a provided context.

```ts filename="custom-plugin.mjs"
// @ts-check
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app: MarkdownApplication) {
  app.renderer.preRenderAsyncJobs.push(async (renderer) => {
    await doSomethingAsync(renderer);
  });

  app.renderer.postRenderAsyncJobs.push(async (renderer) => {
    await doSomethingAsync(renderer);
  });
}
```

## Custom Theme

If there are some specific customization not achievable with hooks or events then a more advanced customization can be achieved by providing a new theme class which returns a different context class.

This implementation follows an adapted version of [TypeDoc's custom theming implementation](https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md).

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

### See

- [MarkdownTheme](/api-docs/Class.MarkdownTheme).
- [MarkdownThemeContext](/api-docs/Class.MarkdownThemeContext).
