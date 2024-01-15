# plugin/events

## MarkdownRendererEvent

Extends the RendererEvent from TypeDoc to expose navigation property.

### Extends

- `Event`

### Constructors

#### new MarkdownRendererEvent(name, outputDirectory, project)

> **new MarkdownRendererEvent**(`name`, `outputDirectory`, `project`): [`MarkdownRendererEvent`](events.md#markdownrendererevent)

##### Parameters

• **name**: `string`

• **outputDirectory**: `string`

• **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

##### Returns

[`MarkdownRendererEvent`](events.md#markdownrendererevent)

##### Overrides

`Event.constructor`

##### Source

[plugin/events.ts:20](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L20)

### Properties

#### project

> **`readonly`** **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

##### Source

[plugin/events.ts:10](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L10)

#### outputDirectory

> **`readonly`** **outputDirectory**: `string`

##### Source

[plugin/events.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L12)

#### navigation

> **navigation**: `NavigationItem`[]

##### Source

[plugin/events.ts:15](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L15)

#### urls?

> **urls**?: `UrlMapping`\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)\>[]

##### Source

[plugin/events.ts:14](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L14)

#### BEGIN

> **`static`** **`readonly`** **BEGIN**: `"beginRender"` = `'beginRender'`

##### Source

[plugin/events.ts:17](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L17)

#### END

> **`static`** **`readonly`** **END**: `"endRender"` = `'endRender'`

##### Source

[plugin/events.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L18)

### Methods

#### createPageEvent()

> **createPageEvent**\<`Model`\>(`mapping`): [`RenderTemplate`\<[`MarkdownPageEvent`](events.md#markdownpageevent)\<`Model`\>\>, [`MarkdownPageEvent`](events.md#markdownpageevent)\<`Model`\>]

##### Type parameters

• **Model**

##### Parameters

• **mapping**: `UrlMapping`\<`Model`\>

##### Returns

[`RenderTemplate`\<[`MarkdownPageEvent`](events.md#markdownpageevent)\<`Model`\>\>, [`MarkdownPageEvent`](events.md#markdownpageevent)\<`Model`\>]

##### Source

[plugin/events.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L30)

***

## MarkdownPageEvent\<Model\>

### Extends

- `Event`

### Type parameters

• **Model** = [`Reflection`]( https://typedoc.org/api/classes/Models.Reflection.html )

### Constructors

#### new MarkdownPageEvent(name, model)

> **new MarkdownPageEvent**\<`Model`\>(`name`, `model`): [`MarkdownPageEvent`](events.md#markdownpageevent)\<`Model`\>

##### Parameters

• **name**: `string`

• **model**: `Model`

##### Returns

[`MarkdownPageEvent`](events.md#markdownpageevent)\<`Model`\>

##### Overrides

`Event.constructor`

##### Source

[plugin/events.ts:54](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L54)

### Properties

#### project

> **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

##### Source

[plugin/events.ts:45](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L45)

#### filename

> **filename**: `string`

##### Source

[plugin/events.ts:46](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L46)

#### url

> **url**: `string`

##### Source

[plugin/events.ts:47](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L47)

#### pageHeadings

> **pageHeadings**: `any`

##### Source

[plugin/events.ts:50](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L50)

#### model

> **`readonly`** **model**: `Model`

##### Source

[plugin/events.ts:51](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L51)

#### contents?

> **contents**?: `string`

##### Source

[plugin/events.ts:48](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L48)

#### frontmatter?

> **frontmatter**?: `any`

##### Source

[plugin/events.ts:49](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L49)

#### BEGIN

> **`static`** **`readonly`** **BEGIN**: `"beginPage"` = `'beginPage'`

##### Source

[plugin/events.ts:52](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L52)

#### END

> **`static`** **`readonly`** **END**: `"endPage"` = `'endPage'`

##### Source

[plugin/events.ts:53](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/events.ts#L53)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
