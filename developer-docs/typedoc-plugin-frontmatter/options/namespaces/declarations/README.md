[Packages Index](../../../../README.md) / [typedoc-plugin-frontmatter](../../../README.md) / [options](../../README.md) / declarations

# declarations

## Contents

* [frontmatterGlobals](#frontmatterglobals)
* [readmeFrontmatter](#readmefrontmatter)
* [indexFrontmatter](#indexfrontmatter)
* [frontmatterCommentTags](#frontmattercommenttags)
* [preserveFrontmatterCommentTags](#preservefrontmattercommenttags)
* [frontmatterNamingConvention](#frontmatternamingconvention)

## frontmatterGlobals

> `const` **frontmatterGlobals**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

```yaml filename="YAML"
---
layout: docs
sidebar: true
---
```

### Example

```ts
{"layout": "docs", "sidebar": true }
```

### Default Value

```ts
{
    help: 'Specify static variables to be added to all frontmatter blocks.',
    type: ParameterType.Mixed,
    defaultValue: {},
}
```

### Defined in

[options/declarations.ts:15](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-frontmatter/src/options/declarations.ts#L15)

***

## readmeFrontmatter

> `const` **readmeFrontmatter**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

### Example

```ts
{"onReadme": "true" }
```

### Default Value

```ts
{
    help: 'Specify static variables to be added to the readme page only.',
    type: ParameterType.Mixed,
    defaultValue: {},
}
```

### Defined in

[options/declarations.ts:24](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-frontmatter/src/options/declarations.ts#L24)

***

## indexFrontmatter

> `const` **indexFrontmatter**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

### Example

```ts
{"onIndex": "true" }
```

### Default Value

```ts
{
    help: 'Specify static variables to be added to the index page only.',
    type: ParameterType.Mixed,
    defaultValue: {},
}
```

### Defined in

[options/declarations.ts:33](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-frontmatter/src/options/declarations.ts#L33)

***

## frontmatterCommentTags

> `const` **frontmatterCommentTags**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

Frontmatter variables can be added by extracting comments from block (@) tags.

Please note tags must be added to the comment blocks of the symbol exported to a page.

```ansi filename="Block Tags (someModule.ts)"
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
```

### Example

```ts
["author", "description"]
```

### Default Value

```ts
{
    help: 'Specify which comment block tags should be added to frontmatter.',
    type: ParameterType.Array,
}
```

### Defined in

[options/declarations.ts:61](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-frontmatter/src/options/declarations.ts#L61)

***

## preserveFrontmatterCommentTags

> `const` **preserveFrontmatterCommentTags**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

### Default Value

```ts
{
    help: 'Preserve tags defined in frontmatter block tags in output.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

### Defined in

[options/declarations.ts:66](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-frontmatter/src/options/declarations.ts#L66)

***

## frontmatterNamingConvention

> `const` **frontmatterNamingConvention**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

Block tags have to be written in camelCase (see [tsdoc.org](https://tsdoc.org/pages/spec/tag_kinds)).

This option can configure the output style of frontmatter variables when written to YAML.

### Default Value

```ts
{
    help: 'The naming convention that variables should be output as. ',
    type: ParameterType.Map,
    map: FrontmatterNamingConvention,
    defaultValue: FrontmatterNamingConvention.CamelCase,
}
```

### Defined in

[options/declarations.ts:77](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-frontmatter/src/options/declarations.ts#L77)
