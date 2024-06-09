[Packages Index](../../../../README.md) / [typedoc-plugin-frontmatter](../../../README.md) / [app](../../README.md) / tags

# tags

## Contents

* [Functions](#functions)
  * [getResolvedTags()](#getresolvedtags)
  * [getFrontmatterTags()](#getfrontmattertags)

## Functions

### getResolvedTags()

> **getResolvedTags**(`app`, `comment`?): `object`

#### Parameters

| Parameter  | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| `app`      | [`Application`](https://typedoc.org/api/classes/Application.html) |
| `comment`? | [`Comment`](https://typedoc.org/api/types/Models.Comment.html)    |

#### Returns

`object`

#### Defined in

[app/tags.ts:4](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-frontmatter/src/app/tags.ts#L4)

***

### getFrontmatterTags()

> **getFrontmatterTags**(`comment`, `frontmatterTags`, `namingConvention`): `object`

#### Parameters

| Parameter          | Type                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| `comment`          | [`Comment`](https://typedoc.org/api/types/Models.Comment.html)                                                |
| `frontmatterTags`  | `string`\[]                                                                                                   |
| `namingConvention` | [`FrontmatterNamingConvention`](../../../options/namespaces/maps/enumerations/FrontmatterNamingConvention.md) |

#### Returns

`object`

#### Defined in

[app/tags.ts:28](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-frontmatter/src/app/tags.ts#L28)
