[Developer Guide](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [events](../README.md) / MarkdownRendererEvent

# Class: MarkdownRendererEvent

An event emitted at the beginning and end of the rendering process.

## Contents

* [Extends](#extends)
* [Properties](#properties)
  * [project](#project)
  * [outputDirectory](#outputdirectory)
  * [urls?](#urls)
  * [navigation?](#navigation)
* [Events](#events)
  * [BEGIN](#begin)
  * [END](#end)

## Extends

* `Event`

## Properties

### project

> `readonly` **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

The project the renderer is currently processing.

#### Defined in

[packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts:19](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L19)

***

### outputDirectory

> `readonly` **outputDirectory**: `string`

The path of the directory the documentation should be written to.

#### Defined in

[packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts:24](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L24)

***

### urls?

> `optional` **urls**: [`UrlMapping`](../../types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Reflection.html)>\[]

A list of all pages that should be generated.

#### Defined in

[packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts:29](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L29)

***

### navigation?

> `optional` **navigation**: [`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]

The navigation structure of the project that can be utilised by plugins.

#### Defined in

[packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts:34](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L34)

## Events

### BEGIN

> `readonly` `static` **BEGIN**: `"beginRender"` = `'beginRender'`

Triggered before the renderer starts rendering a project.

#### Defined in

[packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L40)

***

### END

> `readonly` `static` **END**: `"endRender"` = `'endRender'`

Triggered after the renderer has written all documents.

#### Defined in

[packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts:46](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L46)
