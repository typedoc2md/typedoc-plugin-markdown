[Developer Guide](../../README.md) / [typedoc-plugin-frontmatter](../README.md) / tags

# tags

Functionality to map options to tags.

## Contents

* [getResolvedTags()](#getresolvedtags)
* [getFrontmatterTags()](#getfrontmattertags)

## getResolvedTags()

> **getResolvedTags**(`app`, `comment`?): `object`

### Parameters

| Parameter  | Type                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------- |
| `app`      | [`MarkdownApplication`](../../typedoc-plugin-markdown/types/interfaces/MarkdownApplication.md) |
| `comment`? | [`Comment`](https://typedoc.org/api/classes/Models.Comment.html)                               |

### Returns

`object`

### Defined in

[tags.ts:10](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/tags.ts#L10)

***

## getFrontmatterTags()

> **getFrontmatterTags**(`comment`, `frontmatterTags`, `namingConvention`): `object`

### Parameters

| Parameter          | Type                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| `comment`          | [`Comment`](https://typedoc.org/api/classes/Models.Comment.html)                                        |
| `frontmatterTags`  | `string`\[]                                                                                             |
| `namingConvention` | [`FrontmatterNamingConvention`](../options/namespaces/maps/enumerations/FrontmatterNamingConvention.md) |

### Returns

`object`

### Defined in

[tags.ts:34](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/tags.ts#L34)
