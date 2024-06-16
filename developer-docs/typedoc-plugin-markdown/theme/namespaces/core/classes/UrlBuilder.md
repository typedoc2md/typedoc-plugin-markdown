[Packages Index](../../../../../README.md) / [typedoc-plugin-markdown](../../../../README.md) / [theme](../../../README.md) / [core](../README.md) / UrlBuilder

# Class: UrlBuilder

Map the models of the given project to the desired output files.
Based on TypeDoc DefaultTheme.getUrls()

## Contents

* [Param](#param)
* [Constructors](#constructors)
  * [new UrlBuilder()](#new-urlbuilder)
* [Properties](#properties)
  * [options](#options)
  * [packagesMeta](#packagesmeta)
  * [fileExtension](#fileextension)
  * [ignoreScopes](#ignorescopes)
  * [entryFileName](#entryfilename)
  * [isPackages](#ispackages)
  * [flattenOutputFiles](#flattenoutputfiles)
  * [urls](#urls)
  * [anchors](#anchors)
  * [theme](#theme)
  * [project](#project)
* [Methods](#methods)
  * [getUrls()](#geturls)
  * [buildEntryUrls()](#buildentryurls)
  * [buildUrlsFromProject()](#buildurlsfromproject)
  * [buildUrlsFromPackage()](#buildurlsfrompackage)
  * [buildUrlsForDocument()](#buildurlsfordocument)
  * [buildUrlsFromGroup()](#buildurlsfromgroup)
  * [getUrl()](#geturl)
  * [getFlattenedUrl()](#getflattenedurl)
  * [getAlias()](#getalias)
  * [getUrlPath()](#geturlpath)
  * [traverseChildren()](#traversechildren)
  * [applyAnchorUrl()](#applyanchorurl)
  * [getAnchorId()](#getanchorid)
  * [getAnchorName()](#getanchorname)
  * [moduleHasSubfolders()](#modulehassubfolders)
  * [getIndexFileName()](#getindexfilename)

## Param

The project whose urls should be generated.

## Constructors

### new UrlBuilder()

> **new UrlBuilder**(`theme`, `project`): [`UrlBuilder`](UrlBuilder.md)

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `theme`   | [`MarkdownTheme`](../../../classes/MarkdownTheme.md)                                 |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`UrlBuilder`](UrlBuilder.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L40)

## Properties

### options

> `private` **options**: [`Options`](https://typedoc.org/api/classes/Configuration.Options.html)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:30](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L30)

***

### packagesMeta

> `private` **packagesMeta**: `any`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:31](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L31)

***

### fileExtension

> `private` **fileExtension**: `string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:32](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L32)

***

### ignoreScopes

> `private` **ignoreScopes**: `boolean`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:33](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L33)

***

### entryFileName

> `private` **entryFileName**: `string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:34](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L34)

***

### isPackages

> `private` **isPackages**: `boolean`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:35](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L35)

***

### flattenOutputFiles

> `private` **flattenOutputFiles**: `boolean`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L36)

***

### urls

> `private` **urls**: [`UrlMapping`](../../types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>\[]

#### Default Value

```ts
[]
```

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:37](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L37)

***

### anchors

> `private` **anchors**: `Record`\<`string`, `string`\[]>

#### Default Value

```ts
{}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:38](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L38)

***

### theme

> **theme**: [`MarkdownTheme`](../../../classes/MarkdownTheme.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:41](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L41)

***

### project

> **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:42](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L42)

## Methods

### getUrls()

> **getUrls**(): [`UrlMapping`](../../types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>\[]

#### Returns

[`UrlMapping`](../../types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>\[]

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:65](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L65)

***

### buildEntryUrls()

> `private` **buildEntryUrls**(): `void`

#### Returns

`void`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:83](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L83)

***

### buildUrlsFromProject()

> `private` **buildUrlsFromProject**(`project`, `parentUrl`?, `outputFileStrategy`?, `entryModule`?, `entryFileName`?): `void`

#### Parameters

| Parameter             | Type                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `project`             | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `parentUrl`?          | `string`                                                                                                                                                                             |
| `outputFileStrategy`? | [`OutputFileStrategy`](../../../../options/namespaces/maps/enumerations/OutputFileStrategy.md)                                                                                       |
| `entryModule`?        | `string`                                                                                                                                                                             |
| `entryFileName`?      | `string`                                                                                                                                                                             |

#### Returns

`void`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:133](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L133)

***

### buildUrlsFromPackage()

> `private` **buildUrlsFromPackage**(`projectChild`): `void`

#### Parameters

| Parameter      | Type                                                                                         |
| -------------- | -------------------------------------------------------------------------------------------- |
| `projectChild` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

#### Returns

`void`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:157](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L157)

***

### buildUrlsForDocument()

> `private` **buildUrlsForDocument**(`reflection`): `void`

#### Parameters

| Parameter    | Type                 |
| ------------ | -------------------- |
| `reflection` | `DocumentReflection` |

#### Returns

`void`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:261](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L261)

***

### buildUrlsFromGroup()

> `private` **buildUrlsFromGroup**(`reflection`, `urlOptions`): `void`

#### Parameters

| Parameter    | Type                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `urlOptions` | [`UrlOption`](../../types/interfaces/UrlOption.md)                                           |

#### Returns

`void`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:305](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L305)

***

### getUrl()

> `private` **getUrl**(`reflection`, `urlPath`, `urlOptions`): `string`

#### Parameters

| Parameter    | Type                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `urlPath`    | `string`                                                                                     |
| `urlOptions` | [`UrlOption`](../../types/interfaces/UrlOption.md)                                           |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:373](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L373)

***

### getFlattenedUrl()

> **getFlattenedUrl**(`reflection`): `string`

#### Parameters

| Parameter    | Type                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:401](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L401)

***

### getAlias()

> `private` **getAlias**(`name`): `string`

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `name`    | `string` |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:421](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L421)

***

### getUrlPath()

> `private` **getUrlPath**(`reflection`, `urlOption`): `string`

#### Parameters

| Parameter    | Type                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `urlOption`  | [`UrlOption`](../../types/interfaces/UrlOption.md)                                           |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:431](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L431)

***

### traverseChildren()

> `private` **traverseChildren**(`reflection`, `container`): `void`

#### Parameters

| Parameter    | Type                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `container`  | [`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)                       |

#### Returns

`void`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:479](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L479)

***

### applyAnchorUrl()

> `private` **applyAnchorUrl**(`reflection`, `containerUrl`): `void`

#### Parameters

| Parameter      | Type                                                                                         |
| -------------- | -------------------------------------------------------------------------------------------- |
| `reflection`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `containerUrl` | `string`                                                                                     |

#### Returns

`void`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:498](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L498)

***

### getAnchorId()

> `private` **getAnchorId**(`reflection`): `null` | `string`

#### Parameters

| Parameter    | Type                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

#### Returns

`null` | `string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:534](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L534)

***

### getAnchorName()

> `private` **getAnchorName**(`reflection`): `null` | `string`

#### Parameters

| Parameter    | Type                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

#### Returns

`null` | `string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:546](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L546)

***

### moduleHasSubfolders()

> `private` **moduleHasSubfolders**(`reflection`): `undefined` | `boolean`

#### Parameters

| Parameter    | Type                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

#### Returns

`undefined` | `boolean`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:574](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L574)

***

### getIndexFileName()

> `private` **getIndexFileName**(`reflection`, `isPackages`): `string`

#### Parameters

| Parameter    | Type                                                                                                                                                                                 | Default value |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) | `undefined`   |
| `isPackages` | `boolean`                                                                                                                                                                            | `false`       |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:580](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/12bf51d00a65a847fc03f2dc9341a184b33a3504/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L580)
