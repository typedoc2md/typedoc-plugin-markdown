# MarkdownThemeContext

The theme context class that is provided as context on the rendering of every page.

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

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `theme` | [`MarkdownTheme`](/api-docs/Class.MarkdownTheme.md) | The theme instance. |
| `page` | [`MarkdownPageEvent`](/api-docs/Class.MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)\> | The current page event. |
| `options` | [`Options`](https://typedoc.org/api/classes/Configuration.Options.html) | The options provided to the application. |

#### Returns

[`MarkdownThemeContext`](/api-docs/Class.MarkdownThemeContext.md)

## Properties

Properties are passed into the constructor and are used to provide context to the theme.

### internationalization

```ts
internationalization: Internationalization;
```

***

### i18n

```ts
i18n: TranslationProxy;
```

***

### page

```ts
readonly page: MarkdownPageEvent<Reflection>;
```

The current page event.

***

### options

```ts
readonly options: Options;
```

The options provided to the application.

## Methods

General context aware helper methods not bound to any specific models that can be used by the theme resources.

### getPackageMetaData()

```ts
getPackageMetaData(packageName): PackageMetaData
```

Returns the package meta data for a given package name when entrypointStrategy is set to `packages`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `packageName` | `string` | The package name as per `name` field from `package.json`. |

#### Returns

[`PackageMetaData`](/api-docs/Interface.PackageMetaData.md)

***

### getRelativeUrl()

```ts
getRelativeUrl(url, ignorePublicPath): string
```

Returns the relative URL (from the current page context url).

If public path is set, it will be used as the base URL.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to make relative. |
| `ignorePublicPath` | `boolean` | Whether to ignore the public path. |

#### Returns

`string`

## Resources

Theme resources are the main building blocks for the theme context. They are split into three namespaces: `templates`, `partials` and `helpers`.

### templates

```ts
templates: {} = ...;
```

#### See

theme.context.templates templates

***

### partials

```ts
partials: {} = ...;
```

#### See

theme.context.partials partials

***

### helpers

```ts
helpers: {} = ...;
```

#### See

theme.context.helpers helpers
