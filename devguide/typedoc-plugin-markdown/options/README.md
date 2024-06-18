[Home](../../README.md) / [typedoc-plugin-markdown](../README.md) / options

# options

Contains all the option declarations and types used in the plugin.

Options exposed to TypeDoc are added as a named export to the declarations options.

## Contents

* [Index](#index)
  * [Namespaces](#namespaces)

## Example

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

* The option type will be added to `TypeDocOptionsMap`.
* The documentation will be updated using the JSDoc comments and categorized as per the `@category` tag.

## Index

### Namespaces

| Namespace                                         | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- |
| [constants](namespaces/constants/README.md)       | Contains constant default values used in options. |
| [declarations](namespaces/declarations/README.md) | Typedoc options declarations.                     |
| [maps](namespaces/maps/README.md)                 | Maps a given value to the option type.            |
