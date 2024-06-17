[Packages Index](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [events](../README.md) / MarkdownPageEvent

# Class: MarkdownPageEvent\<Model>

An event emitted by before and after the markup of a page is rendered.

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

## Example

```ts
export function load(app: MarkdownApplication) {
  app.renderer.on(MarkdownPageEvent.BEGIN, (page: MarkdownPageEvent) => {
   page.contents = page.contents.replace('foo', 'bar');
  });
});
```

## Extends

* [`Event`](https://typedoc.org/api/classes/Event.html)

## Type Parameters

| Type Parameter | Default type                                                           |
| -------------- | ---------------------------------------------------------------------- |
| `Model`        | [`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html) |

## Properties

### project

> **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

The [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) instance the renderer is currently processing.

#### Defined in

[events/markdown-page-event.ts:22](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L22)

***

### model

> `readonly` **model**: `Model`

The model that that is being rendered on this page.
Either a [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) or [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html).

#### Defined in

[events/markdown-page-event.ts:28](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L28)

***

### contents?

> `optional` **contents**: `string`

The final markdown `string` content of the page.

Should be rendered by layout templates and can be modified by plugins.

#### Defined in

[events/markdown-page-event.ts:35](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L35)

***

### url

> **url**: `string`

The url `string` of the page.

#### Defined in

[events/markdown-page-event.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L40)

***

### filename

> **filename**: `string`

The complete `string` filename where the file will be written..

#### Defined in

[events/markdown-page-event.ts:45](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L45)

***

### frontmatter?

> `optional` **frontmatter**: `Record`\<`string`, `any`>

The frontmatter of this page represented as a key value object. This property can be utilised by other plugins.

#### Defined in

[events/markdown-page-event.ts:50](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L50)

## Events

### BEGIN

> `readonly` `static` **BEGIN**: `"beginPage"` = `'beginPage'`

Triggered before a document will be rendered.

#### Defined in

[events/markdown-page-event.ts:62](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L62)

***

### END

> `readonly` `static` **END**: `"endPage"` = `'endPage'`

Triggered after a document has been rendered, just before it is written to disc.

#### Defined in

[events/markdown-page-event.ts:68](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L68)
