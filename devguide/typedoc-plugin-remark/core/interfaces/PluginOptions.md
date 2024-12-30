[Developer Guide](../../../README.md) / [typedoc-plugin-remark](../../README.md) / [core](../README.md) / PluginOptions

# Interface: PluginOptions

Defined in: [types/options.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-remark/src/types/options.ts#L7)

Describes the options declared by the plugin.

## Properties

### defaultRemarkPlugins

> **defaultRemarkPlugins**: `object`

Defined in: [types/options.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-remark/src/types/options.ts#L11)

A set of flags that control the enabling or disabling of remark plugins that are loaded by default.

#### gfm

> **gfm**: `boolean`

#### frontmatter

> **frontmatter**: `boolean`

#### mdx

> **mdx**: `boolean`

***

### remarkPlugins

> **remarkPlugins**: [`RemarkPlugin`](../../types/README.md#remarkplugin)[]

Defined in: [types/options.ts:16](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-remark/src/types/options.ts#L16)

An array of remark plugin names to be executed.

***

### remarkStringifyOptions

> **remarkStringifyOptions**: `Record`\<`string`, `any`\>

Defined in: [types/options.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-remark/src/types/options.ts#L21)

Custom options for the remark-stringify plugin.
