# plugin/renderer

## generateDocs()

> **generateDocs**(`project`, `out`): `Promise`\<`void`\>

Replacement of TypeDoc's Application.generateDocs method to decouple HTML logic.

### Parameters

• **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

• **out**: `string`

### Returns

`Promise`\<`void`\>

### Source

[plugin/renderer.ts:24](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/renderer.ts#L24)

***

## render()

> **render**(`project`, `outputDirectory`): `Promise`\<`void`\>

Replacement of TypeDoc's Renderer.render method to decouple HTML logic.

This is essentially a copy of the base method with a few tweaks.

- Removes uneccessary async calls to load highlighters only required for html theme.
- Removes hooks logic that are jsx specific.
- Adds any logic specific to markdown rendering.

### Parameters

• **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

• **outputDirectory**: `string`

### Returns

`Promise`\<`void`\>

### Source

[plugin/renderer.ts:46](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/renderer.ts#L46)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
