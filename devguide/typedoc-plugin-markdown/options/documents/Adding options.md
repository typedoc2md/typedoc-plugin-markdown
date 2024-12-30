[Developer Guide](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [options](../README.md) / Adding options

# Adding options

Options exposed to TypeDoc are added as a named export to the `./src/options/declarations.ts` module file.

```ts
/**
 * Some more detailed comments about the option.
 *
 * @category Display
 */
export const myNewOption: Partial<DeclarationOption> = {
  help: 'A short description of the option.',
  type: ParameterType.Boolean,
  defaultValue: false,
};
```

This will be exposed to TypeDoc as a new option when bootstrapping the plugin, with the name of the option the name of the exported variable.

In addition, when the `prebuild` task is run:

- The option type will be added to `TypeDocOptionsMap`.
- The documentation will be updated using the JSDoc comments and categorized as per the `@category` tag.
