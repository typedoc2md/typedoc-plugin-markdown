[typedoc-plugin-markdown v4.0.3](../../../../../README.md) / [theme](../../../../README.md) / [context](../../README.md) / templates

# Namespace: templates

Then `templates` namespace holds the main templates for the theme and are mapped to single pages and configured in the MarkdownTheme.

All templates return a string that is passed back to the renderer. Internally templates call partials and helpers.

## Table of Contents

* [document()](#document)
* [project()](#project)
* [readme()](#readme)
* [reflection()](#reflection)

## document()

```ts
function document(this, page): string
```

Template that maps to a project document.

### Parameters

| Parameter | Type                                                                                                            |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                                           |
| `page`    | [`MarkdownPageEvent`](../../../../../app/namespaces/events/classes/MarkdownPageEvent.md)\<`DocumentReflection`> |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/templates/document.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/templates/document.ts#L8)

***

## project()

```ts
function project(this, page): string
```

Template that maps to the root project reflection. This will be the index page / documentation root page.

### Parameters

| Parameter | Type                                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                                                                                                           |
| `page`    | [`MarkdownPageEvent`](../../../../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)> |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/templates/project.ts:14](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/templates/project.ts#L14)

***

## readme()

```ts
function readme(this, page): string
```

Template that specifically maps to the resolved readme file. This template is not used when 'readme' is set to 'none'.

### Parameters

| Parameter | Type                                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                                                                                                           |
| `page`    | [`MarkdownPageEvent`](../../../../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)> |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/templates/read-me.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/templates/read-me.ts#L8)

***

## reflection()

```ts
function reflection(this, page): string
```

Template that maps to individual reflection models.

### Parameters

| Parameter | Type                                                                                                                                                                                    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                                                                                                                   |
| `page`    | [`MarkdownPageEvent`](../../../../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)> |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/templates/reflection.ts:9](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/templates/reflection.ts#L9)
