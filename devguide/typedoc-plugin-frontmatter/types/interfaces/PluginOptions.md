[Developer Guide](../../../README.md) / [typedoc-plugin-frontmatter](../../README.md) / [types](../README.md) / PluginOptions

# Interface: PluginOptions

Describes the options declared by the plugin.

## Properties

### frontmatterCommentTags

> **frontmatterCommentTags**: `string`\[]

Specify which comment block tags should be added to frontmatter.

#### Defined in

[types/options.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/types/options.ts#L11)

***

### frontmatterGlobals

> **frontmatterGlobals**: [`FrontmatterGlobals`](FrontmatterGlobals.md)

Specify static variables to be added to all frontmatter blocks.

#### Defined in

[types/options.ts:16](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/types/options.ts#L16)

***

### frontmatterNamingConvention

> **frontmatterNamingConvention**: `"camelCase"` | `"snakeCase"`

The naming convention that variables should be output as.

#### Defined in

[types/options.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/types/options.ts#L21)

***

### indexFrontmatter

> **indexFrontmatter**: [`IndexFrontmatter`](IndexFrontmatter.md)

Specify static variables to be added to the index page only.

#### Defined in

[types/options.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/types/options.ts#L26)

***

### preserveFrontmatterCommentTags

> **preserveFrontmatterCommentTags**: `boolean`

Preserve tags defined in frontmatter block tags in output.

#### Defined in

[types/options.ts:31](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/types/options.ts#L31)

***

### readmeFrontmatter

> **readmeFrontmatter**: [`ReadmeFrontmatter`](ReadmeFrontmatter.md)

Specify static variables to be added to the readme page only.

#### Defined in

[types/options.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/types/options.ts#L36)
