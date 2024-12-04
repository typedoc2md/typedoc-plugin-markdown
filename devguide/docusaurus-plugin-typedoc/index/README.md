[Developer Guide](../../README.md) / [docusaurus-plugin-typedoc](../README.md) / index

# index

## Contents

* [Index](#index-1)
  * [Interfaces](#interfaces)
* [default()](#default)

## Index

### Interfaces

| Interface                                    | Description                                   |
| -------------------------------------------- | --------------------------------------------- |
| [PluginOptions](interfaces/PluginOptions.md) | Describes the options declared by the plugin. |

## default()

> **default**(`context`, `opts`): `Promise`\<`object`>

### Parameters

| Parameter | Type                                                       |
| --------- | ---------------------------------------------------------- |
| `context` | `any`                                                      |
| `opts`    | `Partial`\<[`PluginOptions`](interfaces/PluginOptions.md)> |

### Returns

`Promise`\<`object`>

| Name          | Type     | Default value               |
| ------------- | -------- | --------------------------- |
| `name`        | `string` | 'docusaurus-plugin-typedoc' |
| `extendCli()` | `void`   | -                           |

### Defined in

[docusaurus-plugin-typedoc/src/plugins/docusaurus.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/docusaurus-plugin-typedoc/src/plugins/docusaurus.ts#L8)
