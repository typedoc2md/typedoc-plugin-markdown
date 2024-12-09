import { DeclarationOption, ParameterType } from 'typedoc';

/**
 * You can include any compatible [remark plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md)  or create and reference your own locally.
 *
 * Each plugin you wish to use must be installed individually.
 *
 * Options can be provided as either an array of strings or an array of strings with associated options.
 *
 * @example  ["remark-github", ["remark-toc", { "maxDepth": 3 }] ]
 */
export const remarkPlugins: Partial<DeclarationOption> = {
  help: 'An array of remark plugin names to be executed.',
  type: ParameterType.Mixed,
  defaultValue: [],
  validate(value) {
    if (!Array.isArray(value)) {
      throw new Error('remarkPlugins must be an array.');
    }
  },
};

/**
 * By default, the plugins [`remark-gfm`](https://github.com/remarkjs/remark-gfm), [`remark-frontmatter`](https://github.com/remarkjs/remark-frontmatter), and [`remark-mdx`](https://github.com/mdx-js/mdx/tree/main/packages/remark-mdx) are included, as these are considered the most common use cases.
 *
 * However, these plugins modify the default parsing behavior of remark, which may not be ideal for all scenarios.
 *
 * If you'd like to disable any of these default plugins, simply set the corresponding flag to `false`.
 */
export const defaultRemarkPlugins: Partial<DeclarationOption> = {
  help: 'A set of flags that control the enabling or disabling of remark plugins that are loaded by default.',
  type: ParameterType.Flags,
  defaults: {
    gfm: true,
    frontmatter: true,
    mdx: true,
  },
};

/**
 * Under the hood, the [`remark-stringify`](https://github.com/remarkjs/remark/tree/main/packages/remark-stringify) plugin is used to serialize the markdown into final output.
 *
 * You can pass in options to the `remark-stringify` plugin using this option.
 *
 * Please see https://github.com/remarkjs/remark/tree/main/packages/remark-stringify#options
 *
 * @example {  "bullet": "+", "fence": "~" }
 */
export const remarkStringifyOptions: Partial<DeclarationOption> = {
  help: 'Custom options for the remark-stringify plugin.',
  type: ParameterType.Mixed,
  defaultValue: {},
};
