# Front matter

- [Adding front matter to output](#adding-front-matter-to-output)
- [Setting global variables](#setting-global-variables)
- [Extending front matter with comment tags](#extending-front-matter-with-comment-tags)
- [Front matter variable naming convention](#front-matter-variable-naming-convention)

## Adding front matter to output

The `--enableFrontmatter` option will prepend a simple YAML front matter block to the page containing the page title.

```
---
title: "someModule"
---
```

## Setting global variables

Global variables can be added to all front matter blocks by passing key/values as an object to the `--frontmatterGlobals` option.

For example, to set `layout` as a global front matter variable would be accomplished by:

```shell
--frontmatterGlobals '{\"layout\":\"docs\"}'
```

or if using JSON config:

```json
{
  "frontmatterGlobals": {
    "layout": "docs"
  }
}
```

Result on each file:

```
---
title: "someModule"
layout: "docs"
---
```

## Extending front matter with comment tags

Further front matter variables can be added globally or by using comment tags.

Tags added to comment blocks within can be marked for exporting to the front matter variables by using the `--frontmatterTags` option.

For example, to mark "author" and "description" tags as front matter would be accomplished by:

```shell
--frontmatterTags author --frontmaterTags description
```

or if using JSON config:

```json
{
  "frontmatterTags": ["author", "description"]
}
```

The following block comment:

```
/**
 * @modue
 *
 * @author Joe Bloggs
 *
 * @description A description that will be added to front matter.
 *
**/
```

Will result in the following front matter:

```
---
title: "someModule"
author: "Joe Bloggs"
description: "A description that will be added to front matter."
---
```

If tags are not intended to be rendered in the output they should be marked as modifier tags:

```json
{
  "modifierTags": ["@author", "@description"]
}
```

## Front matter variable naming convention

Tag names must be written using “camelCase” capitalization. However this may not be the desired front matter variable naming convention.

To render the front matter variables in the desired naming convention use the `--frontmatterNamingConvention` options that accepts `snakeCase` `kebabCase` or `pascalCase`.

```shell
--frontmatterNamingConvention snakeCase
```

or if using JSON config:

```json
{
  "frontmatterNamingConvention": "snakeCase"
}
```

The following block comment:

```
/**
* @navOrder 1
**/
```

Will result in the following front matter:

```
---
nav_order: 1
---
```
