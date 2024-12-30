[Developer Guide](../../../README.md) / [typedoc-plugin-frontmatter](../../README.md) / [core](../README.md) / PluginOptions

# Interface: PluginOptions

Defined in: [types/options.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/types/options.ts#L7)

Describes the options declared by the plugin.

## Properties

### frontmatterCommentTags

> **frontmatterCommentTags**: `string`[]

Defined in: [types/options.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/types/options.ts#L11)

Specify which comment block tags should be added to frontmatter.

***

### frontmatterGlobals

> **frontmatterGlobals**: `Record`\<`string`, `any`\>

Defined in: [types/options.ts:16](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/types/options.ts#L16)

Specify static variables to be added to all frontmatter blocks.

***

### frontmatterNamingConvention

> **frontmatterNamingConvention**: `"camelCase"` \| `"snakeCase"`

Defined in: [types/options.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/types/options.ts#L21)

The naming convention that variables should be output as.

***

### indexFrontmatter

> **indexFrontmatter**: `Record`\<`string`, `any`\>

Defined in: [types/options.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/types/options.ts#L26)

Specify static variables to be added to the index page only.

***

### preserveFrontmatterCommentTags

> **preserveFrontmatterCommentTags**: `boolean`

Defined in: [types/options.ts:31](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/types/options.ts#L31)

Preserve tags defined in frontmatter block tags in output.

***

### readmeFrontmatter

> **readmeFrontmatter**: `Record`\<`string`, `any`\>

Defined in: [types/options.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/types/options.ts#L36)

Specify static variables to be added to the readme page only.
