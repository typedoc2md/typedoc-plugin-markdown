[Developer Guide](../../../../README.md) / [typedoc-plugin-frontmatter](../../../README.md) / [options](../../README.md) / declarations

# declarations

Typedoc options declarations.

## Variables

### frontmatterGlobals

> `const` **frontmatterGlobals**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)\>

Defined in: [options/declarations.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/options/declarations.ts#L21)

```yaml filename="YAML"
---
layout: docs
sidebar: true
---
```

#### Example

```ts
{"layout": "docs", "sidebar": true }
```

#### Initializer

```ts
{
    help: 'Specify static variables to be added to all frontmatter blocks.',
    type: ParameterType.Object,
    defaultValue: {},
    validate(value) {
        if (typeof value !== 'object') {
            throw new Error('[typedoc-plugin-frontmatter] frontmatterGlobals must be an object.');
        }
    },
}
```

***

### readmeFrontmatter

> `const` **readmeFrontmatter**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)\>

Defined in: [options/declarations.ts:37](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/options/declarations.ts#L37)

#### Example

```ts
{"onReadme": "true" }
```

#### Initializer

```ts
{
    help: 'Specify static variables to be added to the readme page only.',
    type: ParameterType.Object,
    defaultValue: {},
    validate(value) {
        if (typeof value !== 'object') {
            throw new Error('[typedoc-plugin-frontmatter] readmeFrontmatter must be an object.');
        }
    },
}
```

***

### indexFrontmatter

> `const` **indexFrontmatter**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)\>

Defined in: [options/declarations.ts:53](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/options/declarations.ts#L53)

#### Example

```ts
{"onIndex": "true" }
```

#### Initializer

```ts
{
    help: 'Specify static variables to be added to the index page only.',
    type: ParameterType.Object,
    defaultValue: {},
    validate(value) {
        if (typeof value !== 'object') {
            throw new Error('[typedoc-plugin-frontmatter] indexFrontmatter must be an object.');
        }
    },
}
```

***

### frontmatterCommentTags

> `const` **frontmatterCommentTags**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)\>

Defined in: [options/declarations.ts:88](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/options/declarations.ts#L88)

Frontmatter variables can be added by extracting comments from block (@) tags.

Please note tags must be added to the comment blocks of the symbol exported to a page.

 ```ts filename="Block Tags (someModule.ts)"
 /**
 * \@author Joe Bloggs
 *
 * \@description A description that will be added to frontmatter.
 */
 ```

```yaml filename="YAML (someModule.md)"
---
author: Joe Bloggs
description: A description that will be added to frontmatter.
---
````

@example ["author", "description"]

#### Initializer

```ts
{
    help: 'Specify which comment block tags should be added to frontmatter.',
    type: ParameterType.Array,
}
```

***

### preserveFrontmatterCommentTags

> `const` **preserveFrontmatterCommentTags**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)\>

Defined in: [options/declarations.ts:93](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/options/declarations.ts#L93)

#### Initializer

```ts
{
    help: 'Preserve tags defined in frontmatter block tags in output.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

***

### frontmatterNamingConvention

> `const` **frontmatterNamingConvention**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)\>

Defined in: [options/declarations.ts:104](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-frontmatter/src/options/declarations.ts#L104)

Block tags have to be written in camelCase (see [tsdoc.org](https://tsdoc.org/pages/spec/tag_kinds)).

This option can configure the output style of frontmatter variables when written to YAML.

#### Initializer

```ts
{
    help: 'The naming convention that variables should be output as. ',
    type: ParameterType.Map,
    map: FrontmatterNamingConvention,
    defaultValue: FrontmatterNamingConvention.CamelCase,
}
```
