[Packages Index](../../../../../README.md) / [typedoc-plugin-frontmatter](../../../../README.md) / [options](../../../README.md) / [types](../README.md) / PluginOptions

# Interface: PluginOptions

Describes the options declared by the plugin.

## Contents

* [Properties](#properties)
  * [frontmatterCommentTags](#frontmattercommenttags)
  * [frontmatterGlobals](#frontmatterglobals)
  * [frontmatterNamingConvention](#frontmatternamingconvention)
  * [indexFrontmatter](#indexfrontmatter)
  * [preserveFrontmatterCommentTags](#preservefrontmattercommenttags)
  * [readmeFrontmatter](#readmefrontmatter)

## Properties

### frontmatterCommentTags

> **frontmatterCommentTags**: `any`\[]

Specify which comment block tags should be added to frontmatter.

#### Defined in

[options/types.ts:16](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-frontmatter/src/options/types.ts#L16)

***

### frontmatterGlobals

> **frontmatterGlobals**: [`FrontmatterGlobals`](FrontmatterGlobals.md)

Specify static variables to be added to all frontmatter blocks.

#### Defined in

[options/types.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-frontmatter/src/options/types.ts#L21)

***

### frontmatterNamingConvention

> **frontmatterNamingConvention**: `"camelCase"` | `"snakeCase"`

The naming convention that variables should be output as.

#### Defined in

[options/types.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-frontmatter/src/options/types.ts#L26)

***

### indexFrontmatter

> **indexFrontmatter**: [`IndexFrontmatter`](IndexFrontmatter.md)

Specify static variables to be added to the index page only.

#### Defined in

[options/types.ts:31](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-frontmatter/src/options/types.ts#L31)

***

### preserveFrontmatterCommentTags

> **preserveFrontmatterCommentTags**: `boolean`

Preserve tags defined in frontmatter block tags in output.

#### Defined in

[options/types.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-frontmatter/src/options/types.ts#L36)

***

### readmeFrontmatter

> **readmeFrontmatter**: [`ReadmeFrontmatter`](ReadmeFrontmatter.md)

Specify static variables to be added to the readme page only.

#### Defined in

[options/types.ts:41](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-frontmatter/src/options/types.ts#L41)
