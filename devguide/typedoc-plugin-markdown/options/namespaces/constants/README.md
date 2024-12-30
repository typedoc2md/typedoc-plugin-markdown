[Developer Guide](../../../../README.md) / [typedoc-plugin-markdown](../../../README.md) / [options](../../README.md) / constants

# constants

Contains constant default values used in options.

## Variables

### ALLOWED\_OWN\_FILE\_MEMBERS

> `const` **ALLOWED\_OWN\_FILE\_MEMBERS**: `string`[]

Defined in: [packages/typedoc-plugin-markdown/src/options/constants.ts:12](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/constants.ts#L12)

Default values for `membersWithOwnFile` option.

#### Initializer

```ts
[
    ReflectionKind[ReflectionKind.Enum],
    ReflectionKind[ReflectionKind.Variable],
    ReflectionKind[ReflectionKind.Function],
    ReflectionKind[ReflectionKind.Class],
    ReflectionKind[ReflectionKind.Interface],
    ReflectionKind[ReflectionKind.TypeAlias],
]
```

***

### TEXT\_CONTENT\_MAPPINGS

> `const` **TEXT\_CONTENT\_MAPPINGS**: `object`

Defined in: [packages/typedoc-plugin-markdown/src/options/constants.ts:24](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/constants.ts#L24)

Default values for `textContentMappings` option.

#### Type declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| <a id="header.title-2"></a> `header.title` | `string` | '\{projectName\} \{version\}' |
| <a id="breadcrumbs.home-2"></a> `breadcrumbs.home` | `string` | '\{projectName\} \{version\}' |
| <a id="title.indexpage-2"></a> `title.indexPage` | `string` | '\{projectName\} \{version\}' |
| <a id="title.memberpage-2"></a> `title.memberPage` | `string` | '\{kind\}: \{name\}' |
| <a id="title.modulepage-2"></a> `title.modulePage` | `string` | '\{name\}' |

***

### DEFAULT\_PAGE\_TITLES

> `const` **DEFAULT\_PAGE\_TITLES**: `object`

Defined in: [packages/typedoc-plugin-markdown/src/options/constants.ts:32](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/constants.ts#L32)

#### Type declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| <a id="index-2"></a> `index` | `string` | '\{projectName\} \{version\}' |
| <a id="member-2"></a> `member` | `string` | '\{kind\}: \{name\}' |
| <a id="module-2"></a> `module` | `string` | '\{name\}' |
