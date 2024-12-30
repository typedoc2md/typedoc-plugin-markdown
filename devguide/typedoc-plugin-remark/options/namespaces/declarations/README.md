[Developer Guide](../../../../README.md) / [typedoc-plugin-remark](../../../README.md) / [options](../../README.md) / declarations

# declarations

## Variables

### remarkPlugins

> `const` **remarkPlugins**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)\>

Defined in: [options/declarations.ts:12](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-remark/src/options/declarations.ts#L12)

You can include any compatible [remark plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md)  or create and reference your own locally.

Each plugin you wish to use must be installed individually.

Options can be provided as either an array of strings or an array of strings with associated options.

#### Example

```ts
["remark-github", ["remark-toc", { "maxDepth": 3 }] ]
```

#### Initializer

```ts
{
    help: 'An array of remark plugin names to be executed.',
    type: ParameterType.Mixed,
    defaultValue: [],
    validate(value) {
        if (!Array.isArray(value)) {
            throw new Error('[typedoc-plugin-remark] remarkPlugins must be an array.');
        }
    },
}
```

***

### defaultRemarkPlugins

> `const` **defaultRemarkPlugins**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)\>

Defined in: [options/declarations.ts:32](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-remark/src/options/declarations.ts#L32)

By default, the plugins [`remark-gfm`](https://github.com/remarkjs/remark-gfm), [`remark-frontmatter`](https://github.com/remarkjs/remark-frontmatter), and [`remark-mdx`](https://github.com/mdx-js/mdx/tree/main/packages/remark-mdx) are included, as these are considered the most common use cases.

However, these plugins modify the default parsing behavior of remark, which may not be ideal for all scenarios.

If you'd like to disable any of these default plugins, simply set the corresponding flag to `false`.

#### Initializer

```ts
{
    help: 'A set of flags that control the enabling or disabling of remark plugins that are loaded by default.',
    type: ParameterType.Flags,
    defaults: {
        gfm: true,
        frontmatter: true,
        mdx: true,
    },
}
```

***

### remarkStringifyOptions

> `const` **remarkStringifyOptions**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)\>

Defined in: [options/declarations.ts:51](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-remark/src/options/declarations.ts#L51)

Under the hood, the [`remark-stringify`](https://github.com/remarkjs/remark/tree/main/packages/remark-stringify) plugin is used to serialize the markdown into final output.

You can pass in options to the `remark-stringify` plugin using this option.

Please see https://github.com/remarkjs/remark/tree/main/packages/remark-stringify#options

#### Example

```ts
{  "bullet": "+", "fence": "~" }
```

#### Initializer

```ts
{
    help: 'Custom options for the remark-stringify plugin.',
    type: ParameterType.Object,
    defaultValue: {},
    validate(value) {
        if (typeof value !== 'object') {
            throw new Error('[typedoc-plugin-remark] remarkStringifyOptions must be an object.');
        }
    },
}
```
