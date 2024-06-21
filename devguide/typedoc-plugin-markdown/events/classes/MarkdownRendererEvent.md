[Home](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [events](../README.md) / MarkdownRendererEvent

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

* [`Event`](https://typedoc.org/api/classes/Event.html)

## Properties

### project

> `readonly` **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

The project the renderer is currently processing.

#### Defined in

[events/markdown-renderer-event.ts:15](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L15)

***

### outputDirectory

> `readonly` **outputDirectory**: `string`

The path of the directory the documentation should be written to.

#### Defined in

[events/markdown-renderer-event.ts:20](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L20)

***

### urls?

> `optional` **urls**: [`UrlMapping`](../../types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Reflection.html)>\[]

A list of all pages that should be generated.

#### Defined in

[events/markdown-renderer-event.ts:25](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L25)

***

### navigation?

> `optional` **navigation**: [`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]

The navigation structure of the project that can be utilised by plugins.

#### Defined in

[events/markdown-renderer-event.ts:30](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L30)

## Events

### BEGIN

> `readonly` `static` **BEGIN**: `"beginRender"` = `'beginRender'`

Triggered before the renderer starts rendering a project.

#### Defined in

[events/markdown-renderer-event.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L36)

***

### END

> `readonly` `static` **END**: `"endRender"` = `'endRender'`

Triggered after the renderer has written all documents.

#### Defined in

[events/markdown-renderer-event.ts:42](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L42)
