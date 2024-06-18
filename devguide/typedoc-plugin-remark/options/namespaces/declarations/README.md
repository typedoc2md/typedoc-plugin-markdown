[Home](../../../../README.md) / [typedoc-plugin-remark](../../../README.md) / [options](../../README.md) / declarations

# declarations

## Contents

* [remarkPlugins](#remarkplugins)
* [remarkStringifyOptions](#remarkstringifyoptions)

## remarkPlugins

> `const` **remarkPlugins**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

You can provide any compatible [remark plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md) or you can write your own and reference locally.

Each required plugin should be individually installed.

Options can be passed either as an array of strings or an array of string / options.

Please note that `remark-frontmatter`, `remark-gfm`, and `remark-mdx` are always included by default.

### Example

```ts
["unified-prettier","remark-github", ["remark-toc", { "maxDepth": 3 }] ]
```

### Default Value

```ts
{
    help: 'An array of remark plugin names.',
    type: ParameterType.Mixed,
    defaultValue: [],
    validate(value) {
        if (!Array.isArray(value)) {
            throw new Error('remarkPlugins must be an array.');
        }
    },
}
```

### Defined in

[options/declarations.ts:14](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/7934b23566f374f44fe6de5fd9240ab185bf799f/packages/typedoc-plugin-remark/src/options/declarations.ts#L14)

***

## remarkStringifyOptions

> `const` **remarkStringifyOptions**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

Under the hood, the `remark-stringify` plugin is used to serialize the markdown into final output.

You can pass in options to the `remark-stringify` plugin using this option.

Please see [https://github.com/remarkjs/remark/tree/main/packages/remark-stringify#options](https://github.com/remarkjs/remark/tree/main/packages/remark-stringify#options)

### Example

```ts
{  "bullet": "+", "fence": "~" }
```

### Default Value

```ts
{
    help: 'Custom options for the remark-stringify plugin.',
    type: ParameterType.Mixed,
    defaultValue: {},
}
```

### Defined in

[options/declarations.ts:34](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/7934b23566f374f44fe6de5fd9240ab185bf799f/packages/typedoc-plugin-remark/src/options/declarations.ts#L34)
