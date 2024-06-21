[Home](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [events](../README.md) / MarkdownPageEvent

# Class: MarkdownPageEvent\<Model>

An event emitted before and after the markdown of a page is rendered.

## Contents

* [Extends](#extends)
* [Type Parameters](#type-parameters)
* [Properties](#properties)
  * [project](#project)
  * [model](#model)
  * [contents?](#contents-1)
  * [url](#url)
  * [filename](#filename)
  * [frontmatter?](#frontmatter)
* [Events](#events)
  * [BEGIN](#begin)
  * [END](#end)

## Extends

* [`Event`](https://typedoc.org/api/classes/Event.html)

## Type Parameters

| Type Parameter | Default type                                                    |
| -------------- | --------------------------------------------------------------- |
| `Model`        | [`Reflection`](https://typedoc.org/api/classes/Reflection.html) |

## Properties

### project

> **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

The [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) instance the renderer is currently processing.

#### Defined in

[events/markdown-page-event.ts:14](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L14)

***

### model

> `readonly` **model**: `Model`

The model that that is being rendered on this page.
Either a [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) or [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html).

#### Defined in

[events/markdown-page-event.ts:20](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L20)

***

### contents?

> `optional` **contents**: `string`

The final markdown `string` content of the page.

Should be rendered by layout templates and can be modified by plugins.

#### Defined in

[events/markdown-page-event.ts:27](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L27)

***

### url

> **url**: `string`

The url `string` of the page.

#### Defined in

[events/markdown-page-event.ts:32](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L32)

***

### filename

> **filename**: `string`

The complete `string` filename where the file will be written..

#### Defined in

[events/markdown-page-event.ts:37](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L37)

***

### frontmatter?

> `optional` **frontmatter**: `Record`\<`string`, `any`>

The frontmatter of this page represented as a key value object. This property can be utilised by other plugins.

#### Defined in

[events/markdown-page-event.ts:42](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L42)

## Events

### BEGIN

> `readonly` `static` **BEGIN**: `"beginPage"` = `'beginPage'`

Triggered before a document will be rendered.

#### Defined in

[events/markdown-page-event.ts:54](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L54)

***

### END

> `readonly` `static` **END**: `"endPage"` = `'endPage'`

Triggered after a document has been rendered, just before it is written to disc.

#### Defined in

[events/markdown-page-event.ts:60](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L60)
