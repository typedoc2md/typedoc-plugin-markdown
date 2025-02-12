[Developer Guide](../../README.md) / [docusaurus-plugin-typedoc](../README.md) / core

# core

## Interfaces

| Interface | Description |
| ------ | ------ |
| [PluginOptions](interfaces/PluginOptions.md) | Describes the options declared by the plugin. |

## Functions

### default()

> **default**(`context`, `opts`): `Promise`\<\{ `name`: `string`; `extendCli`: `void`; \}\>

Defined in: [docusaurus-plugin-typedoc/src/plugin/docusaurus.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/docusaurus-plugin-typedoc/src/plugin/docusaurus.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `any` |
| `opts` | `Partial`\<[`PluginOptions`](interfaces/PluginOptions.md)\> |

#### Returns

`Promise`\<\{ `name`: `string`; `extendCli`: `void`; \}\>
