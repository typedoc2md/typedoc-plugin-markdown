# MarkdownRendererEvent

An event emitted at the beginning and end of the rendering process.

## Usage

```ts
app.renderer.on(MarkdownRendererEvent.BEGIN, (event) => {
  console.log(`Render Starting for ${event.project.name}!`);
});
```

## Extends

- [`Event`](https://typedoc.org/api/classes/Event.html)

## Properties

### project

> `readonly` **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

The project the renderer is currently processing.

***

### outputDirectory

> `readonly` **outputDirectory**: `string`

The path of the directory the documentation should be written to.

***

### urls?

> `optional` **urls**: [`UrlMapping`](/api-docs/Interface.UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)\>[]

A list of all pages that should be generated.

***

### navigation?

> `optional` **navigation**: [`NavigationItem`](/api-docs/Interface.NavigationItem.md)[]

The navigation structure of the project that can be utilised by plugins.

## Events

### BEGIN

> `static` `readonly` **BEGIN**: `"beginRender"` = `'beginRender'`

Triggered before the renderer starts rendering a project.

***

### END

> `static` `readonly` **END**: `"endRender"` = `'endRender'`

Triggered after the renderer has written all documents.
