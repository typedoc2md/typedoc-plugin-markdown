# Front matter

## Adding front matter to output

The `--enableFrontmatter` option will prepend a simple YAML fron tmatter block to the page containing the page title.

```
---
title: "someModule"
---
```

## Extending front matter

Further front matter variables can be added globally or by using comment tags.

### Comment tags

Tags added to comment within a [@module tag block](https://typedoc.org/tags/module/) can be marked for exporting to the front matter variables by using the `--frontmatterTags` option.

For example, to mark `author` and description `tags` as fron tmatter would be accomplished by:

```
--frontmatterTags author --frontmaterTags description
```

or if using JSON config:

```json
frontMatterTags: ["author","description"]
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

### Setting default variables

Static variables to be added to all front matter blocks can be specified by passing key/values as an object to the `--frontmatterGlobals` option.

The following block comment:

```
frontmatterGlobals: {
  layout: 'docs'
}
```

Will result in the following front matter with the defaults added to each block.

```
---
title: "someModule"
layout: "docs"
---
```
