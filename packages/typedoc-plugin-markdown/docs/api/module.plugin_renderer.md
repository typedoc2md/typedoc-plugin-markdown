[typedoc-plugin-markdown](README.md) > plugin/renderer

# plugin/renderer

Contains functionality to decouple HTML logic from the TypeDoc [Renderer](https://typedoc.org/api/classes/Renderer.html).

## Function: generateMarkdown()

```ts
generateMarkdown(project, out): Promise<void>
```

Replacement of TypeDoc's [Application.generateDocs](https://typedoc.org/api/classes/Application.html#generateDocs) to decouple HTML logic.

### Parameters

| Parameter | Type                                                                                 |
| :-------- | :----------------------------------------------------------------------------------- |
| project   | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| out       | `string`                                                                             |

### Returns

[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

---

## Function: renderMarkdown()

```ts
renderMarkdown(project, outputDirectory): Promise<void>
```

Replacement of TypeDoc's [Renderer.render](https://typedoc.org/api/classes/Renderer.html#render) to decouple HTML logic.

- Removes uneccessary async calls to load highlighters
- Removes hooks logic

### Parameters

| Parameter       | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| project         | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| outputDirectory | `string`                                                                             |

### Returns

[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

---

## Class: MarkdownRendererEvent

Extends the RendererEvent from TypeDoc to expose navigation property.

### Extends

- [`RendererEvent`](https://typedoc.org/api/classes/RendererEvent.html)

### Constructors

#### constructor()

```ts
new MarkdownRendererEvent(
  name,
  outputDirectory,
  project): MarkdownRendererEvent
```

##### Parameters

| Parameter       | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| name            | `string`                                                                             |
| outputDirectory | `string`                                                                             |
| project         | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

##### Returns

[`MarkdownRendererEvent`](module.plugin_renderer.md#class-markdownrendererevent)

##### Inherited from

RendererEvent.constructor

### Properties

#### navigation

```ts
navigation: NavigationItem[]
```
