# Frontmatter Options

## Contents

*   [frontmatterVars](#frontmattervars)
*   [frontmatterDocTags](#frontmatterdoctags)
*   [frontmatterFormat](#frontmatterformat)

## frontmatterVars

**`string`**

Specify static variables to be added to all frontmatter.

```json
{
  frontmatterVars: "[object Object]"
}  
```

## frontmatterDocTags

**`any[]`**

Specify which file comment tags should be added to frontmatter.

```json
{
  frontmatterDocTags: ""
}  
```

## frontmatterFormat

**`boolean`**

Jsdoc tags cannot be snake case. Tags by default must be camelCase

```json
{
  frontmatterFormat: "false"
}  
```
