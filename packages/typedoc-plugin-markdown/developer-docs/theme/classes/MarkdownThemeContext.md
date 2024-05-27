[typedoc-plugin-markdown v4.0.3](../../README.md) / [theme](../README.md) / MarkdownThemeContext

# Class: MarkdownThemeContext

The theme context class that is provided as context on the rendering of every page.

## Table of Contents

* [Example](#example)
* [Constructors](#constructors)
* [Methods](#methods)
* [Properties](#properties)
* [Resources](#resources)

## Remarks

It is heavily influenced by the equivalent [DefaultThemeRenderContext](https://typedoc.org/api/classes/DefaultThemeRenderContext.html) from the default theme.

This class can be used to customize the theme output by extending the class and overriding the templates, partials and helpers.

## Example

```ts
class MyMarkdownTheme extends MarkdownTheme {
  getRenderContext(page) {
    return new MyMarkdownThemeContext(this, page, this.application.options);
  }
}
```

## Constructors

### new MarkdownThemeContext()

```ts
new MarkdownThemeContext(
   theme, 
   page, 
   options): MarkdownThemeContext
```

#### Parameters

| Parameter | Type                                                                                                                                                     | Description                              |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `theme`   | [`MarkdownTheme`](MarkdownTheme.md)                                                                                                                      | The theme instance.                      |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)> | The current page event.                  |
| `options` | [`Options`](https://typedoc.org/api/classes/Configuration.Options.html)                                                                                  | The options provided to the application. |

#### Returns

[`MarkdownThemeContext`](MarkdownThemeContext.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:56](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L56)

## Methods

General context aware helper methods not bound to any specific models that can be used by the theme resources.

### getPackageMetaData()

```ts
getPackageMetaData(packageName): PackageMetaData
```

Returns the package meta data for a given package name when entrypointStrategy is set to `packages`.

#### Parameters

| Parameter     | Type     | Description                                               |
| ------------- | -------- | --------------------------------------------------------- |
| `packageName` | `string` | The package name as per `name` field from `package.json`. |

#### Returns

[`PackageMetaData`](../namespaces/types/interfaces/PackageMetaData.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:108](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L108)

***

### getRelativeUrl()

```ts
getRelativeUrl(url, ignorePublicPath): string
```

Returns the relative URL (from the current page context url).

If public path is set, it will be used as the base URL.

#### Parameters

| Parameter          | Type      | Default value | Description                        |
| ------------------ | --------- | ------------- | ---------------------------------- |
| `url`              | `string`  | `undefined`   | The URL to make relative.          |
| `ignorePublicPath` | `boolean` | `false`       | Whether to ignore the public path. |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:120](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L120)

***

### hook()

`Internal`

```ts
hook(name): string[]
```

Hook into the TypeDoc rendering system.

#### Parameters

| Parameter | Type                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------- |
| `name`    | keyof [`MarkdownRendererHooks`](../../app/namespaces/types/interfaces/MarkdownRendererHooks.md) |

#### Returns

`string`\[]

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:150](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L150)

## Properties

Properties are passed into the constructor and are used to provide context to the theme.

### internationalization

```ts
internationalization: Internationalization;
```

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:50](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L50)

***

### i18n

```ts
i18n: TranslationProxy;
```

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:51](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L51)

***

### page

```ts
readonly page: MarkdownPageEvent<Reflection>;
```

The current page event.

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:64](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L64)

***

### options

```ts
readonly options: Options;
```

The options provided to the application.

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:68](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L68)

## Resources

Theme resources are the main building blocks for the theme context. They are split into three namespaces: `templates`, `partials` and `helpers`.

### templates

```ts
templates: object = ...;
```

#### See

[templates](../namespaces/context/namespaces/templates/README.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:87](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L87)

***

### partials

```ts
partials: object = ...;
```

#### See

[partials](../namespaces/context/namespaces/partials/README.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:94](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L94)

***

### helpers

```ts
helpers: object = ...;
```

#### See

[helpers](../namespaces/context/namespaces/helpers/README.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:101](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L101)
