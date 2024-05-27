# MarkdownPageEvent

An event emitted by before and after the markup of a page is rendered.

## Example

```ts
export function load(app: MarkdownApplication) {
  app.renderer.on(MarkdownPageEvent.BEGIN, (page: MarkdownPageEvent) => {
   page.contents = page.contents.replace('foo', 'bar');
  });
});
```

## Extends

- [`Event`](https://typedoc.org/api/classes/Event.html)

## Properties

### project

```ts
project: ProjectReflection;
```

The [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) instance the renderer is currently processing.

***

### model

```ts
readonly model: Model;
```

The model that that is being rendered on this page.
Either a [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) or [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html).

***

### url

```ts
url: string;
```

The url `string` of the page.

***

### filename

```ts
filename: string;
```

The complete `string` filename where the file will be written..

***

### contents?

```ts
optional contents: string;
```

The final markdown `string` content of the page.

Should be rendered by layout templates and can be modified by plugins.

***

### frontmatter?

```ts
optional frontmatter: Record<string, any>;
```

The frontmatter of this page represented as a key value object. This property can be utilised by other plugins.

## Events

### BEGIN

```ts
static readonly BEGIN: "beginPage" = 'beginPage';
```

Triggered before a document will be rendered.

***

### END

```ts
static readonly END: "endPage" = 'endPage';
```

Triggered after a document has been rendered, just before it is written to disc.
