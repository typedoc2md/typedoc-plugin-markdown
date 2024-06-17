[Packages Index](../../README.md) / [docusaurus-plugin-typedoc](../README.md) / index

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

| Name        | Type     | Default value |
| ----------- | -------- | ------------- |
| `name`      | `string` | PLUGIN\_NAME  |
| `extendCli` | `void`   | -             |

### Defined in

[docusaurus-plugin-typedoc/src/plugin.ts:13](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/docusaurus-plugin-typedoc/src/plugin.ts#L13)
