[Home](../../README.md) / [docusaurus-plugin-typedoc](../README.md) / index

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

[docusaurus-plugin-typedoc/src/plugin.ts:13](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/7934b23566f374f44fe6de5fd9240ab185bf799f/packages/docusaurus-plugin-typedoc/src/plugin.ts#L13)
