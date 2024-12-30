[Developer Guide](../../README.md) / [typedoc-plugin-frontmatter](../README.md) / tags

# tags

Functionality to map options to tags.

## Functions

### getResolvedTags()

> **getResolvedTags**(`app`, `comment`?): `object`

Defined in: [tags.ts:10](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/tags.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `app` | [`MarkdownApplication`](../../typedoc-plugin-markdown/types/interfaces/MarkdownApplication.md) |
| `comment`? | [`Comment`](https://typedoc.org/api/classes/Models.Comment.html) |

#### Returns

`object`

***

### getFrontmatterTags()

> **getFrontmatterTags**(`comment`, `frontmatterTags`, `namingConvention`): `object`

Defined in: [tags.ts:34](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/tags.ts#L34)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `comment` | [`Comment`](https://typedoc.org/api/classes/Models.Comment.html) |
| `frontmatterTags` | `string`[] |
| `namingConvention` | [`FrontmatterNamingConvention`](../options/namespaces/maps/README.md#frontmatternamingconvention) |

#### Returns

`object`
