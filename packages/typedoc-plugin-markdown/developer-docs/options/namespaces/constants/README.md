[typedoc-plugin-markdown v4.0.3](../../../README.md) / [options](../../README.md) / constants

# Namespace: constants

Contains constant default values used in options.

## Table of Contents

* [ALLOWED\_OWN\_FILE\_MEMBERS](#allowed_own_file_members)
* [TEXT\_CONTENT\_MAPPINGS](#text_content_mappings)

## ALLOWED\_OWN\_FILE\_MEMBERS

```ts
const ALLOWED_OWN_FILE_MEMBERS: string[] = ...;
```

### Defined in

[packages/typedoc-plugin-markdown/src/options/constants.ts:9](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/constants.ts#L9)

***

## TEXT\_CONTENT\_MAPPINGS

```ts
const TEXT_CONTENT_MAPPINGS: object = {
    'header.title': '{projectName} {version}',
    'header.docs': 'Docs',
    'breadcrumbs.home': '{projectName} {version}',
    'title.indexPage': '{projectName} {version}',
    'title.memberPage': '{kind}: {name}',
    'footer.text': '',
};
```

### Type declaration

#### header.title

```ts
header.title: string = '{projectName} {version}';
```

#### header.docs

```ts
header.docs: string = 'Docs';
```

#### breadcrumbs.home

```ts
breadcrumbs.home: string = '{projectName} {version}';
```

#### title.indexPage

```ts
title.indexPage: string = '{projectName} {version}';
```

#### title.memberPage

```ts
title.memberPage: string = '{kind}: {name}';
```

#### footer.text

```ts
footer.text: string = '';
```

### Defined in

[packages/typedoc-plugin-markdown/src/options/constants.ts:18](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/constants.ts#L18)
