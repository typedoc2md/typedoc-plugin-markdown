# plugin

## load()

> **load**(`app`): `void`

The function that is called by TypeDoc to bootstrap the plugin. {@see https://typedoc.org/guides/development/#plugins}

Here we expose additional TypeDoc options and make some adjustments.

### Parameters

• **app**: [`Application`](https://typedoc.org/api/classes/Application.html)

### Returns

`void`

### Source

[plugin/index.ts:22](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/index.ts#L22)

***

## OutputFileStrategy

Defines outputFileStrategy model for the `outputFileStrategy` option.

### Enumeration Members

#### Members

> **Members**: `"members"`

##### Source

[plugin/options/option-maps.ts:8](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-maps.ts#L8)

#### Modules

> **Modules**: `"modules"`

##### Source

[plugin/options/option-maps.ts:9](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-maps.ts#L9)

***

## FormatStyle

### Enumeration Members

#### List

> **List**: `"list"`

##### Source

[plugin/options/option-maps.ts:20](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-maps.ts#L20)

#### Table

> **Table**: `"table"`

##### Source

[plugin/options/option-maps.ts:21](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-maps.ts#L21)

***

## PluginOptions

### Properties

#### outputFileStrategy

> **outputFileStrategy**: `"members"` \| `"modules"`

##### Source

[plugin/options/option-types.ts:34](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L34)

#### entryFileName

> **entryFileName**: `string`

##### Source

[plugin/options/option-types.ts:35](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L35)

#### entryModule

> **entryModule**: `string`

##### Source

[plugin/options/option-types.ts:36](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L36)

#### mergeReadme

> **mergeReadme**: `boolean`

##### Source

[plugin/options/option-types.ts:37](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L37)

#### hidePageHeader

> **hidePageHeader**: `boolean`

##### Source

[plugin/options/option-types.ts:38](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L38)

#### hidePageTitle

> **hidePageTitle**: `boolean`

##### Source

[plugin/options/option-types.ts:39](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L39)

#### hideBreadcrumbs

> **hideBreadcrumbs**: `boolean`

##### Source

[plugin/options/option-types.ts:40](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L40)

#### hideInPageTOC

> **hideInPageTOC**: `boolean`

##### Source

[plugin/options/option-types.ts:41](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L41)

#### indexPageTitle

> **indexPageTitle**: `string`

##### Source

[plugin/options/option-types.ts:42](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L42)

#### memberPageTitle

> **memberPageTitle**: `string`

##### Source

[plugin/options/option-types.ts:43](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L43)

#### excludeGroups

> **excludeGroups**: `boolean`

##### Source

[plugin/options/option-types.ts:44](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L44)

#### useCodeBlocks

> **useCodeBlocks**: `boolean`

##### Source

[plugin/options/option-types.ts:45](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L45)

#### expandObjects

> **expandObjects**: `boolean`

##### Source

[plugin/options/option-types.ts:46](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L46)

#### parametersFormat

> **parametersFormat**: `"table"` \| `"list"`

##### Source

[plugin/options/option-types.ts:47](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L47)

#### propertiesFormat

> **propertiesFormat**: `"table"` \| `"list"`

##### Source

[plugin/options/option-types.ts:48](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L48)

#### enumMembersFormat

> **enumMembersFormat**: `"table"` \| `"list"`

##### Source

[plugin/options/option-types.ts:49](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L49)

#### typeDeclarationFormat

> **typeDeclarationFormat**: `"table"` \| `"list"`

##### Source

[plugin/options/option-types.ts:50](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L50)

#### indexFormat

> **indexFormat**: `"table"` \| `"list"`

##### Source

[plugin/options/option-types.ts:51](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L51)

#### textContentMappings

> **textContentMappings**: `ManuallyValidatedOption`\<[`TextContentMappings`](plugin.md#textcontentmappings-1)\>

##### Source

[plugin/options/option-types.ts:52](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L52)

#### publicPath

> **publicPath**: `string`

##### Source

[plugin/options/option-types.ts:53](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L53)

#### preserveAnchorCasing

> **preserveAnchorCasing**: `boolean`

##### Source

[plugin/options/option-types.ts:54](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L54)

#### anchorPrefix

> **anchorPrefix**: `string`

##### Source

[plugin/options/option-types.ts:55](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L55)

#### namedAnchors

> **namedAnchors**: `boolean`

##### Source

[plugin/options/option-types.ts:56](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L56)

***

## TextContentMappings

### Properties

#### header.title

> **header.title**: `string`

##### Source

[plugin/options/option-types.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L60)

#### header.readme

> **header.readme**: `string`

##### Source

[plugin/options/option-types.ts:61](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L61)

#### header.docs

> **header.docs**: `string`

##### Source

[plugin/options/option-types.ts:62](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L62)

#### breadcrumbs.home

> **breadcrumbs.home**: `string`

##### Source

[plugin/options/option-types.ts:63](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L63)

#### footer.generator

> **footer.generator**: `string`

##### Source

[plugin/options/option-types.ts:64](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L64)

#### title.indexPage

> **title.indexPage**: `string`

##### Source

[plugin/options/option-types.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L65)

#### title.modulePage

> **title.modulePage**: `string`

##### Source

[plugin/options/option-types.ts:66](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L66)

#### title.memberPage

> **title.memberPage**: `string`

##### Source

[plugin/options/option-types.ts:67](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L67)

#### title.member

> **title.member**: `string`

##### Source

[plugin/options/option-types.ts:68](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L68)

#### label.defaultValue

> **label.defaultValue**: `string`

##### Source

[plugin/options/option-types.ts:69](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L69)

#### label.description

> **label.description**: `string`

##### Source

[plugin/options/option-types.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L70)

#### label.extendedBy

> **label.extendedBy**: `string`

##### Source

[plugin/options/option-types.ts:71](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L71)

#### label.extends

> **label.extends**: `string`

##### Source

[plugin/options/option-types.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L72)

#### label.globals

> **label.globals**: `string`

##### Source

[plugin/options/option-types.ts:73](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L73)

#### label.implements

> **label.implements**: `string`

##### Source

[plugin/options/option-types.ts:74](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L74)

#### label.implementationOf

> **label.implementationOf**: `string`

##### Source

[plugin/options/option-types.ts:75](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L75)

#### label.inheritedFrom

> **label.inheritedFrom**: `string`

##### Source

[plugin/options/option-types.ts:76](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L76)

#### label.index

> **label.index**: `string`

##### Source

[plugin/options/option-types.ts:77](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L77)

#### label.indexable

> **label.indexable**: `string`

##### Source

[plugin/options/option-types.ts:78](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L78)

#### label.indexSignature

> **label.indexSignature**: `string`

##### Source

[plugin/options/option-types.ts:79](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L79)

#### label.member

> **label.member**: `string`

##### Source

[plugin/options/option-types.ts:80](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L80)

#### label.modifier

> **label.modifier**: `string`

##### Source

[plugin/options/option-types.ts:81](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L81)

#### label.overrides

> **label.overrides**: `string`

##### Source

[plugin/options/option-types.ts:82](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L82)

#### label.packages

> **label.packages**: `string`

##### Source

[plugin/options/option-types.ts:83](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L83)

#### label.reExports

> **label.reExports**: `string`

##### Source

[plugin/options/option-types.ts:84](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L84)

#### label.renamesAndReExports

> **label.renamesAndReExports**: `string`

##### Source

[plugin/options/option-types.ts:85](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L85)

#### label.returns

> **label.returns**: `string`

##### Source

[plugin/options/option-types.ts:86](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L86)

#### label.source

> **label.source**: `string`

##### Source

[plugin/options/option-types.ts:87](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L87)

#### label.type

> **label.type**: `string`

##### Source

[plugin/options/option-types.ts:88](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L88)

#### label.typeDeclaration

> **label.typeDeclaration**: `string`

##### Source

[plugin/options/option-types.ts:89](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L89)

#### label.value

> **label.value**: `string`

##### Source

[plugin/options/option-types.ts:90](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L90)

#### kind.class.singular

> **kind.class.singular**: `string`

##### Source

[plugin/options/option-types.ts:91](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L91)

#### kind.class.plural

> **kind.class.plural**: `string`

##### Source

[plugin/options/option-types.ts:92](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L92)

#### kind.constructor.singular

> **kind.constructor.singular**: `string`

##### Source

[plugin/options/option-types.ts:93](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L93)

#### kind.constructor.plural

> **kind.constructor.plural**: `string`

##### Source

[plugin/options/option-types.ts:94](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L94)

#### kind.enum.singular

> **kind.enum.singular**: `string`

##### Source

[plugin/options/option-types.ts:95](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L95)

#### kind.enum.plural

> **kind.enum.plural**: `string`

##### Source

[plugin/options/option-types.ts:96](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L96)

#### kind.enumMember.singular

> **kind.enumMember.singular**: `string`

##### Source

[plugin/options/option-types.ts:97](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L97)

#### kind.enumMember.plural

> **kind.enumMember.plural**: `string`

##### Source

[plugin/options/option-types.ts:98](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L98)

#### kind.event.singular

> **kind.event.singular**: `string`

##### Source

[plugin/options/option-types.ts:99](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L99)

#### kind.event.plural

> **kind.event.plural**: `string`

##### Source

[plugin/options/option-types.ts:100](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L100)

#### kind.function.singular

> **kind.function.singular**: `string`

##### Source

[plugin/options/option-types.ts:101](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L101)

#### kind.function.plural

> **kind.function.plural**: `string`

##### Source

[plugin/options/option-types.ts:102](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L102)

#### kind.interface.singular

> **kind.interface.singular**: `string`

##### Source

[plugin/options/option-types.ts:103](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L103)

#### kind.interface.plural

> **kind.interface.plural**: `string`

##### Source

[plugin/options/option-types.ts:104](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L104)

#### kind.method.singular

> **kind.method.singular**: `string`

##### Source

[plugin/options/option-types.ts:105](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L105)

#### kind.method.plural

> **kind.method.plural**: `string`

##### Source

[plugin/options/option-types.ts:106](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L106)

#### kind.module.singular

> **kind.module.singular**: `string`

##### Source

[plugin/options/option-types.ts:107](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L107)

#### kind.module.plural

> **kind.module.plural**: `string`

##### Source

[plugin/options/option-types.ts:108](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L108)

#### kind.namespace.singular

> **kind.namespace.singular**: `string`

##### Source

[plugin/options/option-types.ts:109](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L109)

#### kind.namespace.plural

> **kind.namespace.plural**: `string`

##### Source

[plugin/options/option-types.ts:110](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L110)

#### kind.variable.singular

> **kind.variable.singular**: `string`

##### Source

[plugin/options/option-types.ts:111](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L111)

#### kind.variable.plural

> **kind.variable.plural**: `string`

##### Source

[plugin/options/option-types.ts:112](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L112)

#### kind.parameter.singular

> **kind.parameter.singular**: `string`

##### Source

[plugin/options/option-types.ts:113](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L113)

#### kind.parameter.plural

> **kind.parameter.plural**: `string`

##### Source

[plugin/options/option-types.ts:114](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L114)

#### kind.property.singular

> **kind.property.singular**: `string`

##### Source

[plugin/options/option-types.ts:115](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L115)

#### kind.property.plural

> **kind.property.plural**: `string`

##### Source

[plugin/options/option-types.ts:116](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L116)

#### kind.reference.singular

> **kind.reference.singular**: `string`

##### Source

[plugin/options/option-types.ts:117](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L117)

#### kind.reference.plural

> **kind.reference.plural**: `string`

##### Source

[plugin/options/option-types.ts:118](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L118)

#### kind.typeAlias.singular

> **kind.typeAlias.singular**: `string`

##### Source

[plugin/options/option-types.ts:119](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L119)

#### kind.typeAlias.plural

> **kind.typeAlias.plural**: `string`

##### Source

[plugin/options/option-types.ts:120](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L120)

#### kind.typeParameter.singular

> **kind.typeParameter.singular**: `string`

##### Source

[plugin/options/option-types.ts:121](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L121)

#### kind.typeParameter.plural

> **kind.typeParameter.plural**: `string`

##### Source

[plugin/options/option-types.ts:122](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/options/option-types.ts#L122)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
