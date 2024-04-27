# MarkdownPageEvent

An event emitted by before and after the markup of a page is rendered.

## Usage

```ts
export function load(app: MarkdownApplication) {
  app.renderer.on(MarkdownPageEvent.END, (event: MarkdownPageEvent) => {
   events.contents = event.contents.replace('foo', 'bar');
  });
});
```

## Extends

- [`Event ↗️`]( https://typedoc.org/api/classes/Event.html )

## Properties

### project

> **project**: [`ProjectReflection ↗️`]( https://typedoc.org/api/classes/Models.ProjectReflection.html )

The project the renderer is currently processing.

***

### model

> `readonly` **model**: `Model`

The model that should be rendered on this page.

***

### url

> **url**: `string`

The url this page will be located at.

***

### filename

> **filename**: `string`

The filename the page will be written to.

***

### contents?

> `optional` **contents**: `string`

The final markdown content of this page.

Should be rendered by layout templates and can be modified by plugins.

***

### frontmatter?

> `optional` **frontmatter**: `Record`\<`string`, `any`\>

The frontmatter of this page represented as a key value object. This property can be utilised by other plugins.

## Events

### BEGIN

> `static` `readonly` **BEGIN**: `"beginPage"` = `'beginPage'`

Triggered before a document will be rendered.

***

### END

> `static` `readonly` **END**: `"endPage"` = `'endPage'`

Triggered after a document has been rendered, just before it is written to disc.
