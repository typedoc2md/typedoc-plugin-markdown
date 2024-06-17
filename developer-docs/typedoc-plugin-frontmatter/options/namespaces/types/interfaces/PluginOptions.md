[Packages Index](../../../../../README.md) / [typedoc-plugin-frontmatter](../../../../README.md) / [options](../../../README.md) / [types](../README.md) / PluginOptions

# Interface: PluginOptions

Describes the options declared by the plugin.

## Properties

| Property                         | Type                                          | Description                                                      |
| -------------------------------- | --------------------------------------------- | ---------------------------------------------------------------- |
| `frontmatterCommentTags`         | `any`\[]                                      | Specify which comment block tags should be added to frontmatter. |
| `frontmatterGlobals`             | [`FrontmatterGlobals`](FrontmatterGlobals.md) | Specify static variables to be added to all frontmatter blocks.  |
| `frontmatterNamingConvention`    | `"camelCase"` \| `"snakeCase"`                | The naming convention that variables should be output as.        |
| `indexFrontmatter`               | [`IndexFrontmatter`](IndexFrontmatter.md)     | Specify static variables to be added to the index page only.     |
| `preserveFrontmatterCommentTags` | `boolean`                                     | Preserve tags defined in frontmatter block tags in output.       |
| `readmeFrontmatter`              | [`ReadmeFrontmatter`](ReadmeFrontmatter.md)   | Specify static variables to be added to the readme page only.    |
