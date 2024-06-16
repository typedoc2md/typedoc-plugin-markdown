[Packages Index](../../../../../README.md) / [typedoc-plugin-markdown](../../../../README.md) / [theme](../../../README.md) / [core](../README.md) / NavigationBuilder

# Class: NavigationBuilder

## Contents

* [Constructors](#constructors)
  * [new NavigationBuilder()](#new-navigationbuilder)
* [Properties](#properties)
  * [options](#options)
  * [packagesMeta](#packagesmeta)
  * [navigationOptions](#navigationoptions)
  * [navigation](#navigation)
  * [isPackages](#ispackages)
  * [theme](#theme)
  * [project](#project)
* [Methods](#methods)
  * [getNavigation()](#getnavigation)
  * [buildNavigationFromPackage()](#buildnavigationfrompackage)
  * [buildNavigationFromProject()](#buildnavigationfromproject)
  * [getCategoryGroupChildren()](#getcategorygroupchildren)
  * [getGroupChildren()](#getgroupchildren)
  * [getReflectionGroups()](#getreflectiongroups)
  * [processChildren()](#processchildren)

## Constructors

### new NavigationBuilder()

> **new NavigationBuilder**(`theme`, `project`): [`NavigationBuilder`](NavigationBuilder.md)

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `theme`   | [`MarkdownTheme`](../../../classes/MarkdownTheme.md)                                 |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`NavigationBuilder`](NavigationBuilder.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:25](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L25)

## Properties

### options

> `private` **options**: [`Options`](https://typedoc.org/api/classes/Configuration.Options.html)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:19](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L19)

***

### packagesMeta

> `private` **packagesMeta**: `any`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:20](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L20)

***

### navigationOptions

> `private` **navigationOptions**: `any`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L21)

***

### navigation

> `private` **navigation**: [`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]

#### Default Value

```ts
[]
```

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:22](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L22)

***

### isPackages

> `private` **isPackages**: `boolean`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:23](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L23)

***

### theme

> **theme**: [`MarkdownTheme`](../../../classes/MarkdownTheme.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L26)

***

### project

> **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:27](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L27)

## Methods

### getNavigation()

> **getNavigation**(): [`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]

#### Returns

[`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L40)

***

### buildNavigationFromPackage()

> `private` **buildNavigationFromPackage**(`projectChild`): `void`

#### Parameters

| Parameter      | Type                                                                                         |
| -------------- | -------------------------------------------------------------------------------------------- |
| `projectChild` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

#### Returns

`void`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:56](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L56)

***

### buildNavigationFromProject()

> `private` **buildNavigationFromProject**(`project`): `void`

#### Parameters

| Parameter | Type                                                                                                                                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `project` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

`void`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:117](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L117)

***

### getCategoryGroupChildren()

> `private` **getCategoryGroupChildren**(`group`): `object`\[]

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `group`   | [`ReflectionCategory`](https://typedoc.org/api/types/Models.ReflectionCategory.html) |

#### Returns

`object`\[]

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:190](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L190)

***

### getGroupChildren()

> `private` **getGroupChildren**(`group`, `outputFileStrategy`?): `undefined` | [`NavigationItem`](../../types/interfaces/NavigationItem.md)\[] | `object`\[]

#### Parameters

| Parameter             | Type                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| `group`               | [`ReflectionGroup`](https://typedoc.org/api/classes/Models.ReflectionGroup.html)               |
| `outputFileStrategy`? | [`OutputFileStrategy`](../../../../options/namespaces/maps/enumerations/OutputFileStrategy.md) |

#### Returns

`undefined` | [`NavigationItem`](../../types/interfaces/NavigationItem.md)\[] | `object`\[]

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:207](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L207)

***

### getReflectionGroups()

> `private` **getReflectionGroups**(`reflection`, `outputFileStrategy`?): `null` | [`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]

#### Parameters

| Parameter             | Type                                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `reflection`          | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `DocumentReflection` |
| `outputFileStrategy`? | [`OutputFileStrategy`](../../../../options/namespaces/maps/enumerations/OutputFileStrategy.md)                       |

#### Returns

`null` | [`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:252](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L252)

***

### processChildren()

> `private` **processChildren**(`acc`, `child`, `children`): [`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]

#### Parameters

| Parameter  | Type                                                                                                                 |
| ---------- | -------------------------------------------------------------------------------------------------------------------- |
| `acc`      | [`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]                                                      |
| `child`    | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `DocumentReflection` |
| `children` | `null` \| [`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]                                            |

#### Returns

[`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:312](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L312)
