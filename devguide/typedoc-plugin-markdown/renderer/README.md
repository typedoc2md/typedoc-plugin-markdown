[Developer Guide](../../README.md) / [typedoc-plugin-markdown](../README.md) / renderer

# renderer

Includes functionality and override methods on the TypeDoc Renderer.

## Functions

### render()

> **render**(`renderer`, `project`, `outputDirectory`): `Promise`\<`void`\>

Defined in: [packages/typedoc-plugin-markdown/src/renderer/render.ts:27](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/renderer/render.ts#L27)

The render method for the Markdown plugin

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `renderer` | [`MarkdownRenderer`](../types/interfaces/MarkdownRenderer.md) |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `outputDirectory` | `string` |

#### Returns

`Promise`\<`void`\>

#### Remarks

This is essentially a copy the default theme render method with some adjustments.

- Removes unnecessary async calls to load highlighters only required for html theme.
- Removes hooks logic that are jsx specific.
- Adds any logic specific to markdown rendering.

***

### setupRenderer()

> **setupRenderer**(`app`): `void`

Defined in: [packages/typedoc-plugin-markdown/src/renderer/setup.ts:13](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/renderer/setup.ts#L13)

Create dedicated hooks and async job collections for markdown rendering.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `app` | [`Application`](https://typedoc.org/api/classes/Application.html) |

#### Returns

`void`
