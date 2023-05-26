[**typedoc-plugin-markdown - v4.0.0-next.13**](README.md)

---

[typedoc-plugin-markdown](README.md) > theme

# theme

The in-built custom theme and context theme definitions that the plugin initiates.

## MarkdownTheme

This is in-built MarkdownTheme which extends TypeDocs Theme class.
This follows the implementation of TypeDoc's [DefaultTheme](https://typedoc.org/api/classes/DefaultThemeRender.html).

The [render](module.theme.md#render) and [getUrls](module.theme.md#geturls) methods is where the work happens.

### Extends

- [`Theme`](https://typedoc.org/api/classes/Theme.html)

### Constructors

#### constructor()

```ts
new MarkdownTheme(renderer): MarkdownTheme
```

##### Parameters

| Parameter  | Type                                                        | Description                                             |
| :--------- | :---------------------------------------------------------- | :------------------------------------------------------ |
| `renderer` | [`Renderer`](https://typedoc.org/api/classes/Renderer.html) | The TypeDoc renderer instance the theme is attached to. |

##### Returns

[`MarkdownTheme`](module.theme.md#markdowntheme)

##### Overrides

Theme.constructor

### Properties

#### prettierOptions

```ts
private prettierOptions: null | Options
```

The resolved Prettier options.

### Methods

#### getRenderContext()

```ts
getRenderContext(pageEvent): MarkdownThemeRenderContext
```

Returns a render context instance for a page.

##### Parameters

| Parameter   | Type                                                                                                                                                |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageEvent` | `null` \| [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html) \> |

##### Returns

[`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)

---

#### getPrettierOptions()

```ts
private getPrettierOptions(): null | Options
```

Returns memoized [prettierOptions](module.theme.md#prettieroptions) using Prettier APIs to resolve the config.

##### Returns

`null` \| [`Options`](https://prettier.io/docs/en/options.html)

---

#### readmeTemplate()

```ts
readmeTemplate(pageEvent): string
```

##### Parameters

| Parameter   | Type                                                                                                                                                    |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pageEvent` | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) \> |

##### Returns

`string`

---

#### projectTemplate()

```ts
projectTemplate(pageEvent): string
```

##### Parameters

| Parameter   | Type                                                                                                                                                    |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pageEvent` | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) \> |

##### Returns

`string`

---

#### reflectionTemplate()

```ts
reflectionTemplate(pageEvent): string
```

##### Parameters

| Parameter   | Type                                                                                                                                                            |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageEvent` | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \> |

##### Returns

`string`

---

#### memberTemplate()

```ts
memberTemplate(pageEvent): string
```

##### Parameters

| Parameter   | Type                                                                                                                                                            |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageEvent` | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \> |

##### Returns

`string`

---

#### render()

```ts
render(page, template): string
```

Renders a template and page model to a Prettier formatted markdown string.

##### Parameters

| Parameter  | Type                                                                                                                                                                                                                 |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`     | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html) \>                                                                            |
| `template` | [`RenderTemplate`](https://typedoc.org/api/types/RenderTemplate.html)\< [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html) \> \> |

##### Returns

`string`

##### Overrides

Theme.render

---

#### getUrls()

```ts
getUrls(project): UrlMapping< any >[]
```

Maps the models of a project to output files.

##### Parameters

| Parameter | Type                                                                                 |
| :-------- | :----------------------------------------------------------------------------------- |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

##### Returns

[`UrlMapping`](https://typedoc.org/api/classes/UrlMapping.html)\< `any` \>[]

##### Overrides

Theme.getUrls

---

#### getNavigation()

```ts
getNavigation(project): NavigationItem[]
```

##### Parameters

| Parameter | Type                                                                                 |
| :-------- | :----------------------------------------------------------------------------------- |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

##### Returns

[`NavigationItem`](module.theme.md#navigationitem)[]

---

## MarkdownThemeRenderContext

The render context of the [MarkdownTheme](module.theme.md#markdowntheme).
This follows the implementation of TypeDocs [DefaultThemeRenderContext](https://typedoc.org/api/classes/DefaultThemeRenderContext.html)

### Constructors

#### constructor()

```ts
new MarkdownThemeRenderContext(page, options): MarkdownThemeRenderContext
```

##### Parameters

| Parameter | Type                                                                                                                                                |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | `null` \| [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html) \> |
| `options` | [`Options`](https://typedoc.org/api/classes/Options.html)                                                                                           |

##### Returns

[`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)

### Properties

#### page

```ts
page: null | PageEvent<Reflection>;
```

---

#### options

```ts
options: Options;
```

### Methods

#### getOption()

```ts
getOption<K>(name): PluginOptions[K]
```

##### Type parameters

| Parameter                             |
| :------------------------------------ |
| `K` _extends_ _keyof_ `PluginOptions` |

##### Parameters

| Parameter | Type |
| :-------- | :--- |
| `name`    | `K`  |

##### Returns

`PluginOptions`[`K`]

---

#### urlTo()

```ts
urlTo(reflection): null | string
```

##### Parameters

| Parameter    | Type                                                                   |
| :----------- | :--------------------------------------------------------------------- |
| `reflection` | [`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html) |

##### Returns

`null` \| `string`

---

#### relativeURL()

```ts
relativeURL(url): null | string
```

##### Parameters

| Parameter | Type                    |
| :-------- | :---------------------- |
| `url`     | `undefined` \| `string` |

##### Returns

`null` \| `string`

---

#### parseUrl()

```ts
parseUrl(url): string
```

##### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `url`     | `string` |

##### Returns

`string`

---

## UrlOption

### Properties

#### directoryPosition

```ts
directoryPosition: number;
```

---

#### pagePosition

```ts
pagePosition: number;
```

---

#### parentUrl

```ts
optional parentUrl: string
```

---

#### directory

```ts
optional directory: null | string
```

---

#### forceDirectory

```ts
optional forceDirectory: boolean
```

---

## TemplateMapping

### Properties

#### directory

```ts
directory: null | string;
```

---

#### template

```ts
template: any;
```

---

#### kind

```ts
kind: ReflectionKind;
```

---

## NavigationItem

### Properties

#### title

```ts
title: string;
```

---

#### url

```ts
optional url: string
```

---

#### children

```ts
optional children: NavigationItem[]
```

---

#### isReadme

```ts
optional isReadme: boolean
```

---

#### isGroup

```ts
optional isGroup: boolean
```

---

## NavigationBuilder

### Constructors

#### constructor()

```ts
new NavigationBuilder(options): NavigationBuilder
```

##### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `options` | [`Options`](https://typedoc.org/api/classes/Options.html) |

##### Returns

[`NavigationBuilder`](module.theme.md#navigationbuilder)

### Properties

#### navigation

```ts
navigation: NavigationItem[]  = []
```

---

#### options

```ts
options: Options;
```

### Methods

#### getNavigation()

```ts
getNavigation(project): NavigationItem[]
```

##### Parameters

| Parameter | Type                                                                                 |
| :-------- | :----------------------------------------------------------------------------------- |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

##### Returns

[`NavigationItem`](module.theme.md#navigationitem)[]

---

#### getGroupChildren()

```ts
getGroupChildren(group): any
```

##### Parameters

| Parameter | Type                                                                             |
| :-------- | :------------------------------------------------------------------------------- |
| `group`   | [`ReflectionGroup`](https://typedoc.org/api/classes/Models.ReflectionGroup.html) |

##### Returns

`any`

---

#### getChildrenOrGroups()

```ts
getChildrenOrGroups(reflection): any
```

##### Parameters

| Parameter    | Type                                                                                         |
| :----------- | :------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`any`

---

## UrlBuilder

### Constructors

#### constructor()

```ts
new UrlBuilder(theme, options): UrlBuilder
```

##### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `theme`   | [`MarkdownTheme`](module.theme.md#markdowntheme)          |
| `options` | [`Options`](https://typedoc.org/api/classes/Options.html) |

##### Returns

[`UrlBuilder`](module.theme.md#urlbuilder)

### Properties

#### urls

```ts
urls: UrlMapping< any >[]  = []
```

---

#### anchors

```ts
anchors: string[]  = []
```

---

#### theme

```ts
theme: MarkdownTheme;
```

---

#### options

```ts
options: Options;
```

### Methods

#### getUrls()

```ts
getUrls(project): UrlMapping< any >[]
```

Map the models of the given project to the desired output files.
Based on TypeDoc DefaultTheme.getUrls()

##### Parameters

| Parameter | Type                                                                                 | Description                                 |
| :-------- | :----------------------------------------------------------------------------------- | :------------------------------------------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) | The project whose urls should be generated. |

##### Returns

[`UrlMapping`](https://typedoc.org/api/classes/UrlMapping.html)\< `any` \>[]

---

#### buildUrlsFromProject()

```ts
private buildUrlsFromProject(project, parentUrl?): void
```

##### Parameters

| Parameter    | Type                                                                                                                                                                                 | Description |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| `project`    | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |             |
| `parentUrl`? | `string`                                                                                                                                                                             | -           |

##### Returns

`void`

---

#### buildUrlsFromGroup()

```ts
private buildUrlsFromGroup(reflection, options): void
```

##### Parameters

| Parameter    | Type                                                                                         |
| :----------- | :------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`    | [`UrlOption`](module.theme.md#urloption)                                                     |

##### Returns

`void`

---

#### getUrl()

```ts
private getUrl(reflection, options): string
```

##### Parameters

| Parameter    | Type                                                                                         |
| :----------- | :------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`    | [`UrlOption`](module.theme.md#urloption)                                                     |

##### Returns

`string`

---

#### applyAnchorUrl()

```ts
private applyAnchorUrl(reflection, container): void
```

##### Parameters

| Parameter    | Type                                                                                         |
| :----------- | :------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `container`  | [`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)                       |

##### Returns

`void`

---

#### getAnchorId()

```ts
private getAnchorId(reflection): string
```

##### Parameters

| Parameter    | Type                                                                                         |
| :----------- | :------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`string`

---

#### getPartName()

```ts
private getPartName(part, position): string
```

##### Parameters

| Parameter  | Type     |
| :--------- | :------- |
| `part`     | `string` |
| `position` | `number` |

##### Returns

`string`

---

#### childrenIncludeNamespaces()

```ts
private childrenIncludeNamespaces(reflection): undefined | boolean
```

##### Parameters

| Parameter    | Type                                                                                         |
| :----------- | :------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`undefined` \| `boolean`

---

#### getTemplateMapping()

```ts
private getTemplateMapping(kind): TemplateMapping
```

Returns the template mapping for a given reflection kind

##### Parameters

| Parameter | Type             | Description |
| :-------- | :--------------- | :---------- |
| `kind`    | `ReflectionKind` |             |

##### Returns

[`TemplateMapping`](module.theme.md#templatemapping)
