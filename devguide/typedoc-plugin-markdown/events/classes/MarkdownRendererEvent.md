[Developer Guide](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [events](../README.md) / MarkdownRendererEvent

# Class: MarkdownRendererEvent

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts:15](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L15)

An event emitted at the beginning and end of the rendering process.

## Extends

- `Event`

## Properties

### project

> `readonly` **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts:19](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L19)

The project the renderer is currently processing.

***

### outputDirectory

> `readonly` **outputDirectory**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts:24](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L24)

The path of the directory the documentation should be written to.

***

### urls?

> `optional` **urls**: [`UrlMapping`](../../types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Reflection.html)\>[]

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts:29](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L29)

A list of all pages that should be generated.

***

### navigation?

> `optional` **navigation**: [`NavigationItem`](../../types/interfaces/NavigationItem.md)[]

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts:34](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L34)

The navigation structure of the project that can be utilised by plugins.

## Events

### BEGIN

> `readonly` `static` **BEGIN**: `"beginRender"` = `'beginRender'`

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L40)

Triggered before the renderer starts rendering a project.

***

### END

> `readonly` `static` **END**: `"endRender"` = `'endRender'`

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts:46](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L46)

Triggered after the renderer has written all documents.
