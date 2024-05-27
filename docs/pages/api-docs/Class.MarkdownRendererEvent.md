# MarkdownRendererEvent

An event emitted at the beginning and end of the rendering process.

```ts
app.renderer.on(MarkdownRendererEvent.BEGIN, (event) => {
  console.log(`Render Starting for ${event.project.name}!`);
});
```

## Extends

- [`Event`](https://typedoc.org/api/classes/Event.html)

## Properties

### project

```ts
readonly project: ProjectReflection;
```

The project the renderer is currently processing.

***

### outputDirectory

```ts
readonly outputDirectory: string;
```

The path of the directory the documentation should be written to.

***

### urls?

```ts
optional urls: UrlMapping<Reflection>[];
```

A list of all pages that should be generated.

***

### navigation?

```ts
optional navigation: NavigationItem[];
```

The navigation structure of the project that can be utilised by plugins.

## Events

### BEGIN

```ts
static readonly BEGIN: "beginRender" = 'beginRender';
```

Triggered before the renderer starts rendering a project.

***

### END

```ts
static readonly END: "endRender" = 'endRender';
```

Triggered after the renderer has written all documents.
