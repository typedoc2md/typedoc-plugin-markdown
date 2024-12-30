[Developer Guide](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [events](../README.md) / MarkdownPageEvent

# Class: MarkdownPageEvent\<Model\>

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L8)

An event emitted before and after the markdown of a page is rendered.

## Extends

- `Event`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Model` | [`Reflection`](https://typedoc.org/api/classes/Reflection.html) |

## Properties

### project

> **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts:14](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L14)

The [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) instance the renderer is currently processing.

***

### model

> `readonly` **model**: [`Model`](../../../classes/typedoc-plugin-markdown.events.MarkdownPageEvent.html#model)

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts:20](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L20)

The model that that is being rendered on this page.
Either a [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) or [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html).

***

### group?

> `optional` **group**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts:25](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L25)

The group title of the group reflection belongs to.

***

### contents?

> `optional` **contents**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts:32](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L32)

The final markdown `string` content of the page.

Should be rendered by layout templates and can be modified by plugins.

***

### url

> **url**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts:37](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L37)

The url `string` of the page.

***

### filename

> **filename**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts:42](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L42)

The complete `string` filename where the file will be written..

***

### frontmatter?

> `optional` **frontmatter**: `Record`\<`string`, `any`\>

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts:47](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L47)

The frontmatter of this page represented as a key value object. This property can be utilised by other plugins.

## Events

### BEGIN

> `readonly` `static` **BEGIN**: `"beginPage"` = `'beginPage'`

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts:61](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L61)

Triggered before a document will be rendered.

***

### END

> `readonly` `static` **END**: `"endPage"` = `'endPage'`

Defined in: [packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts:67](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/events/markdown-page-event.ts#L67)

Triggered after a document has been rendered, just before it is written to disc.
