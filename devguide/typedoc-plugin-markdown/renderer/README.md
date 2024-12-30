[Developer Guide](../../README.md) / [typedoc-plugin-markdown](../README.md) / renderer

# renderer

Includes functionality and override methods on the TypeDoc Renderer.

## Functions

### resolvePackages()

> **resolvePackages**(`app`, `context`, `packageDir`): `void`

Defined in: [packages/typedoc-plugin-markdown/src/renderer/packages.ts:15](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/renderer/packages.ts#L15)

Resolves packages meta data for the project.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `app` | [`Application`](https://typedoc.org/api/classes/Application.html) |
| `context` | [`Context`](https://typedoc.org/api/classes/Context.html) |
| `packageDir` | `string` |

#### Returns

`void`

#### Remarks

Currently options set for packages are only stored on the converter and are destroyed before being passed to the Renderer.

By intercepting the package options set in the converter and storing them on the renderer we can use them later in the theme.

***

### render()

> **render**(`renderer`, `project`, `outputDirectory`): `Promise`\<`void`\>

Defined in: [packages/typedoc-plugin-markdown/src/renderer/render.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/renderer/render.ts#L26)

The render method for the Markdown plugin

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `renderer` | [`Renderer`](https://typedoc.org/api/classes/Renderer.html) |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `outputDirectory` | `string` |

#### Returns

`Promise`\<`void`\>

#### Remarks

This is essentially a copy the default theme render method with some adjustments.

- Removes unnecessary async calls to load highlighters only required for html theme.
- Removes hooks logic that are jsx specific.
- Adds any logic specific to markdown rendering.
